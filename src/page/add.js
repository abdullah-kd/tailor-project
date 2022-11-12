import { useContext, useRef, useState } from "react";
import { Data } from "../config/firebase";
import { AuthContext } from "../context/authcontext";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const AddProject = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nrxi, setNrxi] = useState("");

  const [mawa, setMawa] = useState("");
  const [kat, setKat] = useState("");
  const [sharwal, setSharwal] = useState("");
  const [nawqad, setNawqad] = useState("");
  const [qoll, setQoll] = useState("");
  const [shan, setShan] = useState("");
  const [daleng, setDaleng] = useState("");
  const [nefo, setNefo] = useState("");
  const [dastwr, setDastwr] = useState("");
  const [jorakae, setJorake] = useState("");
  const [hide, setHide] = useState(false);
  const complete = false;
  const cuter = false;
  const project = {
    name,
    number,
    nrxi,
    mawa,
    kat,
    sharwal,
    nawqad,
    qoll,
    shan,
    daleng,
    nefo,
    dastwr,
    jorakae,
    complete,
    cuter,
  };
  const { user } = useContext(AuthContext);
  const uid = user.uid;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await addDoc(collection(Data, "projects"), {
        ...project,
        uid,
      });

      console.log(users);
      setName("");
      setNumber("");
      setSharwal("");
      setNefo("");
      setNawqad("");
      setQoll("");
      setShan("");
      setDastwr("");
      setDaleng("");
      setJorake("");
      setNrxi("");
      setMawa("");
      setKat("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className=" mx-10 py-10 relative" onSubmit={handleSubmit}>
        <label className="flex flex-col ">
          <span className=" text-2xl font-rabar-26">ناوی کریار:</span>
          <input
            required
            ref={nameRef}
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="ناوی کریار..."
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col mt-4 ">
          <span className=" text-2xl font-rabar-26">ژمارەی کریار:</span>
          <input
            required
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="ژمارەی کریار:"
            type="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </label>
        <div className="mt-4 grid grid-cols-2 gap-20 md:gap-6">
          <div className="flex flex-col gap-4">
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">شەرواڵ</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="شارواڵ"
                type="number"
                value={sharwal}
                onChange={(e) => {
                  setSharwal(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">ناوقەد</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="ناوقەد"
                type="number"
                value={nawqad}
                onChange={(e) => {
                  setNawqad(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">شان</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="شان"
                type="number"
                value={shan}
                onChange={(e) => {
                  setShan(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">دەلینگ</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="دەلینگ"
                type="number"
                value={daleng}
                onChange={(e) => {
                  setDaleng(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">نیفۆ</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="نیفۆ"
                type="number"
                value={nefo}
                onChange={(e) => {
                  setNefo(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26"> قۆل</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="قۆل "
                type="number"
                value={qoll}
                onChange={(e) => {
                  setQoll(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">دەستور</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="دەستور"
                type="text"
                value={dastwr}
                onChange={(e) => {
                  setDastwr(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col ">
              <span className=" text-2xl font-rabar-26">جۆری قوماش</span>
              <input
                required
                className=" bg-gray-200 h-10 rounded-lg px-2"
                placeholder="جۆری قوماش"
                type="text"
                value={jorakae}
                onChange={(e) => {
                  setJorake(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <label className="flex flex-col  mt-4">
          <span className=" text-2xl font-rabar-26"> بری پارە</span>
          <input
            required
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="بری پارە"
            type="number"
            value={nrxi}
            onChange={(e) => {
              setNrxi(e.target.value);
            }}
          />
        </label>

        <label className="flex flex-col  mt-4">
          <span className=" text-2xl font-rabar-26">بری پارەی ماوە</span>
          <input
            required
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="بری پارەی ماوە"
            type="number"
            value={mawa}
            onChange={(e) => {
              setMawa(e.target.value);
            }}
          />
        </label>

        <label className="flex flex-col mt-4 ">
          <span className=" text-2xl font-rabar-26">رۆژی دەرجوون</span>
          <input
            required
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="رۆژی دەرجون"
            type="date"
            value={kat}
            onChange={(e) => {
              setKat(e.target.value);
            }}
          />
        </label>
        <p
          onClick={() => setHide(true)}
          className="font-rabar-33 text-center cursor-pointer font-semibold text-2xl text-gray-800 w-full mt-4 bg-[#fdc500] px-4 py-2 duration-500 rounded-md hover:bg-blue-400"
        >
          زیادکردن
        </p>
        <div
          className={
            !hide
              ? "hidden"
              : "bg-slate-200 absolute top-1/2 right-1/2 px-10 py-7 rounded-2xl translate-x-1/2 -translate-y-1/2 block z-10"
          }
        >
          <pre className="text-3xl font-rabar-26 s:text-xl">
            دڵنیابەوە لەوەی هەموو زانیاریکان دروستە
          </pre>
          <div className="flex justify-between mt-4">
            <p
              onClick={() => {
                setHide(false);
              }}
              className=" cursor-pointer text-2xl font-rabar-33 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-500 s:text-xl"
            >
              چێکردنەوە{" "}
            </p>
            <button
              type="submit"
              onClick={() => {
                setHide(false);
              }}
              className=" text-2xl  s:text-xl font-rabar-33 bg-[#fdc500] px-4 py-2 rounded-lg "
            >
              زیاد کردن
            </button>
          </div>
        </div>
        <div className={!hide ? "" : "added"}></div>
      </form>
    </div>
  );
};

export default AddProject;
