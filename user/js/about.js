// click arrow

document.getElementById('right').addEventListener('click',
    function showleft(){
        document.querySelector('.box2').style.left = "33%";
        document.querySelector('.box').style.right = '-100%';
    });
document.getElementById('left').addEventListener('click',
    function showright(){
        document.querySelector('.box2').style.left = "-100%";
        document.querySelector('.box').style.right = "33%";
    });


// click arrow jquery 
