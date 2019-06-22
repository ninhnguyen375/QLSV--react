import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Row, Col } from 'antd';
import code from '../code/code';
import TableStudentIncorrect from '../components/TableBase/TableStudentIncorrect';
import ExportTableStudentToExcel from '../components/TableBase/ExportTableStudentToExcel';
import TableStudent from '../components/TableBase/TableStudent';

export default class ImportFromExcel extends Component {
  state = {
    dataSource: [],
    dataSourceIncorrect: [],
    file: null,
  };
  handleClick = async e => {
    let form = new FormData();
    form.append('sv_file', this.state.file);
    let option = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    //lấy dữ liệu api về
    let res = await Axios.post('http://localhost:5000/upload', form, option);
    // dataSource chỉnh sửa lại api cho phù hợp lấy những thằng phù hợp hiện lên table
    let dataSource = code.convertToMyObject(
      code.checkUniqueArr(res.data).correctArr,
    );
    let dataSourceIncorrect = code.convertToMyObject(
      code.checkUniqueArr(res.data).incorrectArr,
    );
    this.setState({
      dataSource,
      dataSourceIncorrect,
    });
  };
  handleChange = e => {
    this.setState({
      file: e.target.files[0],
    });
  };
  render() {
    const { dataSource, dataSourceIncorrect } = this.state;
    return (
      <div>
        <Row>
          <Col sm={24}>
            <form id="form">
              <input name="file" onChange={this.handleChange} type="file" />
              <Button type="ghost" onClick={this.handleClick}>
                Import Excel
              </Button>
            </form>
            <ExportTableStudentToExcel dataSource={dataSource} />
          </Col>
        </Row>
        <Row>
          <Col sm={24} lg={12}>
            <TableStudent dataSource={dataSource} />
          </Col>
          <Col sm={24} lg={12}>
            <TableStudentIncorrect dataSource={dataSourceIncorrect} />
          </Col>
        </Row>
      </div>
    );
  }
  // async componentDidMount() {
  //   let data = await Axios({
  //     url: "http://localhost:5050/student",
  //     method: "GET"
  //   });
  //   this.setState({
  //     dataSource: data.data
  //   });
  // }
}
