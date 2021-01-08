$('#reg').click(function () {
        if (localStorage.getItem('unname')==$('.input01').val()&&localStorage.getItem('pw')==$('#pw').val()){
            location.href = './index.html'
            sessionStorage.setItem('login',$('.input01').val()) //临时存储
            // sessionStorage.getItem('mima',$('#pw').val())
        }else{
            alert('请重新登录')
        } 
    })

 setLogin()
 function setLogin(){
        var usename=sessionStorage.getItem('login')
        if(usename){
            $('.real_login').html(`欢迎${usename}`)
        }else{
            $('.real_login').html(`登录`)
        }
      

 }