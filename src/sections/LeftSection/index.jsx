import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";
import { motion } from "framer-motion";


const LeftSection = () => {
  return (
    <div className="px-6 lg:px-0">
      
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-4 sticky top-24"
      >
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl ">
  <Header />
</div>
       
        {/* Navbar */}
        <div className="bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-lg ">
          <Navbar />
        </div>

        {/* Contact */}
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg">
          <Contact />
        </div>

      </motion.div>

    </div>
  );
};

export default LeftSection;