<template>
  <div class="content-wrap">
    <div class="content">
      <div style="text-align: left" shadow="never" v-if="article">
        <div style="text-align: left">
          <span style="font-size: 20px;text-align: center"><strong>{{article.articleTitle}}</strong></span><br>
          <i class="el-icon-date" style="padding-top: 15px;text-align: center">{{article.articleDate}}</i><br>
          <div class="markdown-body">
            <div v-html="article.articleContentHtml"></div>
          </div>
        </div>
        <div class="post-copyright">
          <p>
            <span>本文标题：</span>{{article.articleTitle}}
          </p>
          <p>
            <span>文章作者：</span>塞万提斯2020
          </p>
          <p>
            <span>发布时间：</span>{{article.articleDate}}
          </p>
          <p>
            <span>最后更新：</span>{{article.articleDate}}
          </p>
          <p>
            <span>版权声明：</span>本博客所有文章除特别声明外，均采用 CC BY-NC-SA 3.0 CN 许可协议。转载请注明出处！
          </p>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "contentId",
        async asyncData({$axios, route}) {
            //服务端渲染
            let articles = await $axios('/article?id=' + route.params.id);
            return {
                article: articles.data
            }
        },
    }
</script>
<style scoped>
  .post-copyright {
    margin: 2em 0 0;
    padding: 0.5em 1.0em;
    border-left: 3px solid #FF1700;
    background-color: #F9F9F9;
    font-size: 0.93rem;
    line-height: 1.6em;
    word-break: break-all;
  }

  .post-copyright p {
    margin: 10px;
    font-size: 15px;
    line-height: 30px;
  }

  .post-copyright span {
    display: inline-block;
    width: 5.2em;
    color: #b5b5b5;
    font-weight: bold;
    font-size: 15px;
  }
</style>
<style>
  @import "../../static/css/markdown.css";
</style>
