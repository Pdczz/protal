<template>
  <div class="content-wrap"><!--内容-->
    <div class="content">
      <div class="content-block about-content">
        <h2 class="title"><strong>关于异清轩</strong></h2>
        <p class="line-title">想要深入了解<span>异清轩？</span></p>
        <p>异清轩技术博客的		内容大概为网站前端和后端的技术，包括内容管理系统，文章内容有我自己的原创，也有其他网站转载过来的精品，如果我遇到好的资源会第一时间发布在本博客内。</p>
        <p>大家如果有好的文章好的技术请不要吝啬，欢迎前来投稿！</p>
        <p>如果有什么疑问或者需要投稿的请使用下方联系方式，或者留言来告诉我，收到后第一时间回复。</p>
      </div>
      <div class="content-block contact-content">
        <h2 class="title"><strong>联系异清轩</strong></h2>
        <p><span>站长QQ：</span><a href="tencent://message/?uin=1170461017\">117 046 1017</a></p>
        <p><span>交流群：</span><a href="">36839755</a></p>
        <p><span>站长信箱：</span><a href="mailto:admin@ylsat.com">admin@ylsat.com</a></p>
      </div>
      <div class="content-block comment">
        <h2 class="title"><strong>添加留言</strong></h2>
        <form action="message.php" method="post" class="form-inline" id="comment-form">
          <div class="comment-title">
            <div class="form-group">
              <label for="messageName">姓名：</label>
              <input type="text" name="messageName" class="form-control" id="messageName" placeholder="异清轩">
            </div>
            <div class="form-group">
              <label for="messageEmail">邮箱：</label>
              <input type="email" name="messageEmail" class="form-control" id="messageEmail" placeholder="admin@ylsat.com">
            </div>
          </div>
          <div class="comment-form">
            <textarea placeholder="在此处填写留言内容" name="messageContent"></textarea>
            <div class="comment-form-footer">
              <div class="comment-form-text">请先 <a href="javascript:;">登录</a> 或 <a href="javascript:;">注册</a>，也可匿名留言 </div>
              <div class="comment-form-btn">
                <button type="submit" class="btn btn-default btn-comment">提交留言</button>
              </div>
            </div>
          </div>
        </form>
        <div class="content-block comment-content">
          <h2 class="title"><strong>最新留言</strong></h2>
          <ul>
            <li><span class="text"><strong>异清轩站长</strong> (2015-10-18) 留言：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="text"><strong>异清轩编辑</strong> (2015-10-18) 留言：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="text"><strong>令狐冲</strong> (2015-10-18) 留言：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="text"><strong>任盈盈</strong> (2015-10-18) 留言：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="text"><strong>异清轩站长</strong> (2015-10-18) 留言：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
          </ul>
        </div>
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
