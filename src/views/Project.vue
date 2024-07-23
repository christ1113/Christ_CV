<template>
  <MenuList />
  <h1>專題作品</h1>

  <div class="project">
    <div class="project-logo">
      <p>⬇️⬇️這是我們的網站⬇️⬇️</p>
      <a href=" https://tibamef2e.com/cid101/g3/"><img src="../pic/project-logo.png" alt=""></a>
    </div>
    <div class="project-content">
      <h2>負責項目</h2>
      <ul>
        <li>
          <h3>1.問答遊戲製作</h3>
          <ul class="game">
            <li>
              <p>運用GSAP套件及CSS @keyframes結合JavaScript的click事件達到動畫效果與畫面互動功能</p>
            </li>
            <li>
              <p>利用CSS的hover效果使UI介面提升使用者體驗</p>
            </li>
            <li>
              <p>實現RWD效果在不同裝置上讓版面可以正常顯示</p>
            </li>
          </ul>
        </li>

        <li>
          <h3>2.會員列表Components組件拆分</h3>
          <ul class="member">
            <li>
              <p>運用Vue3的components組件拆分，將會員功能列表獨立為一個組件，在所有會員頁上引用，便於程式碼的管理，以及樣式的統一</p>
            </li>
            <li>
              <p>實現RWD效果在不同裝置上有不同排版效果</p>
            </li>
          </ul>
        </li>

        <li>
          <h3>3.後台切版以及後台會員系統製作</h3>
          <ul class="admin">
            <li>
              <p>運用Pinia的state結合localstorage的概念，讓瀏覽器在使用者登入後能保存使用者資訊，不會因refresh導致資料消失</p>
            </li>
            <li>
              <p>使用iview套件將所有版面的表格完成，並改變表格標頭以符合我們所設計的樣式</p>
            </li>
          </ul>
        </li>
      </ul>
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
  margin: 4% 0 2% 0;
}

.project {
  display: flex;
  align-items: center;

  .project-logo {
    >p{
      text-align: center;
      font-size: 25px;
      margin-bottom: 3%;
    }
    width: 25%;
    margin-left: 5%;

    img {
      width: 100%;
    }
  }

  .project-content {
    margin-left: 10%;
    width: 50%;
    >h2{
      text-align: center;
      margin: 3%;
    }
    .game {
      margin: 2% 0;
      >li {
        position: relative;

        &::before {
          position: absolute;
          content: '⭐';
          top: 10%;
          left: 0%;
        }

        p {
          line-height: 200%;
          padding-left: 3%;
        }
      }
    }

    .member {
      margin: 2% 0;
      >li {
        position: relative;

        &::before {
          position: absolute;
          content: '⭐';
          top: 10%;
          left: 0%;
        }

        p {
          line-height: 200%;
          padding-left: 3%;
        }
      }
    }

    .admin {
      margin: 2% 0;
      >li {
        position: relative;

        &::before {
          position: absolute;
          content: '⭐';
          top: 10%;
          left: 0%;
        }

        p {
          line-height: 200%;
          padding-left: 3%;
        }
      }
    }
  }
}
</style>
