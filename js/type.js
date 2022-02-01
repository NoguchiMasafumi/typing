
  myCnt = 0;
  myTim = setInterval("myTimer()",1000);



function myTimer(){
  myCnt = myCnt+1;
  document.form1.myFormSec.value = myCnt;
  if (myCnt == 3600){
    clearInterval(myTim);
 }
}

document.onkeyup=keyp; 



document.onkeydown = function(e) { 
if (e != null) {
keycode = e.which;
} else {
keycode = event.keyCode; 
} 
keyp;
if (keycode == 13) { 
var iiid =document.getElementById("spq").value;
var iid =document.getElementById("atxt").value;
var nttt=document.getElementById("myFormSec").value;
var sttt=document.getElementById("qtm").value;
var wwlen=document.getElementById("wlen").value;
var nscor=document.getElementById("scor").value;

if(iiid==iid){
	document.form1.atxt.value="";
	var nhs=parseInt(nttt)-parseInt(sttt)
		if(nhs==0){
		var nwh=parseInt(wwlen)
		}else{
		var nwh=parseInt(wwlen)/nhs
		}

var bosc=document.getElementById("lvv").value;
if((parseInt(bosc)-(parseInt(parseInt(bosc)/10)*10))==0){
	var ppl=0;}else{
	var ppl=Math.floor(nwh)*100;}


	if(parseInt(ppl)<0){ppl=0}

if((parseInt(bosc)-(parseInt(parseInt(bosc)/10)*10))==0){

	var lv5h=parseInt(nscor)+100}else
{	var lv5h=parseInt(nscor)+ parseInt(ppl)+(parseInt(wwlen)*10)}
	if(lv5h<1000){}else{
//********LV決定**********
	document.form1.lvv.value=parseInt(lv5h/1000)+1}
		for(var i=nscor; i<=lv5h; i=parseInt(i)+10){
		document.form1.scor.value=i;
		if(i=="0"){}else if((parseInt(i)-(parseInt(parseInt(i)/5000)*5000))==0){
		document.form1.pas1.value=parseInt(document.getElementById("pas1").value)+3;
		}
		//forの閉めカッコ
		}
tes();
}
}
} 
	




function spps(){
var pasc1=document.getElementById("pas1").value;
if(pasc1=="0"){
document.form1.atxt.focus();
}else{
document.form1.pas1.value=(parseInt(pasc1)-1);
var iiid =document.getElementById("spq").value;
document.form1.atxt.value=iiid;
var iid =document.getElementById("atxt").value;
var nttt=document.getElementById("myFormSec").value;
var sttt=document.getElementById("qtm").value;
var wwlen=document.getElementById("wlen").value;
var nscor=document.getElementById("scor").value;

if(iiid==iid){
	document.form1.atxt.value="";
	var nhs=parseInt(nttt)-parseInt(sttt)
		if(nhs==0){
		var nwh=parseInt(wwlen)
		}else{
		var nwh=parseInt(wwlen)/nhs
		}


var bosc=document.getElementById("lvv").value;
if((parseInt(bosc)-(parseInt(parseInt(bosc)/10)*10))==0){
	var ppl=0;}else{
	var ppl=Math.floor(nwh)*100;}


	if(parseInt(ppl)<0){ppl=0}
if((parseInt(bosc)-(parseInt(parseInt(bosc)/10)*10))==0){

	var lv5h=parseInt(nscor)+100}else
{	var lv5h=parseInt(nscor)+ parseInt(ppl)+(parseInt(wwlen)*10)}

	if(lv5h<1000){}else{
//********LV決定**********
	document.form1.lvv.value=parseInt(lv5h/1000)+1}
		for(var i=nscor; i<=lv5h; i=parseInt(i)+10){
		document.form1.scor.value=i;
		if(i=="0"){}else if((parseInt(i)-(parseInt(parseInt(i)/5000)*5000))==0){
		document.form1.pas1.value=parseInt(document.getElementById("pas1").value)+3;
		}
		//forの閉めカッコ
		}
tes();

}
}
}




function sclvsp(){
}





function tes(){
var fnts2=document.getElementById("fnts").value;
var quest=document.getElementById("quest").value;
var quest=quest.replace(/、/g,' ')
var quest=quest.replace(/^\s+|\s+$/g,'')
var quest=quest.replace(/^\t+|\t+$/g,'')
var quest=quest.replace(/ +/g,' ')



var sp=quest.split(/\s+/);
n = Math.floor(Math.random()*(sp.length-1));


//for(i=0;i<(sp.length-1);i++){
//document.write(sp[i]+"<br>");
//}




if(sp[n]==""||sp[n]==null){tes();
}else{

document.form1.tqs.value=quest.length;
document.form1.spc.value=sp.length;
document.form1.nwod.value=n;


var bosc=document.getElementById("lvv").value;
if((parseInt(bosc)-(parseInt(parseInt(bosc)/10)*10))==0){
//******ボス戦のとき
if(sp[n].length<40){tes();}else{
document.form1.wlen.value=(sp[n].replace(/^\s+|\s+$/g,'').replace(/ +/g,' ')).length;
document.form1.spq.value=sp[n].replace(/^\s+|\s+$/g,'').replace(/ +/g,' ');
document.form1.qtm.value=(myCnt);
//document.form1.spq.value=sp[n].replace(/\s+/g,"");
document.form1.atxt.value="";
//document.form1.spq.style.fontSize=document.getElementById("fnts").value+"px";
//document.write("'"+document.getElementById("fnts").value+"px'");
//document.form1.spq.style.fontSize='30px'
document.form1.atxt.style.fontSize=document.getElementById("fnts").value+"px";
document.getElementById("cspq").style.fontSize=document.getElementById("fnts").value+"px";
//document.form2.crs_flight_exp.style.background="#ffffff";
var sht=document.getElementById("spq").value;



//*******************************************************　cspq処理
var sht=sht.replace(/\</g,"&lt;")
document.getElementById("cspq").innerHTML=(sht)
document.form1.atxt.focus();
}

//****ボス戦じゃないとき
}else

if(sp[n].length>40){tes();}else{
document.form1.wlen.value=(sp[n].replace(/^\s+|\s+$/g,'').replace(/ +/g,' ')).length;
document.form1.spq.value=sp[n].replace(/^\s+|\s+$/g,'').replace(/ +/g,' ');
document.form1.qtm.value=(myCnt);
document.form1.atxt.value="";
document.form1.spq.style.fontSize=document.getElementById("fnts").value+"px";
document.form1.atxt.style.fontSize=document.getElementById("fnts").value+"px";
document.getElementById("cspq").style.fontSize=document.getElementById("fnts").value+"px";
var sht=document.getElementById("spq").value;


//*******************************************************　cspq処理
var sht=sht.replace(/\</g,"&lt;")
document.getElementById("cspq").innerHTML=(sht)
document.form1.atxt.focus();
}







}
//大元カッコ
}




function keyp(){
var aa2=document.getElementById("spq").value;
var bb2=document.getElementById("atxt").value;
var aalen=aa2.length;
var bblen=bb2.length;
if(bblen==0){}else{
	for(i=0;i<bblen;i++)
	{

	haa=aa2.substr(i,1)
	hbb=bb2.substr(i,1)
		if(haa==hbb){

var sht=document.getElementById("spq").value;
//*******************************************************　cspq処理
var sht=sht.replace(/\</g,"&lt;")

document.getElementById("cspq").innerHTML=(sht)
		}else


			{
var sht2=document.getElementById("spq").value;
//*******************************************************　cspq処理
document.getElementById("cspq").innerHTML=((sht2.substring(0,i)).replace(/\</g,"&lt;")+"<span style='color:#ffc5c4;'>"+(sht2.substr(i)).replace(/\</g,"&lt;")+"</span>");
break;
			}


	} 
}
}






function pps(){
var pasc1=document.getElementById("pas1").value;
if(pasc1=="0"){
document.form1.atxt.focus();
}else{
document.form1.pas1.value=(parseInt(pasc1)-1);
tes();
}
}