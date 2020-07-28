import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import dadosIniciais from './dados_iniciais.json';

import Header from './Components/Header';
import BannerMain from './Components/BannerMain';

function App() {
	return (
		<>
			<Header />

			<BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={"O que é Front-end? Trabalhando na área"}
			/>


			<GlobalStyles />
		</>
	);
}

export default App;
