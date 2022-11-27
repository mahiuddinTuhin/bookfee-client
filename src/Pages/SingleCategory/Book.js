import React from "react";
import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import "./book.css";
const Book = ({ b }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="my-24 w-full">
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
            border-gray-300 shadow-lg"
              />
            </div>

            <div className="flex flex-col text-gray-600">
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
                Mood: Dark
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
                him face-to-face with his alter-ego: the Joker.{" "}
              </p>
              <p className="font-bold text-gray-800 mb-4">
                Writer: {b?.writer}
              </p>

              <div className="text-xs">
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  className="border border-gray-800 text-gray-700 font-bold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-gray-100 hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Order NOW
                </button>

                {/* show modal section */}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">{b.name}</h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              I always felt like I could do anything. That’s the
                              main thing people are controlled by! Thoughts-
                              their perception of themselves! They're slowed
                              down by their perception of themselves. If you're
                              taught you can’t do anything, you won’t do
                              anything. I was taught I could do everything.
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Save Changes
                            </button>
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
                  className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  Reviews
                </button>

                <button
                  type="button"
                  className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
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
