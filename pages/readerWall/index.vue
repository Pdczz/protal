<template>
  <div class="content-wrap"><!--内容-->
    <div class="content">
      <div class="content-block">
        <h2 class="title"><strong>读者</strong></h2>
        <div class="face-block">
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
          <span class="face" data-toggle="tooltip" data-placement="bottom" title="异清轩"><img src="images/icon/icon.png" alt=""></span>
        </div>
      </div>
      <div class="content-block comment">
        <h2 class="title"><strong>评论</strong></h2>
        <form action="comment.php" method="post" class="form-inline" id="comment-form">
          <div class="comment-title">
            <div class="form-group">
              <label for="commentName">昵称：</label>
              <input type="text" name="commentName" class="form-control" id="commentName" placeholder="异清轩">
            </div>
            <div class="form-group">
              <label for="commentEmail">邮箱：</label>
              <input type="email" name="commentEmail" class="form-control" id="commentEmail" placeholder="admin@ylsat.com">
            </div>
          </div>
          <div class="comment-form">
            <textarea placeholder="你的评论可以一针见血" name="commentContent"></textarea>
            <div class="comment-form-footer">
              <div class="comment-form-text">请先 <a href="javascript:;">登录</a> 或 <a href="javascript:;">注册</a>，也可匿名评论 </div>
              <div class="comment-form-btn">
                <button type="submit" class="btn btn-default btn-comment">提交评论</button>
              </div>
            </div>
          </div>
        </form>
        <div class="content-block comment-content">
          <h2 class="title"><strong>最新评论</strong></h2>
          <ul>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩编辑</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>令狐冲</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>任盈盈</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>任盈盈</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>任盈盈</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>异清轩站长</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 ...</span></li>
            <li><span class="face"><img src="images/icon/icon.png" alt=""></span> <span class="text"><strong>令狐冲</strong> (2015-10-18) 说：<br />
              欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等在这里可以看到网站前端和后端的技术等 ...</span></li>
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
