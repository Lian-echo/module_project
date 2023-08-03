import { useState, useRef } from "react";
import { ProTable } from "@ant-design/pro-components";
import { Input, Select, Button, Tag, Row, Space } from "antd";
import "../style.less";
import Descriptions from "@/components/descriptions/index";

const Village = () => {
  const actionRef = useRef<any>();
  const boxList1 = [
    { name: "已注册农户数", num: 0 },
    { name: "农户总数", num: 864 },
    { name: "覆盖率", num: "0%" },
  ];
  const boxList2 = [
    { name: "已注册农户数", num: 1 },
    { name: "农户总数", num: 864 },
    { name: "覆盖率", num: "0%" },
  ];

  const statusList = [
    { value: 1, label: "待审核" },
    { value: 2, label: "通过" },
  ];

  const option1 = () => (
    <Space>
      <a
        onClick={() => {
          setDataSource(dataSource2);
          setBoxList(boxList2);
        }}
      >
        通过
      </a>
      <span style={{ color: "red" }}>不通过</span>
    </Space>
  );

  const option2 = () => (
    <Space>
      <a>编辑</a>
      <span style={{ color: "red" }}>注销</span>
    </Space>
  );

  const dataSource1 = [
    {
      name: "胡蓉",
      phone: "19913211234",
      address: "萧山区大溪路26号",
      status: 1,
      time: "2023-6-22 13:22",
      option: option1(),
    },
  ];

  const dataSource2 = [
    {
      name: "胡蓉",
      phone: "19913211234",
      address: "萧山区大溪路26号",
      status: 2,
      time: "2023-6-22 13:22",
      option: option2(),
    },
  ];

  const columns: any = [
    {
      title: "村户姓名",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "手机号",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "地址",
      dataIndex: "address",
      align: "center",
    },
    {
      title: "审核状态",
      dataIndex: "status",
      align: "center",
      render: (text: any) => (
        <Tag color={text === 1 ? "error" : "success"}>
          {statusList[text - 1]?.label}
        </Tag>
      ),
    },
    {
      title: "注册时间",
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
  const [dataSource, setDataSource] = useState(dataSource1);
  const [boxList, setBoxList] = useState(boxList1);

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
        <Descriptions label="审核状态">
          <Select placeholder="请选择" allowClear options={statusList} />
        </Descriptions>
        <Descriptions label="注册时间">
          <Input allowClear placeholder="请输入" />
        </Descriptions>
        <Descriptions label="村户姓名">
          <Input allowClear placeholder="请输入" />
        </Descriptions>
      </Row>
      <div className="buttonsBox">
        <Space>
          <Button type="primary">下载导入模板</Button>
          <Button type="primary">导入村户信息</Button>
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
    </div>
  );
};

export default Village;
