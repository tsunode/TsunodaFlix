import React from 'react';
import { Link } from 'react-router-dom';

// components
import TemplatePage from '../../../Components/TemplatePage';

const RegisterVideo = () => {
	return (

		<TemplatePage>
			<h1>Cadastro de Vídeo</h1>

			<Link to="/cadastro-categoria">
				Cadastrar Categoria
			</Link>
		</TemplatePage>

	);
}

export default RegisterVideo;
