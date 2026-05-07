"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogOutPage = () => {
  const examples = [
    {
      actions: {
        cancel: "Stay Signed In",
        confirm: "Sign Out",
      },
      body: "You'll need to sign in again to access your account. Any unsaved changes will be lost.",
      classNames: "rounded-sm",
      header: "Sign out of your account?",
      status: "accent",
      trigger: "Sign Out",
    },
  ];
  const router = useRouter();
  const signOutBtn = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
          toast.success("Sign out successful");
          window.location.reload();
        },
      },
    });
  };
  return (
    <div>
      {/* <Button onClick={signOutBtn}>Log Out</Button> */}

      {examples.map(
        ({ actions, body, classNames, header, status, trigger }) => (
          <AlertDialog key={status}>
            <Button size="sm" variant="danger" className={classNames}>
              {trigger}
            </Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                    <AlertDialog.Icon status={status} />
                    <AlertDialog.Heading>{header}</AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                    <p>{body}</p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                      {actions.cancel}
                    </Button>
                    <Button onClick={signOutBtn} slot="close" variant="danger">
                      {actions.confirm}
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        ),
      )}
    </div>
  );
};

export default LogOutPage;
