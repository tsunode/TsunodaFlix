import React from 'react';

// styles
import { Button } from './styles';

interface Props{
	to: string;
	outlined?: boolean;
}

const ButtonLink: React.FC<Props> = (props) => {
	return (
		<Button to={props.to} outlined>
			Novo Vídeo
		</Button>
	);
}

export default ButtonLink
