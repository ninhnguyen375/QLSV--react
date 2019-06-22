import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './main.css';

const { Header, Content, Footer, Sider } = Layout;

class Main extends Component {
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Link to="/">
            <div className="logo">STUDENT MANAGER</div>
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                <span className="nav-text">Students</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/classview">
                <Icon type="video-camera" />
                <span className="nav-text">Class</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/report">
                <Icon type="upload" />
                <span className="nav-text">Report</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <Icon type="user" /> */}
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>STUDENT MANAGER ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
