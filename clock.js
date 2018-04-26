function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);

		checkTime(s)
		checkTime(m)
		checkTime(h)

document.getElementById("hh").innerHTML= h; //":" +m+":"+s;
document.getElementById("mm").innerHTML= m; //":" +m+":"+s;
document.getElementById("ss").innerHTML= s; //":" +m+":"+s;
					var t = setTimeout(startTime, 1000);

}

function checkTime(i){
		 if(i<10){
		 	i="0"+i};
		 return i;
}



dateToday = new Date();
timenow = dateToday.getTime();
dateToday.setTime(timenow);
thehour=dateToday.getHours();
if(thehour>16) display = " Evening";
else if (thehour>12) display = " "+"Afternoon";
else display = " Morning";
var greeting = 
("&nbsp;"+"<span style='color:red; font-size:2em; border: 2px solid red; position: absolute; top: 35px;'>"+" Good" + display+ "!"+"</span>");
document.write(greeting);



