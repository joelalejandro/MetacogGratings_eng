function  newtrial(sc){
$('#Letterhead2').show();
$('#Dial').css("background","rgb(255,150,0)");
$('#Dial').hide();
$(document).unbind("click");
$('#ResponseButtons').unbind("click");


var Name = DataToSave.name;
DataToSave = [];
DataToSave.code = CODE; 
DataToSave.name = Name; 


sc.current = Math.ceil( sc.num * Math.random())                          // select a random staircase from the active staircases - returns index of sc rather than the index used in the active staircase vector

if (sc.trial < 4){sc.current = 2};

DataToSave.staircaseNumber = sc.current;

sc.stairs[sc.current - 1].trial = sc.stairs[sc.current - 1].trial + 1;   // increment the trial counter for the current staircase
sc.trial = sc.trial + 1;                                                 // increment the total trial count
DataToSave.trial 	= sc.trial;

var trial = [];
trial.stimval = sc.stairs[sc.current - 1].stimval;                       // set the values in the trial struct
trial.number  = sc.stairs[sc.current - 1].trial;


/*---------get stimulus value-----------*/
stimval = sc.stairs[sc.current - 1].stimval;

direction = sc.stairs[sc.current - 1].direction;                         // get the direction to decide if we're going to add or substract
DataToSave.direction = direction;

var revs = sc.stairs[sc.current - 1].reversalStimval;                    // calculate the number of reversals


numreversals = revs.length;

DataToSave.numreversals = numreversals;

var stepsize = 0;
if (sc.stairs[sc.current - 1].trial > 1)
{                                // if we're on the first trial, just use the initial values
            if(numreversals < sc.fixedstepsizes.length){          		 // we're not on the last item in the stepsize vector
             	var stepindex = numreversals;                 			 // the index in the stepsize vector is equal to the number of reversals we have encountered so far 
               }  
            else
			{
				stepindex = sc.fixedstepsizes.length -1;               	 // we're at the last element in the stepsize vector 
            }
            stepsize = sc.fixedstepsizes[stepindex];                	 // extract the stepsize 
            
            stimval = stimval + (direction * stepsize);             	 // calculate the new stimval  

			if (stimval <= sc.stairs[sc.current -1].minstimval){		 // stimval is smaller than the minumum stimval
				stimval = sc.stairs[sc.current -1].minstimval;
				sc.stairs[sc.current - 1].hitboundaries = sc.stairs[sc.current - 1].hitboundaries + 1;
				}
			if (stimval > sc.stairs[sc.current -1].maxstimval){			 // stimval is smaller than the minumum stimval
				stimval = sc.stairs[sc.current - 1].maxstimval;
				sc.stairs[sc.current - 1].hitboundaries = sc.stairs[sc.current - 1].hitboundaries + 1;
			}
} 
sc.stairs[sc.current -1].stimval = stimval;                              //% set it back to the new (or old) value
DataToSave.stimval = stimval;
DataToSave.stepsize = stepsize;


/*---------makes stimulus-----------*/
sc.side[sc.trial-1] = Math.round(Math.random()); 

DataToSave.side = sc.side[sc.trial-1];
setTimeout( function(){create_stim(contextL,contextR, sc.stairs[sc.current -1].stimval,show_stim(sc,trial));},800);  //callback + settimeout to be sure the stimuli are ready
}

