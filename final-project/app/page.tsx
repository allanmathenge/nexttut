import MyProfilePic from "./components/MyProfilePic";
import Posts from "./components/Posts";

export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white font-bold">
        Hello👋, I am Allan Mathenge
      </p>
      <Posts />
    </div>
  );
}
