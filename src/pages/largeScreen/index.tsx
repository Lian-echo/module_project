import React, { useState } from 'react';
import RScaleScreen from 'r-scale-screen';
import styles from './style.less';

const LargeScreen = () => {
  const [statusList3] = useState<any[]>([
    {
      label: '待审核',
      value: 0,
    },
    {
      label: '未通过',
      value: 2,
    },
    {
      label: '已通过',
      value: 1,
    },
  ]);

  const add = () => {
    const a = 'aaa';
    const b = '';
    const c = 'bbb';
    // prettier-ignore
    const d = c === 'bbb' ? 1 : (b || a);
    console.log(d);
  };

  return (
    <div className={styles.screenBox}>
      <RScaleScreen height={1080} width={1920}>
        <div className={styles.contentBox}>888</div>
      </RScaleScreen>
    </div>
  );
};

export default LargeScreen;
