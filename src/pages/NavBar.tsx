import { useState } from 'react';
import { LayoutGroup, motion } from 'motion/react';
import { Squash as Hamburger } from 'hamburger-react';

const tabs = [
  {
    descreption: 'Home',
    title: 'home'
  },
  {
    descreption: 'About',
    title: 'about'
  },
  {
    descreption: 'Education',
    title: 'education'
  },
  {
    descreption: 'Project',
    title: 'project'
  },
  {
    descreption: 'Contact',
    title: 'contact'
  }
];

const underline: React.CSSProperties = {
  position: 'absolute',
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: 'linear-gradient(to right, #8b5cf6, #ec4899)'
};
function Navigation() {
  const [selectedTab, setSelectedTab] = useState('home');
  return (
    <LayoutGroup>
      <ul className='nav-ul'>
        {tabs.map(item => (
          <motion.a
            key={item.descreption}
            href={`#${item.title}`}
            initial={false}
            className='nav-li px-2'
            onClick={() => setSelectedTab(item.title)}
            style={{ position: 'relative' }}
          >
            <span className='nav-link cursor-pointer'>{item.descreption}</span>
            {item.title === selectedTab && <motion.div style={underline} layoutId='underline' />}
          </motion.a>
        ))}
      </ul>
    </LayoutGroup>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 py-1'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href='/' className='flex items-center gap-2'>
            <img src={'svg-logo.svg'} className='w-8 h-8' alt='toggle' />
            <p className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>ThangChu</p>
          </a>
          <button
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
          >
            <Hamburger size={24} toggled={isOpen} toggle={setIsOpen} />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className='block overflow-hidden text-center sm:hidden'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className='pb-5'>
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
