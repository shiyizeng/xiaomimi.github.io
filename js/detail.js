$('.search_nav>ul>li>a').on('mouseenter', function () {
    $(this).siblings('.items').stop().slideDown()

})
$('.search_nav>ul>li>a').on('mouseleave', function () {
    $(this).siblings('.items').stop().slideUp()

})

$('.aj_inp').click(function () {
    $('.search_ul').empty()   //清空ul里面所有内容
    $.ajax({
        url: './search.json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (index, item) {
                $('.search_ul').append(`<li><a href="#">${item.name}</a></li> `)
            })
        }
    })
})






$('.select_color ul li,.select_banben ul li').click(function () {
    $(this).css({
        'color': '#ff6700',
        'borderColor': '#ff6700'
    }).siblings().css({
        'color': '#333',
        'borderColor': '#ccc'
    })
})






//点击切换不同的颜色
$('.color_purple').click(function () {
    $('.purple').css('display', 'block')
    $('.gold').css('display', 'none')
    $('.white').css('display', 'none')
    $('.blue').css('display', 'none')
})

$('.color_gold').click(function () {
    $('.purple').css('display', 'none')
    $('.gold').css('display', 'block')
    $('.white').css('display', 'none')
    $('.blue').css('display', 'none')
})

$('.color_blue').click(function () {
    $('.purple').css('display', 'none')
    $('.blue').css('display', 'block')
    $('.white').css('display', 'none')
    $('.gold').css('display', 'none')
})

$('.color_white').click(function () {
    $('.purple').css('display', 'none')
    $('.blue').css('display', 'none')
    $('.white').css('display', 'block')
    $('.gold').css('display', 'none')
})

//   点击的时候换跳转购物车页面
$('.btnbtn').click(function () {
    location.href = './cart.html'
})


// 打算把数据存储在本地存储的cart这个键里面，值的格式是:[{},{},{}]
// 每个对象是一个商品
// 公共方法
function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr) {

    localStorage.setItem('cart', JSON.stringify(arr))
}
// 点击加入购物车

//获取点击的颜色



$('.select_color ul li,.select_banben ul li,.content_left a img').click(function () {
 console.log($(this).text());
    // $('.money_left').text('')
    //没成功显示  但是能获取
    //    $('.money_left').text(`${$('.select_color ul li').text()},${$('.select_banben ul li').text()}`)
})


//获取点击的商品
var p_color
var p_banben
var p_img
var p_price
var p_num
var p_old_price
$('.select_color ul li').click(function(){
   p_color=$(this).text()
   p_img=$(this).data('img')
   p_num=$(this).data('num')
  $('.name_name').text(`${p_color}`)

})

$('.select_banben ul li').click(function(){
    p_banben=$(this).text()
    p_price=$(this).data('price')
    p_old_price=$(this).data('old_price')
    $('.version_v').text(`${p_banben}`)
    $('.new_price').text(`${p_price}`)
    $('.total_moneny').text(`${p_price}`)
    $('old_price').text(`${p_old_price}`)
 })


//存入本地存储
$('.btnbtn').click(function () {
    var newProduct = {
        product_color: p_color,
        product_version:p_banben,
        product_img:p_img,
        product_price:p_price,
        product_num:p_num,
    };
    // 先获取原来的商品列表数组
    var productList = getCart();
    // 把新商品添加进去
    productList.push(newProduct);//如果有同id商品，不能直接push，要把num增加
    // 存回本地存储
    setCart(productList)
})

// 用户点击+修改当前商品的数量(这里运用了事件委托)
    $('tbody').on('click','.add',function(){
    // console.log($(this).siblings('span').eq(1).text());
    // console.log(parseInt($(this).siblings('span').eq(1).text()) - (-1));
  
    $(this).siblings('span').eq(1).text(`${$(this).siblings('span').eq(1).text()-(-1)}`)
    })

// 用户点击-修改当前商品的数量
$('tbody').on('click', '.cut', function () {
    //     $(this).siblings('span').eq(1).text()
    // console.log($(this).siblings('span').eq(0).text());
    //    console.log(parseInt($(this).siblings('span').eq(0).text())-1);
    $(this).siblings('span').eq(0).text(`${parseInt($(this).siblings('span').eq(0).text()) - 1}`)
    // if ($(this).siblings('span').eq(0).text() <= 0) {
    //     $('tbody').hide();
    //     $('thead').hide();
    //     $('h2').show();
    // }
    if ($(this).siblings('span').eq(0).text() < 0){
        if(confirm('是否删除此商品')){
            $(this).parents('tr').remove()
        }else{
            $(this).siblings('span').eq(0).text(0)
        }   
    }
})
//用户点击del 清空当前商品的数量
$('tbody').on('click', '.del', function () {

    $(this).parents('tr').remove()
    
})