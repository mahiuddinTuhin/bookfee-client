import React from "react";

const Blog = () => {
  return (
    <div className=" ">
      <section className="min-h-screen      text-white">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8  text-white ">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg  hover:border-rose-400">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <p className=" px-4 py-6 pt-0 ml-4 -mt-4  text-white ">
                In React apps, there are at least seven ways to handle the
                state. Let us briefly explore a few of them in this part.
                <ul className="flex flex-col items-center">
                  <li className="border mx-2 my-4 p-2 w-2/3">
                    URL: We can use URL to store some data e.g. The id of the
                    current item, being viewed Filter parameters Pagination
                    offset and limit Sorting data Keeping such data in the URL
                    allows users to share deep links with others.
                  </li>
                  <li className="border mx-2 my-4 p-2 w-2/3">
                    Web Storage: The second option is to store the state in the
                    browser via web storage. This is useful when we want to
                    persist state between reloads and reboots. Examples include
                    cookies, local storage, and IndexedDB. These are native
                    browser technologies. Data persisted in the browser is tied
                    to a single browser. So, if the user loads the site in a
                    different browser, the data will not be available.
                  </li>
                  <li className="border mx-2 my-4 p-2 w-2/3">
                    Local State: The third option is to use store state locally.
                    It is useful when one component needs the state. Examples
                    include a toggle button, a form, etc.
                  </li>
                  <li className="border mx-2 my-4 p-2 w-2/3">
                    Lifted State: The Fourth option is to define the state in
                    the parent component. Often, the same state is used across
                    multiple components. In those cases, it is useful to lift
                    the state to a common parent. The lifting state is a
                    two-step process. First, we declare the state in a common
                    parent component, and then we pass the state down to child
                    components via props. This pattern should be considered any
                    time a few related components need to use the same state.
                    The lifting state avoids duplicating states in multiple
                    components. It helps to assure that our components all
                    consistently reflect the same state.
                  </li>
                  <li className="border mx-2 my-4 p-2 w-2/3">etc</li>
                </ul>
              </p>
            </details>
            <details className="w-full border rounded-lg  hover:border-rose-400">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How does prototypical inheritance work?
              </summary>
              <p className=" px-4 py-6 pt-0 ml-4 -mt-4  text-white ">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </details>
            <details className="w-full border rounded-lg  hover:border-rose-400">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is a unit test? Why should we write unit tests?
              </summary>
              <p className=" px-4 py-6 pt-0 ml-4 -mt-4  text-white ">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </details>
            <details className="w-full border rounded-lg  hover:border-rose-400">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                React vs. Angular vs. Vue?
              </summary>
              <p className=" px-4 py-6 pt-0 ml-4 -mt-4  text-white ">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
