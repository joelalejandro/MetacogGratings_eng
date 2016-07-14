/* the file contains functions for 2 interleaved staircases, 
 * based on the Matlab code of Arthur 
 * Lugtigheid (lugtigheid@gmail.com) 
 * available at http://code.google.com/p/matlabstaircase/
*/ 
var AutomaticResponse = 0;  //for debugging, runs alone


var back_color = [204, 255, 179];
 

var MaxTrials 	= 100; 
var REW = 10;						// number of trials between rewards
var Level = 1;

// creacion del estimulo 
var imSize 	 	= 200;              // image size: n X n
var lamda 	 	= 30;                // wavelength (number of pixels per cycle)
var sigma 	 	= 40;                // gaussian standard deviation in pixels
var freq 	 	= imSize/lamda;       // compute frequency from wavelength
var CIRC 	 	= .07;
var DataToSave 	= [];
var FinalContrast = 10;

// staircase
var sc 					= [];
sc.maxtrials 			= 100;           				  // the maximum number of trials
sc.maxreversals 		= 16;            				  // the maximum number of reversals
sc.ignorereversals 		= 6;             				  // number of reversals to ignore
sc.minstimval 			= 0.01;       					  // maximum stimulus value
sc.maxstimval 			= 1;         					  // maximum stimulus value
sc.maxboundaries 		= 3;               				  // number of times sc can hit boundary
sc.fixedstepsizes 		= [0.1, 0.05, 0.05, 0.05, 0.025];  	  // specifies the stepsize vector
sc.scalefactor 			= 5;               				  // scale factor in percentages (N/A)
sc.up 					= 1;                              // # of incorrect answers to go one step up
sc.down 				= 3;               				  // # of correct answers to go one step down
sc.stairs 				= [];
sc.stairs[0] 			= [];
sc.stairs[1] 			= [];
sc.stairs[0].initial 	= 0.01;            				  // first staircase starts at this
sc.stairs[1].initial 	= .5;              				  // second staircase starts at this
sc.side					= [];							  // side of grating presentation
sc.response				= [];						      // side of subject's response
sc.correct				= [];					 		  // 1 correct 0 incorrect


var Touchscreen = 0;

 
