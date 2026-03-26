import { data } from '../../contents/about';

const About = () => {
    return (
        <div id="about-section" className='space-y-6'>
            {/* Title */}
            <div className='text-primaryAccent font-semibold text-sm uppercase tracking-widest'>
                {data.title}
            </div>

            {/* Description */}
            <p className='text-gray-300 leading-relaxed text-sm'>
                {data.description}
            </p>

            {/* Education */}
            {data.education && (
                <div className='space-y-2'>
                    <div className='text-xs uppercase tracking-widest text-gray-500 font-semibold'>Education</div>
                    <div className='bg-white/5 rounded-xl p-4 border border-white/10'>
                        <div className='text-white font-semibold text-sm'>{data.education.degree}</div>
                        <div className='text-gray-400 text-xs mt-1'>{data.education.institution}</div>
                        <div className='text-gray-500 text-xs mt-0.5'>{data.education.year}</div>
                    </div>
                </div>
            )}

            {/* Skills */}
            {data.skills && (
                <div className='space-y-3'>
                    <div className='text-xs uppercase tracking-widest text-gray-500 font-semibold'>Technical Skills</div>
                    <div className='space-y-2'>
                        {data.skills.map((group, i) => (
                            <div key={i} className='flex flex-wrap gap-2'>
                                {group.items.map((skill, j) => (
                                    <span
                                        key={j}
                                        className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-medium'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;