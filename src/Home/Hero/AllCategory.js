import { useQuery } from "@tanstack/react-query";
import React from "react";
import CatDisplay from "./CatDisplay";

const AllCategory = () => {
  // const { categories } = useContext(UserContext);
  // using react query
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://bookfee-server.vercel.app/booksCat");
      const data = await res.json();
      return data;
    },
  });

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
