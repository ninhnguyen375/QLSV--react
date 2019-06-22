import React from 'react';
import EditStudentForm from '../components/Formbase/EditStudentForm';

export default class EditStudent extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return <EditStudentForm id={this.props.match.params.id} />;
  }
}
