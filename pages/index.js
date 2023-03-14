import Banner from "@/components/banner/banner";
import Cards from "@/components/cards/cards";
import { getPopularVideos, getVideos } from "@/lib/videos";
import Seo from "@/components/seo/seo";

export default function Home({
	videoBanner,
	videosDisney,
	videosSeries,
	videosAction,
	videosPopular,
}) {
	return (
		<>
			<Seo />
			{videoBanner[0] && (
				<Banner
					title={videoBanner[0].title}
					subTitle="Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities."
					imgUrl={videoBanner[0].imgUrl}
				/>
			)}
			<div className="cards-wrapper">
				{videosDisney.length > 0 && (
					<Cards videos={videosDisney} size="large" title="Disney" />
				)}
				{videosSeries.length > 0 && (
					<Cards videos={videosSeries} title="Series" />
				)}
				{videosAction.length > 0 && (
					<Cards videos={videosAction} size="small" title="Action" />
				)}
				{videosPopular.length > 0 && (
					<Cards videos={videosPopular} title="Popular" />
				)}
			</div>
		</>
	);
}

export const getServerSideProps = async () => {
	const videoBanner = await getVideos("Avengers%20Movie");
	const videosDisney = await getVideos("Disney%20Trailer");
	const videosSeries = await getVideos("Series%20Trailer");
	const videosAction = await getVideos("Action%20Trailer");
	const videosPopular = await getPopularVideos();

	return {
		props: {
			videoBanner,
			videosDisney,
			videosSeries,
			videosAction,
			videosPopular,
		},
	};
};
