import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-12 bg-primary `}>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto pr-4'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}>
					<img
						src={logo}
						alt='logo'
						className='w-16 h-16 object-contain rotate'
					/>
					<p className='text-white text-[20px] font-bold cursor-pointer'>
						Abdul Rafay <span>- Web Developer</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
					{navLinks.map((Link) => (
						<li
							key={Link.id}
							className={`${
								active === Link.title ? 'text-white' : 'text-secondary'
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(Link.title);
							}}>
							<a href={`#${Link.id}`}>{Link.title}</a>
						</li>
					))}
					<a
						href='/'
						className={`${
							active === Link.title ? 'text-white' : 'text-secondary'
						} hover:text-white hover:scale-125 transition duration-150 ease-out :ease-in text-[28px] font-medium cursor-pointer`}>
						<FaLinkedinIn />
					</a>
					<a
						href='/'
						className={`${
							active === Link.title ? 'text-white' : 'text-secondary'
						} hover:text-white hover:scale-125 transition duration-150 ease-out :ease-in text-[28px] font-medium cursor-pointer`}>
						<FaGithub />
					</a>
				</ul>
				<div className='sm:hidden flex flex-1 justify-center items-center flex-col absolute top-36 left-0 w-full z-0 bg-black'>
          <img src={toggle ? close : menu} className='w-[30px] h-[30px] object-contain cursor-pointer z-30' onClick={() => setToggle(!toggle)}/>
					<div className={`${!toggle ? 'hidden' : 'flex'} p-8`}>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${active === Link.title ? 'text-secondary' : 'text-white'
                  } hover:text-white text-[18px] font-medium cursor-pointer list-none py-4`}
                onClick={() => {
                  setActive(Link.title);
                }}>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
            <a
              href='/'
              className={`${active === Link.title ? 'text-secondary' : 'text-white'
                } hover:text-white hover:scale-125 transition duration-150 ease-out :ease-in text-[28px]  cursor-pointer py-4 `}>
              <FaLinkedinIn />
            </a>
            <a
              href='/'
              className={`${active === Link.title ? 'text-secondary' : 'text-white'
                } hover:text-white hover:scale-125 transition duration-150 ease-out :ease-in text-[28px]  cursor-pointer py-4 `}>
              <FaGithub />
            </a>
          </div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
