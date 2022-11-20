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
  isActive: boolean;
  title: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <div className={`${styles.nav_item}`} onClick={onClick}>
      {isActive ? activeIcon : icon}
      <p
        className={`text-base pl-4`}
        style={{ fontWeight: isActive ? "600" : "normal" }}
      >
        {title}
      </p>
    </div>
  );
}
