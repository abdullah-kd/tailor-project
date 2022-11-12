import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../config/firebase";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(Auth, email, password).then((user) => {
      dispatch({ type: "LOGIN", payload: user.user });
      navigate("/");
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="  w-1/2 mx-auto mt-52 rounded-lg p-10  bg-[#00296b] s:w-3/4"
      >
        <label className="flex flex-col ">
          <input
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="ئیمەیڵ"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col mt-5 ">
          <input
            className=" bg-gray-200 h-10 rounded-lg px-2"
            placeholder="پاسوۆرد"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button
          className="bg-[#fdc500] w-full px-4 py-2 duration-500 rounded-md  mt-4 font-rabar-33 font-semibold text-lg text-gray-800"
          type="submit"
        >
          چونە ژورەوە
        </button>
      </form>
    </div>
  );
};

export default Login;
