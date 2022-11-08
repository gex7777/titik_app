import axios from "axios";
interface Iprops {
  videos: string;
}
export default function Home({ videos }: Iprops) {
  return <div className="font-extrabold  text-9xl">hello world.</div>;
}
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  console.log(data);
  return {
    props: { videos: data },
  };
};
