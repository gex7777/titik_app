import axios from "axios";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";
interface Iprops {
  videos: Video[];
}
export default function Home({ videos }: Iprops) {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text="no videos" />
      )}
    </div>
  );
}
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  console.log(data);
  return {
    props: { videos: data },
  };
};
