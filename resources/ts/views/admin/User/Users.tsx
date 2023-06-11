import React from "react";
import {Link} from "react-router-dom";

const Users: React.FC = () => {
  return (
    <div className="h-[900px]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Users</h1>
        <Link to="/admin/users/create" className="tracking-tight p-1.5 px-5 outline outline-transparent border-2 border-transparent text-md font-[400] text-white rounded-md bg-amber-600 hover:bg-amber-500 shadow-sm focus:outline-amber-600 focus:border-2 focus:border-white">
          New user
        </Link>
      </div>
      <div className="bg-white rounded-lg border border-gray-300 shadow-sm py-1 overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="bg-gray-50">
            <tr className="text-sm text-gray-600 font-medium">
              <th className="py-2 w-[5%]">
                <label>
                  <input type="checkbox" className="w-4 h-4 block border-gray-300 bg-white rounded mx-auto shadow-sm focus:ring focus:ring-amber-200 focus:bg-white"/>
                </label>
              </th>
              <th className="font-medium p-3 text-left">Name</th>
              <th className="font-medium p-3 text-left">Email</th>
              <th className="font-medium p-3 text-left">Phone</th>
              <th className="font-medium p-3 text-left">Created at</th>
              <th className="w-[5%]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 text-gray-600 font-medium">
              <td className="p-2 h-full w-[5%]">
                <label>
                  <input type="checkbox" className="w-4 h-4 block border-gray-300 bg-white rounded mx-auto shadow-sm focus:ring focus:ring-amber-200 focus:bg-white"/>
                </label>
              </td>
              <td className="p-3 whitespace-nowrap">Pocsan Catalin</td>
              <td className="p-3 whitespace-nowrap">pocsanjr@gmail.com</td>
              <td className="p-3 whitespace-nowrap">0725391572</td>
              <td className="p-3 whitespace-nowrap">03/03/2023</td>
              <td className="w-[5%]">
                <a href="src/views/admin/User/Users#" className="text-amber-500 hover:text-amber-400 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;