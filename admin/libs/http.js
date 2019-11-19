(function(w) {
  let ser_addr = "http://localhost:8080/api/v1";
  let url = {
    //   基地址
    ser_addr: ser_addr,
    user_login: ser_addr + "/admin/user/login",
    user_info: ser_addr + "/admin/user/info",
    user_detail: ser_addr + "/admin/user/detail",
    user_edit: ser_addr + "/admin/user/edit",
    user_list: ser_addr + "/admin/user/list",
    user_add: ser_addr + "/admin/user/add",
    user_search: ser_addr + "/admin/user/search",
    user_delete: ser_addr + "/admin/user/delete",
    user_query: ser_addr + "/admin/user/query",
    user_publish: ser_addr + "/admin/user/publish",
    user_info: ser_addr + "/admin/user/info",
    user_article: ser_addr + "/admin/user/article",
    user_category: ser_addr + "/admin/user/category",
    user_visit: ser_addr + "/admin/user/visit",
    user_pass: ser_addr + "/admin/user/pass",
    user_reject: ser_addr + "/admin/user/reject"
  };
  w.url = url;
})(window);
