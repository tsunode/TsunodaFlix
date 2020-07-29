import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
	Item,
	Category,
	Description,
	Title,
	ContentAreaContainer,
	BannerMainContainer,
	WatchButton
} from './styles';

interface Props {
	videoTitle: String;
	videoDescription: String;
	url: String;
}



const BannerMain: React.FC<Props> = ({ videoTitle, videoDescription, url }) => {
	const youTubeID = getYouTubeId(url);
	const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

	function getYouTubeId(youtubeURL: String) {
		return youtubeURL
			.replace(
				/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
				'$7',
			);
	}

	return (
		<BannerMainContainer backgroundImage={bgUrl}>
			<ContentAreaContainer>
				<Item>
					<Title>
						{videoTitle}
					</Title>

					<Description>
						{videoDescription}
					</Description>
				</Item>

				<Item>
					<VideoIframeResponsive youtubeID={youTubeID} />
					<WatchButton>
						Assistir
          			</WatchButton>
				</Item>
			</ContentAreaContainer>
		</BannerMainContainer>
	);
}

export default BannerMain;
