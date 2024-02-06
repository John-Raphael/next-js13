//import firebase
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export async function getServerSideProps() {
//   const querySnapshot = await getDocs(collection(db, "your_collection_name"));
//   const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));



import React, { useState } from 'react';

const InlineEditTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Saffron' },
    // Add more items as needed
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({ id: null, name: '' });

  const handleEdit = (item) => {
    setCurrentEdit(item);
    setShowModal(true);
  };

  const handleSave = () => {
    setData(data.map(item => item.id === currentEdit.id ? currentEdit : item));
    setShowModal(false);
  };

  const handleChange = (event) => {
    setCurrentEdit({ ...currentEdit, name: event.target.value });
  };

  return (
    <div  className="container mt-5 text-center ">
      <table className="table">
        <thead className="bg-dark">
          <tr >
            <th className='font-weight-bold text-primary'>ID</th>
            <th className='font-weight-bold text-primary'>Products</th>
            <th className='font-weight-bold text-primary'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleEdit(item)} className="btn btn-primary" >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="m-4 ">
          <div style={{ position: 'absolute', top: '10%', left: '50%', backgroundColor: 'white', padding: '30px', border: '2px solid #ccc', borderRadius: '5px' }} >
          <div className="form-group">
            <label className='font-weight-bold'>ID:</label>
            <span className="form-control">{currentEdit.id}</span>
          </div>
          <div>
            <label className='font-weight-bold'>Products:</label>
            <input type="text" value={currentEdit.name} onChange={handleChange} className="form-control text-center" />
          </div>

          <div className="modal-footer mt-4 justify-content-center">
            <button onClick={handleSave} className="btn btn-secondary m-2"  data-bs-dismiss="modal">Save</button>
          <button onClick={() => setShowModal(false)} className="btn btn-primary ">Cancel</button>
          </div>
          
        </div>
        </div>
      )}
    </div>
  );
};

export default InlineEditTable;
