import React, { Component } from 'react';
import Axios from 'axios';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class TableStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      conlumns: [
        {
          title: 'Student ID',
          dataIndex: 'id',
        },
        {
          title: 'First Name',
          dataIndex: 'fname',
        },
        {
          title: 'Last Name',
          dataIndex: 'lname',
        },
        {
          title: 'Class',
          dataIndex: 'SchoolClass.name',
        },
        // {
        //   title: 'Toán',
        //   dataIndex: 'scores.math',
        // },
        // {
        //   title: 'Lý',
        //   dataIndex: 'scores.physical',
        // },
        // {
        //   title: 'Hóa',
        //   dataIndex: 'scores.chemistry',
        // },
        // {
        //   align: 'center',
        //   title: 'Điểm trung bình',
        //   render: (text, record) => {
        //     return (
        //       <p>
        //         {Math.floor(
        //           (record.scores.math +
        //             record.scores.physical +
        //             record.scores.chemistry) /
        //             3,
        //         )}
        //       </p>
        //     );
        //   },
        // },
        {
          title: 'Chức năng',
          render: (text, record) => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => this.handleDelete(record.id)}
                style={{ marginRight: '10px' }}
                // size={'large'}
                type="danger"
              >
                Remove
              </Button>
              <Button
                onClick={this.props.toggleEdit}
                // size={'large'}
                type="primary"
              >
                Edit
              </Button>
            </div>
          ),
        },
      ],
    };
  }
  handleDelete = async id => {
    console.log(id);
    let data = await Axios({
      url: `http://localhost:5050/student?id=${id}`, // http://localhost:5050/student/:id,
      method: 'DELETE',
    });
    console.log(data);
  };
  render() {
    const { conlumns } = this.state;
    const { dataSource } = this.props;
    return (
      <div>
        <Table
          bordered={true}
          rowKey={u => u.id}
          columns={conlumns}
          dataSource={dataSource}
        />
      </div>
    );
  }
}
