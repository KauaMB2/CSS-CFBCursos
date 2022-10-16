var x,y,z,n,ny,rotYINT;
n=0;
ny=0;
console.log("Iniciado");
function rotateYDIV(){
	y=document.getElementById("dv1");
	clearInterval(rotYINT);
	rotYINT=setInterval("startYRotate()",10);
}
function startYRotate(){
	ny=ny+1;
	y.style.transform="rotateY("+ny+"deg)";
	if(ny==100||ny>=360){
		clearInterval(rotYINT);
		if (ny>=360)(ny=0)
	}

}
