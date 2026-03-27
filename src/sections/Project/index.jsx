
import FormattedDate from '../../components/FormattedDate';
import Picture from '../../components/Picture';
import TitleLink from '../../components/TitleLink';
import Material from '../../components/Material';
import Description from '../../components/Description';
import Tech from '../../components/Tech';
import { data } from '../../contents/Project';

const SECTION_ID = 'project-section';

const Project = () => {
   
    return (
        <div id={SECTION_ID}>
            <div className="text-primaryAccent font-medium">Projects</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    
                    materials = [],
                    descriptions = [],
                    skills = [],
                    picture = "",
                }, index) => (
                    <div
  key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
  className={`
  group grid md:grid-cols-[30%_70%] gap-6 rounded-2xl p-6
  border border-gray-200 bg-white
  transition-all duration-300

  hover:shadow-md hover:border-gray-300 hover:-translate-y-1
  `}
>
  {/* LEFT */}
  <div className="flex flex-col gap-3">
    <FormattedDate>
      <span className="text-xs text-gray-500">{date}</span>
    </FormattedDate>

    <Picture
      picture={picture}
      title={title}
      className="rounded-xl border border-gray-200 shadow-sm"
    />
  </div>

  {/* RIGHT */}
  <div className="flex flex-col gap-4">

    {/* TITLE */}
    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
      {title}
    </h3>

    {/* MATERIAL */}
    <div className="flex gap-3">
      {materials.map((e, i) => (
        <Material
          key={i}
          icon={e.type}
          link={e.link}
        />
      ))}
    </div>

    {/* DESCRIPTION */}
    <div className="flex flex-col gap-2">
      {descriptions.map((e, i) => (
        <p key={i} className="text-sm text-gray-600 leading-relaxed">
          {e}
        </p>
      ))}
    </div>

    {/* SKILLS */}
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.flat().map((skill, i) => (
        <span
          key={i}
          className="text-xs px-3 py-1 rounded-full 
          bg-gray-100 text-gray-700 border border-gray-200"
        >
          {skill}
        </span>
      ))}
    </div>

  </div>
</div>
                ))
            }
        </div>
    );
};

export default Project;