import React from "react";
import styles from "./style.less";
import { history } from "umi";

const header: React.FC<any> = () => {
  return (
    <div className={styles.headers} style={{ padding: "0 20px" }}>
      <div
        className={styles.headerL}
        onClick={() => {
          // history.push("/largeScreen");
          window.open("/largeScreen");
        }}
      >
        大屏
      </div>
      <div className={styles.headerR}>
        <img alt="headerImg" src={require("@/assets/c.png")} />
      </div>
    </div>
  );
};

export default header;
