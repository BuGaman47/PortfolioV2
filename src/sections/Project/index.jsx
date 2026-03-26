import { useState } from 'react';
import FormattedDate from '../../components/FormattedDate';
import Picture from '../../components/Picture';
import TitleLink from '../../components/TitleLink';
import Material from '../../components/Material';
import Description from '../../components/Description';
import Tech from '../../components/Tech';
import { data } from '../../contents/Project';

const SECTION_ID = 'project-section';

const Project = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
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

                        className={`grid md:grid-cols-[30%_70%] gap-6 rounded-5xl p-6 
  transition duration-300 
  ${isMouseEnter[`${SECTION_ID}-${index}`]
                                ? "bg-white/5 shadow-xl"
                                : "bg-transparent"}`}

                        onMouseEnter={() =>
                            setIsMouseEnter(prev => ({
                                ...prev,
                                [`${SECTION_ID}-${index}`]: true
                            }))
                        }

                        onMouseLeave={() =>
                            setIsMouseEnter(prev => ({
                                ...prev,
                                [`${SECTION_ID}-${index}`]: false
                            }))
                        }
                    >
                        <div>
                            <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                            <Picture picture={picture} title={title} />
                        </div>
                        <div className="grid gap-y-4">
                            <TitleLink  title={title}  />

                            <div className='flex gap-4 text-xl'>
                                {
                                    materials.map((e, i) => (
                                        <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />
                                    ))
                                }
                            </div>
                            {
                                descriptions.map((e, i) => (
                                    <Description key={`${e}-descriptions-${i}`} description={e} />
                                ))
                            }
                            {
                                skills.map((e, i) => (
                                    <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Project;