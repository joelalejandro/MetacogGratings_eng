jQuery.fn.center_left = function () {
    this.css("position","absolute");
    this.css("left", ( $(window).width() - this.width() ) / 2 + $(window).scrollLeft() + "px");
    return this;}	
jQuery.fn.center_top = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + "px");
    return this;}	

function instructions(nro)
{	for (var i=1;i<=4;i++) {document.getElementById("exp"+i).style.display="none";}
	if (nro!=0) {document.getElementById("exp"+nro).style.display="block";}		
	window.scrollTo(0,0);
}

function validateFields()
{	var Name 		= document.getElementById("Name").value;
	var Gender 		= document.getElementById("Gender").value;
	var Age 		= document.getElementById("Age").value;
	var Checkbox 	= document.getElementById("consent_checkbox").checked;
	var Input_type 	= $('input[name="Input"]:checked').val();
	
	if ( (Age>3) * (Age<99) * ((Gender == "f") + (Gender == "m") + (Gender == "nr")) * (Name.length>3) * Checkbox * ($('[name=Input]:checked').length))  
	{
		$("#submit_button").fadeTo(.1, 1);
		$("#submit_button").prop('disabled', false);
	} 
	else 
	{
		$("#submit_button").fadeTo(.1, .5);
		$("#submit_button").prop('disabled', true);
	} 
}

function validate_send(){
	var NAME 	= document.getElementById("Name").value;
	var GENDER 	= document.getElementById("Gender").value;
	var AGE 	= document.getElementById("Age").value;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			var MOBILE = 1;
	} else{	var MOBILE = 0;}
	var SYSTEM 			= navigator.userAgent;
	var INPUT_TYPE 		= $('input[name="Input"]:checked').val();
	var SCREEN_WIDTH	= screen.width;
	var SCREEN_HEIGHT 	= screen.height;

	Touchscreen = INPUT_TYPE;
	
	var now 	= new Date();
	timestamp 	= now.getTime();
	
	CODE = hex_md5(NAME + GENDER + AGE + timestamp + Math.floor(Math.random()*1000)); //genera un codigo de test 
	$.ajax({
	type:'POST',
	url:'processform.php', 
	data:{Code: CODE, Name: NAME, Gender: GENDER, Age: AGE, System: SYSTEM, Mobile: MOBILE, Input_type: INPUT_TYPE, Screen_width: SCREEN_WIDTH, Screen_height: SCREEN_HEIGHT},
	success:function(r){
		  if(r=="error")
		  alert("ERROR!");}})
	DataToSave.name = NAME;
}


function show_percentage(e){
$('#Letterhead2').show();

var total = 0;
for(var i = 0; i < e.length; i++)
{
	total += e[i];
	}
var per = (total / e.length).toFixed(2) * 100;
Level = Level + 1;
var youare = 'Level ';

$("#Letterhead2").html(youare.concat(Level));
$("#Letterhead2").fadeOut(300);
$("#Letterhead2").fadeIn(100);
$("#Letterhead2").fadeOut(300);

$("#Letterhead2").fadeIn(100);
$("#Letterhead2").fadeOut(300);

$("#Letterhead2").fadeIn(100);

setTimeout("$('div.marcassegu').hide(0,newtrial(sc))",2000);
 
}


function store_data(DataToSave){

$.ajax({
	type:'POST',
	url:'processdata.php', 
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
		  Orientation: 				DataToSave.thetaRad, 
		  Direction: 				DataToSave.direction,
		  Numreversals:		  		DataToSave.numreversals,
		  Stepsize:		 	  		DataToSave.stepsize,
		  ThetaRad:					DataToSave.thetaRad,
		  PhaseRad: 				DataToSave.phaseRad},
  		  error: function (e) 
  		  {	alert("Server error - " + e);} 
})
}
