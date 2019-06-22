import React from 'react';
import ReactExport from 'react-data-export';
import { Button, Icon } from 'antd';
import Main from '../../layouts/Main';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class ExportTableStudentToExcel extends React.Component {
  render() {
    const { dataSource } = this.props;
    return (
      <Main>
        <ExcelFile
          element={
            <Button type="primary">
              <Icon type="export" />
              Export To Excel
            </Button>
          }
        >
          <ExcelSheet data={dataSource} name="Employees">
            <ExcelColumn label="id" value="id" />
            <ExcelColumn label="fname" value="fname" />
            <ExcelColumn
              label="school_class_id"
              value={col => (col.school_class ? col.school_class.id : '')}
            />
            <ExcelColumn
              label="school_class_name"
              value={col => (col.school_class ? col.school_class.name : '')}
            />
            <ExcelColumn label="lname" value="lname" />
            <ExcelColumn
              label="math"
              value={col => (col.scores ? col.scores.math : '')}
            />
            <ExcelColumn
              label="physical"
              value={col => (col.scores ? col.scores.physical : '')}
            />
            <ExcelColumn
              label="chemistry"
              value={col => (col.scores ? col.scores.chemistry : '')}
            />
          </ExcelSheet>
        </ExcelFile>
      </Main>
    );
  }
}
