import React, { Component } from 'react';
import Main from '../layouts/Main';
import { Button, Divider } from 'antd';
import { Modal, Icon } from 'antd';
import AddStudentForm from '../components/Formbase/AddStudentForm';
import ImportFromExel from '../components/Formbase/ImportFromExel';
import EditStudentForm from '../components/Formbase/EditStudentForm';
import TableStudent from '../components/TableBase/TableStudent';
import Axios from 'axios';

class Student extends Component {
  state = {
    isAddStudentFormOpen: false,
    isEditStudentFormOpen: false,
    dataSource: [],
  };

  toggleBoolean = stateKey => {
    this.setState({ [stateKey]: !this.state[stateKey] });
  };

  async componentDidMount() {
    const res = await Axios.get('/student');
    this.setState({ ...this.state, dataSource: res.data });
  }

  render() {
    const { isAddStudentFormOpen, isEditStudentFormOpen } = this.state;
    return (
      <Main>
        <h1 style={{ fontSize: '2em', color: 'gray' }}>Student Manager</h1>
        <Divider />
        <Button
          type="primary"
          onClick={() => this.toggleBoolean('isAddStudentFormOpen')}
        >
          <Icon type="plus-circle" theme="filled" /> ADD NEW STUDENT
        </Button>
        <Divider type="vertical" />
        {/* Add student */}
        <Modal
          title="ADD STUDENT"
          visible={isAddStudentFormOpen}
          onCancel={() => this.toggleBoolean('isAddStudentFormOpen')}
          footer={null}
          style={{ top: 10 }}
        >
          <AddStudentForm />
        </Modal>
        {/* Import from excel */}
        <ImportFromExel />
        {/* Edit student */}
        <Modal
          title="EDIT STUDENT"
          visible={isEditStudentFormOpen}
          onCancel={() => this.toggleBoolean('isEditStudentFormOpen')}
          footer={null}
          style={{ top: 10 }}
        >
          <EditStudentForm id="3117410207" />
        </Modal>
        {/* Table Student */}
        <Divider />
        {this.state.dataSource && this.state.dataSource[0] && (
          <TableStudent
            toggleEdit={() => this.toggleBoolean('isEditStudentFormOpen')}
            dataSource={this.state.dataSource}
          />
        )}
      </Main>
    );
  }
}

export default Student;
