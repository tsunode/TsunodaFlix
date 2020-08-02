import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import { Slider, SliderItem } from '../Slider';

interface Props {
	ignoreFirstVideo: boolean;
	category: {
		title: string;
		color: string;
		link_extra: {
			text: string;
			url: string;
		};
		videos: {
			title: string,
			url: string,
		}[];
	}
}

const Carousel: React.FC<Props> = ({ ignoreFirstVideo, category }) => {
	const categoryTitle = category.title;
	const categoryColor = category.color;
	const categoryExtraLink = category.link_extra;
	const videos = category.videos;
	return (
		<VideoCardGroupContainer>
			{categoryTitle && (
				<>
					<Title style={{ backgroundColor: categoryColor || 'red' }}>
						{categoryTitle}
					</Title>
					{categoryExtraLink &&
						<ExtraLink href={categoryExtraLink.url} target="_blank">
							{categoryExtraLink.text}
						</ExtraLink>
					}
				</>
			)}
			<Slider>
				{videos.map((video, index) => {
					if (ignoreFirstVideo && index === 0) {
						return null;
					}

					return (
						<SliderItem key={video.title}>
							<VideoCard
								videoTitle={video.title}
								videoURL={video.url}
								categoryColor={categoryColor}
							/>
						</SliderItem>
					);
				})}
			</Slider>
		</VideoCardGroupContainer>
	);
}

export default Carousel;
