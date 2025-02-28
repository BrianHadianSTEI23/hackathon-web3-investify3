import Image from "next/image";
import { Navbar } from "../../component/Navbar";
import { navItems } from "../../../data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderStatistics from "../../component/OrderStatistics";
import OrderSummary from "@/component/OrderSummary";
import { profileData } from "../../../data/data"; // Import dummy profile data

export default function Profile() {
  return (
    <div className="flex flex-col items-center p-10 pt-15 m-4 sm:p-20">
      <Navbar navItems={navItems} />

      {/* Profile Card */}
      <div className="w-full p-10 place-content-center shadow-lg rounded-xl flex flex-col sm:flex-row items-center bg-white gap-10 sm:gap-x-20 overflow-hidden">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-30 h-30 sm:w-48 sm:h-48 bg-purple-400 rounded-full overflow-hidden flex items-center justify-center">
            <Image 
              src={profileData.profilePicture} // Use dynamic data
              alt="Profile"
              width={192} 
              height={192} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="w-full sm:w-1/2 space-y-3">
          <div className="flex justify-between items-center w-full pb-2 border-b border-gray-300">
              <h1 className="text-lg font-semibold italic">My Profile</h1>

              <button className="flex justify-between items-center gap-2 bg-[#CCF0EB] font-bold text-[#00B69B] px-3 py-1 rounded-md hover:bg-[#8eddd1]">
                <Image
                  src="/edit.svg"
                  alt="Logo"
                  width={15}
                  height={15}
                  className="object-cover"
                />
                <span className="text-xs">Edit</span>
              </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pl-5 text-sm">
            <div className="space-y-2 font-medium text-gray-700">
              <p>Username</p>
              <p>Nama Lengkap</p>
              <p>Email</p>
            </div>
            <div className="space-y-2 text-gray-800">
              <p>{profileData.username}</p> {/* Dynamic Data */}
              <p>{profileData.fullName}</p>
              <p>{profileData.email}</p>
            </div>
          </div>

          <div className="border-b border-gray-300 w-full"></div>

          <div className="grid grid-cols-2 gap-4 pl-5 text-sm">
            <div className="space-y-2 font-medium text-gray-700">
              <p>ID</p>
              <p>ID Wallet</p>
            </div>
            <div className="space-y-2 text-gray-800">
              <p>{profileData.id}</p> {/* Dynamic Data */}
              <p>{profileData.walletId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full mt-5">
        <OrderSummary />
      </div>

      <div className="w-full mt-5">
        {/* Order Statistics */}
        <OrderStatistics />
      </div>
    </div>
  );
}
