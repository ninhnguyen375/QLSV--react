import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import Axios from 'axios';

class EditClassForm extends Component {
  state = {
    lop: {},
  };
  handleEdit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (err) {
        console.log(err);
        return;
      }

      Axios.put(`/lop/${this.state.id}`, value.name).then(res => {
        console.log(res);
      });
    });
  };

  async componentDidMount() {
    const resLop = await Axios.get(`/lop/${this.props.id}`);
    this.props.form.setFieldsValue({
      name: resLop.data.name,
    });
    this.setState({ lop: resLop.data });
  }
  render() {
    const { form } = this.props;
    return (
      <div className="form">
        {true ? (
          <Row type="flex" justify="center">
            <Col>
              <Form onSubmit={this.handleEdit} layout="vertical">
                {/* name */}
                <Form.Item label="Class Name">
                  {form.getFieldDecorator('name', {
                    rules: [
                      { required: true, message: 'Please input this field!' },
                    ],
                  })(<Input />)}
                </Form.Item>

                <Button htmlType="submit" type="primary">
                  Edit
                </Button>
              </Form>
            </Col>
          </Row>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

EditClassForm.propTypes = {};

export default Form.create({ name: 'edit-class-form' })(EditClassForm);
