import React from "react";
import { Col } from "antd";
import styles from "./style.less";

export interface DescriptionsProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: React.ReactNode;
  required?: boolean;
}
const Descriptions: React.FC<DescriptionsProps> = (props) => {
  const { className, style, children, label, required } = props;
  return (
    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
      <div
        className={`${styles.descriptions} ${className}`}
        style={{ ...style }}
      >
        <div className={styles.label}>
          {required && <span className={styles.require}>*</span>}
          {label}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Col>
  );
};

export default Descriptions;
