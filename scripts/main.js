let myimg = document.querySelector('img');
let switchbutton = document.querySelector('button');
let userinfo = document.querySelector('h2')

myimg.onclick = function(){
    let imgclick = myimg.getAttribute('src');
    if(imgclick === 'images/1.jpg'){
        myimg.setAttribute('src','images/2.jpg');
    }else{
        myimg.setAttribute('src','images/1.jpg');
    }
}

function setuser(){
    let myname = prompt('please input your username')
    if (myname==null){
        return setuser()
    }
    localStorage.setItem('name',myname);
    userinfo.textContent = myname;
}

if(!localStorage.getItem('name')){
    setuser()
}else{
    let myname = localStorage.getItem('name');
    userinfo.textContent = myname;
}

switchbutton.onclick = function(){
    setuser();
}