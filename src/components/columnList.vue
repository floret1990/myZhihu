<template>
	<div id="detailList">
    <div id="header" class="head">
		<div class="wrap">
			<i class="menu_back"><a @click="$router.back(-1)"></a></i>
			<div class="title">
				<span class="title_d"><p>{{sectionList.name}}</p></span>
				<div class="clear"></div>
			</div>
			<i class="menu_share"></i>
		</div>
	</div>
		<div id="container">
				<div id="content">	
				<div id="list">
				<ul>
					<li v-for="item in sectionList.stories">
						<div class="wrap">
							<router-link :to="{path:'/detail',query:{ id:item.id}}" class="alist">
								<div class="list_litpic fl"><img v-bind:src="item.images[0]" /></div>
								<div class="list_info">
									<h3>{{item.title}}</h3>
									<div>
										 <span>{{item.display_date}}</span>
									</div>
								</div>
								<div class="clear"></div>
							</router-link>
						</div>
					</li>	
				</ul>
				<div class="list_loading"><i></i><span>努力加载中...</span></div>
			</div>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detailList',
		// props:{
		// 	"id":String
		// },
  data () {
    return {
			sectionList:[],
			message: this.$route.query.id,
    }
	},
	created(){
			this.getData();
		},
	mounted: function() {
	
    },
	methods:{
    getData() {
		var listID=this.$route.query.id;
			//var newsID=this.$route.query.id;
     this.$http.get('/api/3/section/'+listID).then(response => {
				 this.sectionList = response.data;
			   console.log(this.sectionList)
      }).catch(error => {
        console.log("detail cuo")
			})
			},

		} 


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
	width:100%;
}
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
.imgHeader{
		background: #000;
	height:200px;
}
.imgHeader img{
		height:200px;width:100%;
	opacity:0.6; filter: alpha(opacity=60);
}
.bank_name{
    bottom: 50px;
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
		z-index: 10;
		text-align: center;
}
.articleTitle{
	margin-top:10px;
	margin-bottom:10px;
}

</style>
