import { currentUser } from "../../common/data/current_user";
import {
  IconCreate,
  IconCreateActive,
  IconExplore,
  IconExploreActive,
  IconHome,
  IconHomeActive,
  IconMenu,
  IconMenuActive,
  IconMessages,
  IconMessagesActive,
  IconNofication,
  IconNoficationActive,
  IconSearch,
  IconSearchActive,
} from "../../components/icons";
import { InstagramLogo } from "../../components/images";
import { MenuAvatar } from "../../components/menu_avatar";
import NavItem from "../../components/nav_item";
import styles from "./styles.module.css";

export default function SideBar({
  tabActive,
  onClickTab,
}: {
  tabActive: string;
  onClickTab: (s: string) => void;
}): JSX.Element {
  const userAvatar = currentUser.avatar;

  return (
    <div className={`${styles.sidebar}`}>
      <div className={`cursor-pointer mb-2 mt-5 px-3 pt-5 pb-4`}>
        <InstagramLogo />
      </div>
      <div className={`grow`}>
        <NavItem
          icon={<IconHome />}
          activeIcon={<IconHomeActive />}
          title="Home"
          isActive={tabActive === ""}
          onClick={() => onClickTab("")}
        />
        <NavItem
          icon={<IconSearch />}
          activeIcon={<IconSearchActive />}
          title="Search"
          isActive={tabActive === "search"}
          onClick={() => onClickTab("search")}
        />
        <NavItem
          icon={<IconExplore />}
          activeIcon={<IconExploreActive />}
          isActive={tabActive === "explore"}
          title={"Explore"}
          onClick={() => onClickTab("explore")}
        />
        <NavItem
          icon={<IconMessages />}
          activeIcon={<IconMessagesActive />}
          isActive={tabActive === "messages"}
          title={"Messages"}
          onClick={() => onClickTab("messages")}
        />
        <div className={`${styles.hide_on_mobile}`}>
          <NavItem
            icon={<IconNofication />}
            activeIcon={<IconNoficationActive />}
            isActive={tabActive === "notifications"}
            title={"Notifications"}
            onClick={() => onClickTab("notifications")}
          />
        </div>
        <NavItem
          icon={<IconCreate />}
          activeIcon={<IconCreateActive />}
          isActive={tabActive === "creates"}
          title={"Creates"}
          onClick={() => onClickTab("creates")}
        />
        <NavItem
          icon={<MenuAvatar url={userAvatar} isActive={false} />}
          activeIcon={<MenuAvatar url={userAvatar} isActive={true} />}
          isActive={tabActive === "profile"}
          title={"Profile"}
          onClick={() => onClickTab("profile")}
        />
      </div>
      <div className={`mb-6`}>
        <NavItem
          icon={<IconMenu />}
          activeIcon={<IconMenuActive />}
          isActive={false}
          title={"More"}
          onClick={() => console.log("")}
        />
      </div>
    </div>
  );
}
