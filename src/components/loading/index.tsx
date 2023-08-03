import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
  return (
    <>
      <h3
        style={{
          width: "100%",
          height: "100%",
          color: "lightgrey",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "100vh",
          fontSize: "28px",
        }}
      >
        <span>古韵东山管理后台</span>
        <Spin
          indicator={antIcon}
          style={{ color: "lightgrey", marginLeft: 10 }}
        />
      </h3>
    </>
  );
};

export default Loading;
