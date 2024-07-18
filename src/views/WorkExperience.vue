<template>
  <MenuList />
  <h1>學歷經歷</h1>

  <div class="experience">
    <div class="education">
      <h2>學歷</h2>
      <ul>
        <li>
          <h3>緯育TibaMe前端工程師專業技術養成班</h3>
          <p>2024/3~2024/7<br></p>
          <ul class="tibame-info">
            <li>
              <p>使用HTML/CSS/JavaScript開發具有RWD效果的個人專題</p>
            </li>
            <li>
              <p>與組員合作，利用Vue3前端架構配合PHP從MySQL資料庫中串接資料，完成團體實作專題，並用GitHub實施版本控制</p>
            </li>
          </ul>
        </li>

        <li>
          <h3>元智大學工業工程管理學系</h3>
          <p>2015/9~2020/8<br></p>
          <ul class="yzu-info">
            <li>
              <p>曾接觸C#及php等程式語言，對寫程式產生興趣</p>
            </li>
            <li>
              <p>主修科目是生產管理/品質管理/製造程序等工廠相關管理項目</p>
            </li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="work">
      <h2>工作經歷</h2>
      <ul>
        <li>
          <h3>仁寶電腦工業股份有限公司</h3>
          <p>2022/6~2024/3<br></p>
          <span>軟體應用工程師</span>
          <ul class="compal-info">
            <li>
              <p>DELL商務筆記型電腦Windows作業系統軟體issue分析</p>
            </li>
            <li>
              <p>處理Audio driver及相關音效功能issue經歷2代專案，與廠商Realtek/Intel/Waves合作解決100條以上的issue</p>
            </li>
            <li>
              <p>製作issue debug SOP，將debug流程標準化，提升處理issue效率，減少將近10%處理時間</p>
            </li>
          </ul>
        </li>
        <li>
          <h3>堤維西交通股份有限公司</h3>
          <p>2021/3-2022/4<br></p>
          <span>IE程師</span>
          <ul class="tyc-info">
            <li>
              <p>撰寫產品組裝SOP</p>
            </li>
            <li>
              <p>改善50項以上的產品流程，平均縮減工時3%</p>
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

.experience {
  display: flex;
  justify-content: center;

  .education {
    display: flex;
    flex-direction: column;
    align-items: center;

    >h2 {
      text-align: center;
      margin: 0 0 2% 0;
    }

    >ul {
      width: 70%;

      h3 {
        margin: 3%;

        &::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2225%22%20fill%3D%22%23A8D7F8%22/%3E%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2215%22%20fill%3D%22white%22/%3E%3C/svg%3E');
          background-size: cover;
        }
      }

      p {
        padding-left: 10%;
        line-height: 200%;
      }

      .tibame-info {
        >li {
          position: relative;

          &::before {
            position: absolute;
            content: '⭐';
            top: 10%;
            left: 4%;
          }

          p {
            padding-left: 10%;
          }
        }
      }

      .yzu-info {
        >li {
          position: relative;

          &::before {
            position: absolute;
            content: '⭐';
            top: 10%;
            left: 4%;
          }

          p {
            padding-left: 10%;
          }
        }
      }
    }
  }

  .work {
    display: flex;
    flex-direction: column;
    align-items: center;

    >h2 {
      text-align: center;
      margin: 0 0 2% 0;
    }

    >ul {
      width: 70%;

      h3 {
        margin: 3%;

        &::before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2225%22%20fill%3D%22%23A8D7F8%22/%3E%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2215%22%20fill%3D%22white%22/%3E%3C/svg%3E');
          background-size: cover;
        }
      }

      p,
      span {
        padding-left: 10%;
        line-height: 200%;
      }
    }

    .compal-info {
      >li {
        position: relative;

        &::before {
          position: absolute;
          content: '⭐';
          top: 10%;
          left: 4%;
        }

        >p {
          padding-left: 10%;
        }
      }
    }

    .tyc-info {
      >li {
        position: relative;

        &::before {
          position: absolute;
          content: '⭐';
          top: 10%;
          left: 4%;
        }

        >p {
          padding-left: 10%;
        }
      }
    }
  }
}
</style>
