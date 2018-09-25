<template>
	<div id="detail">
    <appDetailHeader></appDetailHeader>		
		<div id="container">
				<div id="content">
				<div class="imgHeader">
						<img :src="news.image" />
						 <span class="bank_name">{{news.title}}</span>
				</div>	
				<div id="works">
					<div class="pd5">
						<!-- <div><h3 class="articleTitle">{{news.title}}</h3></div> -->
						<!-- <div class="list_info_i" style="margin-top:5px;">
							<dl class="list_info_views">
								<dt></dt>
								<dd>7416</dd>
								<div class="clear"></div>
							</dl>
							<dl class="list_info_comment">
								<dt></dt>
								<dd>5</dd>
								<div class="clear"></div>
							</dl>
							<dl class="list_info_like">
								<dt></dt>
								<dd>8</dd>
								<div class="clear"></div>
							</dl>
							<div class="clear"></div>
						</div> -->
            <div class="clear"></div>
						<div class="article_ct">
							<article v-html="news.body">
								{{news.body}}
							</article>
							</div>
							<div class="clear"></div>				
					</div>
				</div>
				<appAbout></appAbout>
				<appComment :newsID="news.id"></appComment>
				</div>
		</div>
	</div>
</template>

<script>
import DetailHeader from './DetailHeader';
import About from './About';
import Comment from './Comment';
export default {
	name: 'Detail',
		// props:{
		// 	"id":String
		// },
  data () {
    return {
			news:[],
			newsID: this.$route.query.id,
    }
	},
	components:{
		appDetailHeader:DetailHeader,
		appAbout:About,
		appComment:Comment
	},
	created(){
						this.getData();
		},
	mounted: function() {
	
    },
	methods:{
    getData() {
		 //this.newsID=this.$route.query.id;
			//var newsID=this.$route.query.id;
     this.$http.get('/api/4/news/'+this.newsID).then(response => {
				 this.news = response.data;
				//  console.log(this.news.id)
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
