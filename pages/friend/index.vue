<template>
  <!--/超小屏幕可见-->
  <div class="content-wrap"><!--内容-->
    <div class="content">
      <div class="content-block friendly-content row">
        <h2 class="title"><strong>本站友链</strong></h2>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 百度 站点"><a href="">百度</a></span>
          <p>查看关于 本站 的文章查看关于 本站 的文章aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 新浪 站点"><a href="">新浪</a></span>
          <p>查看关于 异清轩 的文章查看关于 异清轩 的文章查看关于 异清轩 的文章查看关于 异清轩 的文章查看关于 异清轩 的文章</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 异步网络 站点"><a href="">异步网络</a></span>
          <p>查看关于 技术 的文章查看关于 技术 的文章查看关于 技术 的文章</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 爱Q生活网  站点"><a href="">爱Q生活网</a></span>
          <p>查看关于 博客 的文章查看关于 博客 的文章查看关于 博客 的文章查看关于 博客 的文章</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 技术  站点"><a href="">技术</a></span>
          <p>查看关于 技术 的文章查看关于 技术 的文章查看关于 技术 的文章</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 博客  站点"><a href="">博客</a></span>
          <p>查看关于 博客 的文章查看关于 博客 的文章查看关于 博客 的文章查看关于 博客 的文章</p>
        </div>
        <div class="col-md-4 col-xs-6"><span data-toggle="tooltip" data-placement="bottom" title="点击进入 本站  站点"><a href="">本站</a></span>
          <p>查看关于 本站 的文章查看关于 本站 的文章aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas</p>
        </div>
      </div>
      <div class="content-block comment">
        <h2 class="title"><strong>提交友链</strong></h2>
        <form action="message.php" method="post" class="form-inline" id="comment-form">
          <div class="comment-title">
            <div class="form-group">
              <label for="messageName">网站名称：</label>
              <input type="text" name="messageName" class="form-control" id="messageName" placeholder="异清轩技术博客">
            </div>
            <div class="form-group">
              <label for="messageEmail">网站地址：</label>
              <input type="email" name="messageEmail" class="form-control" id="messageEmail" placeholder="admin@ylsat.com">
            </div>
          </div>
          <div class="comment-form">
            <textarea placeholder="请填写网站服务内容" name="messageContent"></textarea>
            <div class="comment-form-footer">
              <div class="comment-form-text">请先 <a href="javascript:;">登录</a> 或 <a href="javascript:;">注册</a>，也可匿名提交友链 </div>
              <div class="comment-form-btn">
                <button type="submit" class="btn btn-default btn-comment">提交友链</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
