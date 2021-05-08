<template>
  <div>
    <div class="histogram"></div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.drawline()
  },
  methods: {
    drawline () {
      const myChart = this.$echarts.init(document.querySelector('.histogram'))
      myChart.setOption({
        title: { text: '在vue中使用echarts' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '6%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: [220, 100, 302, 539, 392, 543, 765]
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [314, 421, 442, 745, 868, 976, 1033]
          },
          {
            name: '视频广告',
            type: 'line',
            data: [122, 343, 654, 989, 1245, 1585, 2304]
          },
          {
            name: '直接访问',
            type: 'line',
            data: [233, 334, 234, 764, 642, 653, 864]
          },
          {
            name: '搜索引擎',
            type: 'line',
            data: [463, 234, 754, 234, 321, 687, 877]
          }
        ]
      })
    }
  }
}

</script>
<style scoped>
.histogram {
  width: 700px;
  height: 500px;
}
</style>
