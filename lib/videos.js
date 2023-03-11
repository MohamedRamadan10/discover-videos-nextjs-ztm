const getCommonVideos = async (url) => {
	try {
		const youtubeAPI = process.env.YOUTUBE_API_KEY;
		const mainUrl = "https://youtube.googleapis.com/youtube/v3/";
		const youtubeURL = `${mainUrl}${url}&maxResults=25&key=${youtubeAPI}`;

		const res = await fetch(youtubeURL);
		const videos = await res.json();

		if (videos?.error) {
			console.error("Youtube API error", videos.error);
			return [];
		}

		return videos?.items.map((item) => {
			const id = item.id?.videoId || item.id;
			return {
				title: item.snippet.title,
				imgUrl: item.snippet.thumbnails.high.url,
				description: item.snippet.description,
				id,
			};
		});
	} catch (err) {
		console.error("Something wrong went with video player", err);
		return [];
	}
};

export const getVideos = (searchQuery) => {
	const url = `search?part=snippet&q=${searchQuery}`;
	return getCommonVideos(url);
};

export const getPopularVideos = () => {
	const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;
	return getCommonVideos(url);
};
