<template>
<div id="themes">
<div id="container">
	<!-- <appBnner></appBnner> -->
		<div id="content">
				<p class="dateStyle">{{latestDate}}</p>	
			<div id="list">
				<ul>
					<li v-for="item in items">
						<div class="wrap">
							<router-link :to="{path:'/detail',query:{ id:item.id}}" class="alist">
								<div class="list_litpic fl"><img v-bind:src="item.thumbnail" /></div>
								<div class="list_info">
									<h3>{{item.name}}</h3>
									<p>{{item.description}}</p>
								</div>
								<div class="clear"></div>
							</router-link>
						</div>
					</li>	
				</ul>
				<div class="list_loading"><i></i><span>thems努力加载中...</span></div>
			</div>
		</div>
</div>
</div>
</template>

<script>
import Banner from './Banner';
export default {
	name:'themes',
    data() {
           return{
						items:[],
						latestDate:'',
						// message: this.$route.query.id,
					 }
				},
				components:{
				 appBnner:Banner
				},
		created(){
            this.getData()
		},
		methods:{

    getData() {
     this.$http.get('/api/4/themes').then(response => {
				var timetest = response.body.others;
				this.items = timetest;
				console.log(timetest)
				// var y1 = timetest.substr(0,4);
				// var y2 = timetest.substr(4,2);
				// var y3 = timetest.substr(6,2);
        // this.latestDate=y1+'年'+y2+'月'+y3+'日';
				// this.items = response.data.stories;
      }).catch(error => {
        console.log("ddddd")
      })
		} ,
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
a {
  color: #42b983;
}
.dateStyle{
	width:100%;background-color: #248aee;height:30px;line-height:30px;text-align:center;color:#ffffff;
}
.list_info h3{
font-size: 18px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
    margin-bottom: 2px;
    color: #646464;
    display: block;
    /* overflow: hidden; */
}
</style>
