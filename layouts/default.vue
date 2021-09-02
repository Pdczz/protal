<template>
  <div>
    <section class="container "><!--user-select-->
      <header>
        <div class="hidden-xs header"><!--超小屏幕不显示-->
          <h1 class="logo"> <a href="index.html" title="异清轩技术博客 - POWERED BY WY ALL RIGHTS RESERVED"></a> </h1>
          <ul class="nav hidden-xs-nav">
            <li class="active">
              <nuxt-link :to="{name:'content'}"><span class="glyphicon glyphicon-home"></span>网站首页</nuxt-link>
<!--              <a href="index.html"><span class="glyphicon glyphicon-home"></span>网站首页</a>-->
            </li>
            <li><a href=""><span class="glyphicon glyphicon-erase"></span>网站前端</a></li>
            <li><a href=""><span class="glyphicon glyphicon-inbox"></span>后端技术</a></li>
            <li><a href=""><span class="glyphicon glyphicon-globe"></span>管理系统</a></li>
            <li>
              <nuxt-link :to="{name:'about'}"><span class="glyphicon glyphicon-home"></span>关于我们</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'friend'}"><span class="glyphicon glyphicon-home"></span>友情链接</nuxt-link>
            </li>
          </ul>
          <div class="feeds"> <a class="feed feed-xlweibo" href="" target="_blank"><i></i>新浪微博</a> <a class="feed feed-txweibo" href="" target="_blank"><i></i>腾讯微博</a> <a class="feed feed-rss" href="" target="_blank"><i></i>订阅本站</a> <a class="feed feed-weixin" data-toggle="popover" data-trigger="hover" title="微信扫一扫" data-html="true" data-content="<img src='images/weixin.jpg' alt=''>" href="javascript:;" target="_blank"><i></i>关注微信</a> </div>
          <div class="wall"><a href="readerWall.html" target="_blank">读者墙</a> | <a href="tags.html" target="_blank">标签云</a></div>
        </div>
        <!--/超小屏幕不显示-->
        <div class="visible-xs header-xs"><!--超小屏幕可见-->
          <div class="navbar-header header-xs-logo">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-xs-menu" aria-expanded="false" aria-controls="navbar"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
          </div>
          <div id="header-xs-menu" class="navbar-collapse collapse">
            <ul class="nav navbar-nav header-xs-nav">
              <li class="active"><a href="index.html"><span class="glyphicon glyphicon-home"></span>网站首页</a></li>
              <li><a href=""><span class="glyphicon glyphicon-erase"></span>网站前端</a></li>
              <li><a href=""><span class="glyphicon glyphicon-inbox"></span>后端技术</a></li>
              <li><a href=""><span class="glyphicon glyphicon-globe"></span>管理系统</a></li>
              <li><a href="about.html"><span class="glyphicon glyphicon-user"></span>关于我们</a></li>
              <li><a href="friendly.html"><span class="glyphicon glyphicon-tags"></span>友情链接</a></li>
            </ul>
            <form class="navbar-form" action="search.php" method="post" style="padding:0 25px;">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="请输入关键字">
                <span class="input-group-btn">
            <button class="btn btn-default btn-search" type="submit">搜索</button>
            </span> </div>
            </form>
          </div>
        </div>
      </header>
      <!--/超小屏幕可见-->

      <Nuxt/>
      <!--/内容-->
      <aside class="sidebar visible-lg"><!--右侧>992px显示-->
        <div class="sentence"> <strong>每日一句</strong>
          <h2>2015年11月1日 星期日</h2>
          <p>你是我人生中唯一的主角，我却只能是你故事中的一晃而过得路人甲。</p>
        </div>
        <div id="search" class="sidebar-block search" role="search">
          <h2 class="title"><strong>搜索</strong></h2>
          <form class="navbar-form" action="search.php" method="post">
            <div class="input-group">
              <input type="text" class="form-control" size="35" placeholder="请输入关键字">
              <span class="input-group-btn">
          <button class="btn btn-default btn-search" type="submit">搜索</button>
          </span> </div>
          </form>
        </div>
        <div class="sidebar-block recommend">
          <h2 class="title"><strong>热门推荐</strong></h2>
          <ul>
            <li><a target="_blank" href=""> <span class="thumb"><img src="images/icon/icon.png" alt=""></span> <span class="text">异清轩技术博客的SHORTCUT和ICON图标 ...</span> <span class="text-muted">阅读(2165)</span></a></li>
            <li><a target="_blank" href=""> <span class="thumb"><img src="images/icon/icon.png" alt=""></span> <span class="text">异清轩技术博客的SHORTCUT和ICON图标 ...</span> <span class="text-muted">阅读(2165)</span></a></li>
            <li><a target="_blank" href=""> <span class="thumb"><img src="images/icon/icon.png" alt=""></span> <span class="text">异清轩技术博客的SHORTCUT和ICON图标 ...</span> <span class="text-muted">阅读(2165)</span></a></li>
            <li><a target="_blank" href=""> <span class="thumb"><img src="images/icon/icon.png" alt=""></span> <span class="text">异清轩技术博客的SHORTCUT和ICON图标 ...</span> <span class="text-muted">阅读(2165)</span></a></li>
            <li><a target="_blank" href=""> <span class="thumb"><img src="images/icon/icon.png" alt=""></span> <span class="text">异清轩技术博客的SHORTCUT和ICON图标 ...</span> <span class="text-muted">阅读(2165)</span></a></li>
          </ul>
        </div>
        <div class="sidebar-block comment">
          <h2 class="title"><strong>最新评论</strong></h2>
          <ul>
            <li data-toggle="tooltip" data-placement="top" title="站长的评论"><a target="_blank" href=""><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
          欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></a></li>
            <li data-toggle="tooltip" data-placement="top" title="读者墙上的评论"><a target="_blank" href=""><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
          欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></a></li>
            <li data-toggle="tooltip" data-placement="top" title="异清轩技术博客的SHORTCUT和ICON图标...的评论"><a target="_blank" href=""><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
          欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></a></li>
            <li data-toggle="tooltip" data-placement="top" title="异清轩技术博客的SHORTCUT和ICON图标...的评论"><a target="_blank" href=""><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
          欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></a></li>
            <li data-toggle="tooltip" data-placement="top" title="异清轩技术博客的SHORTCUT和ICON图标...的评论"><a target="_blank" href=""><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
          欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></a></li>
          </ul>
        </div>
      </aside>
      <!--/右侧>992px显示-->
      <footer class="footer">POWERED BY &copy;<a href="http://www.htmlsucai.com">异清轩 YLSAT.COM</a> ALL RIGHTS RESERVED &nbsp;&nbsp;&nbsp;<span><a href="http://www.htmlsucai.com" target="_blank">豫ICP备15026801号-1</a></span> <span style="display:none"><a href="">网站统计</a></span> </footer>
    </section>

  </div>
</template>

<script>

  export default {

  }
</script>



<style>

</style>
