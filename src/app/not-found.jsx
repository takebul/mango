import { Button } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <div>
      <DotLottieReact
        className="h-[60vh]"
        src="https://lottie.host/5969b4aa-9727-4a18-ba70-fe20551c4b34/ke3isNUefH.lottie"
        loop
        autoplay
      />
      <h2 className="text-center text-4xl font-bold text-slate-800">
        Page Not Found
      </h2>
      <p className="text-xl font-semibold text-gray-400 text-center py-3">
        Could not find requested resource
      </p>
      <div className="text-center">
        <Link href={"/"}>
          <Button className={"rounded-sm"}>
            <FaArrowLeft /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
