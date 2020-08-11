
//我们的服务
    $(function(){
      // 页面加载完成
      $(".svelist li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".svetab").hide()
        // 默认内容部分是隐藏的
        $(".svetab:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
     $(".svelist li").click(function() {

         $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

         $(this).addClass('on');    // 添加当前元素的样式

        });

     }); 
//服务流程概念
    $(function(){
      // 页面加载完成
      $(".process li").hover(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".probg").hide()
        // 默认内容部分是隐藏的
        $(".probg:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
//产品使用场景
    $(function(){
      // 页面加载完成
      $(".scenelist li").hover(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".sceneimg").hide()
        // 默认内容部分是隐藏的
        $(".sceneimg:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
     $(".scenelist li").hover(function() {

         $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

         $(this).addClass('on');    // 添加当前元素的样式

        });

     }); 