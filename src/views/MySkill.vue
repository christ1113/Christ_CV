<template>
  <MenuList />
  <h1>擅長技能</h1>

  <div class="my-skill">
    <div class="skill-box-left">
      <h2>HTML5/CSS</h2>
      <h2>JavaScript (ES6)</h2>
      <h2>Bootstrap 4</h2>
      <h2>iview</h2>
    </div>
    <div class="skill-box-right">
      <h2>Vue 3</h2>
      <h2>Git 版本控制</h2>
      <h2>PHP 7.2 (CI)</h2>
      <h2>MySQL Database</h2>
    </div>
  </div>
</template>


<script>
import MenuList from '../components/MenuList.vue';

export default {
  components: {
    MenuList,
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
  margin: 4% 0 0 0;
}

.my-skill {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  .skill-box-left {
    width: 50%;

    >h2 {
      margin: 12% 0;
      &:nth-of-type(1) {
        position: relative;
        &::before {
          content: url('../src/pic/html5.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(2) {
        position: relative;
        &::before {
          content: url('../src/pic/javascript.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(3) {
        position: relative;
        &::before {
          content: url('../src/pic/bootstrap.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(4) {
        position: relative;
        &::before {
          content: url('../src/pic/iview.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
    }
  }

  .skill-box-right {
    width: 50%;

    >h2 {
      margin: 12% 0;
      &:nth-of-type(1) {
        position: relative;
        &::before {
          content: url('../src/pic/vue.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(2) {
        position: relative;
        &::before {
          content: url('../src/pic/github.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(3) {
        position: relative;
        &::before {
          content: url('../src/pic/php.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
      &:nth-of-type(4) {
        position: relative;
        &::before {
          content: url('../src/pic/mysql.png');
          left: 6%;
          top: -50%;
          position: absolute;
          z-index: -1;
        }
      }
    }
  }

}
</style>
