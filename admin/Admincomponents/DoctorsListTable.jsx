import { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AdminContext } from "../context/AdminContext";

export default function DoctorsListTable({
  doctors,
  handleDelete,
  getDetail,
  setIsOpenDetail,
}) {
  const {isLoading} = useContext(AdminContext);
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
            <th className="px-5 py-4">Name</th>
            <th className="px-5 py-4">Speciality</th>
            <th className="px-5 py-4">Education</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody className="text-gray-700">
            {Array.from({ length: 5 }).map((_, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-5 py-4 border-b border-gray-200 font-medium">
                  <Skeleton width={100} height={20} />
                </td>
                <td className="px-5 py-4 border-b border-gray-200">
                  <Skeleton width={80} height={20} />
                </td>
                <td className="px-5 py-4 border-b border-gray-200">
                  <Skeleton width={80} height={20} />
                </td>
                <td className="px-5 py-4 border-b border-gray-200">
                  <Skeleton width={80} height={20} />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className="text-gray-700">
            {doctors.map((doctor) => (
              <tr
                key={doctor._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-5 flex gap-2 py-4 border-b border-gray-200 font-medium">
                  <img
                    className="rounded-full bg-gray-300"
                    src={doctor.image}
                    width={40}
                    alt={doctor.name}
                  />
                  {doctor.name}
                </td>
                <td className="px-5 py-4 border-b border-gray-200">
                  {doctor.speciality}
                </td>
                <td className="px-5 py-4 border-b border-gray-200">
                  {doctor.education}
                </td>
                <td className="px-5 flex gap-10 w-fit py-4 border-b border-gray-200">
                  <button
                    onClick={() => handleDelete(doctor._id)}
                    className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
                  >
                    <HiOutlineTrash />
                  </button>
                  <button
                    onClick={() => {
                      getDetail(doctor._id);
                      setIsOpenDetail(true);
                    }}
                    className="text-gray-700 text-[15px] cursor-pointer px-2 bg-white shadow-gray-300 rounded-full font-medium"
                  >
                    <HiDotsHorizontal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
