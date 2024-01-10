import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: 'https://www.ashmitshahi.me/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/easeusnow',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/ashmitshahi',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/ashmitshahi',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/c/allvibespodcast',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-white">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-white mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<div className="font-normal flex justify-center items-center text-center">
					<div className="text-lg text-white">
						&copy; {new Date().getFullYear()}
						<a
							href="#"
							target="__blank"
							className="hover:underline hover:text-indigo-600 ml-1 duration-500"
						>
							Shahi
						</a>
						.
						<a
							href="#"
							target="__blank"
							className="text-white font-normal uppercase hover:underline hover:text-indigo-600 ml-1 duration-500"
						>
							Ashmit Shahi
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
