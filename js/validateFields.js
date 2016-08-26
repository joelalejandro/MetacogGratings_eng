
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
