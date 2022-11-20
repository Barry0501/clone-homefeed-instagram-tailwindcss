import { IconHome, IconHomeActive, IconSearch, IconSearchActive } from "../../components/icons";
import { InstagramLogo } from "../../components/images";
import NavItem from "../../components/nav_item";
import styles from "./styles.module.css";

export default function SideBar(): JSX.Element {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`cursor-pointer mb-2 mt-5 px-3 pt-5 pb-4`}>
        <InstagramLogo />
      </div>
      <NavItem
        icon={<IconHome />}
        activeIcon={<IconHomeActive />}
        title='Home'
        isActive={true}
        onClick={() => console.log('Home Tab')}
      />
      <NavItem
        icon={<IconSearch />}
        activeIcon={<IconSearchActive />}
        title='Search'
        isActive={false}
        onClick={() => console.log('Search Tab')}
      />
    </div>
  );
}
