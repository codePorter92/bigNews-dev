(function(w) {
  let ser_addr = "http://localhost:8080/api/v1";
  let url = {
    //   基地址
    ser_addr: ser_addr,
    // 用户登录
    user_login: ser_addr + "/admin/user/login",
    // 获取用户信息
    user_info: ser_addr + "/admin/user/info",
    // 获取用户详情
    user_detail: ser_addr + "/admin/user/detail",
    // 编辑用户信息
    user_edit: ser_addr + "/admin/user/edit",
    // 文章类别
    category_list: ser_addr + "/admin/category/list",
    // 新增文章类别
    category_add: ser_addr + "/admin/category/add",
    // 根据id查询指定文章类别
    category_search: ser_addr + "/admin/category/search",
    // 编辑文章类别
    categoty_edit: ser_addr + "/admin/categoty/edit",
    // 删除文章类别
    category_delete: ser_addr + "/admin/category/delete",
    // 文章搜索
    article_query: ser_addr + "/admin/article/query",
    // 发布文章
    article_publish: ser_addr + "/admin/article/publish",
    // 根据id获取文章信息
    article_search: ser_addr + "/admin/article/search",
    // 文章编辑
    article_edit: ser_addr + "/admin/article/edit",
    // 删除文章
    article_delete: ser_addr + "/admin/article/delete",
    // 获取统计数据
    data_info: ser_addr + "/admin/data/info",
    // 日新增文章数量统计
    data_article: ser_addr + "/admin/data/article",
    // 各类型文章数量统计
    data_category: ser_addr + "/admin/data/category",
    // 日文章访问量
    data_visit: ser_addr + "/admin/data/visit",
    // 文章评论搜索
    comment_search: ser_addr + "/admin/comment/search",
    // 评论审核通过
    comment_pass: ser_addr + "/admin/comment/pass",
    // 评论审核不通过
    comment_reject: ser_addr + "/admin/comment/reject"
  };
  w.url = url;
})(window);
