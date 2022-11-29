import PostItem from "../../components/post_item";
import UserStories from "../../components/user_stories";
import styles from "./styles.module.css";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex flex-row justify-center">
      <div className={`${styles.container_feed}`}>
        {/* List Stories */}
        <UserStories />

        <PostItem />
      </div>
      <div className={`${styles.suggestions}`}>Div Right</div>
    </div>
  );
}
