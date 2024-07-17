<template>
  <div class="header">
    <div class="header-left">
      <RouterLink to="/AboutMe">
        <h3 class="titleh3">關於我</h3>
      </RouterLink>
      <RouterLink to="/MySkill">
        <h3 class="titleh3">擅長技能</h3>
      </RouterLink>
    </div>
    <img class="avatar" @click="collapse()" src="../pic/avatar.jpg" alt="">
    <div class="header-right">
      <RouterLink to="/WorkExperience">
        <h3 class="titleh3">工作經歷</h3>
      </RouterLink>
      <RouterLink to="/LogIn">
        <h3 class="titleh3">登入</h3>
      </RouterLink>
    </div>
  </div>

  <div class="info-box" v-show="showInfo">
    <h1>聯絡資訊</h1>
    <div class="info-card">
      <div class="my-info">
        <h2>陳世軒</h2>
        <h2>Christ Chen</h2>
        <p>前端工程師</p>
      </div>
      <div class="contact">
        <p>台北市大同區</p>
        <p>0922-131-196</p>
        <a href="https://github.com/christ1113">GitHub</a>
        <p>class20831@gmail.com</p>
      </div>
    </div>
  </div>

</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      showInfo: false
    };
  },
  mounted() {
    this.showInfo = false;
  },
  methods: {
    collapse() {
      const avatar = document.querySelector('.avatar');
      const header = document.querySelector('.header');
      const headerLeft = document.querySelector('.header-left');
      const headerRight = document.querySelector('.header-right');
      const titleh3 = document.querySelectorAll('.titleh3');
      const InfoBox = document.querySelector('.info-box');
      header.style.alignItems = 'start';
      header.style.height = '100%';

      avatar.style.width = '5%';
      avatar.style.transition = '2s ease';
      avatar.style.cursor = 'default';

      setTimeout(() => {
        headerLeft.style.display = 'flex';
        headerLeft.offsetWidth;
        headerLeft.style.width = '100%';
        headerLeft.style.height = '10%';
        headerLeft.style.transition = 'width 2s ease';
        headerLeft.style.padding = '10px 0';
      }, 2500);

      setTimeout(() => {
        headerRight.style.display = 'flex';
        headerRight.offsetWidth;
        headerRight.style.width = '100%';
        headerRight.style.height = '10%';
        headerRight.style.transition = 'width 2s ease';
        headerRight.style.padding = '10px 0';
      }, 2500);

      setTimeout(() => {
        titleh3.forEach(title => {
          title.style.display = 'block';
          title.style.opacity = '1';
          title.style.transition = '.7s ease';
        });
      }, 3000);

      setTimeout(() => {
        InfoBox.style.display = 'flex';
        InfoBox.style.opacity = '1';
        InfoBox.style.transition = '5s linear';
      }, 4000);

    }
  }
}
</script>

<style lang="scss">
body{
  overflow: hidden;
}
.header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  .header-left {
    display: none;
    align-items: center;
    justify-content: space-evenly;
    width: 0%;
    height: 0%;
    border-bottom: 2px solid black;

    .titleh3 {
      display: none;
      opacity: 0;
    }
  }

  .header-right {
    display: none;
    align-items: center;
    justify-content: space-evenly;
    width: 0%;
    height: 0%;
    border-bottom: 2px solid black;

    .titleh3 {
      display: none;
      opacity: 0;
    }
  }

  .avatar {
    width: 20%;
    height: auto;
    border-radius: 50%;
    cursor: pointer;
    margin: auto;

    &:hover {
      width: 22%;
      transition: .5s;
    }
  }
}

.info-box {
  margin: auto;
  height: 100%;
  min-height: 300px;
  width: 90%;
  display: none;
  opacity: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width:768px) {
    flex-direction: column;
  }


  >h1 {
    text-align: center;
    margin: 10% 0 4% 0;
  }

  .info-card {
    display: flex;
    margin: auto;
    height: 100%;
    min-height: 150px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;


    @media(max-width:768px) {
      flex-direction: column;
    }


    .my-info {
      width: 40%;
      text-align: center;

      @media(max-width:768px) {
        width: 80%;
      }

      >h2 {
        margin: 5% 0;
      }

      >p {
        margin: 5% 0;
      }
    }

    .contact {
      width: 40%;
      position: relative;

      @media(max-width:768px) {
        width: 80%;
        text-align: center;
      }

      >p {
        margin: 4% 5%;

        &:nth-of-type(1) {
          &::before {
            content: "📍";
            left: -8%;
            position: absolute;
            z-index: 2;

            @media(max-width:768px) {
              left: 5%;
            }
          }
        }

        &:nth-of-type(2) {
          &::before {
            content: "📞";
            left: -8%;
            position: absolute;
            z-index: 2;
            @media(max-width:768px) {
              left: 5%;
            }
          }
        }

        &:nth-of-type(3) {
          &::before {
            content: "📧";
            left: -8%;
            position: absolute;
            z-index: 2;
            @media(max-width:768px) {
              left: 5%;
            }
          }
        }

      }

      >a {
        margin: 4% 5%;

        &:nth-of-type(1) {
          &::before {
            content: "🛠️";
            left: -8%;
            position: absolute;
            z-index: 2;
            @media(max-width:768px) {
              left: 5%;
            }
          }
        }
      }
    }
  }


}
</style>