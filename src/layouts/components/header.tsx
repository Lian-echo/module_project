import React from "react";
import styles from "./style.less";
const header: React.FC<any> = () => {
  return (
    <div className={styles.headers} style={{ padding: "0 20px" }}>
      <div></div>
      <div className={styles.headerR}>
        <img alt="headerImg" src={require("@/assets/c.png")}></img>
      </div>
    </div>
  );
};

export default header;
