/*
* @Author: ZX
* @Date:   2018-09-09 18:16:07
* @Last Modified by:   ZX
* @Last Modified time: 2018-10-28 20:07:06
*/
window.onload=function(){
	let payMoney=document.querySelector(".payMoney");
	let main=document.querySelector(".main");
	let center=document.querySelector(".center");
	let floor=document.querySelector(".floor");
	let footer=document.querySelector("footer");
	// console.log(payMoney,main,center,floor,footer);
	payMoney.onclick=function(){
		main.style.display="block";
		center.style.display="none";
		floor.style.display="none";
		footer.style.display="none";

	}
	let right=document.querySelectorAll(".right");
	let right1=document.querySelectorAll(".right1");
	// console.log(right,right1);

	for(let i=0;i<right.length;i++){
		right[i].onclick=function(){
			for(let j=0;j<right.length;j++){
			right1[j].style.display="none";
			}
			right1[i].style.display="block";
			// window.open("finger.html");
			location.href="finger.html";
		}
	}




}

