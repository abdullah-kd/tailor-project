import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./projectslist.css";
const Projects = ({ projects }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5;
  const pageVisited = pageNumber * projectsPerPage;
  const displayProjects = projects
    .sort((a, b) => (a.kat > b.kat ? 1 : -1))
    .slice(pageVisited, pageVisited + projectsPerPage)
    .map((project) => {
      return (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className=" bg-gray-300 m-5 rounded-lg py-2 px-5 flex justify-between items-center">
            <div>
              <h2 className=" text-2xl font-rabar-26 ">{project.name}</h2>
              <h6>{project.number}</h6>
            </div>
            <p>{project.kat}</p>
          </div>
        </Link>
      );
    });

  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="mx-5">
      {projects && displayProjects}
      {projects.length > projectsPerPage && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="دواتر"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="پێشتر"
          containerClassName={"paginate"}
          previousLinkClassName="prev"
          nextLinkClassName="nextlink"
          disabledClassName="disabled"
          activeLinkClassName="activelink"
        />
      )}
    </div>
  );
};

export default Projects;
