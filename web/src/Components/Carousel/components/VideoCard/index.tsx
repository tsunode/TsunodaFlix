import React from 'react';
import { VideoCardContainer } from './styles';

interface Props {
	videoTitle: string;
	videoURL: string;
	categoryColor: string;
}

const VideoCard: React.FC<Props> = ({ videoTitle, videoURL, categoryColor }) => {

	const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

	function getYouTubeId(youtubeURL: string) {
		return youtubeURL
			.replace(
				/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
				'$7',
			);
	}

	return (
		<VideoCardContainer url={image}
			href={videoURL}
			target="_blank"
			style={{ borderColor: categoryColor || 'red' }}
			title={videoTitle}
		/>
	);

}

export default VideoCard;
