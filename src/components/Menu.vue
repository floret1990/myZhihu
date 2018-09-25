<template>
<div id="menu">
		<div class="search_wrap">
			<form action="" method="get">
				<input type="text" name="search" class="search_input" placeholder="关键字查找" />
				<i class="reset_input"><i></i></i>
			</form>
		</div>
		<ul>
			<li class="nav_index menu_cur"><a href="index.html"><i></i><span>首页1</span><b></b><div class="clear"></div></a></li>
			<li class="nav_site"><a href="index.html"><i></i><span>设计师</span><b></b><div class="clear"></div></a></li>
			<li class="nav_help"><a href="index.html"><i></i><span>帮帮忙</span><b></b><div class="clear"></div></a></li>
			<li class="nav_about"><a href="index.html"><i></i><span>关于我们</span><b></b><div class="clear"></div></a></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
