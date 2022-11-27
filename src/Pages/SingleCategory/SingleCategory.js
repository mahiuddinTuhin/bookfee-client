import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const SingleCategory = () => {
  const books = useLoaderData();

  return (
    <div className="bg-gray-900 py-4">
      {books && books?.map((b) => <Book key={b._id} b={b} />)}
    </div>
  );
};

export default SingleCategory;
