"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogOutPage = () => {
  const router = useRouter();
  const signOutBtn = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Log out successful");
          router.push("/");
        },
      },
    });
  };
  return (
    <div>
      <Button onClick={signOutBtn} className={"rounded-sm"} variant="danger">
        <p>Log Out</p>
      </Button>
    </div>
  );
};

export default LogOutPage;
