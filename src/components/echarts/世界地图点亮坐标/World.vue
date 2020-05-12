<template>
  <div id="myChart" :style="{width: '1000px', height: '600px'}"></div>
</template>

<script>
import ECharts from 'echarts'
// import ECharts from 'echarts/lib/echarts'
// 引入柱状图
// import 'echarts/lib/chart/bar'
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
import 'echarts/map/js/world.js' // 引入世界地图
import nameMap from './data/nameMap'
// import 'echarts/map/js/china.js' // 引入中国地图数据
/* eslint-disable */
var geoCoordMap = {
  "北京": [116.407395,39.904211],
  "香港": [114.109497,22.396428]
};
function makeMapData() {
  var mapData = [];

  for (let key in geoCoordMap) {
    mapData.push({
      name: key,
      value: geoCoordMap[key]
    })
  }
  return mapData;
}
export default {
  methods: {
    drawWorld () {
      const myChart = ECharts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '全球地图',
          left: 'center'
        },
        tooltip : {
          formatter: '{b}',
          trigger: 'item'
        },
        geo: {
          map: 'world',
          nameMap: nameMap,
          silent: false, // 区域是否可点击
          left: '10%',
          top: '10%',
          bottom: '10%',
          right: '10%',
          roam: true
        },
        // grid: [{
        //   show: true,
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   height: 28,
        //   borderColor: 'transparent',
        //   backgroundColor: '#404a59',
        // }],
        // parallel: {
        //   top: '100%',
        //   left: 60,
        //   right: 20,
        //   bottom: 100,
        //   axisExpandable: false,
        //   axisExpandCenter: 0,
        //   axisExpandCount: 0,
        //   axisExpandWidth: 0,
        //   axisExpandTriggerOn: 'mousemove',
        // },
        series: [{
        //   type: 'map',
        //   map: 'world',
        //   nameMap: nameMap
        // }, {
          name: '星辰浙大',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 10, // 位置圆点大小
          data: makeMapData(),
          activeOpacity: 1,
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          // symbolSize: function (data) {
          //     return Math.max(5, data[2] / 5);
          // },
          itemStyle: {
            borderColor: '#fff',
            color: '#577ceb',
          }
        }]
      })
    }
  },
  mounted () {
    this.drawWorld()
  }
}
</script>
