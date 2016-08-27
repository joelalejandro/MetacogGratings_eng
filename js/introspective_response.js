function introspective_response(DataToSave)
{

var LIMMIN = Math.ceil(screen.width/2) - Math.ceil($('#line1').width()/2) - 10;
var LIMMAX = Math.ceil(screen.width/2) + Math.ceil($('#line1').width()/2) - 10;
var range = LIMMAX - LIMMIN;


$('#scale').css('color','#004D00')
if (sc.trial > 1){
	$("#scale").animate({ right: '-15px',top: '15px', fontSize: '1em',opacity: '1.0'},10);
}

$('div.RespButton1').hide();
$('div.RespButton2').hide();
	
$('#line1').show();

var x = 0;
clearInterval("id");
$('#preg_segu').show();
var percent = 0;

StartTime = +new Date();

//------------------mouse ---------
if (Touchscreen == 'Mouse')
{
	if (AutomaticResponse ==1){setTimeout("$('#Dial').click()",1000)}						// to run alone
		$(document).mousemove(function(e){ 													// slides the cursor
		$('#scale').show();
		$('#Dial').show();
		x = e.pageX;
		if (e.pageX >= LIMMAX){x = LIMMAX};
		if (e.pageX <= LIMMIN){x = LIMMIN};

		percen = (100 * (x - LIMMIN)/range).toFixed(0)  									// get percentaje online
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": x- Math.ceil(screen.width/2)})

		$('#Dial').css({"left": x});})


	$(document).click(function(ee)
	{
		$(document).unbind('mousemove');
		$(document).unbind('mousemove');
		x = ee.pageX;
		if (ee.pageX >= LIMMAX){x = LIMMAX};
		if (ee.pageX <= LIMMIN){x = LIMMIN};
		$('#Dial').show();
		$('#Dial').css({"left": x})

		DataToSave.confidence		= (x - LIMMIN)/range;
		DataToSave.reactiontimeconf	= +new Date() - StartTime;		
		setTimeout("$('#ThickLine').css('background','rgb(255, 224, 102)')",100);
	 
		$("#scale").animate({ right: '15px',top: '-15px',
            fontSize: '2em',opacity: '0.0'},500);

		setTimeout("$('#Dial').css('background','#ff99ce')",100);
		setTimeout("$('#Dial').css('background','#99004f')",400);

		$('#Dial').fadeOut(500);
		$('#line1').fadeOut(550);
		$('#preg_segu').fadeOut(550);
		$('#scale').fadeOut(500);



		$(document).unbind('click');
		store_data(DataToSave);	
	
		if (sc.trial == MaxTrials) 
		{ 
			$('#preg').html('End of the game, thank you!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
			return
		}
		else
		{	
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)
		};	
  });
}

//------------------mouse ---------

if (Touchscreen == 'Touchscreen')
{
	$(document).on('touchstart',function (e)
	{
		e.preventDefault();
		$('#scale').show();
		$('#Dial').show();

		$('#scale').show();
		$('#Dial').show();
		Xpos = e.originalEvent.touches[0].pageX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};
		$('#Dial').css({"left": Xpos});
	});


	$(document).on('touchmove',function (e){																				// slides the cursor
		e.preventDefault();
		Xpos = e.originalEvent.touches[0].pageX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){Xpos = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){Xpos = LIMMIN};

		percen = (100 * (Xpos - LIMMIN)/range).toFixed(0) 														// get percentaje online
		$('#scale').html(percen.toString().concat(' %'))
		$('#scale').css({"left": Xpos- Math.ceil(screen.width/2)})
		$('#Dial').css({"left": Xpos});
	})


	$(document).on('touchend',function (e)
	{		
		e.preventDefault();
		DataToSave.confidence		= (x - LIMMIN)/rango; 
		DataToSave.reactionTimeConf	= +new Date() - StartTime;
		
		$(document).unbind('touchstart');
		$(document).unbind('touchmove');
		$(document).unbind('touchend');
		
		$("#scale").animate({ right: '15px',top: '-15px',
            fontSize: '2em',opacity: '0.0'},500);

		setTimeout("$('#Dial').css('background','#ff99ce')",100);
		setTimeout("$('#Dial').css('background','#99004f')",400);

		$('#Dial').fadeOut(500);
		$('#line1').fadeOut(550);
		$('#preg_segu').fadeOut(550);
		$('#scale').fadeOut(500);
		$(document).unbind('click');
				$(document).unbind('click');
		store_data(DataToSave);	
	
		if (sc.trial == MaxTrials) 
		{ 
			$('#preg').html('End of the game, thank you!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		}
		else
		{
			setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)
		};	
  })

};
}
