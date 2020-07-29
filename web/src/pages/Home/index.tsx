import React from 'react';

import dadosIniciais from '../../dados_iniciais.json';

import TemplatePage from '../../Components/TemplatePage';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';


const Home = () => {
	return (

		<TemplatePage >

			<BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={"O que é Front-end? Trabalhando na área"}
			/>

			{
				// Carrousel de vídeos
				dadosIniciais.categorias.map((categoria, index) => (
					<Carousel
						ignoreFirstVideo={index === 0}
						category={categoria}
					/>
				))
			}

		</TemplatePage >



	);
}

export default Home;
