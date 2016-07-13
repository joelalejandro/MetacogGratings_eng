function introspective_response(DataToSave)
{
LIMMIN = CENTER - $('#line1').width()/2;
LIMMAX = CENTER + $('#line1').width()/2;
var rango = LIMMAX - LIMMIN;

$('div.RespButton1').hide();
$('div.RespButton2').hide();
	
setTimeout("$('div.linesConf').fadeIn(100)",100);
$('#marks').show();
$('#line1').show();

var x = 0;
clearInterval("id");
$('#ThickLine').width(0);  // posicion inicial a 0 

$('#preg_segu').show();

StartTime = +new Date();

//------------------mouse ---------
if (Touchscreen == 'Mouse')
{
	$(document).mousemove(function(e)
	{
		$('#ThickLine').show();
		x = e.pageX;
		if (e.pageX >= LIMMAX){x = LIMMAX};
		if (e.pageX <= LIMMIN){x = LIMMIN};
		$('#ThickLine').width(x - LIMMIN);
	})

	$(document).click(function(ee)
	{
		$(document).unbind('mousemove');
		var xx = ee.pageX;
		if (ee.pageX >= LIMMAX){xx = LIMMAX};
		if (ee.pageX <= LIMMIN){xx = LIMMIN};
	
		$('#ThickLine').width(xx - LIMMIN);
		DataToSave.confidence		= (x - LIMMIN)/rango; 
		DataToSave.reactionTimeConf	= +new Date() - StartTime;
		setTimeout("$('#ThickLine').css('background','rgb(255, 224, 102)')",100);
	 
		$('#ThickLine').fadeOut(500);
		$('#line1').fadeOut(500);
		$('#preg_segu').fadeOut(500);
		$('#marks').fadeOut(500);
		$(document).unbind('click');
		store_data(DataToSave);	
	
		if (sc.trial == MaxTrials +1) 
		{ 
			$('#preg').html('End of the game, thank you!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		}
		else
		{	
			if (sc.trial % REW == 0)
			{
				show_percentage(sc.correct)
			}
			else
			{
				setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)
			}
		};	
  });
}

//------------------mouse ---------

if (Touchscreen == 'Touchscreen')
{
	$(document).on('touchstart',function (e)
	{
		e.preventDefault();
		$('#ThickLine').show();
		cachedX = currX = e.originalEvent.touches[0].pageX;
		cachedY = currY = e.originalEvent.touches[0].pageY;   // caching the current x y
		      
		var x = cachedX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){x = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){x = LIMMIN};
		$('#ThickLine').width(x - LIMMIN);
	});

	$(document).on('touchmove',function (e)
	{
		e.preventDefault();
		currX = e.originalEvent.touches[0].pageX;
		currY = e.originalEvent.touches[0].pageY;
		var x = currX;
		if (e.originalEvent.touches[0].pageX >= LIMMAX){x = LIMMAX};
		if (e.originalEvent.touches[0].pageX <= LIMMIN){x = LIMMIN};
		$('#ThickLine').width(x - LIMMIN);
	})

	$(document).on('touchend',function (e)
	{		
		e.preventDefault();
		DataToSave.confidence		= (x - LIMMIN)/rango; 
		DataToSave.reactionTimeConf	= +new Date() - StartTime;
		
		$(document).unbind('touchstart');
		$(document).unbind('touchmove');
		$(document).unbind('touchend');
		e.preventDefault();
		setTimeout("$('#ThickLine').css('background','rgb(255, 224, 102)')",100);
		$('#ThickLine').fadeOut(500);
		$('#line1').fadeOut(500);
		$('#preg_segu').fadeOut(500);
		$('#marks').fadeOut(500);
		$(document).unbind('click');
		store_data(DataToSave);	
	
		if (sc.trial == MaxTrials +1) 
		{ 
			$('#preg').html('End of the game, thank you!');
			$('#preg').css( "fontSize", "30px" );
			$('#preg').show();
		}
		else
		{
			if (sc.trial % REW == 0)
			{
				show_percentage(sc.correct)
			}
			else
			{
				setTimeout("$('div.linesConf').hide(0,newtrial(sc))",1500)
			}
		};	
  })

};
}
