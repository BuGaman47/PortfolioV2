import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Material = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="bg-base-100 p-5 rounded-2xl shadow-xl 
        transition-all duration-300 
        hover:shadow-2xl cursor-pointer"
        
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

     

          e.currentTarget.style.background = `
    radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.3), transparent 60%)
          `;
        }}

        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";
        }}
      >
        <div className="text-center text-2xl transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </a>
  );
};

export default Material;