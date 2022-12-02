import React, { useContext, useState } from "react";
import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../allContext/MyContext";
import "./book.css";
const Book = ({ b }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(b);
  const { sellerEmail, _id, resalePrice, name: bookName } = b;
  const bookId = _id;

  // const email = user?.email;

  // handle order confirming btn
  const handleOrderConfirm = (e) => {
    // getting form value
    const form = e?.target;
    const buyerName = form?.name?.value;
    const buyerAddress = form?.address?.value;
    const buyerPhone = form?.phone?.value;
    const buyerProfession = form?.profession?.value;
    const buyerEmail = form?.email.value;

    // fetch to store the data in database on the behalf of the user's database

    fetch(`http://localhost:5000/userOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        buyerName,
        buyerAddress,
        buyerPhone,
        buyerProfession,
        sellerEmail,
        bookId,
        buyerEmail,
        resalePrice,
        bookName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("successfull");
        console.log(data);
      });
    navigate("/");
  };

  return (
    <div className="my-24 w-full">
      <div>{/* <Toaster /> */}</div>
      <ToastContainer />
      <div className=" grid place-items-center font-mono bg-gray-900">
        <div
          className="bg-white rounded-md 
         shadow-lg"
        >
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={b?.image}
                alt="pic"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 
            border-gray-300 "
              />
            </div>

            <div className="flex flex-col  text-gray-800 ">
              <p className="pt-4 text-2xl font-bold text-black">{b?.name}</p>
              <hr className="hr-text" data-content="" />
              <div className="text-md flex flex-wrap md:flex-nowrap text-center justify-between px-4 my-2">
                <span className="font-bold">
                  used:{b?.used} | {b?.bookCat}
                </span>
                <span className="font-bold"> {b?.postTime}</span>
              </div>
              <p className="flex text-md px-4 my-2">
                Rating: {b?.ratings}/5
                <span className="font-bold px-2">|</span>
                Mood:
              </p>
              <div className="text-md flex justify-between px-4 my-2">
                <span className="font-bold">
                  Original Price: {b?.originalPrice}
                </span>
                <span className="font-bold">
                  {" "}
                  Resale Price: {b?.resalePrice}
                </span>
              </div>
              <p className="hidden md:block px-4 my-4 text-sm text-left">
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.
              </p>
              <p className="font-bold    mb-4">Writer: {b?.writer}</p>

              <div className="text-xs">
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="border border-gray-800    font-bold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  hover:text-gray-100   hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Order NOW
                </button>

                {/* show modal section */}
                {showModal ? (
                  <>
                    <div
                      className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      style={{
                        backgroundImage: `url(${b?.image})`,
                      }}
                    >
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}

                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div>
                              <section
                                className="p-6        "
                                style={{
                                  backgroundImage: `url(${b?.image})`,
                                }}
                              >
                                <form
                                  onSubmit={(event) =>
                                    handleOrderConfirm(event)
                                  }
                                  noValidate=""
                                  action=""
                                  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid "
                                >
                                  <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-gray-900  opacity-90">
                                    <div className="space-y-2 col-span-full lg:col-span-1">
                                      <p className="text-xl text-white">
                                        Personal Inormation
                                      </p>
                                      <p className="text-xs text-left text-slate-300">
                                        Add the require information so that we
                                        can verify and ask seller to directly or
                                        by curier send your book.
                                      </p>
                                    </div>
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                      <div className="col-span-full sm:col-span-3">
                                        <input
                                          // required
                                          id="fullName"
                                          type="text"
                                          name="fullName"
                                          placeholder="Full Name"
                                          className=" text-gray-200 py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700    "
                                        />
                                      </div>
                                      <div className="col-span-full sm:col-span-3">
                                        <input
                                          id="email"
                                          // required
                                          type="email"
                                          disabled
                                          placeholder="Email"
                                          name="email"
                                          defaultValue={user?.email}
                                          className=" text-gray-400 py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700    "
                                          data-temp-mail-org="0"
                                        />
                                      </div>
                                      <div className="col-span-full sm:col-span-3">
                                        <input
                                          // required
                                          id="profession"
                                          name="profession"
                                          type="text"
                                          placeholder="profession"
                                          className=" text-gray-200 py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700    "
                                          data-temp-mail-org="0"
                                        />
                                      </div>
                                      <div className="col-span-full">
                                        <input
                                          // required
                                          id="address"
                                          name="address"
                                          type="text"
                                          placeholder=""
                                          className=" text-gray-200 py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700    "
                                        />
                                      </div>
                                      <div className="col-span-full sm:col-span-2">
                                        <input
                                          // required
                                          id="phone"
                                          name="phone"
                                          type="number"
                                          placeholder="+880140404040"
                                          className=" text-gray-200 py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700    "
                                        />
                                      </div>
                                      <div className="col-span-full flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="submit"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Cancel order
                                        </button>
                                        <button
                                          className="bg-emerald-500   active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="submit"
                                        >
                                          Confirm Order
                                        </button>
                                      </div>
                                    </div>
                                  </fieldset>
                                  `
                                </form>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                {/* show modal finished */}

                <button
                  type="button"
                  className="border border-gray-400    rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 hover:text-gray-100 focus:outline-none focus:shadow-outline"
                >
                  Reviews
                </button>

                <button
                  type="button"
                  className="border border-gray-400    rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900  hover:text-gray-100 focus:outline-none focus:shadow-outline"
                >
                  AMAZON
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-fuchsia-900 flex items-center text-center justify-center my-4">
              Seller: {b?.sellerName} from {b?.location}
              <span className="mr-4"></span>
              <span className="text-green-600">
                {" "}
                {b?.verified ? <MdVerifiedUser /> : <MdOutlineVerifiedUser />}
              </span>
            </h4>
          </div>

          {/* review section */}
          <div className="flex justify-between items-center px-4 mb-4 w-full text-zinc-800">
            <div className="flex justify-between items-center px-4 mb-4 w-full">
              <div className="flex">
                <i className="material-icons mr-2 text-red-600">
                  favorite_border
                </i>
                <i className="material-icons text-blue-600">remove_red_eye</i>
              </div>
              <div className="flex">
                <i className="material-icons ml-2 text-yellow-600">
                  sentiment_very_satisfied
                </i>
                <i className="material-icons ml-2 text-yellow-600">
                  sentiment_neutral
                </i>
                <i className="material-icons ml-2 text-yellow-600">
                  sentiment_very_dissatisfied
                </i>
                <i className="material-icons ml-2 text-yellow-600">
                  star_outline
                </i>
                <i className="material-icons ml-2 text-yellow-600">star_half</i>
                <i className="material-icons ml-2 text-yellow-600">star</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
