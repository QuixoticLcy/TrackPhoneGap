var IMG1 = [];
var IMG2 = [];

var postion = [];
var Height = 360;
var Width = 480;

function simulationApp(X,Y){

	var template = [30,30,1];
	var location = [180,50];
	var range = [5,5];
	var	maxerror = 30*30*1*255;

	var startPointX1 = Math.max(1,(location[0] - range[0]));
	var startPointX2 = Math.min((Width - 30),(location[0] + range[0]));
	var startPointY1 = Math.max(1,(location[1] -range[1]));
	var startPointY2 = Math.min((Height- 30),(location[1]+range[1]));


	for (var i = startPointX1; i < startPointX2 + 1; i++) {
		for (var j = startPointY1; j < startPointY2 + 1; j++) {
			var error = 0;
			for (var m = i; m < i + 31; m++) {
				for (var n = j; i < j + 31; n++) {
					var gray1 = (X[i][j][0]*30 + X[i][j][1]*59 + X[i][j][2]*11 + 50) / 100;
					var gray2 = (Y[i][j][0]*30 + Y[i][j][1]*59 + Y[i][j][2]*11 + 50) / 100;
					error += Math.abs(gray1 - gray2);
				};
			};

			if (error <= maxerror) {
				postion = [m,n];
				maxerror = error;
				location = [i,j];
			};

		};
	};

};

function createIMG(X){
	for (var i = 0; i < 480; i++) {
		X[i] = [];
		for (var j = 0; j < 360; j++) {	
			X[i][j] = [];
			for (var k = 0; k < 3; k++) {
				  
				X[i][j][k] = Math.floor(Math.random() * 256);
				};	
			//X[i][j] =  Math.floor(Math.random() * 256);
		};
	};
};

/*function changeIMG(X){
	//for (var i = 0; i < 480; i++) {
	//	for (var j = 0; j < 360; j++) {
	return (X[i][j][0]*30 + X[i][j][1]*59 + X[i][j][2]*11 + 50) / 100;
			//X[i][j] =  Math.floor(Math.random() * 256);
	//	};
	//};

};*/

function start(){

/*	for (var i = 0; i < 51; i++) {
		IMG[i] = [];
		createIMG(IMG[i]);
	};
	*/

	var currentDate = new Date();
	var startDate = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	document.write("<h1>Start time: </h1>");
	document.write("<h1>"+ startDate +"</h1>");
	document.write(window.performance.now());

	//for (var i = 0; i < 51; i++) {
	//		changeIMG(IMG[i]);
	//};



	for (var i = 0; i < 1000000; i++) {
		simulationApp(IMG1,IMG2);
	};
	var currentDate1 = new Date();
	var endDate1 = currentDate1.getHours() + ":" + currentDate1.getMinutes() + ":" + currentDate1.getSeconds();
	document.write("<br>");
	document.write("<h1>End time: </h1>");
	document.write("<h1>"+endDate1+"</h1>");
	document.write(window.performance.now());
};


