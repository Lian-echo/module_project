import { useState, useRef } from "react";
import { ProTable } from "@ant-design/pro-components";
import { Input, Select, Button, Tag, Row, Space } from "antd";
import Descriptions from "@/components/descriptions/index";
import "../style.less";

const Operate = () => {
  const actionRef = useRef<any>();

  const boxList1 = [
    { name: "运营中心总数", num: 0 },
    { name: "经营主体总数", num: 0 },
  ];

  const boxList2 = [
    { name: "运营中心总数", num: 1 },
    { name: "经营主体总数", num: 2 },
  ];

  const boxList3 = [
    { name: "运营中心名称：", num: "东山民宿运营中心" },
    { name: "运营中心类型：", num: "民宿" },
    { name: "创建时间：", num: "2020/08/09 12:23" },
    { name: "运营中心负责人：", num: "冯天" },
    { name: "负责人电话：", num: "19945678900" },
  ];

  const statusList = [
    { value: 1, label: "待审核" },
    { value: 2, label: "通过" },
  ];

  const option1 = () => (
    <Space>
      <a
        onClick={() => {
          setDataSource(dataSource3);
          setColumns(columns3);
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
        通过
      </a>
      <span style={{ color: "red" }}>不通过</span>
    </Space>
  );

  const option2 = () => (
    <Space>
      <a
        onClick={() => {
          setDataSource(dataSource2);
        }}
      >
        详情
      </a>
      <a
        onClick={() => {
          setDataSource(dataSource2);
        }}
      >
        编辑
      </a>
      <span style={{ color: "red" }}>注销</span>
    </Space>
  );

  const option3 = () => (
    <Space>
      <a>详情</a>
      <a>编辑</a>
      <a>管理权限</a>
      <span style={{ color: "red" }}>注销</span>
    </Space>
  );

  const dataSource1 = [
    {
      name: "东山民宿运营中心",
      user: "冯天",
      phone: "19913211234",
      type: "民宿",
      gl: "个个屋民宿、玫瑰园民宿",
      address: "萧山区大溪路26号",
      status: 1,
      time: "2023-6-22 13:22",
      option: option1(),
    },
  ];

  const dataSource2 = [
    {
      name: "东山民宿运营中心",
      user: "冯天",
      phone: "19913211234",
      type: "民宿",
      gl: "个个屋民宿、玫瑰园民宿",
      address: "萧山区大溪路26号",
      status: 2,
      time: "2023-6-22 13:22",
      option: option2(),
    },
  ];

  // 详情
  const dataSource3 = [
    {
      name: "个个屋民宿",
      user: "卢静",
      phone: "19913211234",
      type: "民宿",
      // gl: "个个屋民宿、玫瑰园民宿",
      code: "11198678900987652",
      address: "萧山区大溪路34号",
      status: 2,
      time: "2023-6-22 13:22",
      option: option3(),
    },
    {
      name: "玫瑰园民宿",
      user: "徐涛",
      phone: "19913211234",
      code: "11145678933287999",
      type: "民宿",
      // gl: "个个屋民宿、玫瑰园民宿",
      address: "萧山区大溪路45号",
      status: 2,
      time: "2023-6-22 13:22",
      option: option3(),
    },
  ];

  const columns1: any = [
    {
      title: "运营中心名称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "负责人",
      dataIndex: "user",
      align: "center",
    },
    {
      title: "负责人手机号",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "运营中心类型",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "经营主体管理",
      dataIndex: "gl",
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

  const columns3: any = [
    {
      title: "经营主体名称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "经营主体负责人",
      dataIndex: "user",
      align: "center",
    },
    {
      title: "负责人手机号",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "经营主体类型",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "经营主体地址",
      dataIndex: "address",
      align: "center",
    },
    {
      title: "统一社会信用代码",
      dataIndex: "code",
      align: "center",
    },
    {
      title: "创建时间",
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
  const [columns, setColumns] = useState(columns1);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="pageContainer">
      {!isDetail && (
        <div className="pageHeadBox">
          {boxList?.map((item) => (
            <div key={item?.name} className="itemBox">
              <span>{item.name}</span>
              <span>{item.num}</span>
            </div>
          ))}
        </div>
      )}

      {isDetail && (
        <>
          <div className="buttonsBox">
            <Button
              onClick={() => {
                setIsDetail(false);
                setBoxList(boxList1);
                setDataSource(dataSource1);
                setColumns(columns1);
              }}
            >
              返回
            </Button>
          </div>
          <div className="pageHeadBox_detail">
            {boxList3?.map((item) => (
              <div key={item?.name} className="itemBox_detail">
                <span>{item.name}</span>
                <span>{item.num}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <Row gutter={8}>
        <Descriptions label={!isDetail ? "运营中心类型" : "运营主体类型"}>
          <Select placeholder="请选择" allowClear options={statusList} />
        </Descriptions>
        <Descriptions label="注册时间">
          <Input allowClear placeholder="请输入" />
        </Descriptions>
        <Descriptions label={!isDetail ? "运营中心名称" : "运营主体名称"}>
          <Input allowClear placeholder="请输入" />
        </Descriptions>
        <Descriptions label="审核状态">
          <Select placeholder="请选择" allowClear options={statusList} />
        </Descriptions>
      </Row>
      <div className="buttonsBox">
        <Space>
          <Button type="primary">新增经营主体</Button>
          {!isDetail && <Button type="primary">新增运营中心</Button>}
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

export default Operate;
