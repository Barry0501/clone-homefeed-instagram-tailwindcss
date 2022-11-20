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
          isActive={false}
          onClick={() => onClickTab("search")}
        />
        <NavItem
          icon={<IconExplore />}
          activeIcon={<IconExploreActive />}
          isActive={tabActive === 'explore'}
          title={"Explore"}
          onClick={() => onClickTab("explore")}
        />
        <NavItem
          icon={<IconMessages />}
          activeIcon={<IconMessagesActive />}
          isActive={false}
          title={"Messages"}
          onClick={() => console.log("")}
        />
        <div className={`${styles.hide_on_mobile}`}>
          <NavItem
            icon={<IconNofication />}
            activeIcon={<IconNoficationActive />}
            isActive={false}
            title={"Notifications"}
            onClick={() => console.log("")}
          />
        </div>
        <NavItem
          icon={<IconCreate />}
          activeIcon={<IconCreateActive />}
          isActive={false}
          title={"Create"}
          onClick={() => console.log("")}
        />
        <NavItem
          icon={
            <MenuAvatar
              url="https://randomuser.me/api/portraits/men/32.jpg"
              isActive={false}
            />
          }
          activeIcon={
            <MenuAvatar
              url="https://randomuser.me/api/portraits/men/32.jpg"
              isActive={true}
            />
          }
          isActive={tabActive === 'profile'}
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
