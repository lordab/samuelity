import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-yellow-500 shadow-sm mt-4 md:w-full">
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
        <div className="flex flex-col pl-4 mb-4">
          <div>
            <h2 className="font-bold  text-gray-800 font-inter text-xl">
              Contacts
            </h2>
            <div className="flex flex-row mt-2">
              <label className="text-md text-gray-800 font-inter tracking-tighter font-semibold">
                Address:
              </label>
              <p className="pl-2 text-gray-800 text-md font-inter tracking-tighter">
                2803 11 Ave NW
              </p>
            </div>
            <div className="flex flex-row">
              <label className="text-gray-800 text-md font-inter tracking-tighter font-semibold">
                Email:
              </label>
              <p className="pl-2 text-gray-800 text-md font-inter tracking-tighter">
                test@gmail.com
              </p>
            </div>
            <div className="flex flex-row">
              <label className="text-gray-800 text-md font-inter tracking-tighter font-semibold">
                Phone:
              </label>
              <p className="pl-2 text-gray-800 text-md font-inter tracking-tighter">
                403-567-8811
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pl-4 mb-4">
          <div>
            <h2 className="font-semibold text-gray-900 font-inter text-xl mb-2">
              Services
            </h2>
            <div className="flex flex-row">
              <p className="text-md font-inter text-gray-800">
                Best SEO service
              </p>
            </div>
            <div className="flex flex-row">
              <p className="text-md font-inter text-gray-800">
                Best web services
              </p>
            </div>
            <div className="flex flex-row">
              <p className="text-md font-inter text-gray-800">
                Best Digital Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
