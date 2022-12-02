import { useQuery } from "@tanstack/react-query";
import React from "react";

const Alluser = () => {
  const { data: allUser = [] } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alluser");
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="my-4">All Account details</h2>
      <div data-theme="cupcake">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>User Type</th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {allUser?.map((user, i) => {
                return (
                  <tr className="hover">
                    <th>{i + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.userType}</td>
                    <td>Blue</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
