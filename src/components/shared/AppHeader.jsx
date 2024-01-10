import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import signatureLight from '../../assets/Signature-Light.svg';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<nav className="sm:container sm:mx-auto">
			<div className="z-50 mx-auto max-w-screen-lg xl:max-w-screen-2xl block sm:flex sm:justify-between sm:items-center py-2">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 md:px-0">
					<div>
						<Link to="/" className='font-medium text-xl'>
							<img 
                                src={signatureLight}
                                className='w-36 rotate-12'
                                alt='Signature-Light'
                            />
						</Link>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/articles"
						className="block text-left text-lg sm:mx-4 mb-2 sm:py-2"
						aria-label="Articles"
					>
						Articles
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header links large screen */}
				<div className="font-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/articles"
						className="block text-left text-lg sm:mx-4 mb-2 sm:py-2"
						aria-label="Articles"
					>
						Articles
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>
			</div>

		</nav>
	);
};

export default AppHeader;
