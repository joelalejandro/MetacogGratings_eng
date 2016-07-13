function init(sc){
sc.trial 	= 0;							// global trialcounter
sc.num 		= sc.stairs.length;  			//get the number of staircases we want to initialise
sc.done 	= 0;       
sc.active 	= [];
for (var i = 1; i <= sc.num; i++) { sc.active.push(i);} // create a vector with the active staircases 


for (var n = 0; n < sc.num; n++){       						// cycle through the staircases to initialise them
																// set up some values for all staircases
    sc.stairs[n].trial 			= 0;             		// staircase specific trial number
    sc.stairs[n].data 			= [];             		// contains raw data
    sc.stairs[n].index 			= n;             		// index of the staircase
    sc.stairs[n].wrong 			= 0;             		// number of correct answers
    sc.stairs[n].right 			= 0;             		// number of incorrect answers
    sc.stairs[n].direction 		= 0;         			// the direction of the staircase
    sc.stairs[n].reversal		= [];         			// contains reversal data
    sc.stairs[n].reversalTrial	= new Array(); 			// contains reversal data
    sc.stairs[n].reversalStimval= new Array();			// contains reversal data
    sc.stairs[n].maxboundaries 	= 3;    				// maximum it can hit the boundaries
    sc.stairs[n].hitboundaries 	= 10;    				// counter for how often it hit the boundaries
    sc.stairs[n].up 			= sc.up;
	sc.stairs[n].down 			= sc.down; 
	sc.stairs[n].steptype 		= sc.steptype;			// set the steptype seperately for each staircase if specified
	sc.stairs[n].condition 		= 1;					// set the condition seperately for each staircase if specified
	sc.stairs[n].maxboundaries 	= sc.maxboundaries;  	// set the minimum and maximum stimvals and the number of times a staircase is allowed to reach that boundary before terminating
   	sc.stairs[n].minstimval 	= sc.minstimval;  
	sc.stairs[n].maxstimval 	= sc.maxstimval; 														
    sc.stairs[n].stimval 		= sc.stairs[n].initial; // set the initial stimulus value
 }
return(sc)
}
 
