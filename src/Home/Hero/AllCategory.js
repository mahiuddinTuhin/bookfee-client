import React, { useContext } from "react";
import { UserContext } from "../../allContext/MyContext";
import CatDisplay from "./CatDisplay";

const AllCategory = () => {
  const { categories } = useContext(UserContext);

  return (
    <div className="mx-12 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-24">
      {categories &&
        categories?.map((cat) => (
          <CatDisplay key={cat?.cat_id} cat={cat}></CatDisplay>
        ))}
    </div>
  );
};

export default AllCategory;
