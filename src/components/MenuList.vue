<template>
    <div class="header-inside">
        <div class="header-left">
            <RouterLink to="/AboutMe">
                <h3>關於我</h3>
            </RouterLink>
            <RouterLink to="/MySkill">
                <h3>擅長技能</h3>
            </RouterLink>
        </div>
        <img class="avatar" src="../pic/avatar.jpg" alt="">
        <div class="header-right">
            <RouterLink to="/WorkExperience">
                <h3>工作經歷</h3>
            </RouterLink>
            <RouterLink to="/LogIn">
                <h3>登入</h3>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    },
}
</script>

<style lang="scss">
.header-inside {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;

    .header-left {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 10%;
        border-bottom: 2px solid black;
        transition: width 1.5s ease;
        padding: 10px 0;
    }

    .header-right {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 10%;
        border-bottom: 2px solid black;
        transition: width 1.5s ease;
        padding: 10px 0;
    }

    .avatar {
        width: 5%;
        height: auto;
        border-radius: 50%;
        transition: width 2s ease;
        margin: auto;
    }
}
</style>