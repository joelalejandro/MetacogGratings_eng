function create_stim(context1,context2,trial_stimval, callback)
{
var theta = Math.random() * 360;    				       // grating orientation
var phase = Math.random();          				       // phase (0 -> 1)
var phaseRad = (phase * 2 * Math.PI);      				   // convert to radians: 0 -> 2*pi
var thetaRad = (theta / 360) * 2 * Math.PI;      	       // convert theta (orientation) to radians

DataToSave.thetaRad 	= thetaRad;
DataToSave.phaseRad 	= phaseRad;

	
var imageData1 = context1.getImageData(1, 1, imSize,imSize);
var data1 = imageData1.data;

var imageData2 = context2.getImageData(1, 1, imSize,imSize);
var data2 = imageData2.data;

var X = []; 											  	// linear ramp	
for (var i = 0; i <= imSize; i++) { X.push(i);} 		 	// X = 1:imSize;

var X0 = [];
var sinX = [];
for (var i = 1; i <= imSize; i++) { 
	 X0[i] = (X[i] / imSize) - .5;          				// rescale X -> -.5 to .5
}

var Xf =[];
for (var i = 0; i <= imSize; i++) { 
	Xf[i] = X0[i] * freq * 2* Math.PI;        			    // convert X to radians: 0 -> ( 2*pi * frequency)
	}

var Xm = [];
var Ym = [];
var Xt = [];
var Yt = [];
var XYt = [];
var XYf = [];
var grating = [];
var s = sigma / imSize;        					             // gaussian width as fraction of imageSize


var gauss = [];
var gabor = [];      
var noise1 = [];    
var noise2 = [];    
var noise3 = [];
var Estim1 = [];
var Estim2 = [];
var mask = [];
var contrast = trial_stimval;


var conter = -1;
for(var i = 0; i < imSize; i++){	
    for(var j = 0; j < imSize; j++){ 
        conter 			= conter + 1;
        Xm		 		= X0[j];    
        Ym		 		= X0[i];    
    	Xt				= Xm * Math.cos(thetaRad);                // compute proportion of Xm for given orientation
        Yt      		= Ym * Math.sin(thetaRad);                // compute proportion of Ym for given orientation
        XYt     		= Xt + Yt;                                // sum X and Y components
        XYf             = XYt * freq * 2* Math.PI;   		      // convert to radians and scale by frequency
        grating         = Math.sin( XYf + phaseRad);              // make 2D sinewave

        gauss		 	= Math.exp( -((Math.pow(Xm,2) + Math.pow(Ym,2)) / (2 * Math.pow(s,2))) ); // formula for 2D gaussian
        gabor		 	= grating * gauss;
        noise1		 	= ((Math.random() - .5) / .5);
        noise2		 	= ((Math.random() - .5) / .5);

		Estim1[conter]  = (gabor * contrast) + noise1;  		  // check maniscalco procedure. 
		Estim1[conter]  = (Estim1[conter] / 2) * FinalContrast;   // to make it -1 1
		if (isNaN(Estim1[conter])){Estim1[conter] = 0;}

		Estim2[conter]  = noise2 * FinalContrast; 

		mask[conter]	= (gauss > CIRC);
        Estim1[conter]  = Estim1[conter] * mask[conter];
		Estim2[conter]  = Estim2[conter] * mask[conter];
	}
}
var ShowFlag =0;
var cc = -1;
for(var i = 0; i <data1.length; i += 4) 
{
   	cc = cc + 1;
   	if (mask[cc] != 0) {
        imageData1.data[i] 		= Estim1[cc] * 255;  // red
        imageData1.data[i + 1] 	= Estim1[cc] * 255;  // green
        imageData1.data[i + 2] 	= Estim1[cc] * 255;  // blue

        imageData2.data[i] 		= Estim2[cc] * 255;  
        imageData2.data[i + 1] 	= Estim2[cc] * 255;  
        imageData2.data[i + 2] 	= Estim2[cc] * 255;  
		}
	else {
		imageData1.data[i]  	= back_color[0];
		imageData1.data[i+1]	= back_color[1];
		imageData1.data[i+2] 	= back_color[2];
	
		imageData2.data[i] 		= back_color[0];
		imageData2.data[i+1] 	= back_color[1];
		imageData2.data[i+2] 	= back_color[2];
		}
		if(i ==	data1.length-4){ShowFlag = 1;} // flag to indicate end of stim creation, the stimuli can be displayed
}
if (ShowFlag)
{
	if (sc.side[sc.trial-1] == 0){              // 0 is left, 1 right	
		contextL.putImageData(imageData1, 1, 1);
		contextR.putImageData(imageData2, 1, 1);}
	
	if (sc.side[sc.trial-1] == 1){
		contextL.putImageData(imageData2, 1, 1);
		contextR.putImageData(imageData1, 1, 1);}
} 
  
}



