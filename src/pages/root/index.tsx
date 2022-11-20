import SideBar from "../../layout/sidebar";
import styles from "./styles.module.css";

export default function RootPage() : JSX.Element {
    return (
        <div className={`${styles.layout}`}>
            <SideBar />
        </div>
    );
}