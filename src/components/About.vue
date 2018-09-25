<template>
			<div v-show="items.length!==0"  id="more_about">
				<h4>新闻额外信息</h4>
				<div class="more_about">
					<div v-for="(item,index) in items">
						<p>推荐作者</p>
             <p v-for="editor in item.recommenders" class="edit"> 
							 <a target="_blank" href="#">
								 <img :src="editor.avatar" class="editImg">
							   <span class="bio">笔名:{{editor.bio}}</span>
								 <span  v-show="editor.title" class="title">职位：{{editor.title}}</span>
								 <span class="name">姓名:{{editor.name}}</span>
							 </a>
							 </p>
					</div>

				</div>
			</div>
</template>

<script>
export default {
  name: 'more_about',
  data () {
    return {
			items:[],

		}
	},
	created(){
    this.getRecommenders()
	},
	methods:{
		getRecommenders(){
		 var comID = this.$parent.newsID;
		// var comID = 8509251;
     this.$http.get('/api/4/story/'+comID+'/recommenders').then(response => {
				// var mm = response.body.items;
        this.items =response.body.items;
			//  console.log(this.items)
      }).catch(error => {
        console.log("出现错误")
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.edit{
 overflow: hidden;font-size:0;height:30px;line-height: 30px;
}
.edit .bio,.edit .title,.edit .name{
display: inline-block;float: left;padding-right:10px;color:#535353;font-weight:bold;vertical-align: top;
}
.editImg{
	width:30px;height:30px;display: inline-block;float: left;vertical-align: top;
}

</style>
