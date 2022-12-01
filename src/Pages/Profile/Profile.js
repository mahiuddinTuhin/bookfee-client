import React from "react";

const Profile = () => {
  // const { user } = useContext(UserContext);

  return (
    <div>
      <section
        className="p-6  text-white "
        style={{
          backgroundImage:
            "url(https://www.frontlist.in/storage/post/1646375095_essential-books.jpg)",
        }}
      >
        <form
          novalidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  bg-gray-900 min-h-screen opacity-90">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="fullName" className="text-sm">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-white "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-white "
                  data-temp-mail-org="0"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="profession" className="text-sm">
                  Profession
                </label>
                <input
                  id="profession"
                  type="text"
                  placeholder="profession"
                  className="py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-white "
                  data-temp-mail-org="0"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-white "
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="phone" className="text-sm">
                  Phone
                </label>
                <input
                  id="phone"
                  type="number"
                  placeholder="+880140404040"
                  className="py-1 pl-2 mt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-white "
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Profile;
