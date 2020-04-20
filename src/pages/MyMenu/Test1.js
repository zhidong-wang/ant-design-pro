import React, { PureComponent } from 'react';
import { Button, Card, Radio, Icon, Menu, Dropdown } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class Test1 extends PureComponent {
  state = {
    size: 'large',
  };
  handleSizeChange = e => {
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    const { size } = this.state;
    const menu = (
      <Menu
        onClick={e => {
          console.log(e);
        }}
      >
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <PageHeaderWrapper title="测试一" type="">
        <Card bordered={false}>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">large</Radio.Button>
            <Radio.Button value="default">default</Radio.Button>
            <Radio.Button value="small">small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <Button type="primary" size={size}>
            确定
          </Button>
          <Button type="danger" size={size}>
            删除
          </Button>
          <Button type="default" size={size} icon="search">
            查询
          </Button>
          <Button type="primary" size={size} shape="circle">
            确定
          </Button>
          <Button type="primary" size={size}>
            确定
          </Button>
          <br />
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
            <br />
            <br />
            <Dropdown overlay={menu}>
              <Button>
                Actions <Icon type="down" />
              </Button>
            </Dropdown>
          </Button.Group>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Test1;
