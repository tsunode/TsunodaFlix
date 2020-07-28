import React from 'react';
import LogoTsunodaFlix from '../../assets/img/logo_tsunodaflix.png';

// styles
import { Nav, Logo } from './styles';

// components
import ButtonLink from '../Button';

const Header = () => {
	return (
		<Nav>
			<a href="/">
				<Logo src={LogoTsunodaFlix} alt="logo Tsunoda Flix" />
			</a>

			<ButtonLink href="/" outlined >
				Novo Vídeo
			</ButtonLink>
		</Nav>
	);
}

export default Header;
