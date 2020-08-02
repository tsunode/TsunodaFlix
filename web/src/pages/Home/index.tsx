import React, { useEffect, useState } from 'react';

import categoriesRepository from '../../repositories/categories';

import TemplatePage from '../../Components/TemplatePage';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';

interface CategoryData {
	id: number;
	title: string;
	color: string;
	link_extra: {
		text: string;
		url: string;
	};
	videos: {
		id: number;
		categoryId: number;
		title: string,
		url: string,
	}[];
}

const Home = () => {

	const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

	useEffect(() => {
		 categoriesRepository.getAllWithVideos().then((categories) => {
			setCategoryData(categories);
		}).catch((err) => {

		});
	}, []);

	return (
		<TemplatePage >
			{categoryData.length === 0 && (<div>Loading...</div>)}

			{categoryData.length !== 0 && (
				< BannerMain
				videoTitle={categoryData[0].videos[0].title}
				url={categoryData[0].videos[0].url}
				videoDescription={"O que é Front-end? Trabalhando na área"}
			/>)}

			{
				// Videos Carousel
				categoryData.map((category, index) => (
					<Carousel
						ignoreFirstVideo={index === 0}
						category={category}
					/>
				))
			}

		</TemplatePage >
	);
}

export default Home;
