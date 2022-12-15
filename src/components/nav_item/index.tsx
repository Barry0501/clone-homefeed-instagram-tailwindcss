import styles from "./styles.module.css";

export default function NavItem({
  icon,
  activeIcon,
  isActive,
  title,
  onClick,
}: {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  title: string;
  isActive: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <div className={`${styles.nav_item}`} onClick={onClick}>
      {isActive ? activeIcon : icon}
      <p
        className={`${styles.nav_title} text-base pl-4`}
        style={{ fontWeight: isActive ? "600" : "normal" }}
      >
        {title}
      </p>
    </div>
  );
}
