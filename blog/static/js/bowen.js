var vm = new Vue({
  el:'#post',
  data:{
    article_list:[],
    article:[],
    page_list:[],
    all:20,
    cur:1,
  },
  methods:{
    getData:function(){
      var self = this;
        reqwest({
          url:'/api/article/',
          type:'json',
          success:function(resp){
            console.log(resp);
            self.article_list = resp;
          },
          error:function(resp){
            console.log(resp)
          }
        })
    },
    getArticle:function(){
      var self = this;
      var id = window.location.href;
                console.log(id);
                id = id.slice(id.lastIndexOf("/article/")+9, id.lastIndexOf("/article/")+10);
                console.log(id);
      reqwest({
        url:'/api/article/' + id,
        type:'json',
        success:function(resp){
          console.log(resp);
          self.article = resp;
        },
        error:function(resp){
          console.log(resp)
        }
      })
    },
  },
  ready:function(){
    this.getData(),
    this.getArticle()
  }
});
