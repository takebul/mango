import { FiBookOpen } from "react-icons/fi";

const Loading = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center">
        <div className="w-18 h-18 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center animate-pulse">
          <FiBookOpen className="size-9 text-amber-500 animate-bounce" />
        </div>
        <div className="absolute -inset-2 rounded-3xl border-2 border-dashed border-amber-400/40 animate-spin" />
      </div>
      <h3 className="text-lg font-bold text-slate-800 mt-6 tracking-tight">
        Loading Mango Books...
      </h3>
      <p className="text-xs text-slate-400 mt-1">
        Curating knowledge for your reading journey
      </p>
    </div>
  );
};

export default Loading;

