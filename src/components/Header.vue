<template>
	<div id="header">

		<div class="wrap">
			<div class="logo"><a class="titleA" href="/" title="uthml酷站大全">首页</a></div>
			<i class="search_open"></i>
		</div>
		<a href="#cd-nav" class="cd-nav-trigger">Menu 
	<span class="cd-nav-icon"></span>
	<svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
	<circle fill="transparent" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
	</svg>
</a>

<div id="cd-nav" class="cd-nav">
	<div class="cd-navigation-wrapper">
		<div class="cd-half-block">
			<h2>所有栏目</h2>
			<nav>
				<ul class="cd-primary-nav">
					<li v-for="item in column">
						<router-link  :to="{path:'/columnList',query:{ id:item.id}}" class="selected">
						<img :src="item.thumbnail" class="columnImg">{{item.name}}
						</router-link>
					</li>
					<!-- <li><a href="#">内容</a></li>
					<li><a href="#">消息</a></li>
					<li><a href="#">模板</a></li>
					<li><a href="#">设置</a></li>
					<li><a href="#">关于</a></li> -->
				</ul>
			</nav>
		</div>

		<div class="cd-half-block">
			<address>
				<ul class="cd-contact-info">
					<li>
						<span>版本：{{version}}</span>
						<span>版本号：{{versionNumber}}</span>
						<span>提示：{{message}}</span>
					</li>
				</ul>
			</address>
		</div>
	</div>
</div>
	</div>
</template>

<script>
// import Menu from './components/Menu';
export default { 
  name: 'appHeader',
  data () {
    return {
				 version:'',
				 versionNumber:'',
				 message:'',
         column:[]
    }
	},
	created(){
	 this.getData(),
	 this.getColumn()
		},
	methods:{
		    getData() {
        this.$http.get('/api/4/version/android/2.3.0').then(response => {
				if(response.body.status===1){
            this.version = "软件需要升级"
				}else{
					this.version = "最新版本"
				}
				this.versionNumber = response.body.status;
				this.message = response.body.latest;
      }).catch(error => {
        console.log("ddddd")
      })
				},
			getColumn() {
        this.$http.get('/api/3/sections').then(response => {
        this.column = response.body.data;
      }).catch(error => {
        console.log("ddddd")
      })
				},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.columnImg{
 width:20px;height:20px;
}
.titleA{
  color:#ffffff;
  font-size:26px;
  height: 40px;
  line-height:40px;
  text-align: center;
}
/* a {
  color: #42b983;
} */
</style>
