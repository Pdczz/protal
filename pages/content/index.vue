<template>
  <div class="content-wrap"><!--内容-->
    <div class="content">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> <!--banner-->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item active"> <a href="content.html" target="_blank"><img src="images/img1.jpg" alt="" /></a>
            <div class="carousel-caption"> 欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 </div>
            <span class="carousel-bg"></span> </div>
          <div class="item"> <a href="content.html" target="_blank"><img src="images/img2.jpg" alt="" /></a>
            <div class="carousel-caption"> 欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 </div>
            <span class="carousel-bg"></span> </div>
          <div class="item"> <a href="content.html" target="_blank"><img src="images/img3.jpg" alt="" /></a>
            <div class="carousel-caption"> 欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 </div>
            <span class="carousel-bg"></span> </div>
        </div>
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
      <!--/banner-->
      <!--<div class="content-block hot-content hidden-xs">
        <h2 class="title"><strong>本周热门排行</strong></h2>
        <ul>
          <li class="large"><a href="content.html" target="_blank"><img src="images/img3.jpg" alt="">
            <h3> 欢迎来到异清轩技术博客 </h3>
          </a></li>
          <li><a href="content.html" target="_blank"><img src="images/logo.jpg" alt="">
            <h3> 欢迎来到异清轩技术博客,在这里可以看到网站前端和后端的技术等 </h3>
          </a></li>
          <li><a href="content.html" target="_blank"><img src="images/img2.jpg" alt="">
            <h3> 欢迎来到异清轩技术博客,在这里可以看到网站前端和后端的技术等 </h3>
          </a></li>
          <li><a href="content.html" target="_blank"><img src="images/img1.jpg" alt="">
            <h3> 欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 </h3>
          </a></li>
          <li><a href="content.html" target="_blank"><img src="images/logo.jpg" alt="">
            <h3> 欢迎来到异清轩技术博客，在这里可以看到网站前端和后端的技术等 </h3>
          </a></li>
        </ul>
      </div>-->
      <div class="content-block new-content">
        <h2 class="title"><strong>最新文章</strong></h2>
        <div class="row">
          <div v-for="article in articles" :key="article.id">
            <div class="news-list">
              <div class="news-img col-xs-5 col-sm-5 col-md-4"> <a target="_blank" href=""><img :src="article.articleCover" alt=""> </a> </div>
              <div class="news-info col-xs-7 col-sm-7 col-md-8">
                <dl>
                  <dt>
                    <router-link  :to="{name:'content-id',params:{id: article.id}}">{{article.articleTitle}}</router-link>

                  </dt>
                  <dd><span class="name"><a href="" title="由 异清轩 发布" rel="author">异清轩</a></span> <span class="identity"></span> <span class="time"> {{article.articleDate}} </span></dd>
                  <dd class="text overtext">{{article.articleAbstract}}</dd>
                </dl>
                <div class="news_bot col-sm-7 col-md-8"> <span class="tags visible-lg visible-md"> <a href="">本站</a> <a href="">异清轩</a> </span> <span class="look"> 共 <strong>2126</strong> 人围观，发现 <strong> 12 </strong> 个不明物体 </span> </div>
              </div>
            </div>
          </div>

        </div>
        <!--<div class="news-more" id="pagination">
          <a href="">查看更多</a>
        </div>-->
        <div class="quotes" style="margin-top:15px"><span class="disabled">首页</span><span class="disabled">上一页</span><span class="current">1</span><a href="">2</a><a href="">下一页</a><a href="">尾页</a></div>
      </div>
    </div>
  </div>

</template>

<script>
    import * as api from "../../api/api";
    export default {
        name: "index",
        watchQuery: true,
        async asyncData({$axios, redirect,route}) {
            //服务端渲染
            let pid = route.query.page==undefined ? '1':route.query.page;
            let params={pid:pid}
            return api.getArticleList({params}).then(res=>{
                return {
                    articles:res.items,
                    total:res.total
                }
            }).catch(err=>{
                return {
                    articles:[],
                    total:0
                }
            });
        },
        data() {
            return {
                pageSize: 7,
                keywords: '',
                currentPage: 1,

            }
        },
        methods: {


            getContent(articleContentMd) {
                return articleContentMd.replace(/<\/?.+?>/g, '').replace(/ /g, '')
            },

        },
        mounted(){
            let elementsByName = document.getElementsByName("carousel");
            console.log(elementsByName)

        },
        computed:{
            totalPage () {
                return Math.ceil(this.total / 9)
            },
        }
    }
</script>

<style scoped>
 .overtext{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
}
</style>
