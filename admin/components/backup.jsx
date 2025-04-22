// import { useContext, useEffect, useState } from 'react';
// import { AdminContext } from '../../context/AdminContext';
// import { HiOutlineTrash } from 'react-icons/hi';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import { FaArrowRightFromBracket } from 'react-icons/fa6';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CiEdit } from 'react-icons/ci';

// export default function DoctorsList() {
//   const {
//     doctorDetail,
//     fetchDoctorDetail,
//     fetchDoctors,
//     doctors,
//     aToken,
//     backendUrl,
//   } = useContext(AdminContext);

//   const [isOpendetail, setIsOpenDetail] = useState(false);
//   const [editedFormData, setEditedFormData] = useState({});

//   useEffect(() => {
//     fetchDoctors();
//   }, []); // Only run on mount

//   const getDetail = async (id) => {
//     await fetchDoctorDetail(id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`${backendUrl}api/admin/delete-doctor/${id}`, {
//         params: { id },
//         headers: {
//           Authorization: `Bearer ${aToken}`,
//         },
//       });
//       if (response.data.success) {
//         fetchDoctors(); // Refresh list
//         toast.success('Doctor deleted successfully');
//       } else {
//         console.error('Failed to delete doctor:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error deleting doctor:', error);
//     }
//   };

//   return (
//     <div className="mt-20 relative px-4 sm:px-8">
//       <div className="overflow-x-auto">
//         <div className="min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
//                 <th className="px-5 py-4">Name</th>
//                 <th className="px-5 py-4">Speciality</th>
//                 <th className="px-5 py-4">Education</th>
//                 <th className="px-5 py-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               {doctors.map((doctor) => (
//                 <tr key={doctor._id} className="hover:bg-gray-50 transition duration-200">
//                   <td className="px-5 flex gap-2 py-4 border-b border-gray-200 font-medium">
//                     <img className="rounded-full bg-gray-300" src={doctor.image} width={40} alt={doctor.name} />
//                     {doctor.name}
//                   </td>
//                   <td className="px-5 py-4 border-b border-gray-200">{doctor.speciality}</td>
//                   <td className="px-5 py-4 border-b border-gray-200">{doctor.education}</td>
//                   <td className="px-5 flex gap-10 w-fit py-4 border-b border-gray-200">
//                     <button
//                       onClick={() => handleDelete(doctor._id)}
//                       className="text-red-600 hover:text-red-800 font-medium cursor-pointer"
//                     >
//                       <HiOutlineTrash />
//                     </button>
//                     <button
//                       onClick={() => {
//                         getDetail(doctor._id);
//                         setIsOpenDetail(true);
//                       }}
//                       className="text-gray-700 text-[15px] cursor-pointer px-2 bg-white shadow-gray-300 rounded-full font-medium"
//                     >
//                       <HiDotsHorizontal />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Side detail panel */}
//       <div
//         className={`w-[40%] pl-5 pb-10 absolute top-0 transition-all shadow-lg shadow-black border border-gray-300 duration-500 min-h-screen bg-gray-100 
//         ${isOpendetail ? 'right-0' : 'right-[-50rem]'}`}
//       >
//         <h2 onClick={() => setIsOpenDetail(false)} className="cursor-pointer ">
//           <FaArrowRightFromBracket className="text-black m-2 text-2xl w-fit" />
//         </h2>
//         <div>
//           <div className="flex items-center gap-5 border border-gray-300 p-5 rounded-lg w-[96%]">
//             <img className="bg-blue-100 rounded-full" width={100} src={doctorDetail.image} alt="Doctor" />
//             <div>
//               <p className="text-2xl font-semibold">{doctorDetail.name}</p>
//               <p>{doctorDetail.speciality}</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-5 mt-5">
//             <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
//               <div className="flex justify-between items-center">
//                 <h2>Personal Information</h2>
//                 <div className="flex gap-2 items-center border border-green-300 px-2 py-1 rounded-2xl">
//                   <h2>Edit</h2>
//                   <CiEdit />
//                 </div>
//               </div>
//               {/* personal information section */}
//               <div className='grid grid-cols-2 gap-5'>
//               <div>
//                 <p className="text-gray-500">Name</p>
//                 <p>{doctorDetail.name}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Email</p>
//                 <p>{doctorDetail.email}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Speciality</p>
//                 <p>{doctorDetail.speciality}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Education</p>
//                 <p>{doctorDetail.education}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Experience</p>
//                 <p>{doctorDetail.experience}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Fee</p>
//                 <p>{doctorDetail.fee}</p>
//               </div>
//               </div>
//             </div>
//             {/* Address section */}
//             <div className='border-gray-300 border p-5 rounded-lg w-[96%]'>
//                 <div className="flex justify-between items-center">
//                     <h2>Address</h2>
//                     <div className="flex gap-2 items-center border border-green-300 px-2 py-1 rounded-2xl">
//                       <h2>Edit</h2>
//                       <CiEdit />
//                     </div>
//                 </div>
//                 {doctorDetail.address && (
//                   <div className='grid grid-cols-2 gap-5 mt-2'>
//                     <div>
//                       <p className='text-gray-500'>Line1</p>
//                       <p>{`${doctorDetail.address.line1}`}</p>
//                     </div>
//                     <div>
//                       <p className='text-gray-500'>Line2</p>
//                       <p>{`${doctorDetail.address.line2}`}</p>
//                     </div>
//                   </div>
//                 )}
//             </div>
//             {/* About section */}
//             <div className='border-gray-300 border p-5 rounded-lg w-[96%]'>
//                 <div className="flex justify-between items-center">
//                     <h2>About</h2>
//                     <div className="flex gap-2 items-center border border-green-300 px-2 py-1 rounded-2xl">
//                       <h2>Edit</h2>
//                       <CiEdit />
//                     </div>
//                 </div>
//                 <p className='text-gray-500'>{doctorDetail.aboutDoctor}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// <div
//       className={`w-[40%] pl-5 pb-10 absolute top-0 transition-all shadow-lg shadow-black border border-gray-300 duration-500 min-h-screen bg-gray-100 
//       ${isOpendetail ? 'right-0' : 'right-[-50rem]'}`}
//     >
//       <h2 onClick={() => setIsOpenDetail(false)} className="cursor-pointer">
//         <FaArrowRightFromBracket className="text-black m-2 text-2xl w-fit" />
//       </h2>

//       <div>
//         <div className="flex items-center gap-5 border border-gray-300 p-5 rounded-lg w-[96%]">
//           <img className="bg-blue-100 rounded-full" width={100} src={doctorDetail.image} alt="Doctor" />
//           <div>
//             <p className="text-2xl font-semibold">{doctorDetail.name}</p>
//             <p>{doctorDetail.speciality}</p>
//           </div>
//         </div>

//         <div className="flex flex-col gap-5 mt-5">
//           {/* Personal Information */}
//           <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
//             <div className="flex justify-between items-center">
//               <h2>Personal Information</h2>
//               <div className="flex gap-2 items-center border border-green-300 px-2 py-1 rounded-2xl cursor-pointer" onClick={() => setEditMode(!editMode)}>
//                 <h2>{editMode ? 'Cancel' : 'Edit'}</h2>
//                 <CiEdit />
//               </div>
//               {editMode && (
//                 <button
//                   onClick={handleSave}
//                   className="ml-3 bg-green-500 text-white px-4 py-1 rounded-xl"
//                 >
//                   Save
//                 </button>
//               )}
//             </div>

//             <div className="grid grid-cols-2 gap-5 mt-4">
//               {/* Name */}
//               <div>
//                 <p className="text-gray-500">Name</p>
//                 {editMode ? (
//                   <input name="name" value={formData.name || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.name}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <p className="text-gray-500">Email</p>
//                 {editMode ? (
//                   <input name="email" value={formData.email || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.email}</p>
//                 )}
//               </div>

//               {/* Speciality */}
//               <div>
//                 <p className="text-gray-500">Speciality</p>
//                 {editMode ? (
//                   <input name="speciality" value={formData.speciality || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.speciality}</p>
//                 )}
//               </div>

//               {/* Education */}
//               <div>
//                 <p className="text-gray-500">Education</p>
//                 {editMode ? (
//                   <input name="education" value={formData.education || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.education}</p>
//                 )}
//               </div>

//               {/* Experience */}
//               <div>
//                 <p className="text-gray-500">Experience</p>
//                 {editMode ? (
//                   <input name="experience" value={formData.experience || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.experience}</p>
//                 )}
//               </div>

//               {/* Fee */}
//               <div>
//                 <p className="text-gray-500">Fee</p>
//                 {editMode ? (
//                   <input name="fee" value={formData.fee || ''} onChange={handleChange} className="input" />
//                 ) : (
//                   <p>{doctorDetail.fee}</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Address */}
//           <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
//             <div className="flex justify-between items-center">
//               <h2>Address</h2>
//             </div>
//             {doctorDetail.address && (
//               <div className="grid grid-cols-2 gap-5 mt-2">
//                 <div>
//                   <p className="text-gray-500">Line1</p>
//                   {editMode ? (
//                     <input name="line1" value={formData.address?.line1 || ''} onChange={handleAddressChange} className="input" />
//                   ) : (
//                     <p>{doctorDetail.address.line1}</p>
//                   )}
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Line2</p>
//                   {editMode ? (
//                     <input name="line2" value={formData.address?.line2 || ''} onChange={handleAddressChange} className="input" />
//                   ) : (
//                     <p>{doctorDetail.address.line2}</p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* About */}
//           <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
//             <div className="flex justify-between items-center">
//               <h2>About</h2>
//             </div>
//             {editMode ? (
//               <textarea
//                 name="aboutDoctor"
//                 value={formData.aboutDoctor || ''}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               />
//             ) : (
//               <p className="text-gray-500">{doctorDetail.aboutDoctor}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
