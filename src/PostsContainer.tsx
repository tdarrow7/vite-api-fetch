import React, { Suspense, useEffect, useState } from "react";
import { Post, PostModel } from "./Posts";
import { LoadingPosts } from "./LoadingPosts";

export const PostsContainer = () => {
  const [items, setItems] = useState<PostModel[]>([]);

  useEffect(() => {
    const usefetchItems = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        const data = await response.json();
        //   return data;
        setItems(data);
      } catch (error) {
        // return error
      }
    };

    usefetchItems();
  }, []);

  return (
    <ul>
      <Suspense fallback={<LoadingPosts />}>
        {items.map((itm) => {
          return (
            <li key={itm.id}>
              <Post {...itm}></Post>;
            </li>
          );
        })}
      </Suspense>
    </ul>
  );
};
