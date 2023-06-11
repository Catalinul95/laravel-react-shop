import React from "react";
import {Link} from "react-router-dom";

const Form: React.FC = () => {
  return (
    <div className="h-[900px]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Create User</h1>
      </div>
      <div className="bg-white rounded-lg border border-gray-300 shadow-sm py-5 px-3.5">
        <form action="#">
          <div className="grid grid-cols-2 gap-6 gap-y-4">
            <div className="w-full flex flex-col">
              <label className="block mb-2">Name*</label>
              <input type="text" className="border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-amber-500 focus:border-amber-500"/>
            </div>
            <div className="w-full flex flex-col">
              <label className="block mb-2">Email*</label>
              <input type="text"
                     className="border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-amber-500 focus:border-amber-500"/>
            </div>
            <div className="w-full flex flex-col">
              <label className="block mb-2">Phone*</label>
              <input type="text"
                     className="border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-amber-500 focus:border-amber-500"/>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 flex gap-2">
        <button type="button" className="tracking-tight p-1.5 px-5 outline outline-transparent border-2 border-transparent text-md font-[400] text-white rounded-md bg-amber-600 hover:bg-amber-500 shadow-sm focus:outline-amber-600 focus:border-2 focus:border-white">
          Create
        </button>
        <Link to="/admin/users" type="button" className="tracking-tight p-1.5 px-5 outline-2 outline-transparent border border-gray-300 text-md font-[400] text-gray-900 rounded-md bg-white shadow-sm hover:bg-gray-100 focus:bg-amber-50 focus:text-amber-600 focus:outline-2 focus:outline-white focus:border-amber-600">
          Cancel
        </Link>
      </div>
    </div>
  )
}

export default Form;