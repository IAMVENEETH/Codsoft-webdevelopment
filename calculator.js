function dis(v)
{
document.getElementById("txt").value+=v;
}
function clr()
{
document.getElementById("txt").value="";
}
function calc()
{let x=document.getElementById("txt").value;
let y=eval(x);
document.getElementById("txt").value=y;
}