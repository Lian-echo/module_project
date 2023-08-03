import React, { useState, useEffect } from "react";
import { Link } from "umi";
import * as allIcons from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import type { MenuProps } from "antd";
import styles from "./style.less";
import Icon from "@/assets/c.png";
import { history } from "umi";

const SiderMenu: React.FC<any> = (props) => {
  const menuArr = props?.route?.routes.map((item: any, index: number) => {
    const { icon } = item;
    return (
      !item.hideInMenu && {
        key: index,
        icon:
          typeof icon === "string"
            ? React.createElement(
                allIcons[icon.slice(0, 1).toLocaleUpperCase() + icon.slice(1)]
              )
            : "",
        label: item.path ? <Link to={item.path}>{item.title}</Link> : "",
        children: item.routes
          ? item.routes.map(
              (e: any, i: number) =>
                !e.hideInMenu && {
                  key: e.key,
                  label: <Link to={e.path}>{e.title}</Link>,
                  children: "",
                }
            )
          : "",
      }
    );
  });

  const [items] = useState(menuArr);
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<any>(
    localStorage.getItem("openKeysArr")
      ? JSON.parse(localStorage.openKeysArr)
      : []
  );
  const [selectedKey, setSelectedKey] = useState<any>([]);

  useEffect(() => {
    // 用来处理刷新 选中当前侧边栏标签，以及content组件中点击跳转侧边栏 回显对应的标签
    menuArr.map((item: any, index: number) => {
      if (item?.children) {
        item.children.map((e: any, i: number) => {
          if (e.label?.props?.to === props.location.pathname) {
            // 处理面包屑
            const arrayList = [
              item?.label?.props?.children,
              e.label?.props?.children,
            ];
            props.setLabelList(arrayList);
            localStorage.setItem("labelList", JSON.stringify(arrayList));
            return setSelectedKey([item.key + "", e.key + ""]);
          }
        });
      } else {
        if (item.label?.props?.to === props.location.pathname) {
          // 处理面包屑
          const arrayList = [item?.label?.props?.children];
          props.setLabelList(arrayList);
          return setSelectedKey([item.key + ""]);
        }
      }
    });
  }, [props.location.pathname]);

  // menu 收起内嵌菜单
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys([latestOpenKey]);
    localStorage.setItem("openKeysArr", JSON.stringify([latestOpenKey]));
    if (latestOpenKey) {
      const data = menuArr.find((item: any) => {
        return item.key === Number(latestOpenKey);
      });
      if (data.children.length) {
        history.push(data.children[0].label.props.to);
      }
    }
  };

  const handleTrigger = (value: any) => {
    // 展开-收起时的回调函数，
    setCollapsed(value);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => handleTrigger(value)}
      >
        {collapsed ? (
          <div className={styles.Icon_box}>
            <img className={styles.Icon} src={Icon} alt="" />
          </div>
        ) : (
          <div className={styles.title}>古韵东山管理后台</div>
        )}

        <Menu
          theme="dark"
          mode="inline"
          items={items}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={selectedKey}
        ></Menu>
      </Sider>
    </>
  );
};

export default SiderMenu;
