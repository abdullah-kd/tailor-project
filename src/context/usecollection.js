import { useContext, useEffect, useRef, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { query, where } from "firebase/firestore";

import { Data } from "../config/firebase";
import { AuthContext } from "./authcontext";
const useCollection = (_orderby) => {
  const { user } = useContext(AuthContext);
  const uid = user.uid;

  const [docoment, setDocoment] = useState([]);
  const db = query(collection(Data, "projects"), where("uid", "==", uid));

  useEffect(() => {
    const unsub = onSnapshot(db, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setDocoment(result);
    });
    return () => unsub();
  }, []);
  return { docoment };
};

export default useCollection;

// const getData = async () => {
//   const data = await getDocs(db);
//   setDocoment(
//     data.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }))
//   );
// };
// console.log(docoment);
// getData();
