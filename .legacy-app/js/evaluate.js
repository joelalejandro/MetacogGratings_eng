function evaluate(trial, sc)
{
sc.stairs[sc.current - 1].direction = 0;                              					// set the direction to 'no change' as a default
switch(sc.correct[sc.trial-1]) {
    case false:    
		sc.stairs[sc.current -1].wrong = sc.stairs[sc.current -1].wrong + 1;  			// increase the number of incorrect answers index
		
        if((sc.stairs[sc.current - 1].wrong % sc.stairs[sc.current - 1].up) == 0)  		// we've got a reversal so save it!
        {
			if(sc.stairs[sc.current - 1].right >= sc.stairs[sc.current - 1].down) 
			{
				sc.stairs[sc.current - 1].reversalTrial.push(sc.stairs[sc.current - 1].trial);      // save it to the reversal matrix
				sc.stairs[sc.current - 1].reversalStimval.push(sc.stairs[sc.current - 1].stimval);
			}
			sc.stairs[sc.current - 1].right 	= 0;                                 		// reset the counter
			sc.stairs[sc.current - 1].direction = 1;                             		// set the step direction to up			
		}
		break;
    case true:
        sc.stairs[sc.current - 1].right = sc.stairs[sc.current - 1].right + 1;          // increase the number of correct answers index

        if ((sc.stairs[sc.current - 1].right % sc.stairs[sc.current - 1].down) == 0)	// we've got a reversal so save it!
		{ 
            if (sc.stairs[sc.current - 1].wrong >= sc.stairs[sc.current - 1].up)
			{  
				sc.stairs[sc.current - 1].reversalTrial.push(sc.stairs[sc.current - 1].trial);      // save it to the reversal matrix
				sc.stairs[sc.current - 1].reversalStimval.push(sc.stairs[sc.current - 1].stimval);
			}
		    sc.stairs[sc.current - 1].wrong 	= 0;                      					// reset the counter
            sc.stairs[sc.current - 1].direction = -1;                 					// set the step direction to down
}
		break;
}

//newdata = [trial_number trial_stimval trial_resp];                 // updates the staircase with new data, reate a new line for the data saving process
//sc.stairs[sc.current - 1].data[sc.trial - 1] = trial.number;   // save the data from this trial to the struct
}
