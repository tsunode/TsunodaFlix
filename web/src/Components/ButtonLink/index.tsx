import React from 'react';

// styles
import { ButtonLink as Link } from './styles';

interface Props{
	to: string;
	outlined?: boolean;
}

const ButtonLink: React.FC<Props> = (props) => {
	return (
		<Link to={props.to} outlined>
			Novo Vídeo
		</Link>
	);
}

export default ButtonLink
