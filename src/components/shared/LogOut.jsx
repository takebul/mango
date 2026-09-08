"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";

const LogOutPage = () => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const signOutBtn = async () => {
    try {
      setIsLoggingOut(true);
      await authClient.signOut();
      toast.success("Signed out successfully");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Failed to sign out");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <AlertDialog>
      <Button
        size="sm"
        variant="ghost"
        className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
      >
        <FiLogOut className="size-3.5" />
        <span>Sign Out</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md p-6 bg-white rounded-2xl shadow-2xl border border-slate-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading className="text-xl font-bold text-slate-900">
                Sign out of your account?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="py-3">
              <p className="text-sm text-slate-600">
                You will need to sign in again to access your borrowed books and profile details.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex justify-end gap-2 pt-4">
              <Button
                slot="close"
                variant="outline"
                className="px-4 py-2 rounded-lg text-sm text-slate-700 border-slate-300 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                onClick={signOutBtn}
                slot="close"
                isPending={isLoggingOut}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 transition"
              >
                Confirm Sign Out
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default LogOutPage;

