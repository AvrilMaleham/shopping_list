"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // This should be replaced with an environment variable
        const res = await fetch("http://localhost:3000/api/posts");

        if (!res.ok) {
          // Handle error, need to think of a better one
          console.error("Error fetching data");
          return;
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Shopping List</h1>
      {data &&
        data?.map((list: any) => (
          <div key={list._id}>
            <p>{list?.item}</p>
          </div>
        ))}
    </main>
  );
};

export default Home;
