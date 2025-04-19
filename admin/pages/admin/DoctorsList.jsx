import { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext';
import {HiOutlineTrash} from 'react-icons/hi'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';


export default function DoctorsList() {
  const {
  doctorDetail,
  fetchDoctorDetail, aToken, backendUrl} = useContext(AdminContext)
  const {fetchDoctors, doctors} = useContext(AdminContext);
  const [isOpendetail, setIsOpenDetail] = useState(false);
 
  useEffect(() => {
    fetchDoctors();
  }, [doctors]);

  const getDetail = async (id) => {
    await fetchDoctorDetail(id);
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(backendUrl + `api/admin/delete-doctor/${id}`, {
        params: { id },
        headers: {
          Authorization: `Bearer ${aToken}`,
        }
      })
      if (response.data.success) {
        fetchDoctors(); // Refresh the list after deletion
        toast.success("Doctor deleted successfully");
      } else {
        console.error("Failed to delete doctor:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  }

  return (
    <div className="mt-20 relative px-4 sm:px-8">
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Speciality</th>
              <th className="px-5 py-4">education</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {doctors.map((doctors, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
              <td className="px-5 flex gap-2 py-4 border-b border-gray-200 font-medium">
                <img className='rounded-full bg-gray-300' src={doctors.image} width={40} />
                {doctors.name}
              </td>
              <td className="px-5 py-4 border-b border-gray-200">{doctors.speciality}</td>
              <td className="px-5 py-4 border-b border-gray-200">{doctors.education}</td>
              <td className="px-5 flex gap-10 w-fit py-4 border-b border-gray-200">
                <button onClick={() => handleDelete(doctors._id)} className="text-red-600 hover:text-red-800 font-medium cursor-pointer"><HiOutlineTrash/></button>
                <button onClick={() => {
                  getDetail(doctors._id)
                  setIsOpenDetail(true)}} className="text-gray-700 text-[15px] cursor-pointer px-2 bg-white shadow-gray-300 rounded-full font-medium"><HiDotsHorizontal/></button>
              </td>
            </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    <div className={`w-[50%] absolute top-0 transition-all shadow-lg shadow-black border border-gray-300 duration-500 min-h-screen bg-gray-100 
    ${isOpendetail ? 'right-0 duration-300' : 'right-[-50rem] duration-600'}`}>
      <h2 onClick={() => setIsOpenDetail(false)} className='cursor-pointer'>
        <FaArrowRightFromBracket className='text-white text-2xl w-fit'/>
      </h2>
      <div>
        <img src={doctorDetail.image} />  
        <p>{doctorDetail.name}</p>
        <p>{doctorDetail.speciality}</p>
      </div>
    </div>
  </div>
  
  )
}
