import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../allContext/MyContext";

const MyProducts = () => {
  const { user } = useContext(UserContext);
  //   console.log(user);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myproducts/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdin = ({ _id }) => {
    const email = user.email;
    fetch(`http://localhost:5000/user/admin/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        email: email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success("Successfully made admin");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="my-4">All Products details</h2>
      <div data-theme="cupcake">
        <ToastContainer />
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Advertise</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {myProducts?.map((product, i) => {
                return (
                  <tr className="hover" key={i}>
                    <th>{i + 1}</th>
                    <td>{product?.name}</td>
                    <td>{product?.resalePrice}</td>
                    {!product?.sold ? (
                      <>
                        <td>
                          <button
                            onClick={() => handleMakeAdin(product)}
                            className="btn btn-xs btn-primary"
                          >
                            not sold
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => handleMakeAdin(product)}
                            className="btn btn-xs btn-success"
                          >
                            Advertise
                          </button>
                        </td>
                      </>
                    ) : (
                      <td>
                        <button className="btn btn-xs btn-disabled">
                          sold
                        </button>
                      </td>
                    )}
                    <td>
                      <button className="btn btn-xs btn-outline">Delete</button>
                    </td>
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

export default MyProducts;
