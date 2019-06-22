import React, { Component } from 'react';
import Main from '../layouts/Main';
import { Button, Divider } from 'antd';
import { Modal, Icon } from 'antd';
import ImportFromExel from '../components/Formbase/ImportFromExel';
import AddClassForm from '../components/Formbase/AddClassForm';

class ClassView extends Component {
  state = {
    isAddClassFormOpen: false,
    isEditClassFormOpen: false,
  };

  toggleBoolean = stateKey => {
    this.setState({ [stateKey]: !this.state[stateKey] });
  };

  render() {
    const { isAddClassFormOpen } = this.state;
    return (
      <Main>
        <h1 style={{ fontSize: '2em', color: 'gray' }}>Class Manager</h1>
        <Divider />
        <Button
          type="primary"
          onClick={() => this.toggleBoolean('isAddClassFormOpen')}
        >
          <Icon type="plus-circle" theme="filled" /> ADD NEW CLASS
        </Button>
        <Divider type="vertical" />
        {/* Add student */}
        <Modal
          title="ADD CLASS"
          visible={isAddClassFormOpen}
          onCancel={() => this.toggleBoolean('isAddClassFormOpen')}
          footer={null}
          style={{ top: 10 }}
        >
          <AddClassForm />
        </Modal>{' '}
        {/* Import from excel */}
        <ImportFromExel />
      </Main>
    );
  }
}

export default ClassView;
