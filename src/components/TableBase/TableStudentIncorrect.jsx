import React, { Component } from "react";
import { Table, Button } from "antd";
import uuid from "uuid";
const columns = [
  {
    title: "Mã sinh viên",
    dataIndex: "id"
  },
  {
    title: "Chức năng",
    render: (text, record) => {
      return <Button>Override</Button>;
    }
  }
];
export default class TableStudentIncorrect extends Component {
  render() {
    const { dataSource } = this.props;
    return (
      <Table
        rowKey={u => (u.id ? u.id : uuid.v4())}
        dataSource={dataSource}
        columns={columns}
      />
    );
  }
}
