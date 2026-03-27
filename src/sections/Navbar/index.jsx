import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { label: 'About', id: 'about-section', icon: faUser },
    { label: 'Project', id: 'project-section', icon: faCode },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-section');

   useEffect(() => {
    // หา scrollable container ฝั่งขวา
    const container = document.getElementById('right-panel');
    if (!container) return;

    const handleScroll = () => {
        if (container.scrollTop < 50) {
            setActiveSection('about-section');
            return;
        }
        let current = navItems[0].id;
        for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el) {
                const containerRect = container.getBoundingClientRect();
                const elRect = el.getBoundingClientRect();
                if (elRect.top - containerRect.top <= 160) {
                    current = item.id;
                }
            }
        }
        setActiveSection(current);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
}, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className='flex flex-col gap-1'>
            {navItems.map(({ label, id, icon }) => {
                const isActive = activeSection === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`group flex items-center gap-3 text-left px-3 py-2.5 rounded-xl transition-all duration-300 cursor-pointer w-full
                            ${isActive
                                ? 'text-primary font-semibold bg-primary/10 border-l-4 border-primary'
                                : 'text-gray-500 hover:text-gray-900 bg-transparent'
                            }`}
                    >
                        <FontAwesomeIcon
                            icon={icon}
                            className={`text-sm transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-gray-300'}`}
                        />
                        <span className={`text-sm tracking-wide transition-all duration-300 ${isActive ? '' : 'group-hover:translate-x-1'}`}>
                            {label}
                        </span>
                        {isActive && (
                            <span className='ml-auto w-1.5 h-1.5 rounded-full bg-primary' />
                        )}
                    </button>
                );
            })}
        </nav>
    );
};

export default Navbar;