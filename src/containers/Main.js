import React, { Component } from 'react';
import { connect } from 'react-redux';

// 引入组件
import TabWrap from './TabWrap';
import Weather from './Weather';

// import { DatePicker } from 'antd';

import './Main.css'
@connect()
export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Weather />
        <TabWrap type="search" />
        <TabWrap type="nav" />
      </div>
    );
  }
}
