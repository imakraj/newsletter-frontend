import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Articles from './Articles';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<Articles />
		</div>
	);
};

export default Home;
