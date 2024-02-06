//import firebase
// import { db } from '../config/firebase';
// import { collection, getDocs } from 'firebase/firestore';

// export async function getServerSideProps() {
//   const querySnapshot = await getDocs(collection(db, "your_collection_name"));
//   const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));




// import node module libraries
import Link from "next/link";
import { Col, Row, Container, Image, Table } from "react-bootstrap";
import {
	BasicTableCode,
	DarkTableCode,
	TableHeadCode,
	StripedTableCode,
	TableVariantCode,
	BorderedTableCode,
	BorderlessTableCode,
	HoverableRowsCode,
	SmallTableCode,
	ContextualClassesCode,
	ResponsiveTableCode
} from 'data/code/TablesCode';

const LayoutVertical = () => {
  return (
    <Container fluid className="px-6 py-4">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
          <div className="text-center mb-7">
            <h1 className="display-4">Payment</h1>
            
          </div>
          
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10} sm={4} className="my-4 ">
          <Table responsive  className="text-nowrap text-center">
											<thead className="bg-dark rounded">
												<tr>
													<th scope="col" className='font-weight-bold text-primary'>#</th>
													<th scope="col" className='font-weight-bold text-primary'>First</th>
													<th scope="col" className='font-weight-bold text-primary'>Last</th>
													<th scope="col" className='font-weight-bold text-primary'>Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</Table>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutVertical;
