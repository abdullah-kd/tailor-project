import { useContext, useState } from "react";
import Projects from "../components/projectslist";
import { AuthContext } from "../context/authcontext";
import useCollection from "../context/usecollection";

const Home = () => {
  const [name, setName] = useState("new");
  const { user } = useContext(AuthContext);
  const { docoment } = useCollection();
  const [isComplete, setIsComplete] = useState(false);
  const [isCuter, setIsCuter] = useState(false);
  return (
    <div className="py-16">
      <div className=" ">
        <div className="flex justify-between items-center ">
          <button
            onClick={() => {
              setName("new");
              setIsComplete(false);
              setIsCuter(false);
            }}
            className={
              name === "new"
                ? " bg-[#00296b] text-white px-6 py-2 rounded-full text-2xl font-rabar-33"
                : "text-2xl font-rabar-33 px-6 py-2 "
            }
          >
            تازەکان
          </button>
          <button
            onClick={() => {
              setName("cuter");
              setIsCuter(true);
              setIsComplete(false);
            }}
            className={
              name === "cuter"
                ? " bg-[#00296b] text-white px-6 py-2 rounded-full text-2xl font-rabar-33"
                : "text-2xl font-rabar-33 px-6 py-2 "
            }
          >
            بڕدراوەکان
          </button>
          <button
            onClick={() => {
              setName("complete");
              setIsComplete(true);
              setIsCuter(true);
            }}
            className={
              name === "complete"
                ? " bg-[#00296b] text-white px-6 py-2 rounded-full text-2xl font-rabar-33"
                : "text-2xl font-rabar-33 px-6 py-2 "
            }
          >
            تەواوبوەکان
          </button>
        </div>
      </div>

      {docoment && (
        <Projects
          projects={docoment.filter(
            (doc) => doc.complete === isComplete && doc.cuter === isCuter
          )}
        />
      )}
    </div>
  );
};

export default Home;
