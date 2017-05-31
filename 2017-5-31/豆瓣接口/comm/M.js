function Modle(val,num){
  $.ajax({
    url:'http://api.douban.com/v2/movie/search?callback=?',
    dataType:'jsonp',
    data:{
      q:val,
      start:num,
      count:12
    },
    success:function(data){
    	//len是 页数，页码里面有total总共多少个，也有count，也可以自己设置count，count代表一页有多少个
      data.len = Math.ceil(data.total/data.count);
      //console.log(data);
      var html = template('temp',data);
      $('#app').html(html);
    }
  });
}