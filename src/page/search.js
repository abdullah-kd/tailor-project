import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Projects from "../components/projectslist";
import { AuthContext } from "../context/authcontext";
import useCollection from "../context/usecollection";

const Search = () => {
  const { search } = useContext(AuthContext);
  const { docoment } = useCollection();
  const navigate = useNavigate();

  return (
    <div>
      {
        <Projects
          projects={docoment.filter((doc) => {
            if (search === "") {
              navigate("/");
            }
            if (doc.name.includes(search.toLowerCase())) {
              return doc;
            }
          })}
        />
      }
    </div>
  );
};

export default Search;
