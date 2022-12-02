import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const SingleCategory = () => {
  const books = useLoaderData();

  return (
    <div className="bg-gray-900 py-4">
      {books ? books?.map((b, i) => <Book key={i} b={b} />) : null}
    </div>
  );
};

export default SingleCategory;
