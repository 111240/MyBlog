<template>
  <div id="app">
    <transition  enter-active-class="animated rubberBand">
      <times v-if="showTimes"/>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-if="!startLoading" key="app" style="text-align: center;">
        <canvas id="c1"></canvas>
        <canvas id="c2"></canvas>
        <div class="foo">
          <span class="letter" data-letter="皮皮毅的小屋">皮皮毅的小屋</span>
        </div>
        <stars />
        <transition enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
          <pikachu v-if="showPikachu"/>
        </transition>
        <a data-icon="♚" class="button orange shield glossy" id="start-btn"
          @click="startLoading = true">ClickMe>></a>
        <!-- <a href="#" class="button">Button</a>
        <a href="#" data-icon="♚" class="button orange shield glossy">King</a>
        <a href="#" data-icon="♛" class="button pink serif round glass">Queen</a>
        <a href="#" data-icon="♞" class="button blue skew">Horse</a>
        <button disabled class="button green glossy">Disabled</button>	
        <a href="#" data-icon="❀" class="button green icon">Flower</a> -->
      </div>
      <div v-else>
        <div id="app-body" ref="appBody">
          <Header :isEnter="isEnterHead" @enter="enterHead" @leave="leaveHead" @backHomePage="startLoading = false"/>
          <div @mouseenter="isEnterCon = true" @mouseleave="isEnterCon = false" 
            :id="!isEnterCon ? 'app-menu-box-leave' : 'app-menu-box'" v-if="!showAppContent">
            <div v-for="(v, k) in menuList" :key="k" @mouseover="hoverMenuNum = k" 
              :style="'background-color:rgba(' + v.color + ',0.8);'"
              :class="hoverMenuNum === k ? 'app-meun-list animated rubberBand': 'app-meun-list'">
              <div class="foo">
                <span class="letter" :data-letter="v.title" style="font-size: 40px;">{{v.title}}</span>
              </div>
            </div>
          </div>
          <div id="app-content" ref="appContent" v-else>
            <router-view/>
          </div>
        </div>
        <div id="background-box"></div>
        <div id="background-img"></div>
        <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
          <div id="back-top" @click="backTop" v-if="topScroll !== 0">返回顶部</div>
        </transition>
      </div>
    </transition>
    <transition enter-active-class="animated rollIn" leave-active-class="animated rollOut">
      <div class="aplayer-box" @mousedown="moveAplayerBox($event)" ref="aplayerBox" v-if="showAplayer">
        <transition enter-active-class="animated rollIn" leave-active-class="animated rollOut">
          <div class="aplayer-tips" v-if="isAplayerTips" @click="playAplayer">点击播放音乐哟~~~</div>
        </transition>
        <div id="aplayer" ref="aplayer"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import Header from '@/object/components/common/header';
import BGBubble from '@/lib/background';
import { _ScrollTop } from '@/object/api/tools';
import startDom from '@/lib/start';
import stars from '@/object/components/common/stars';
import pikachu from '@/object/components/common/pikachu';
import times from '@/object/components/common/times';
import { setTimeout } from 'timers';

export default {
  name: 'App',
  data(){
    return{
      startBox: null,
      backgroundBox: null,  //  背景canvas盒子
      isEnterHead: false, // 是否滑入头部
      isEnterCon: false,  // 是否滑入主体
      topScroll: 0, //滚动条距离顶部距离
      pageHeight: 0,  //页面高度
      percent: 0,  // 已经滚动的百分比
      startLoading: false, // 切换页面
      aPlayerBox: null, // 音乐播放器实例
      isAplayerTips: true,  // 音乐提示动画
      showAplayer: false, // 音乐播放器动画
      showPikachu: false, // 皮卡丘动画
      showTimes: false, // 时钟动画
      showAppContent: false, // 显示内容主题
      hoverMenuNum: 9,
      menuList: [
        {
          color: '102,255,255',
          title: 'Home'
        },
        {
          color: '102,153,204',
          title: '前端'
        }, 
        {
          color: '255,204,102',
          title: '后端'
        }, 
        {
          color: '255,102,51',
          title: '随想笔记'
        }, 
        {
          color: '204,255,255',
          title: '留言'
        }, 
        {
          color: '204,102,204',
          title: '统计'
        },
        {
          color: '153,204,51',
          title: '更新日志'
        },
        {
          color: '102,204,51',
          title: '搜索'
        }
      ]
    }
  },
  components: {
    stars,
    Header,
    pikachu,
    times
  },
  mounted(){
    this.startBox = new startDom();
    this.startBox.init();
    window.addEventListener('resize', this.startBox.resize);
    setTimeout(() => {
      this.showAplayer = true;
      this.showPikachu = true;
      this.showTimes = true;
      this.$nextTick(() => {
        this.aPlayerBox = new APlayer({
          container: this.$refs.aplayer,
          autoplay: true,
          audio: [{
            name: '生きていたんだよな',
            artist: 'あいみょん',
            url: 'http://music.163.com/song/media/outer/url?id=443875380.mp3',
            cover: 'http://p2.music.126.net/QvGlOYCfXWx94a19_lmh5A==/3315027565433501.jpg?param=130y130'
          },{
            name: '那一天从梦中醒来',
            artist: '双笙 / 秋风MusiX',
            url: 'http://music.163.com/song/media/outer/url?id=526680601.mp3',
            cover: 'http://p1.music.126.net/OaEKnO8ycGQ-u_NRicA3sQ==/109951163094550225.jpg?param=130y130'
          },{
            name: '离骚( Cover 易烊千玺 )',
            artist: '薄荷er',
            url: 'http://music.163.com/song/media/outer/url?id=1300985884.mp3',
            cover: 'http://p2.music.126.net/zpGhF4kc9HzVAcnAT1p0rQ==/109951163453986797.jpg?param=130y130'
          },{
            name: '辞九门回忆',
            artist: '解忧草 / 冰幽',
            url: 'http://music.163.com/song/media/outer/url?id=557640761.mp3',
            cover: 'http://p1.music.126.net/uQLVFEdhKeooWFr0b6fCsA==/109951163282287179.jpg?param=130y130'
          },{
            name: '一抹桃花',
            artist: '珍哥',
            url: 'http://music.163.com/song/media/outer/url?id=1313052387.mp3',
            cover: 'http://p1.music.126.net/Aj1-l0RV4Yadf2Qfhb5CsA==/109951163573599888.jpg?param=130y130'
          },{
            name: '南下',
            artist: '徐海俏',
            url: 'http://music.163.com/song/media/outer/url?id=414706021.mp3',
            cover: 'http://p2.music.126.net/bgAQqsHMCHpnY5LlaF5XJg==/109951163093108696.jpg?param=130y130'
          }],
          listFolded: true,
          order: 'random',
          loop: 'all'
          // fixed: true
        });
      });
    },200);
  },
  watch: {
    startLoading(n){
      if(n){
        this.$nextTick(() => {
          this.backgroundBox = new BGBubble('background-box');
          this.backgroundBox.createCanvas();
          this.backgroundBox.start();
          this.$refs.appBody.addEventListener('scroll', this.watchSrcoll);
        });
      } else {
        this.$nextTick(() => {
          this.startBox = new startDom();
          this.startBox.init();
          window.addEventListener('resize', this.startBox.resize);
        })
      }
    }
  },
  methods: {
    playAplayer(){
      this.aPlayerBox.play();
      this.isAplayerTips = false;
    },
    watchSrcoll(e){
      this.pageHeight = this.$refs.appContent.innerHeight || this.$refs.appContent.clientHeight;
      this.topScroll = e.target.scrollTop;
      this.percent = parseInt((this.topScroll / this.pageHeight * 100) + 8);
      if(e.target.scrollTop > 0){
        this.isEnterHead = true;
        this.$Loading.update(this.percent);
      } else {
        this.isEnterHead = false;
        this.$Loading.destroy();
      }
    },
    enterHead(){
      this.isEnterHead = true;
    },
    leaveHead(){
      this.isEnterHead = false;
    },
    backTop(){
      _ScrollTop(0, 200, this.$refs.appBody);
    },
    moveAplayerBox(e){
      this.disX = e.clientX - this.$refs.aplayerBox.offsetLeft;
      this.disY = e.clientY - this.$refs.aplayerBox.offsetTop;
      document.onmousemove = event => {
        let left = event.clientX - this.disX;
        let top = event.clientY - this.disY;
        this.$refs.aplayerBox.style.left = left + 'px';
        this.$refs.aplayerBox.style.top = top + 'px';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#start-btn{
  margin-top: 10px;
}
#background-img{
  background: url('./assets/39c2683098962a2c7f35100a613e24b0.jpg') no-repeat center center;
  background-size: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
  z-index: 995;
}
#app-body{
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 100vh;
  overflow: auto;
}
.aplayer-box{
  position: fixed;
  left: 45px;
  bottom: 50px;
  z-index: 999;
  #aplayer{
    margin-top: 7px;
  }
  .aplayer-tips{
    position: absolute;
    color: #CCFFCC;
    left: -30px;
    top: -70px;
    padding: 20px;
    border-radius: 10px;
    // background-color: rgba(204,102,153,0.5);
    background-color: rgb(204,102,153);
    // animation: aplayerTips 2.5s infinite;
    opacity: .7;
    box-shadow: 0px 0px 10px rgba(204,102,153, .7);
    cursor: pointer;
  }
  .aplayer-tips::after{
    content: '';
    position: absolute;
    bottom: -7px;
    left: 60px;
    width: 17px;
    height: 17px;
    // background-color: rgba(204,102,153,0.5);
    background-color: rgb(204,102,153);
    transform: rotate(45deg);
    box-shadow: 0px 0px 10px rgba(204,102,153, .7);
  }
  // @keyframes aplayerTips{
  //   0%{
  //     top: -70px;
  //   }
  //   50%{
  //     top: -90px;
  //   }
  //   100%{
  //     top: -70px;
  //   }
  // }
}
#back-top{
  position: fixed;
  right: 20px;
  bottom: 250px;
  background-color: #ccc;
  z-index: 1001;
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
}
#app-content{
  width: 1000px;
  height: 5000px;
  margin: 0 auto;
  border-radius: 10px;
  background: url('./assets/82G58PIC2Fs_1024.jpg') repeat;
  box-shadow: 0px 0px 50px #336666;
  transition: all .3s;
  position: relative;
  z-index: 990;
  margin-top: 20px;
}
#app-menu-box{
  width: 1000px;
  height: 550px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgba(102,255,204, .3);
  box-shadow: 0px 0px 50px #336666;
  opacity: 1;
  transition: all .3s;
  position: relative;
  z-index: 990;
  margin-top: 60px;
  .app-meun-list{
    width: 210px;
    height: 250px;
    float: left;
    margin-left: 30px;
    border-radius: 10px;
    background-color: #409eff;
    margin-top: 17px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
#app-menu-box-leave{
  width: 1000px;
  height: 550px;
  border-radius: 10px;
  margin: 0 auto;
  opacity: 0;
  box-shadow: 0px 0px 50px #336666;
  transition: all .3s;
  position: relative;
  z-index: 990;
  margin-top: 70px;
  .app-meun-list{
    width: 210px;
    height: 250px;
    float: left;
    margin-left: 30px;
    border-radius: 10px;
    background-color: #409eff;
    margin-top: 17px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
body {
  overflow: hidden;
}
#c1 {
  opacity: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

#c2 {
  background: #000;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
#app-body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px;
  /*高宽分别对应横竖滚动条的尺寸*/
  background: #ebeef5;
  -webkit-box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.2);
}
 
#app-body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 3px;
  background: #409eff;
  height: 120px;
}
#app-body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
}
#app-body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px;
  /*高宽分别对应横竖滚动条的尺寸*/
  background: #ebeef5;
  -webkit-box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.2);
}
#app-body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 3px;
  background: #409eff;
  height: 120px;
}

#app-body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
}
div.foo{
  width: 90%;
  margin: 20px auto;
  text-align: center;
}
.letter{
  display: inline-block;
  font-weight: 900;
  font-size: 50px;
  // margin: 0.2em; 
  position: relative;
  color: #00B4F1;
  transform-style: preserve-3d;
  perspective: 400;
  z-index: 1;
}
.letter:before, .letter:after{
  position:absolute;
  content: attr(data-letter);
  transform-origin: top left;
  top:0;
  left:0;
}
.letter, .letter:before, .letter:after{
  transition: all 0.3s ease-in-out;
}
.letter:before{
  color: #fff;
  text-shadow: 
    -1px 0px 1px rgba(255,255,255,.8),
    1px 0px 1px rgba(0,0,0,.8);
  z-index: 3;
  transform:
    rotateX(0deg)
    rotateY(-10deg)
    rotateZ(0deg);
}
.letter:after{
  color: rgba(0,0,0,.11);
  z-index:2;
  transform:
    scale(1.08,1)
    rotateX(0deg)
    rotateY(0deg)
    rotateZ(0deg)
    skew(0deg,1deg);
}
.letter:hover:before{
  color: #fafafa;
  transform:
    rotateX(0deg)
    rotateY(-20deg)
    rotateZ(0deg);
}
.letter:hover:after{
  transform:
		scale(1.08,1)
		rotateX(0deg)
		rotateY(40deg)
		rotateZ(0deg)
		skew(0deg,22deg);
}
</style>
