function second()
{
    let date= new Date();
    let second=date.getSeconds();
    let angle= (second*6)-90;
    let temp="rotate("+angle+"deg" +")";
    let x=document.getElementsByClassName('tick3');
    x[0].style.transform = temp;
}
setInterval(second,1000);
function minute()
{
    let date= new Date();
    let minute=date.getMinutes();
    let angle= (minute*6)-90;
    let temp="rotate("+angle+"deg" +")";
    let x=document.getElementsByClassName('tick2');
    x[0].style.transform = temp;
}
setInterval(minute,1000);
function hour()
{
    let date= new Date();
    let hour=date.getHours();
    if(hour>=12)
        hour=hour-12;
    let minute=date.getMinutes();
    minute=minute*(0.5);
    let angle= ((hour*30)+minute)-90;
    let temp="rotate("+angle+"deg" +")";
    let x=document.getElementsByClassName('tick1');
    x[0].style.transform = temp;
}
setInterval(hour,1000);
