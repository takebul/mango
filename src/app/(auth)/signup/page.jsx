"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success("Sign up successful");
        },
      },
    });

    if (error) {
      toast.error(error.message);
    }
  };

  const signInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      // fetchOptions: {
      //   onSuccess: () => {
      //     toast.success("Sign in successful");
      //   },
      // },
    });
    console.log({ data });
    if (data) {
      toast.success("Sign in successful");
    }
    if (!data) {
      toast.error(error.message);
    }

    // toast.success("Sign in successful");
  };
  return (
    <div className="border rounded-lg p-4 w-xs md:w-md mx-auto my-10 bg-slate-100 lg:w-lg">
      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <h1 className="text-4xl font-bold text-center pb-4">Sign Up</h1>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Name" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup>
            <InputGroup.Input
              placeholder="Password"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button className={"rounded-lg w-30"} type="submit">
            Sign Up
          </Button>
          <Button className={"rounded-lg"} type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <h2 className="text-gray-500 text-center pt-6">
        Already have an account?{"  "}
        <Link className="font-semibold text-blue-500" href={"/signin"}>
          Sign In
        </Link>{" "}
      </h2>
      <div>
        <div className="flex items-center relative my-5 ">
          <Separator className="my-7 absolute" />
          <p className=" pl-35 md:pl-50 lg:pl-57">OR</p>
          <Separator className="my-7 absolute" />
        </div>
      </div>
      <Button
        onClick={signInGoogle}
        className="w-full rounded-md"
        variant="tertiary"
      >
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignUpPage;
