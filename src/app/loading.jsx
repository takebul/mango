import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div>
      <DotLottieReact
        src="https://lottie.host/5c11f6a7-85a7-41fc-bf2a-1df96676b1c6/6lOze1P2R4.lottie"
        loop
        autoplay
      />
      <h2 className="text-3xl font-bold text-gray-600 text-center">
        Searching...
      </h2>
    </div>
  );
};

export default Loading;
