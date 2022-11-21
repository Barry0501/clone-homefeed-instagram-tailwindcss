import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../layout/sidebar";
import styles from "./styles.module.css";

export default function RootPage(): JSX.Element {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState<string>("");

  useEffect(() => {
    handleNavigate(tabActive);
  }, [tabActive]);

  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );

  return (
    <div className={`${styles.layout}`}>
      <SideBar
        tabActive={tabActive}
        onClickTab={setTabActive}
      />
      <div>MainLayout / Content</div>
    </div>
  );
}
