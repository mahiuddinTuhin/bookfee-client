import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../allContext/MyContext";

const AddProducts = () => {
  const { user } = useContext(UserContext);
  const [catId, setCatId] = useState("");
  const [catName, setCatName] = useState("");
  const navigate = useNavigate();
  // using react query
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://bookfee-server.vercel.app/booksCat").then((res) => res.json()),
  });

  const catChoose = (e) => {
    setCatId(e.target.id);
    setCatName(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.photo.value;

    const resalePrice = form.resalePrice.value;
    const originalPrice = form.price.value;
    const bought = form.date.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const postTime = new Date().toJSON().slice(0, 10);
    const condition = form.condition.value;

    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const verified = "false";
    const bookCat = catName;
    const ratings = "";
    const cat_id = catId;
    const writer = form.writerName.value;
    const intro = form.intro.value;
    const sellerEmail = user?.email;
    // console.log({
    //   image,
    //   resalePrice,
    //   originalPrice,
    //   bought,
    //   phone,
    //   location,
    //   postTime,
    //   condition,
    //   sellerName,
    //   sellerEmail,
    //   verified,
    //   bookCat,
    //   ratings,
    //   cat_id,
    //   writer,
    //   intro,
    //   name,
    // });
    fetch("https://bookfee-server.vercel.app/addbook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        image,
        resalePrice,
        originalPrice,
        bought,
        phone,
        location,
        postTime,
        condition,
        sellerName,
        sellerEmail,
        verified,
        bookCat,
        ratings,
        cat_id,
        writer,
        intro,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("successfully add the book for sell");
        console.log("successfully add the book for sell", data);
        navigate("/dashboard/myproducts");
      });
  };

  return (
    <div>
      <section className="p-6 dark:text-gray-100">
        <ToastContainer />
        <form
          onSubmit={(event) => handleAddProduct(event)}
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Add your book to sell
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Book Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Book name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
          </div>
          {/* original price */}
          <div>
            <label htmlFor="price" className="block mb-1 ml-1">
              Original Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              placeholder="$34"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          {/* resale price */}
          <div>
            <label htmlFor="resalePrice" className="block mb-1 ml-1">
              Resale Price
            </label>
            <input
              id="resalePrice"
              type="text"
              name="resalePrice"
              placeholder="$14"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1 ml-1">
              Purchase date
            </label>
            <input
              id="date"
              type="text"
              name="date"
              placeholder="25th October 2021"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          <div>
            <label htmlFor="condition" className="block mb-1 ml-1">
              Condition
            </label>
            <input
              id="condition"
              type="text"
              name="condition"
              placeholder="excellent/good/fair"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          {/* phone number */}
          <div>
            <label htmlFor="phone" className="block mb-1 ml-1">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="+10221239751"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          {/* location */}
          <div>
            <label htmlFor="location" className="block mb-1 ml-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="Dhaka, Jigatola"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          {/* select categories */}
          <div>
            <div>
              <fieldset className="mb-5">
                {categories?.map((cat) => {
                  return (
                    <div className="flex items-center  mb-4" key={cat?.cat_id}>
                      <input
                        onChange={(event) => catChoose(event)}
                        required
                        id={cat?.cat_id}
                        type="radio"
                        name="bookCat"
                        value={cat?.title}
                        className="radio radio-xs border-white checked:bg-gray-200"
                        aria-labelledby={cat?.cat_id}
                        aria-describedby={cat?.cat_id}
                      />
                      <label
                        htmlFor={cat?.cat_id}
                        className="text-sm font-medium text-gray-100  ml-2 block"
                      >
                        {cat?.title}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </div>

            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
          </div>

          {/* book writer name */}
          <div>
            <label htmlFor="writerName" className="block mb-1 ml-1">
              Writer Name
            </label>
            <input
              id="writerName"
              name="writerName"
              type="text"
              placeholder="writer Name"
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            ></input>
          </div>

          {/* book intro */}
          <div>
            <label htmlFor="message" className="block mb-1 ml-1">
              Intro
            </label>
            <textarea
              id="intro"
              name="intro"
              type="text"
              placeholder="intro..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            ></textarea>
          </div>
          {/* book writer name */}
          <div>
            <label htmlFor="writerName" className="block mb-1 ml-1">
              Book Photo url
            </label>
            <input
              id="photo"
              name="photo"
              type="url"
              placeholder="http://pixabay.com/images/ny=23?d=1"
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            ></input>
          </div>
          {/* book seller name */}
          <div>
            <label htmlFor="sellerName" className="block mb-1 ml-1">
              Seller Name
            </label>
            <input
              id="sellerName"
              name="sellerName"
              type="text"
              placeholder="seller Name"
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProducts;
