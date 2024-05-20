import { useState } from "react";
import { Pagination } from "flowbite-react";
import Articles from "@/pages/articles";
import Empty from "@/assets/empty-folder.png";

function pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full ">
        <div className="w-full ">
          {currentPage === 1 ? (
            <Articles />
          ) : (
            <div className="border p-4 m-5 bg-white shadow h-[50vh] flex justify-center items-center font-bold">
              <img src={Empty} alt="empty" className="w-[300px] h-[300px]" />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center py-10">
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default pagination;
