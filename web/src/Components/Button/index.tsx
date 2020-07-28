import React from 'react';
import LogoTsunodaFlix from '../../assets/img/logo_tsunodaflix.png';

// styles
import { Button } from './styles';

interface Props{
	href: string;
	outlined?: boolean;
}

const ButtonLink: React.FC<Props> = (props) => {
	return (
		<Button as="a" href={props.href} outlined>
			Novo Vídeo
		</Button>
	);
}

export default ButtonLink
