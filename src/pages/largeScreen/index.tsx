import RScaleScreen from "r-scale-screen";
import styles from "./style.less";

const LargeScreen = () => {
  return (
    <div className={styles.screenBox}>
      <RScaleScreen height={1080} width={1920}>
          <div className={styles.contentBox}>888</div>
      </RScaleScreen>
    </div>
  );
};

export default LargeScreen;
