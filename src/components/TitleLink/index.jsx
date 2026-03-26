
const TitleLink = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-white hover:text-primary transition"
    >
      {title}
    </a>
  );
};

export default TitleLink;