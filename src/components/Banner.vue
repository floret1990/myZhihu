<template>
<div id="banner" >
		<div class="swiper-container"  >
			<div class="swiper-wrapper" >
				<div class="swiper-slide" v-for="(item,index) in bannerlist">
					<router-link :to="{path:'/detail',query:{ id:item.id}}">
                    <img  :src="item.image" class="mainImg" />
         	
					 <span class="bank_name" v-text="item.title"></span>
					  </router-link>
			</div>
		</div>
			<div class="swiper-pagination"></div>
	</div>
</div>
</template>

<script>
import Swiper from 'swiper'  //插件

export default {
	name: 'banner',
	props: ['message'],
  data () {
    return {
      bannerlist:[],
    }
	},
	methods: {
					initSwiper() {
        if (this.swiper != null) return;
        this.swiper = new Swiper('.swiper-container', {
          loop: true,
          speed: 900,
          autoplay: {
            delay: 4000, //3秒切换一次
            disableOnInteraction: false
          },
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
          }
        });
      }
		},
	components: {
		},
	mounted: function() {
    //配置Swiper  建议关于Swiper配置方面可以前往Swiper官网
    var swiperObj =  new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
		loop: true,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		observer:true,//很重要
})

  this.$http.get('/api/4/news/latest').then(response => {
		    this.bannerlist = response.data.top_stories;
				//  this.items = response.data.stories;
				this.$nextTick(() => {  // 下一个UI帧再初始化swiper
       this.initSwiper();
     });

				// console.log(response.data.top_stories)
      }).catch(error => {
        console.log("获取失败")
			})
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/swiper-4.3.5.min.css";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-slide{
	background: #000;
	height:200px;
}
.mainImg{
	height:200px;width:100%;
	opacity:0.6; filter: alpha(opacity=60);
}
.bank_name{
	position:absolute;
	bottom:25px;
	font-size:18px;
	color:#ffffff;
	font-weight:bold;
	text-align: center;
	padding-left:20px;
	padding-right:20px;
}

</style>
