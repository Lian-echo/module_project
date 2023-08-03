import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout } from "antd";
import { connect } from "dva";

const { Content } = Layout;
const content: React.FC<any> = (props) => {
  const [labelList, setLabelList] = useState([]);
  useEffect(() => {
    if (props.labelList.length) {
      setLabelList(props.labelList);
    } else {
      setLabelList(props.breadcrumb.breadList);
    }
  }, [props.labelList]);
  return (
    <Content style={{ margin: "25px 32px" }}>
      <Breadcrumb
        style={{ margin: "0 0 25px 0" }}
        items={labelList?.map((item) => {
          return {
            title: item,
          };
        })}
      ></Breadcrumb>

      <div style={{ padding: 24, minHeight: 360 }}>{props.children}</div>
    </Content>
  );
};

// export default content;
export default connect(({ breadcrumb }) => ({ breadcrumb }))(content);
