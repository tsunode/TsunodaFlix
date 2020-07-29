import React from 'react';

// styles
import { Main } from './styles';

// componentes
import Header from '../Header';
import Footer from '../Footer';

const TemplatePage: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<Main>
				{ children }
			</Main>
			<Footer />
		</>
	);
}

export default TemplatePage;
