import React, { useState } from "react"
import "./index.less"
import { Layout } from "antd"
import Header from "./components/header"
import SiderMenu from "./components/SiderMenu"
// import Footer from './components/footer';
import Content from "./components/content"

const Index: React.FC = (props: any) => {
  const [labelList, setLabelList] = useState([])

  return (
    <Layout>
      <SiderMenu {...props} setLabelList={setLabelList} />
      <Layout>
        <Header />
        <Content {...props} labelList={labelList} />
      </Layout>
    </Layout>
    // <Layout style={{ minHeight: "100vh" }}>
    //   <Header />
    //   <Layout className="site-layout">
    //     <SiderMenu {...props} setLabelList={setLabelList} />
    //     <Content {...props} labelList={labelList} />
    //   </Layout>
    // </Layout>
  )
}

export default Index
