import About from "../About";
import Project from "../Project";

const RightSection = () => {
  return (
    <div className="flex flex-col gap-8">

      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl transition duration-300 hover:shadow-2xl hover:border-white/20 hover:-translate-y-0.5">
        <About />
      </div>

      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl transition duration-300 hover:shadow-2xl hover:border-white/20 hover:-translate-y-0.5">
        <Project />
      </div>

    </div>
  );
};

export default RightSection;