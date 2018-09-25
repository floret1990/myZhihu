<template>
<div id="header" class="head">
		<div class="wrap">
			<i class="menu_back"><a @click="$router.back(-1)"></a></i>
			<div class="title">
				<span class="title_d"><p>详情页</p></span>
				<div class="clear"></div>
			</div>
			<i class="menu_share"></i>
		</div>
	</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrap {
    position: relative;
    overflow: hidden;
}

</style>
