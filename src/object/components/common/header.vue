<template>
  <div class="common-header">
    <div :class="isEnter ? 'common-header-item-enter' : 'common-header-item'" class="common-header-item"
      @mouseenter="enter" @mouseleave="leave">
        <div class="header-foo" @click="backHome">
          <span class="letter" data-letter="皮皮毅の小屋>>">皮皮毅の小屋>></span>
        </div>
      </div>
    <div style="height: 70px;"></div>
  </div>
</template>
<script>

export default {
  name: 'Header',
  data(){
    return{
      
    }
  },
  props: {
    isEnter: {
      type: Boolean
    }
  },
  methods: {
    enter(){
      this.$emit('enter')
    },
    leave(){
      this.$emit('leave')
    },
    backHome(){
      this.$emit('backHomePage')
    }
  }
}
</script>
<style lang="scss" scoped>
.common-header-item{
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  transition: all .5s;
  background-color: rgba(255, 255, 255, .3);
  z-index: 999;
}
.common-header-item-enter{
  background-color: rgba(255, 255, 255, .8);
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}
div.header-foo{
  height: 100%;
  text-align: center;
  float: left;
  margin-left: 30px;
  line-height: 70px;
  cursor: pointer;
}
.letter{
  display: inline-block;
  font-weight: 900;
  font-size: 30px;
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
    rotateY(-25deg)
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
    rotateY(-35deg)
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
