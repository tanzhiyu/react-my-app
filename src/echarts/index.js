import React, { Component } from 'react';
import * as echarts from 'echarts'
class Demo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.container);
    let myChart = echarts.init(this.container, 'dark')
    // 指定图表的配置项和数据
    let option = {
      backgroundColor: '#2c343c',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      itemStyle: {
        color: 'red',
        // 阴影的大小
        shadowBlur: 200,
        // 阴影水平方向上的偏移
        shadowOffsetX: 0,
        // 阴影垂直方向上的偏移
        shadowOffsetY: 0,
        // 阴影颜色
        shadowColor: 'rgba(0,0,0,0.5)',
        emphasis: {
          shadowBlur: 200,
          shadowColor: 'rgba(111,111,111,1)'
      }
    },
    visualMap: {
      // 不显示 visualMap 组件，只用于明暗度的映射
      show: true,
      // 映射的最小值为 80
      min: 80,
      // 映射的最大值为 600
      max: 400,
      inRange: {
          // 明暗度的范围是 0 到 1
          colorLightness: [0, 1]
      }
  },
    roseType: 'angle',
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius: '60%',
              label: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              },
              labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                emphasis: {
                  color: 'rgba(0,0,0,1)'
                }
            },
              data:[
                  {
                    value:235,
                    name:'视频广告',
                    
                  },
                  {value:274, name:'联盟广告'},
                  {value:310, name:'邮件营销'},
                  {value:335, name:'直接访问'},
                  {
                    value:400,
                    name:'搜索引擎',
                    itemStyle: {
                      color: '#c23531'
                    }
                  }
              ]
          }
      ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  }
  render() { 
    return ( 
      <div ref={node => this.container = node} style={{width: 600, height: 400}}></div>
     );
  }
}
 
export default Demo;