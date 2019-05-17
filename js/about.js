// click arrow

document.getElementById('right').addEventListener('click',
    function showleft(){
        document.querySelector('.box').style.left ='-100%';
        document.querySelector('.box2').style.left ='33%';
    });


document.getElementById('left').addEventListener('click',
    function showright(){
        document.querySelector('.box2').style.left = "-100%";
        document.querySelector('.box').style.left = "33%";
    });


