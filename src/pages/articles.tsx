import { useEffect, useState } from "react";

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

function Articles() {
  const [data, setData] = useState<Author[]>([]);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("https://tmsph-sdi-challenges.pages.dev/challenges/authors.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("https://tmsph-sdi-challenges.pages.dev/challenges/news.json")
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      {news.map((newsItem) => (
        <div key={newsItem.id} className="h-fit pb-5">
          <div
            className="relative p-5 bg-no-repeat bg-cover bg-center mb-4 h-[65vh]"
            style={{
              backgroundImage: `url(https://tmsph-sdi-challenges.pages.dev/challenges/${newsItem.image_url})`,
            }}
          >
            <div className="text-white font-bold text-3xl rounded-ee-2xl rounded-tl-2xl bg-red-700 w-[95px] h-[110px] absolute bottom-[-5vh] flex justify-center items-center p-5">
              <p>{formatDate(newsItem.created_at)}</p>
            </div>
          </div>

          <hr className="w-[95%] h-[2px] m-5 mt-[70px]" />
          <div className="px-[30px] pb-5">
            <p className="text-red-700 font-bold">
              {data.find((author) => author.id === newsItem.author_id)?.name}
            </p>
            <h1 className="text-gray-800 text-3xl font-bold mt-4">
              {newsItem.title}
            </h1>
            <h1 className="text-gray-700 font-bold mt-4">{newsItem.body}</h1>
            <p className="underline text-sm mt-6 cursor-pointer">
              READ ARTICLE
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;
