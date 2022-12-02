import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../allContext/MyContext";

const Alluser = () => {
  const { user } = useContext(UserContext);

  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alluser");
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
  const handleDeleteUser = (_id) => {
    const confirm = window.confirm("Are you sure? ");
    if (confirm) {
      fetch(`http://localhost:5000/deleteUser/${_id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            toast.success("Successfully delete user");
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="my-4">All Account details</h2>
      <div data-theme="cupcake">
        <ToastContainer />
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>User Type</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {allUser?.map((user, i) => {
                return (
                  <tr className="hover" key={i}>
                    <th>{i + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.userType}</td>
                    <td>
                      {!user?.role ? (
                        <button
                          onClick={() => handleMakeAdin(user)}
                          className="btn btn-xs btn-primary"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <button className="btn btn-xs btn-disabled">
                          Admin
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user?._id)}
                        className="btn btn-xs btn-outline"
                      >
                        Delete
                      </button>
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

export default Alluser;
