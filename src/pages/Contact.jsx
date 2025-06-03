import React from "react";

function Contact() {
  return (
    <div className="p-2">
      <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-5">Contact Us</h2>
        <form>
          <div className="mb-5">
            <label className="block mb-1 text-md font-semibold font-inter">
              Name
            </label>
            <input className="w-full px-3 border rounded-lg bg-white py-1.5" />
          </div>
          <div className="mb-5">
            <label className="block mb-1 text-md font-semibold font-inter">
              Phone Number
            </label>
            <input className="w-full px-3 border rounded-lg bg-white py-1.5" />
          </div>
          <div className="mb-5">
            <label className="block mb-1 text-md font-semibold font-inter">
              Email
            </label>
            <input
              className="w-full px-3 border rounded-lg bg-white py-1.5"
              type="text"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 text-md font-semibold font-inter">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-3 border rounded-lg bg-white py-1.5"
              placeholder="Type your message here"
            />
          </div>
          <div className="flex justify-center pb-6">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold rounded-lg py-2 px-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
