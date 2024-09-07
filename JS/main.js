var menu=document.getElementById('menu');
var modeD=document.getElementById('modeD');
var modeL=document.getElementById('modeL');

var menuList=document.getElementById('menuList');
var closeBtn=document.getElementById('close');



//Display And Hide The navBar
menu.addEventListener('click',()=>{
      menuList.style.display='block';
})

closeBtn.addEventListener('click',()=>{
      
      if(menuList.style.display=='block'){
        menuList.style.display='none';
      }
})

//Color Theme

var body=document.body;
modeD.addEventListener('click',()=>{
      body.classList.add('dark');
      menuList.classList.add('dark');
        modeD.style.display='none';
        modeL.style.display='block';


})
modeL.addEventListener('click',()=>{
      body.classList.remove('dark');
      menuList.classList.remove('dark');

      modeL.style.display='none';
      
      modeD.style.display='block';

})