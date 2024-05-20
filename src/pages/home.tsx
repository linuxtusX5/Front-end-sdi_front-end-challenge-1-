import React, { useEffect, useState } from "react";
import Pagination from "@/components/pagination";

interface Author {
  id: number;
  name: string;
}
interface News {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}

function Home() {
  const [data, setData] = useState<Author[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/src/data/authors.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("/src/data/news.json")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news data:", error));
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  const authorWithID1 = data.find((author) => author.id === 1);

  if (!authorWithID1) {
    return <div>No author found with ID 1</div>;
  }
  const newsWithID1 = news.find((item) => item.id === 1);

  if (!authorWithID1 || !newsWithID1) {
    return <div>No author or news found with ID 1</div>;
  }
  return (
    <div className="h-fit pb-5">
      <div className="relative p-5 bg-[url('/src/assets/tmsph-ls-midafood.jpeg')] bg-no-repeat bg-cover h-[65vh] bg-center">
        <div className="text-white font-bold text-3xl rounded-ee-2xl rounded-tl-2xl bg-red-700 w-[95px] h-[110px] absolute bottom-[-5vh] flex justify-center items-center">
          13
          <br />
          JAN
        </div>
      </div>
      <div className=" px-[50px]">
        <hr className="w-[95%] h-[2px] m-5 mt-[70px]" />

        <p className="text-red-700 font-bold">{authorWithID1.name}</p>
        <h1 className="text-gray-800 text-3xl font-bold mt-4">
          {newsWithID1.title}
        </h1>
        <h1 className="text-gray-700 font-bold mt-4">{newsWithID1.body}</h1>

        <p className="underline text-sm mt-6 cursor-pointer">READ ARTICLE</p>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
