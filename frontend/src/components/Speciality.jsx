import { Link } from "react-router-dom";
import {specialityData} from "../assets/assets_frontend/assets";
export default function Speciality() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 " id="speciality">
        <h1 className="text-3xl font-medium">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-sm">Simply find your favourite doctor using this categories</p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full">
            {specialityData
             && specialityData.length > 0 ?
               specialityData.map((lists, index) => (
                <Link 
                className="flex flex-col items-center text-xs cursor-pointer 
                flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" 
                key={index} to={`/doctors/${lists.speciality}`}>
                    <img src={lists.image}/>
                    <p>{lists.speciality}</p>
                </Link>
               ))
              : <h2>Oops! No Speciality Data Here</h2> 
            }
        </div>
    </div>
  )
}
