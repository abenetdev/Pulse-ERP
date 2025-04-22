import { CiEdit } from 'react-icons/ci';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
export default function SidePanel(
  {isOpendetail, setIsOpenDetail, 
   doctorDetail, setEditMode, 
   editMode, handleFormData, 
   handleAddressFormData,
   editedFormData,
   handleEditedFormData }) {
    
  return (
    <div
    className={`w-[45%] pl-5 pb-10 absolute top-0 transition-all shadow-lg shadow-black border border-gray-300 duration-500 min-h-screen bg-gray-100 
    ${isOpendetail ? 'right-0' : 'right-[-50rem]'}`}
  >
    <h2 onClick={() => setIsOpenDetail(false)} className="cursor-pointer">
      <FaArrowRightFromBracket className="text-black m-2 text-2xl w-fit" />
    </h2>

    <div>
      <div className="flex items-center gap-5 border border-gray-300 p-5 rounded-lg w-[96%]">
        <img className="bg-blue-100 rounded-full" width={100} src={doctorDetail.image} alt="Doctor" />
        <div>
          <p className="text-2xl font-semibold">{doctorDetail.name}</p>
          <p>{doctorDetail.speciality}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {/* Personal Information */}
        <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
          <div className="flex justify-between items-center">
            <h2>Personal Information</h2>
            {editMode ? (
              <div>
                <button onClick={() => setEditMode(true)} className='p-1 cursor-pointer bg-red-500 text-white'>Cancel</button>
                <button onClick={handleEditedFormData}
                className="ml-3 bg-green-500 text-white px-4 py-1 rounded-xl"
               >
                Save
              </button>
              </div>

            ) : <div className="flex gap-2 items-center border border-green-300 px-2 py-1 rounded-2xl cursor-pointer" onClick={() => setEditMode(!editMode)}>
                <h2>Edit</h2>
                <CiEdit />
              </div>}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-4">
            {/* Name */}
            <div>
              <p className="text-gray-500">Name</p>
              {editMode ? (
                <input name="name" value={editedFormData.name} onChange={handleFormData} className="border input p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <p className="text-gray-500">Email</p>
              {editMode ? (
                <input name="email" value={editedFormData.email || ''} onChange={handleFormData} className="border p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.email}</p>
              )}
            </div>

            {/* Speciality */}
            <div>
              <p className="text-gray-500">Speciality</p>
              {editMode ? (
                <input name="speciality" value={editedFormData.speciality || ''} onChange={handleFormData} className="border p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.speciality}</p>
              )}
            </div>

            {/* Education */}
            <div>
              <p className="text-gray-500">Education</p>
              {editMode ? (
                <input name="education" value={editedFormData.education || ''} onChange={handleFormData} className="border p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.education}</p>
              )}
            </div>

            {/* Experience */}
            <div>
              <p className="text-gray-500">Experience</p>
              {editMode ? (
                <input name="experience" value={editedFormData.experience || ''} onChange={handleFormData} className="border p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.experience}</p>
              )}
            </div>

            {/* Fee */}
            <div>
              <p className="text-gray-500">Fee</p>
              {editMode ? (
                <input name="fee" value={editedFormData.fee || ''} onChange={handleFormData} className="border p-1 border-gray-400 rounded-md" />
              ) : (
                <p>{doctorDetail.fee}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
          <div className="flex justify-between items-center">
            <h2>Address</h2>
          </div>
          {doctorDetail.address && (
            <div className="grid grid-cols-2 gap-5 mt-2">
              <div>
                <p className="text-gray-500">Line1</p>
                {editMode ? (
                  <input name="line1" value={editedFormData.address?.line1 || ''} onChange={handleAddressFormData} className="border p-1 border-gray-400 rounded-md" />
                ) : (
                  <p>{doctorDetail.address.line1}</p>
                )}
              </div>
              <div>
                <p className="text-gray-500">Line2</p>
                {editMode ? (
                  <input name="line2" value={editedFormData.address?.line2 || ''} onChange={handleAddressFormData} className="border p-1 border-gray-400 rounded-md" />
                ) : (
                  <p>{doctorDetail.address.line2}</p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* About */}
        <div className="border-gray-300 border p-5 rounded-lg w-[96%]">
          <div className="flex justify-between items-center">
            <h2>About</h2>
          </div>
          {editMode ? (
            <textarea
              name="aboutDoctor"
              value={editedFormData.aboutDoctor || ''}
              onChange={handleFormData}
              className="w-full border p-2 mt-4 border-gray-400 rounded-md"
              rows={7}
            />
          ) : (
            <p className="text-gray-500">{doctorDetail.aboutDoctor}</p>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
