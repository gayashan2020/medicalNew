import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: '2010',
      sales: 38,
    },
    {
      type: '2011',
      sales: 52,
    },
    {
      type: '2012',
      sales: 61,
    },
    {
      type: '2013',
      sales: 145,
    },
    {
      type: '2014',
      sales: 48,
    },
    {
      type: '2015',
      sales: 38,
    },
    {
      type: '2016',
      sales: 38,
    },
    {
      type: '2017',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'a',
      },
      sales: {
        alias: 'b',
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
