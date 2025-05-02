
import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import {
  Button
} from "@/components/ui/button"
import {
  Label
} from "@/components/ui/label"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { useContext, useState } from "react"
import { AdminContext } from "../../context/AdminContext"
//import { toast } from "react-toastify"
import axios from "axios"
import { assets } from "../../assets/assets_admin/assets"
import { toast } from "sonner"

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
  const [formData, setFormData] = useState(initialFormData)
  const { backendUrl, aToken } = useContext(AdminContext)

  const handleSendFormData = async (e) => {
    e.preventDefault()
    try {
      const newformData = new FormData()
      newformData.append("docImage", formData.docImage)
      newformData.append("name", formData.name)
      newformData.append("email", formData.email)
      newformData.append("password", formData.password)
      newformData.append("experience", formData.experience)
      newformData.append("fee", formData.fee)
      newformData.append("speciality", formData.speciality)
      newformData.append("education", formData.education)
      newformData.append(
        "address",
        JSON.stringify({ line1: formData.addressline1, line2: formData.addressline2 })
      )
      newformData.append("aboutDoctor", formData.aboutDoctor)

      const { data } = await axios.post(
        backendUrl + "api/admin/add-doctor",
        newformData,
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      if (data.success) {
        toast.success("Doctor saved")
        setFormData(initialFormData)
      } else {
        toast.error("Doctor can't be saved!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Add Doctor</h2>
      <form onSubmit={handleSendFormData} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Upload Doctor Image */}
        <div className="col-span-full flex flex-col items-center gap-2">
          <label htmlFor="upload-area" className="cursor-pointer">
            <img
              className="w-20 h-20 rounded-full border object-cover"
              src={formData.docImage ? URL.createObjectURL(formData.docImage) : assets.upload_area}
              alt="Upload Doctor"
            />
          </label>
          <input
            id="upload-area"
            type="file"
            hidden
            required
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, docImage: e.target.files[0] })}
          />
          <p className="text-sm text-gray-500">Click image to upload profile photo</p>
        </div>

        {/* Name */}
        <div>
          <Label className="pb-3">Name</Label>
          <Input
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter doctor's name"
          />
        </div>

        {/* Email */}
        <div>
          <Label className="pb-3">Email</Label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter doctor's email"
          />
        </div>

        {/* Password */}
        <div>
          <Label className="pb-3">Password</Label>
          <Input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
          />
        </div>

        {/* Experience */}
        <div>
          <Label className="pb-3">Education</Label>
          <Input
            value={formData.education}
            required
            onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            placeholder="Enter education details"
          />
        </div>

        {/* Fee */}
        <div>
          <Label className="pb-3">Fees</Label>
          <Input
            type="number"
            value={formData.fee}
            required
            onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
            placeholder="Enter consultation fee"
          />
        </div>
        <div>
          <Label className="pb-3">Address Line 1</Label>
          <Input
            value={formData.addressline1}
            required
            onChange={(e) => setFormData({ ...formData, addressline1: e.target.value })}
            placeholder="Street, area, etc."
          />
        </div>

        {/* Address Line 2 */}
        <div>
          <Label className="pb-3">Address Line 2</Label>
          <Input
            value={formData.addressline2}
            required
            onChange={(e) => setFormData({ ...formData, addressline2: e.target.value })}
            placeholder="City, state, zip"
          />
        </div>
        {/* Speciality */}
        <div>
          <Label className="pb-3">Speciality</Label>
          <Select
            value={formData.speciality}
            required
            onValueChange={(val) => setFormData({ ...formData, speciality: val })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select speciality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cardiology">Cardiology</SelectItem>
              <SelectItem value="Neurology">Neurology</SelectItem>
              <SelectItem value="Pediatrics">Pediatrics</SelectItem>
              <SelectItem value="Orthopedics">Orthopedics</SelectItem>
              <SelectItem value="Dermatology">Dermatology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Experience */}
        <div>
          <Label className="pb-3">Experience</Label>
          <Select
            required
            value={formData.experience}
            onValueChange={(val) => setFormData({ ...formData, experience: val })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Year</SelectItem>
              <SelectItem value="2">2 Years</SelectItem>
              <SelectItem value="3">3 Years</SelectItem>
              <SelectItem value="5">5 Years</SelectItem>
              <SelectItem value="10">10+ Years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* About Doctor */}
        <div className="col-span-full">
          <Label className="mb-4">About Doctor</Label>
          <Textarea
            required
            rows={5}
            value={formData.aboutDoctor}
            onChange={(e) => setFormData({ ...formData, aboutDoctor: e.target.value })}
            placeholder="Brief description about the doctor"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end">
          <Button type="submit" className="w-full sm:w-auto cursor-pointer">
            Add Doctor
          </Button>
        </div>
      </form>
    </div>
  );
}
