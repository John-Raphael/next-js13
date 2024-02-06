// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import {
  collection,
  query,
  orderBy,
  limit,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "config/firebaseConfig";

export default async function GET(req, res) {
  const productRef = collection(db, "products");
  const productQuery = query(productRef, orderBy("date_created", "desc"));

  const querySnapshot = await getDocs(productQuery);
  const firebaseProducts = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    // Convert Timestamp to JavaScript Date object and then to ISO string
    if (data.date_created) {
      const dateCreated = data.date_created.toDate();
      data.date_created = dateCreated.toISOString();
    }
    if (data.date_updated) {
      const dateUpdated = data.date_updated.toDate();
      data.date_updated = dateUpdated.toISOString();
    }

    // Push the modified data into the products array
    firebaseProducts.push({ id: doc.id, ...data });
  });

  res.status(200).json({ products: firebaseProducts });
}
