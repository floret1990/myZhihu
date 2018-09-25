<template>
			<div id="comment">
				<div class="comment_other">
					<h3></h3>
					<!-- <h4>全部评论: {{items.length}}条</h4> -->
					<div class="comdetail">
						 <span>评论总数:{{comentDetail.comments}}</span><span>点赞总数:{{comentDetail.popularity}}</span>
						 <span>短评论总数:{{comentDetail.short_comments}}</span><span>长评论总数:{{comentDetail.long_comments}}</span>
					</div>
					<div class="look">
						<span @click="short()"  class="comm">查看短评论</span>
						<span @click="long()" class="comm">查看长评论</span>
					</div>
				</div>
				<ul id="short" ref="shorttype">
					<li v-for="item,index in items" :key="index">
						<div class="pd5">
							<a class="avt fl" target="_blank" href="#"><img :src="item.avatar" /></a>
							<div class="comment_content">
								<h5>
									<div class="fl"><a class="comment_name" href="#">{{item.author}}</a><span>{{index}}和{{item.time}}天前</span></div>
									<div class="fr reply_this">[回复]</div>
									<div class="clear"></div>
								</h5>
								<div class="comment_p">
								<div class="comment_pct">{{item.content}}</div>
								<div v-show="items[index].reply_to" class="quote" v-if="items[index].reply_to">
									<div class="pd10"><span style="font-weight:bold;">{{items[index].reply_to.author}}</span><span style="color:#ff0000">回复</span><span style="font-weight:bold;">{{item.author}}</span>{{items[index].reply_to.content}}</div>
							  </div>
								</div>
							</div>
							<div class="clear"></div>
							<div class="comment_reply"></div>
						</div>
					</li>
        </ul>
				<ul id="long" ref="longtype">
					<li v-for="longitem,index in longitems">
						<div class="pd5">
							<a class="avt fl" target="_blank" href="#"><img :src="longitem.avatar" /></a>
							<div class="comment_content">
								<h5>
									<div class="fl"><a class="comment_name" href="#">{{longitem.author}}</a><span>{{index}}和{{longitem.time}}天前</span></div>
									<div class="fr reply_this">[回复]</div>
									<div class="clear"></div>
								</h5>
								<div class="comment_p">
								<div class="comment_pct">{{longitem.content}}</div>
								<div v-show="longitems[index].reply_to" class="quote" v-if="longitems[index].reply_to">
									<div class="pd10"><span style="font-weight:bold;">{{longitems[index].reply_to.author}}</span><span style="color:#ff0000">回复</span><span style="font-weight:bold;">{{item.author}}</span>{{longitems[index].reply_to.content}}</div>
							  </div>
								</div>
							</div>
							<div class="clear"></div>
							<div class="comment_reply"></div>
						</div>
					</li>
        </ul>
				<div class="pd5">
									</div>
			</div>
</template>

<script>
export default {
	name: 'Comment',
  data () {
    return {
			items: [],
			longitems:[],
			replyContent:'',
			replyAuthor:'',
			length:'',
		  comentDetail:''
     	// item2:'',
    }
	},
	created(){	
     this.getData(),this.getextra(),this.getlongData()
		},
		methods:{
    getData() {
    var comID = this.$parent.newsID;
     this.$http.get('/api/4/story/'+comID+'/short-comments').then(response => {
				 this.items = response.data.comments;
				 console.log(this.items)
      }).catch(error => {
        console.log("出现错误")
      })
		},
		  getlongData() {
    var comID = this.$parent.newsID;
     this.$http.get('/api/4/story/'+comID+'/long-comments').then(response => {
				 this.longitems = response.data.comments;
			
      //   this.item2 = this.items[index].reply_to;
		
      }).catch(error => {
        console.log("出现错误")
      })
		} ,
				getextra(){
 		 var comID = this.$parent.newsID;
		// var comID = 8509251;
     this.$http.get('/api/4/story-extra/'+comID).then(response => {
				// var mm = response.body.items;
        this.comentDetail =response.body;
			//  console.log(this.comentDetail)
      }).catch(error => {
        console.log("出现错误")
      })
		},
		short(){
		 this.$refs.shorttype.style.display = 'block';
		 this.$refs.longtype.style.display = 'none';
		},
		long(){
		 this.$refs.shorttype.style.display = 'none';
		 this.$refs.longtype.style.display = 'block';
		}
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
.comdetail,.look{
	margin-bottom:10px;border-bottom: 1px solid #e5e5e5;padding:10px;
}
.comm{
 padding:10px;background:#ff0000;color:#ffffff;
}
.selected{
background:#ffff00;
}
#short{
	display:block;
}
#long{
	display: none;
}
</style>
