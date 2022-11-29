import {
  IconComment,
  IconEmoji,
  IconHeart,
  IconMore,
  IconSaved,
  IconShare,
} from "../icons";
import { IconApp } from "../icon_app";
import UserAvatarStory from "../user_avatar_story";

export default function PostItem(): JSX.Element {
  return (
    <div className="bg-white mt-4 rounded-lg border-[1px]">
      {/* Header */}
      <div className="flex flex-row my-2 items-center pl-3">
        <UserAvatarStory
          url="https://randomuser.me/api/portraits/men/32.jpg"
          size={44}
          haveSeenBefore={false}
        />
        <div className="flex flex-col grow mx-2">
          <p className="text-sm font-semibold">username</p>
          <p className="text-sm">subtitle</p>
        </div>
        <IconApp icon={<IconMore />} onClick={() => console.log("")} />
      </div>
      {/* Media */}
      <img
        draggable={false}
        className="max-h-[30rem] w-full"
        src="https://images.unsplash.com/photo-1666245035270-42b01a0532f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80"
        alt=""
      />

      {/* List Icons */}
      <div className="flex flex-row m-1">
        <IconApp icon={<IconHeart />} onClick={() => console.log("")} />
        <IconApp icon={<IconComment />} onClick={() => console.log("")} />
        <IconApp icon={<IconShare />} onClick={() => console.log("")} />
        <div className="grow ">
          <IconApp
            icon={<IconSaved />}
            className="float-right"
            onClick={() => console.log("")}
          />
        </div>
      </div>

      {/* Total Likes 
        1: Liked (Current User)
        2: Not yet
      */}
      <div>
        <p className="text-sm ml-3">
          Like by <span className="font-semibold">brunode</span> and{" "}
          <span className="font-semibold">1234 others</span>
        </p>
      </div>

      {/* Description */}
      <div className="mx-3 my-2">
        <p className="text-sm">
          <span className="font-semibold">brunode</span> abcxyz
        </p>
      </div>

      {/* Total comments */}
      <div className="mx-3 my-2">
        <p className="text-sm font-medium text-secondary-text">
          View all 1234 comments
        </p>
      </div>

      {/* created time */}
      <div className="mx-3 my-2 text-secondary-text text-[10px]">3 HOURS AGO</div>

      <div className="flex flex-row items-center border-t-[1px] border-t-post-separator mx-1 py-2">
        <IconApp icon={<IconEmoji />} onClick={() => {}} />
        <div className="grow">
          <input 
            type="text"
            placeholder="Add a comment..."
            className="w-full pl-1 pr-5 h-5 focus:outline-none focus:border-transparent"
          />
        </div>
        <button
          className="mr-3 text-primary-button font-semibold"
        >
          Post
        </button>
      </div>
    </div>
  );
}
