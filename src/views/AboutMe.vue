<template>
  <MenuList />
  <h1>關於我</h1>

  <div class="about-me-inside">
    <h2>自我介紹</h2>
    <p>我是一個喜歡學習新技術跟挑戰自己的人，遇到困難對我來說是可以讓我學到更多知識的機會，我習慣在工作時把預計的工作及時程做紀錄，並在不太熟悉的部份去做SOP，讓我遇到相同狀況時可以參考。</p>
    <h2>大學期間</h2>
    <p>大學就讀工業工程管理學系，主要學習的方向是工廠內的生
      產相關的專業科目，共同必修科目中也包含Python、C#、MySQL，當時就對程式產生興趣，也在心中埋下向往軟體業的種子。</p>
    <h2>工作經驗</h2>
    <p>
      在堤維西交通工業擔任IE工程師時，主要工作是提升效率並將組裝的手法標準化，這對我之後安排工作及提升效率有很大幫助。<br>在仁寶電腦的工作經歷，在與廠商及客戶的溝通來往中，我的溝通能力有相當的成長，也對電子產業的生產流程，作業系統的新技術更迭有一定程度的了解。
    </p>
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

.about-me-inside {
  position: relative;



  >h2 {
    margin: 2% 0;

    &:nth-of-type(1) {
      &::before {
        content: "👨‍💻";
        left: -8%;
        position: absolute;
        z-index: -1;
      }
    }

    &:nth-of-type(2) {
      &::before {
        content: "📚";
        left: -8%;
        position: absolute;
        z-index: -1;
      }
    }

    &:nth-of-type(3) {
      &::before {
        content: "🔧";
        left: -8%;
        position: absolute;
        z-index: -1;
      }
    }
  }

  >p {
    margin: 2% 0;
  }

  width: 70%;
  display: block;
  margin: auto;
}
</style>
