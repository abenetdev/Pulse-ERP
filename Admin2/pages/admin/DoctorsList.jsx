import { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import SidePanel from '../../Admincomponents/sidePanel';
import DoctorsListTable from '../../Admincomponents/DoctorsListTable';
export default function DoctorsList() {
  const {
    doctorDetail,
    fetchDoctorDetail,
    fetchDoctors,
    doctors,
    aToken,
    backendUrl,
  } = useContext(AdminContext);

  const [isOpendetail, setIsOpenDetail] = useState(false);
  const [editedFormData, setEditedFormData] = useState(doctors);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchDoctors();
    setEditedFormData(doctorDetail);
  }, []); // Only run on mount

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prev) => ({ ...prev, [name]: value }));
  }
  
  const handleAddressFormData = (e) => {
    const { name, value } = e.target;
    setEditedFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  }
  const getDetail = async (id) => {
    await fetchDoctorDetail(id);
  };

  // const handleEditedFormData = async (id) => {
  //   try {
  //     const response = await axios.put(`${backendUrl}api/admin/update-doctor/${id}`, editedFormData, {
  //       headers: { 
  //         Authorization: `Bearer ${aToken}`,
  //   }})
  //     if (response.data.success) {
  //       fetchDoctors(); // Refresh list
  //       toast.success('Doctor updated successfully');
  //       setEditMode(false);
  //     } else {
  //       console.error('Failed to update doctor:', response.data.message);
  //     }
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}api/admin/delete-doctor/${id}`, {
        params: { id },
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      if (response.data.success) {
        fetchDoctors(); // Refresh list
        toast.success('Doctor deleted successfully');
      } else {
        console.error('Failed to delete doctor:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <div className="mt-20 relative px-4 sm:px-8">
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
           <DoctorsListTable
              doctors={doctors} 
              handleDelete={handleDelete}
              getDetail={getDetail}
              setIsOpenDetail={setIsOpenDetail}
            />
        </div>
      </div>
      {/* Side detail panel */}
      {/* <SidePanel isOpendetail={isOpendetail} setIsOpenDetail={setIsOpenDetail}
      doctorDetail={doctorDetail} setEditMode={setEditMode}
      editMode={editMode} handleFormData={handleFormData}
      handleAddressFormData={handleAddressFormData} 
      editedFormData={editedFormData}
      handleEditedFormData={handleEditedFormData}
       /> */}
    </div>
  );
}