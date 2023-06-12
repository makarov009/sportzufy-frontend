import React, { useState } from "react";
import { useQuery } from "react-query";
import { getBlogsReq } from "../services/blogService.js";
import Card from "../components/card/Card.jsx";
import ErrorNotFound from "./ErrorNotFound.jsx";

function HomePage() {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery("blogs", getBlogsReq);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data?.length / pageSize);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (isError) {
    
      return <ErrorNotFound />;
    }

    return (
      <div>
        <div className="container mx-auto flex flex-wrap ">
          {paginatedData?.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>

        <div class="flex flex-row justify-center my-10">
          <div class="flex">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              class="flex items-center px-4 py-2 mx-1 hover:bg-blue-600 text-gray-700 hover:text-white  bg-white rounded-md   shadow-lg border-solid border-2 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                disabled={currentPage === index + 1}
                className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex  hover:bg-blue-600  hover:text-white  shadow-lg border-solid border-2"
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md  hover:bg-blue-600  hover:text-white  shadow-lg border-solid border-2 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }


export default HomePage;
