import React, { Component } from 'react';
import { DatePicker, message } from 'antd'
import moment from 'moment';
import { Button,
   Icon, 
   Menu, 
   Dropdown, 
   Pagination, 
   Steps, 
   Table, 
   Tag, 
   Divider, 
   Tabs,
   Form,
   Input
  } from 'antd';
import LoginForm from './form'
import CanvasCircl from './canvas'
import Example from './Hooks'
import Counter from './Counter'
import SnapshotSample from './snapshotExample'
import EchartDemo from './echarts'
import EchartFirstEmpty from './echarts/empty'


const { Step } = Steps;
export default class App extends React.Component {
  state = {
    date: null,
    tabIndex: 2,
    showExample: true,
    initCount: 10
  };

  handleChange = date => {
    message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
    this.setState({ date });
  };
  handleTabChange = (tab) => {
    this.setState({
      tabIndex: tab
    })
  }
  render() {
    const { date } = this.state;
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" href="http://www.baidu.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" href="http://www.baidu.com">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" href="http://www.baidu.com">1st menu item</a>
        </Menu.Item>
      </Menu>
    );
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        tags: ['loser'],
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: "Tags",
        key: 'tags',
        dataIndex: "tags",
        render: tags => (
          <span>
            {
              tags.map(tag => {
                let color = tag.length > 5 ? 'greekblue': 'green';
                if (tag === 'loser') {
                  color = 'volcano'
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })
            }
          </span>
        )
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          return (
            <span>
              <a href="javascript:;">Invite {record.name}</a>
              <Divider type="vertical" />
              <a href="javascript:;">Delete</a>
            </span>
          )
        },
      },
    ];
    return (
        <div style={{margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} placeholder="测试"/>
          <div style={{ marginTop: 20 }}>
            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
          </div>
          <Button icon="search" type="primary" onClick={() => this.setState(prevState => ({showExample: !prevState.showExample}))}>default</Button>
          <Icon type="home" theme="filled" spin></Icon>
          <Dropdown overlay={menu}>
            <a>
              Hover me <Icon type="down"></Icon>
            </a>
          </Dropdown>

          <Pagination total={50} defaultCurrent={5}></Pagination>
          <Steps direction="vertical" current={1}>
            <Step title="Finished" icon="search" description="this is a description"></Step>
            <Step titie="In Progeress" icon="home" description="This is a description"></Step>
            <Step title="Waiting" description="This is a Desction"></Step>
          </Steps>
          <Table dataSource={dataSource} columns={columns}></Table>
            <Tabs activeKey={String(this.state.tabIndex)} onChange={this.handleTabChange}>
            <Tabs.TabPane tab={0} key={0} >0</Tabs.TabPane>
            <Tabs.TabPane tab={1} key={1}>1</Tabs.TabPane>
            <Tabs.TabPane tab={2} key={2}>2</Tabs.TabPane>
          </Tabs>
          <LoginForm></LoginForm>
          <Input
            value=""
            placeholder="请输入"
          />
          {/* {this.state.showExample && <Example />} */}
          <Counter   initCount={this.state.initCount}/>
          <Button onClick={() => this.setState(prevState => ({initCount: prevState.initCount + 10}))}>改变count</Button>
          <SnapshotSample />
          <EchartDemo />
          <EchartFirstEmpty />
          <CanvasCircl />
        </div>
    );
  }
}