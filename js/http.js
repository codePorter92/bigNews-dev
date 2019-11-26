(function(window) {
  var Base_url = "http://localhost:8080/api/v1";
  var url = {
    // 文章搜索
    Search: Base_url + "/index/search",
    // 文章类型
    Category: Base_url + "/index/category",
    // 热点图
    Hotpic: Base_url + "/index/hotpic",
    // 文章热门排行
    Rank: Base_url + "/index/rank",
    // 最新资讯
    Latest: Base_url + "/index/latest",
    // 最新评论
    Latest_comment: Base_url + "/index/latest_comment",
    // 焦点关注
    Attention: Base_url + "/index/attention",
    // 文章详细内容
    Article: Base_url + "/index/article",
    // 发表评论
    Post_comment: Base_url + "/index/post_comment",
    // 评论列表
    Get_comment: Base_url + "/index/get_comment"
  };
  window.url = url;
})(window);
