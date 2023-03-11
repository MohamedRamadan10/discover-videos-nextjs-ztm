import { videos } from "../data/videos.js";

export const getVideos = () => {
	return videos.items.map((item) => {
		return {
			title: item.snippet.title,
			imgUrl: item.snippet.thumbnails.high.url,
			description: item.snippet.description,
			id: item?.id?.videoId,
		};
	});
};
