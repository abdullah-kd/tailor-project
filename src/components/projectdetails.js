import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Data } from "../config/firebase";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const docRef = doc(Data, "projects", id);
  const [hide, setHide] = useState(false);
  const [hidedelete, setHideDelete] = useState(false);
  const [hideComplete, setHideComplete] = useState(false);
  const handleUpdate = async () => {
    const nwv = { cuter: true };
    await updateDoc(docRef, nwv);
    setHide(false);
    navigate("/");
  };
  const handleUpdateComplete = async () => {
    const nwv = { complete: true };
    await updateDoc(docRef, nwv);
    setHideComplete(false);
    navigate("/");
  };
  const handleDelete = async () => {
    await deleteDoc(docRef);
    setHide(false);
    navigate("/");
  };
  useEffect(() => {
    const unsub = onSnapshot(docRef, (doc) => {
      setProject({ ...doc.data() });
      console.log(project);
    });
    return () => unsub();
  }, [id]);

  return (
    <div>
      <div className="flex flex-col gap-5 py-10 px-5 relative ">
        <div className="flex  gap-36 s:flex-col s:gap-4 ">
          <pre className=" font-rabar-33 text-xl">
            ناوی کریار: {project.name}
          </pre>
          <h5 className=" font-rabar-33 text-xl">
            ژمارە مۆبایل: {project.number}
          </h5>
        </div>
        <div className="flex  gap-x-48 s:gap-x-16">
          <div className="flex flex-col gap-3">
            <pre className=" font-rabar-33 text-xl">
              {" "}
              شان: {project.shan} سم
            </pre>
            <pre className=" font-rabar-33 text-xl">
              شەرواڵ: {project.sharwal} سم
            </pre>
            <pre className=" font-rabar-33 text-xl">
              {" "}
              ناوقەد: {project.nawqad} سم
            </pre>
            <pre className=" font-rabar-33 text-xl">
              {" "}
              دەلینگ: {project.daleng} سم
            </pre>
          </div>
          <div className="flex  flex-col gap-3">
            <pre className=" font-rabar-33 text-xl">
              {" "}
              نیفۆ: {project.nefo} سم
            </pre>
            <pre className=" font-rabar-33 text-xl">
              {" "}
              قۆڵ: {project.qoll} سم
            </pre>
            <pre className=" font-rabar-33 text-xl">
              {" "}
              جۆرەکەی: {project.jorakae}{" "}
            </pre>
            <pre className=" font-rabar-33 text-xl">
              {" "}
              دەستور: {project.dastwr}{" "}
            </pre>
          </div>
        </div>
        <pre className=" font-rabar-33 text-xl">
          {" "}
          نرخی: {project.nrxi} هەزار
        </pre>
        <pre className=" font-rabar-33 text-xl">
          {" "}
          ماوە: {project.mawa} هەزار
        </pre>
        <pre className=" font-rabar-33 text-xl">
          {" "}
          کاتی دەرچون: {project.kat}{" "}
        </pre>
        <div className="flex gap-6">
          {!project.cuter && (
            <button
              onClick={() => {
                setHide(true);
              }}
              className=" bg-[#00296b] text-white font-rabar-33 text-xl w-fit px-4 py-2 rounded-lg"
            >
              ناردن بۆ بەشی بڕاوەکان
            </button>
          )}
          {!project.complete && project.cuter && (
            <button
              onClick={() => {
                setHideComplete(true);
              }}
              className=" bg-[#00296b] text-white font-rabar-33 text-xl w-fit px-4 py-2 rounded-lg"
            >
              ناردن بۆ بەشی تەواوبوەکان
            </button>
          )}
          <button
            onClick={() => {
              setHideDelete(true);
            }}
            className=" bg-red-600 text-white font-rabar-33 text-xl w-fit px-4 py-2 rounded-lg"
          >
            رەشکردنەوە
          </button>
        </div>
        <div
          className={
            !hide
              ? "hidden"
              : "bg-slate-200 absolute top-1/2 right-1/2 px-10 py-7 rounded-2xl translate-x-1/2 -translate-y-1/2 block z-10"
          }
        >
          <pre className="text-3xl font-rabar-26 s:text-2xl">
            دڵنیایی لە ناردن بۆ بەشی بڕاوەکان؟
          </pre>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                setHide(false);
              }}
              className=" text-2xl s:text-xl font-rabar-33 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              نەخێر{" "}
            </button>
            <button
              type="submit"
              onClick={() => {
                handleUpdate(project.id);
              }}
              className=" text-2xl text font-rabar-33 bg-[#fdc500] px-4 py-2 rounded-lg  s:text-xl"
            >
              بەڵێ
            </button>
          </div>
        </div>
        <div
          className={
            !hideComplete
              ? "hidden"
              : "bg-slate-200 absolute top-1/2 right-1/2 px-10 py-7 rounded-2xl translate-x-1/2 -translate-y-1/2 block z-10"
          }
        >
          <pre className="text-3xl s:text-xl font-rabar-26">
            دڵنیایی لە ناردن بۆ بەشی تەواوبوەکان؟
          </pre>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                setHideComplete(false);
              }}
              className=" text-2xl s:text-xl font-rabar-33 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              نەخێر{" "}
            </button>
            <button
              type="submit"
              onClick={() => {
                handleUpdateComplete(project.id);
              }}
              className=" text-2xl s:text-xl text font-rabar-33 bg-[#fdc500] px-4 py-2 rounded-lg "
            >
              بەڵێ
            </button>
          </div>
        </div>
        <div
          className={
            !hidedelete
              ? "hidden"
              : "bg-slate-200 absolute top-1/2 right-1/2 px-10 py-7 rounded-2xl translate-x-1/2 -translate-y-1/2 block z-10"
          }
        >
          <pre className="text-3xl s:text-2xl font-rabar-26">
            دڵنیای دەتەوت رەشی کەیتەوە؟
          </pre>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                setHideDelete(false);
              }}
              className=" text-2xl s:text-xl font-rabar-33 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              نەخێر{" "}
            </button>
            <button
              type="submit"
              onClick={handleDelete}
              className=" text-2xl s:text-xl text font-rabar-33 bg-[#fdc500] px-4 py-2 rounded-lg"
            >
              بەڵێ
            </button>
          </div>
        </div>
        <div className={!hide ? "" : "added"}></div>
        <div className={!hidedelete ? "" : "added"}></div>
        <div className={!hideComplete ? "" : "added"}></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
