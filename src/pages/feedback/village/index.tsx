import { useState, useRef } from "react";
import { ProTable } from "@ant-design/pro-components";
import { Input, Select, Button, Tag, Row, Space, Modal } from "antd";
import "../../personManagement/style.less";
import Descriptions from "@/components/descriptions/index";
import modal2 from "@/assets/modal2.png";

const Village = () => {
  const actionRef = useRef<any>();
  const boxList1 = [
    { name: "村户反馈总数", num: 1 },
    { name: "已解决", num: 0 },
    { name: "未解决", num: 1 },
  ];

  const boxList2 = [
    { name: "村户反馈总数", num: 1 },
    { name: "已解决", num: 1 },
    { name: "未解决", num: 0 },
  ];

  const statusList = [
    { value: 1, label: "村户反馈总数" },
    { value: 2, label: "已解决" },
    { value: 3, label: "未解决" },
  ];

  const option1 = () => (
    <Space>
      <a
        onClick={() => {
          setIsDetail(true);
        }}
      >
        详情
      </a>
      <a
        onClick={() => {
          setDataSource(dataSource2);
          setBoxList(boxList2);
        }}
      >
        问题已解决
      </a>
    </Space>
  );

  const option2 = () => (
    <Space>
      <a>详情</a>
    </Space>
  );

  const dataSource1 = [
    {
      name: "商品质量问题",
      phone: "浩楠鹿公园",
      address: "游乐园运营中心",
      content: "购买的农产品不新鲜，我要退款",
      status: 3,
      time: "2023-6-22 13:22",
      option: option1(),
    },
  ];

  const dataSource2 = [
    {
      name: "商品质量问题",
      phone: "浩楠鹿公园",
      address: "游乐园运营中心",
      content: "购买的农产品不新鲜，我要退款",
      status: 2,
      time: "2023-6-22 13:22",
      option: option2(),
    },
  ];

  const columns: any = [
    {
      title: "反馈类别",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "反馈经营主体",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "所属运营中心",
      dataIndex: "address",
      align: "center",
    },
    {
      title: "反馈内容",
      dataIndex: "content",
      align: "center",
    },
    {
      title: "处理状态",
      dataIndex: "status",
      align: "center",
      render: (text: any) => (
        <Tag color={text === 3 ? "error" : "success"}>
          {statusList[text - 1]?.label}
        </Tag>
      ),
    },
    {
      title: "反馈时间",
      dataIndex: "time",
      align: "center",
    },
    {
      title: "操作",
      width: 196,
      align: "center",
      fixed: "right",
      dataIndex: "option",
    },
  ];
  const [dataSource, setDataSource] = useState<any>(dataSource1);
  const [boxList, setBoxList] = useState(boxList1);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="pageContainer">
      <div className="pageHeadBox">
        {boxList?.map((item) => (
          <div key={item?.name} className="itemBox">
            <span>{item.name}</span>
            <span>{item.num}</span>
          </div>
        ))}
      </div>

      <Row gutter={8}>
        <Descriptions label="反馈类别">
          <Select placeholder="请选择" allowClear options={statusList} />
        </Descriptions>
        <Descriptions label="反馈时间">
          <Input allowClear placeholder="请输入" />
        </Descriptions>
        <Descriptions label="村户姓名">
          <Input allowClear placeholder="请输入" />
        </Descriptions>
        <Descriptions label="处理状态">
          <Select placeholder="请选择" allowClear options={statusList} />
        </Descriptions>
      </Row>
      <div className="buttonsBox">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              actionRef?.current?.reloadAndRest();
            }}
          >
            搜索
          </Button>
          <Button>重置</Button>
        </Space>
      </div>

      <ProTable
        rowKey="name"
        actionRef={actionRef}
        columns={columns}
        dataSource={dataSource}
        search={false}
        options={false}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
      />

      <Modal
        centered
        footer={null}
        onCancel={() => {
          setIsDetail(false);
        }}
        forceRender
        title="村户反馈"
        open={isDetail}
      >
        <img style={{ width: "100%", height: "100%" }} src={modal2}></img>
      </Modal>
    </div>
  );
};

export default Village;
