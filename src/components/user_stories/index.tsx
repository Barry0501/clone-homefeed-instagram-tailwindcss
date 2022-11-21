import { listStories } from "../../common/data/list_stories";
import UserAvatarStory from "../user_avatar_story";
import styles from "./styles.module.css";

export default function UserStories(): JSX.Element {
  return (
    <div className="mt-6 bg-white border-[1px] rounded-lg whitespace-nowrap overflow-x-hidden">
      {listStories.map((e, index) => {
        return (
          <div className="py-4 px-[6px] first:pl-3 last:pr-6 cursor-pointer inline-block" key={e.id}>
            <div className="flex flex-col justify-center items-center">
              <UserAvatarStory
                url={e.avatar}
                size={56}
                haveSeenBefore={e.haveSeenBefore}
              />
              <p className="text-ellipsis	overflow-hidden max-w-[74px] text-xs pt-[6px] px-[2px]"
                style={{color: e.haveSeenBefore ? 'grey' : 'black'}}
              >
                {e.userName.replace("#","").trimStart()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
