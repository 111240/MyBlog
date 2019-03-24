//canvas鼠标点击烟花特效

let endpos = (x, y) => {
  let angle = random(0, 360) * Math.PI / 180,
    value = random(20, 150),
    radius = [-1, 1][random(0, 1)] * value;

  return {
    x: x + radius * Math.cos(angle),
    y: y + radius * Math.sin(angle)
  }
}

let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Circle {
  constructor(x, y) {
    this.r = random(9, 13)
    this.opos = {}
    this.x = this.opos.x = x
    this.y = this.opos.y = y

    this.colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']
    this.color = this.colors[random(0, this.colors.length)];
    this.tpos = endpos(x, y)
  }

  creatCircle(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }

  //根据不同距离段设置前行的步伐，分为3个阶段，离出发点近的那一段为速度最快，中间为速度一般，最远为速度最慢
  //区分目标点小于出发点的情况
  //ratio为两点之间的距离的行走比例，比例数值越大，行走越慢
  moveFun(start, end, current) {
      let s = random(26, 35),
        m = random(20, 25),
        f = random(15, 20),
        ff = start.x + ~~((end.x - start.x) / 3),
        mm = ff + ~~((end.x - start.x) / 3),
        ratio = end.x >= start.x ? (Math.max(current, ff) == current ? (Math.max(current, mm) == current ? s : m) : f) : (Math.max(current, ff) == current ? f : (Math.max(current, mm) == current ? m : s)),
        mp = {
          x: end.x - start.x,
          y: end.y - start.y
        };

      return {
        x: Math.abs(mp.x / ratio),
        y: Math.abs(mp.y / ratio)
      }
    }
    
    //根据计算出来的移动值去移动
    //如果目标坐标大于原始坐标则向右移动，最大不能超过目标坐标，反之向左移动最小不能小于目标坐标
  move() {
    var movepos = this.moveFun(this.opos, this.tpos, this.x);

    this.x = (this.opos.x > this.tpos.x) ? Math.max(this.x - movepos.x, this.tpos.x) : Math.min(this.x + movepos.x, this.tpos.x)
    this.y = this.opos.y > this.tpos.y ? Math.max(this.y - movepos.y, this.tpos.y) : Math.min(this.y + movepos.y, this.tpos.y)
    this.r = Math.max(Math.abs((this.r - Math.random() / 1.2).toFixed(2)), 0)

  }
}

class BigCircle {
  constructor(x, y) {
    this.bR = random(16, 32)
    this.overR = random(60, 100)
    this.x = x
    this.y = y
    this.op = 1
  }

  creatBigCircle(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.bR, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.strokeStyle = 'rgba(128, 128, 128, ' + this.op + ')'
    ctx.stroke()
  }

  changeR() {
    this.bR = Math.min(this.bR += random(1, 4), this.overR);
    this.op = Math.max((this.op - Math.random() / 12).toFixed(2), 0)
  }

  //检查是否运行完毕，以大圆为标准清空屏幕
  complete() {
    return this.bR >= this.overR && this.op <= 0;
  }
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.clearRequestTimeout = window.cancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame;


let c,w,h,ctx,nums = 40,circles = [],bCircle = null,animationId = false;

let int = function(x, y) {
  circles = []

  // eslint-disable-next-line no-undef
  if (animationId) clearRequestTimeout(animationId)

  for (let i = nums; i-- > 0;) {
    circles.push(new Circle(x, y))
  }

  bCircle = new BigCircle(x, y)
  creat()
}

let creat = function() {
  // ctx.clearRect(0, 0, w, h);

  circles.forEach(function(v) {
    v.move();
    v.creatCircle(ctx)
  })

  bCircle.changeR()
  bCircle.creatBigCircle(ctx)

  animationId = requestAnimationFrame(creat)

  if (bCircle.complete()) {
    //以大圆为标准，清空屏幕停止动画
    // ctx.clearRect(0, 0, w, h);
    // eslint-disable-next-line no-undef
    clearRequestTimeout(animationId)
  }
}

// 背景动画
class BGBubble {
  constructor(opts) {
    this.defaultOpts = {
      id: '',                           //容器ID
      num: 100,                        // 个数
      start_probability: 0.1,          // 如果数量小于num，有这些几率添加一个新的
      radius_min: 1,                   // 初始半径最小值
      radius_max: 2,                   // 初始半径最大值
      radius_add_min: .3,               // 半径增加最小值
      radius_add_max: .5,               // 半径增加最大值
      opacity_min: 0.3,                 // 初始透明度最小值
      opacity_max: 0.5,                // 初始透明度最大值
      opacity_prev_min: .003,            // 透明度递减值最小值
      opacity_prev_max: .005,            // 透明度递减值最大值
      light_min: 40,                 // 颜色亮度最小值
      light_max: 70,                 // 颜色亮度最大值
      is_same_color: false          //泡泡颜色是否相同
    }
    if (Object.prototype.toString.call(opts) == "[object Object]") {
      this.userOpts = {...this.defaultOpts, ...opts}
    } else {
      this.userOpts = {...this.defaultOpts, id: opts}
    }
    this.color = this.random(0, 360)
    this.bubbleNum = []
    this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    this.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
  }

  random(a, b) {
    return Math.random() * (b - a) + a    //取a-b之间的随机值
  }

  initBubble(color, isSameColor) {
    const width = window.innerWidth
    const height = window.innerHeight
    const userOpts = this.userOpts
    const light = this.random(userOpts.light_min, userOpts.light_max)
    this.bubble = {
      x: this.random(0, width),
      y: this.random(0, height),
      radius: this.random(userOpts.radius_min, userOpts.radius_max),
      radiusChange: this.random(userOpts.radius_add_min, userOpts.radius_add_max),
      opacity: this.random(userOpts.opacity_min, userOpts.opacity_max),
      opacityChange: this.random(userOpts.opacity_prev_min, userOpts.opacity_prev_max),
      light,
      color: `hsl(${isSameColor ? color : this.random(0, 360)},100%,${light}%)`,
    }
  }

  bubbling(ctx, color, isSameColor) {
    !this.bubble && this.initBubble(color, isSameColor)
    const bubble = this.bubble
    ctx.fillStyle = bubble.color;
    ctx.globalAlpha = bubble.opacity;
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    bubble.opacity -= bubble.opacityChange;
    bubble.radius += bubble.radiusChange;
    if (bubble.opacity <= 0) {
      this.initBubble(color, isSameColor)
      return
    }
  }

  createCanvas() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.style.display = 'block'        //防止全屏的canvas出现滚动条
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.canvas.style.position = 'fixed'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    this.canvas.style.zIndex = '-1'
    document.onclick = function(e) {
      e = e || window.event;
      int(e.clientX, e.clientY)
    }
    document.getElementById(this.userOpts.id).appendChild(this.canvas)
    window.onresize = () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }
    c = this.canvas,
    w = c.width = c.offsetWidth,
    h = c.height = c.offsetHeight,
    ctx = c.getContext("2d"),
    nums = 40,
    circles = [],
    bCircle = null,
    animationId = false;
  }

  start() {
    const width = window.innerWidth
    const height = window.innerHeight
    this.color += 0.1
    this.ctx.fillStyle = `hsl(${this.color},100%,97%)`
    this.ctx.fillRect(0, 0, width, height);
    if (this.bubbleNum.length < this.userOpts.num && Math.random() < this.userOpts.start_probability) {
      this.bubbleNum.push(new BGBubble())
    }
    this.bubbleNum.forEach(bubble => bubble.bubbling(this.ctx, this.color, this.userOpts.is_same_color))
    const requestAnimationFrame = this.requestAnimationFrame
    this.myReq = requestAnimationFrame(() => this.start())   //新的动画API可根据浏览设置最佳动画间隔时间
  }

  destory() {
    const cancelAnimationFrame = this.cancelAnimationFrame
    cancelAnimationFrame(this.myReq)
    window.onresize = null
  }
}

export default BGBubble;