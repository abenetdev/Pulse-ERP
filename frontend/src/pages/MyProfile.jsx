import { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets';
const initialUserData = {
  name: "Abenet Adugna",
  email: "abenetadugna3@gmail.com",
  image: assets.profile_pic,
  address: {
    line1: "hawassa 05",
    line2: "hawassa chefe"
  },
  phone: "0925906061",
  gender: "male",
  birthDay: "2002-12-21"
}
export default function MyProfile() {
  const [userData, setUserData] = useState(initialUserData);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-4 text-sm p-6 bg-white shadow-md rounded-xl">
  {/* Profile Image & Name */}
  <div className="flex flex-col items-center">
    <img
      width={120}
      className="rounded-lg shadow-md"
      src={userData.image}
      alt="Profile"
    />
    {isEdit ? (
      <input
        className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        type="text"
        value={userData.name}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    ) : (
      <h2 className="font-medium text-3xl text-neutral-800 mt-4">
        {userData.name}
      </h2>
    )}
  </div>

  <hr className="border-t border-gray-300" />

  {/* Contact Information */}
  <div>
    <h2 className="text-neutral-500 font-semibold text-lg underline mt-3">
      CONTACT INFORMATION
    </h2>
    <div className="mt-2 space-y-2">
      <div>
        <p className="text-gray-600">Email</p>
        <p className="font-medium">{userData.email}</p>
      </div>
      <div>
        <p className="text-gray-600">Phone</p>
        {isEdit ? (
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <h2 className="font-medium">{userData.phone}</h2>
        )}
      </div>
      <div>
        <p className="text-gray-600">Address</p>
        {isEdit ? (
          <div className="space-y-2">
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
            />
          </div>
        ) : (
          <div>
            <h2 className="font-medium">{userData.address.line1}</h2>
            <h2 className="font-medium">{userData.address.line2}</h2>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Basic Information */}
  <div>
    <h2 className="text-neutral-500 font-semibold text-lg underline mt-3">
      BASIC INFORMATION
    </h2>
    <div className="mt-2 space-y-2">
      <div>
        <p className="text-gray-600">Gender</p>
        {isEdit ? (
          <select
            className="border border-gray-300 rounded-md p-2 w-full"
            value={userData.gender}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <h2 className="font-medium">{userData.gender}</h2>
        )}
      </div>
      <div>
        <p className="text-gray-600">Birthday</p>
        {isEdit ? (
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="date"
            value={userData.birthDay}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, birthDay: e.target.value }))
            }
          />
        ) : (
          <h2 className="font-medium">{userData.birthDay}</h2>
        )}
      </div>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="mt-4 flex justify-center">
    {isEdit ? (
      <button
        onClick={() => setIsEdit(false)}
        className="px-6 py-2 border-none text-white bg-primary w-fit rounded-2xl hover:bg-opacity-80 transition"
      >
        Save
      </button>
    ) : (
      <button
        onClick={() => setIsEdit(true)}
        className="px-6 py-2 border-none text-white bg-primary w-fit rounded-2xl hover:bg-opacity-80 transition"
      >
        Edit Profile
      </button>
    )}
  </div>
</div>

  )
}
