"use client";
import EditProfile from "@/components/shared/EditProfile";
import { useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const session = useSession();
  console.log({ session }, "session");

  const userData = session.data;
  console.log(userData);
  return (
    <div className="w-sm mx-auto p-8 space-y-4 rounded-sm bg-radial-[at_50%_75%] from-amber-300 via-purple-500 to-indigo-900 to-90% sm:w-lg md:w-2xl">
      <div className="bg-radial-[at_50%_75%] from-amber-300 via-white to-indigo-600 to-90% p-0.5 rounded-full w-31 h-31">
        <Avatar className="w-30 h-30">
          <Avatar.Image
            alt={userData?.user?.name}
            src={userData?.user?.image}
          />
          <Avatar.Fallback>{userData?.user?.name[0]}</Avatar.Fallback>
        </Avatar>
      </div>
      <div className="font-bold text-lg">
        <p className="text-slate-300">Name</p>
        <p className="text-white">{userData?.user?.name} </p>
      </div>
      <div className="font-bold text-lg">
        <p className="text-slate-300">Email</p>
        <p className="text-white">{userData?.user?.email} </p>
      </div>
      <div className="font-bold text-lg">
        <p className="text-slate-300">Image Link</p>
        <p className="text-white text-xs">{userData?.user?.image} </p>
      </div>
      <div>
        <EditProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
