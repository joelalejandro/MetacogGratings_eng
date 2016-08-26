

function store_data(DataToSave){

$.ajax({
	type:'POST',
	url:'./php/processdata.php', 
	data:{Code: 					DataToSave.code,
		  Name:  					DataToSave.name,   
		  Trial:  					DataToSave.trial,   
		  Side:			 	  		DataToSave.side,
		  Response: 				DataToSave.response,		  
		  ReactionTime: 			DataToSave.reactionTime, 		  
		  Correct: 					DataToSave.correct,  		  
		  Confidence: 				DataToSave.confidence,  		  
		  ReactionTimeConfidence: 	DataToSave.reactionTimeConf,
		  Contrast: 				DataToSave.stimval,
		  StaircaseNumber: 			DataToSave.staircaseNumber,
		  Direction: 				DataToSave.direction,
		  Numreversals:		  		DataToSave.numreversals,
		  Stepsize:		 	  		DataToSave.stepsize,
		  ThetaRad:					DataToSave.thetaRad,
		  PhaseRad: 				DataToSave.phaseRad},
  		  error: function (e) 
  		  {	alert("Server error - " + e);} 
})
}
