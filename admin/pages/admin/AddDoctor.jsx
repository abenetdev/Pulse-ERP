import { useContext, useState } from "react"
import {assets} from "../../assets/assets_admin/assets"
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import {toast} from "react-toastify"
const initialFormData = {
  docImage: false,
  name: "",
  email: "",
  password: "",
  experience: "",
  fee: "",
  speciality: "",
  education: "",
  addressline1: "",
  addressline2: "",
  aboutDoctor: "",
}
export default function AddDoctor() {
  const[formData, setFormData] = useState(initialFormData);
  const {backendUrl} = useContext(AdminContext);
  const handleSendFormData = async (e) => {
    e.preventDefault();
    try {
       const newformData = new FormData();
       newformData.append("docImage", formData.docImage);
       newformData.append("name", formData.name);
       newformData.append("email", formData.email);
       newformData.append("password", formData.password);
       newformData.append("experience", formData.experience);
       newformData.append("fee", formData.fee);
       newformData.append("speciality", formData.speciality);
       newformData.append("education", formData.education);
       newformData.append("address", JSON.stringify({line1:formData.addressline1, line2: formData.addressline2}));
       newformData.append("aboutDoctor", formData.aboutDoctor);
       const {data} = await axios.post(backendUrl + "api/admin/add-doctor", newformData);
       if(data.success){
        toast.success("doctor saved")
       } else {
        toast.error("doctor can't saved!")
       }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mx-auto absolute top-26 left-[20%] p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-6">Add Doctor</h2>
    <form onSubmit={handleSendFormData} className="space-y-4 grid grid-cols-3 gap-4">

      {/* Doctor Profile Icon */}
      <div>
        <label htmlFor="upload-area" className="block mb-1 font-semibold">
           <img className="cursor-pointer w-16 rounded-full"  src={formData.docImage? URL.createObjectURL(formData.docImage) : assets.upload_area} alt="" />
        </label>
        <input id="upload-area" type="file" onChange={(e) => setFormData({...formData, docImage: e.target.files[0]})} hidden className="w-full border p-2 rounded" />
        <p>Upload doctor image</p>
      </div>

      {/* Doctor Name */}
      <div>
        <label className="block mb-1 font-semibold">Doctor Name</label>
        <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Enter doctor name" className="w-full border p-2 rounded" />
      </div>

      {/* Doctor Email */}
      <div>
        <label className="block mb-1 font-semibold">Doctor Email</label>
        <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Enter doctor email" className="w-full border p-2 rounded" />
      </div>

      {/* Doctor Password */}
      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}  type="password" placeholder="Enter password" className="w-full border p-2 rounded" />
      </div>

      {/* Experience */}
      <div>
        <label className="block mb-1 font-semibold">Experience</label>
        <select value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full border p-2 rounded">
          <option value="">Select experience</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="5">5 Years</option>
          <option value="10">10+ Years</option>
        </select>
      </div>

      {/* Fees */}
      <div>
        <label className="block mb-1 font-semibold">Fees</label>
        <input value={formData.fee} onChange={(e) => setFormData({...formData, fee: e.target.value})} type="number" placeholder="Enter consultation fees" className="w-full border p-2 rounded" />
      </div>

      {/* Speciality */}
      <div>
        <label className="block mb-1 font-semibold">Speciality</label>
        <select value={formData.speciality} onChange={(e) => setFormData({...formData, speciality: e.target.value})}  className="w-full border p-2 rounded">
          <option value={""}>Select speciality</option>
          <option value={"Cardiology"}>Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="dermatology">Dermatology</option>
        </select>
      </div>

      {/* Education */}
      <div>
        <label className="block mb-1 font-semibold">Education</label>
        <input value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})} type="text" placeholder="Enter education details" className="w-full border p-2 rounded" />
      </div>

      {/* Address 1 */}
      <div>
        <label className="block mb-1 font-semibold">Address Line 1</label>
        <input value={formData.addressline1} onChange={(e) => setFormData({...formData, addressline1: e.target.value})} type="text" placeholder="Enter address line 1" className="w-full border p-2 rounded" />
      </div>

      {/* Address 2 */}
      <div>
        <label className="block mb-1 font-semibold">Address Line 2</label>
        <input value={formData.addressline2} onChange={(e) => setFormData({...formData, addressline2: e.target.value})} type="text" placeholder="Enter address line 2" className="w-full border p-2 rounded" />
      </div>

      {/* About Doctor */}
      <div>
        <label className="block mb-1 font-semibold">About Doctor</label>
        <textarea value={formData.aboutDoctor} onChange={(e) => setFormData({...formData, aboutDoctor: e.target.value})} placeholder="Write something about the doctor" className="w-full border p-2 rounded h-24" />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Add Doctor
        </button>
      </div>
    </form>
  </div>
  )
}
