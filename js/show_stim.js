function show_stim(sc,trial) 
{

if (AutomaticResponse ==1){setTimeout("$('#RespButton1').click()",4000)}						// to run alone

	
StartTime = +new Date();

var T1 = 1100;
var T2 = 2500;

if (sc.trial == 3){$('#preg').html('Now we&#8217ll go a little faster!');}

if (sc.trial < 4){
	setTimeout("$('#preg').fadeIn(100);",0);
	setTimeout("$('#Dot').fadeIn(100);",0);
	setTimeout("$('#DotC').fadeIn(100);",0);
	$('#Dot').css("color","rgb(204, 255, 179)");
	}


if (sc.trial >= 4){
	setTimeout("$('#Dot').fadeIn(100);",0);
	$('#Dot').css("color","rgb(0, 77, 0)");
	T1 = 800;
	T2 = 1000;
	$('#preg').html(' ');
	$('#preg_segu').html(' ');
		
}

setTimeout("$('#myCanvasL').show();",T1);
setTimeout("$('#myCanvasR').show();",T1);

setTimeout("$('#myCanvasL').hide();",T2);
setTimeout("$('#myCanvasR').hide();",T2);
setTimeout("$('#preg').hide();",T2);
setTimeout("$('#Dot').hide();",T2);

setTimeout("$('#RespButton1').fadeIn(200);",T2);
setTimeout("$('#RespButton2').fadeIn(200);",T2);


$('#RespButton1').click(function()
{
	DataToSave.reactionTime 	= +new Date() - StartTime - T1;      ////CHECK
    sc.response[sc.trial-1] 	= 0;
	sc.correct[sc.trial-1] 		= sc.response[sc.trial-1] == sc.side[sc.trial-1];

	DataToSave.response 		= sc.response[sc.trial-1];
	DataToSave.correct 			= sc.correct[sc.trial-1];
	
    $("#RespButton1").fadeOut(500)
    $("#RespButton2").fadeOut(500)
	$('#preg').fadeOut(500)
	$("#RespButton1").unbind('click');
	$("#RespButton2").unbind('click');

	evaluate(trial, sc);
	setTimeout("$('#myCanvasL').hide(0,introspective_response(DataToSave))",200);
});

$('#RespButton2').click(function()
{
	DataToSave.reactionTime 	= +new Date() - StartTime - T1;
	sc.response[sc.trial-1] 	= 1;
	sc.correct[sc.trial-1] 		= sc.response[sc.trial-1] == sc.side[sc.trial-1];	
	DataToSave.response 		= sc.response[sc.trial-1];
	DataToSave.correct 			= sc.correct[sc.trial-1];
	
 	$("#RespButton1").fadeOut(500)
    $("#RespButton2").fadeOut(500)
	$('#preg').fadeOut(500)
	$("#RespButton1").unbind('click');
	$("#RespButton2").unbind('click');

	evaluate(trial, sc);
	setTimeout("$('#myCanvasR').hide(0,introspective_response(DataToSave))",200);
});
}
