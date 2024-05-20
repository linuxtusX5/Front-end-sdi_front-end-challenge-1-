import Pagination from "@/components/pagination";

function Home() {
  return (
    <div className="h-fit pb-5 p-1">
      {/* <div className="relative p-5 bg-[url('/src/assets/tmsph-ls-midafood.jpeg')] bg-no-repeat bg-cover h-[65vh] bg-center">
        <div className="text-white font-bold text-3xl rounded-ee-2xl rounded-tl-2xl bg-red-700 w-[95px] h-[110px] absolute bottom-[-5vh] flex justify-center items-center">
          13
          <br />
          JAN
        </div>
      </div>
      <div className=" px-[50px]">
        <hr className="w-[95%] h-[2px] m-5 mt-[70px]" />
      </div> */}
      <Pagination />
    </div>
  );
}

export default Home;
