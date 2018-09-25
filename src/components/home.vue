<template>
<div id="home">
  <appHeader></appHeader>
  <nav class="navgation">
    <a  @click="toggleTabs('latest',0);" :class="{'active':0 == tabIndex}">{{latest}}</a>
    <a  @click="toggleTabs('themes',1);" :class="{'active':1 == tabIndex}">{{themes}}</a>
    <a  @click="toggleTabs('hot',2);" :class="{'active':2 == tabIndex}">{{hot}}</a>
 </nav>
    <latest :is="currentView" keep-alive></latest>
  </div>
</template>

<script>
import Header from './Header';
import latest from './latest';
import themes from './themes';
import hot from './hot';
export default {
  name: 'home',
  data () {
    return {
                latest: "最新新闻", //导航栏文本1
                themes: "主题日报", //导航栏文本2
                hot: "热门新闻", //导航栏文本3
                currentView: 'latest', //默认选中first子组件
                tabIndex: 0,
                // active:true
    }
  },
    components:{
    appHeader:Header,
    latest,themes,hot
  },
  methods:{
     toggleTabs (tabText,index) {
                 this.tabIndex = index;
                 this.currentView = tabText;
             }
  }
}
</script>
<style scoped>
.navgation{
  background: #e7e5e5;height:60px;line-height: 60px;padding:5px;font-size:0;display: flex;
}
.navgation a{
  font-size: 16px;flex: 1;text-align: center;font-weight:700;color: #ffffff;
}
.active{
  color:#ff0000!important;
}
.unactive{
  
}
</style>
