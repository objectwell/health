function ajaxRequest(url, method, param, callBack) {
    var pathurl = url; //'/rand/'+Math.random(1);
    var currentAjax = $.ajax({
        type: method || 'GET',
        url: pathurl,
        data: param || {},
        dataType: 'json',
        contentType: 'application/json',
        timeout: 0,
        success: function (data) {
            //回调函数
            callBack(data);
        }
       
    });
    return currentAjax;
}
// 切换显示隐藏栏目
$("body").on("click", ".classify", function () {
    if ($(this).hasClass("active")) {
        $(this).next().slideUp();
        $(this).find('.next').css('transform', 'rotateX(180deg)');
        $(this).removeClass("active")
    } else {
        $(this).next().slideDown();
        $(this).find('.next').css('transform', 'rotateX(0deg)');
        $(this).addClass("active")
    }
});
