import React from 'react';
import { Link } from 'react-router-dom';

import LogoTsunodaFlix from '../../assets/img/logo_tsunodaflix.png';


// styles
import { Nav, Logo } from './styles';

// components
import ButtonLink from '../ButtonLink';

const Header = () => {
	return (
		<Nav>
			<Link to="/">
				<Logo src={LogoTsunodaFlix} alt="logo Tsunoda Flix" />
			</Link>

			<ButtonLink to="/cadastro-video" outlined >
				Novo Vídeo
			</ButtonLink>
		</Nav>
	);
}

export default Header;
