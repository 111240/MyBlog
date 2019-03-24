<template>
  <div class="can-times">
    <canvas width="300" height="300" ref="times"></canvas>
  </div>
</template>
<script>
export default {
  name: 'Times',
  mounted(){
    this.drawClock();
    setInterval(this.drawClock, 1000);
  },
  methods: {
  //定义一个函数绘制时钟
  drawClock(){
    let can = this.$refs.times;
    let context = can.getContext("2d");
    //每次绘制新图形之前清空当前区域
    context.clearRect(0,0,can.width,can.height);
    let hs = [" I ", "I I", "III", "I V", " V ", "V I", "VII", "VIII", "I X", " X ", "X I", "XII"];
    //画表盘
    // context.beginPath();
    // context.arc(can.width / 2,can.height / 2,can.width / 3,0,2*Math.PI);
    // context.strokeStyle="#A9A9A9";
    // context.lineWidth=10;
    // context.stroke();
    // context.closePath();
    //循环绘制分钟刻度
    //重新定义画布的原点
    context.translate(can.height / 2,can.height / 2);
    //绘制分钟刻度
    for (let i=0;i<60;i++) {
      //每次旋转6度
      context.rotate(6*Math.PI/180);
      context.beginPath();
      context.moveTo(0,can.width / 2.6 * -1);
      context.lineTo(0,can.width / 2.5 * -1);
      context.lineWidth=4;
      context.strokeStyle="#CC9966"
      context.stroke();
      context.closePath();
      }
      //绘制小时刻度
      for(let i = 0; i < 12; i++) {
      //旋转30度
      context.rotate(30 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -180);
      context.lineTo(0, -190);
      context.strokeStyle = "#008000";
      context.stroke();
      context.closePath();

      context.beginPath();
      context.font="12px  微软雅黑";
      //文字轮廓
      context.fillStyle = "#9900CC";
      context.fillText(hs[i], -8, can.height / 3 * -1);
      context.closePath();
      }
      //获取现在的系统时间
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      //获得的小时是一个整数,需要加上分钟代表的小数
      hour = hour + minute / 60;
      //如果是下午减去12
      hour = hour > 12 ? hour - 12 : hour;
      let second = date.getSeconds();
      //画时针
      context.rotate(hour * 30 * Math.PI / 180);
      context.beginPath();
      //设置线段开始点
      context.moveTo(0, 20);
      //设置线段结束点
      context.lineTo(0, can.width / 6 * -1);
      context.lineWidth = 3;
      context.strokeStyle = "#008000";
      context.stroke();
      context.closePath();
      //将画布角度还原到初始状态
      context.rotate(-hour * 30 * Math.PI / 180);


      //画分针
      context.rotate(minute * 6 * Math.PI / 180);
      context.beginPath();
      //设置线段开始点
      context.moveTo(0, 20);
      //设置线段结束点
      context.lineTo(0, can.width / 5 * -1);
      context.lineWidth = 3;
      context.strokeStyle = "lightgreen";
      context.stroke();
      context.closePath();
      //将画布角度还原到初始状态
      context.rotate(-minute * 6 * Math.PI / 180);

      //画秒针
      context.rotate(second * 6 * Math.PI / 180);
      context.beginPath();
      //设置线段开始点
      context.moveTo(0, 20);
      //设置线段结束点
      context.lineTo(0, can.width / 4 * -1);
      context.lineWidth = 3;
      context.strokeStyle = "crimson";
      context.stroke();
      context.closePath();
      //在圆形的中心点绘制一个圆形
      context.beginPath();
      context.arc(0,0,10,0,2*Math.PI);
      context.fillStyle="gold";
      context.fill();
      context.closePath();
      //在秒针上端绘制一个圆形
      context.beginPath();
      context.arc(0,can.width / 4 * -1,8,0,2*Math.PI);
      context.fillStyle="gold";
      context.fill();
      context.closePath();
      //将画布角度还原到初始状态
      context.rotate(-second * 6 * Math.PI / 180);
      //将圆心的位置重置到左上角
      context.translate(can.width / 2 * -1, can.height / 2 * -1);
    }
  }
}
</script>
<style lang="scss">
.can-times{
  position: fixed;
  left: -20px;
  top: 60px;
  z-index: 999;
  // background-color: rgba(0, 0, 0, 0.5);
}
</style>
