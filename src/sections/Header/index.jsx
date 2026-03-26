import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="flex flex-col gap-4">

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left text-4xl font-extrabold text-white"
      >
        {data.name}
      </motion.div>

      {/* Title */}
      <div className="text-left text-lg text-primary font-semibold tracking-wide">
        {data.title}
      </div>

      {/* Caption */}
      <p className="text-left text-sm text-gray-400 leading-relaxed max-w-xs">
        {data.caption}
      </p>

      {/* Certificates */}
      <div className="mt-4">
        <div className="text-xs text-gray-400 mb-2">
          Certificates
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">

          {data.certificates.map((cert, i) => (
            <button
              key={i}
              onClick={() => window.open(cert.file, "_blank")}
              className="
      group relative overflow-hidden
      flex flex-col items-start justify-between
      px-4 py-4 rounded-2xl

      bg-gradient-to-br from-white/5 to-white/0
      border border-white/10

      backdrop-blur-md
      transition-all duration-300

      hover:scale-[1.03]
      hover:border-primary/40
      hover:shadow-xl hover:shadow-primary/20

      active:scale-95
      "
            >

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300
        bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

              {/* content */}
              <div className="relative z-10 flex items-center gap-2 text-sm font-medium">
                <FontAwesomeIcon icon={faFilePdf} className="text-primary" />
                <span>{cert.name}</span>
              </div>

              <div className="relative z-10 text-xs text-gray-400 mt-2 group-hover:translate-x-1 transition">
                Open →
              </div>

            </button>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Header