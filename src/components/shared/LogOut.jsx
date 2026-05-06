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
          router.push("/");
          toast.success("Log out successful");
        },
      },
    });
  };
  return (
    <div>
      <Button
        size="sm"
        onClick={signOutBtn}
        className={"rounded-sm"}
        variant="danger"
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutPage;
