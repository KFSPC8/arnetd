"use strict";

var elementUI = $( "#infos" );
var button = $( "#ElementButton" );
var button2 = $( "#ElementButton2" );
var secondary = $( '#Secondary' );

var lumber = $( '#LumberValue' );

var lumberDisplay = $( '#LumberDisplay' );

var elements = {water: '#WaterValue', fire: '#FireValue', nature: '#NatureValue', earth: '#EarthValue', light: '#LightValue', dark:'#DarkValue'};

var toggle = true; // True = Visible, false = collapsed

function ModifyLumber( data )
{
	lumber.text = data.lumber;
	elementUI.visible = true;
}

function UpdateElements( data )
{
	for(var element in data)
	{
		if( element in elements )
		{
			$(elements[element]).text = data[element];
		}
	}
}

function ShowButton()
{
	if(toggle)
		button.visible = true;
	else
		button2.visible = true;
}

function HideButton()
{
	if(toggle)
		button.visible = false;
	else
		button2.visible = false;
}

function ToggleCollapse()
{
	toggle = !toggle;
	Game.EmitSound("ui_generic_button_click");
	if (toggle)
	{
		button2.visible = false;
		button.visible = true;
		secondary.visible = true;
		elementUI.RemoveClass('small');
	}
	else
	{
		button2.visible = true;
		button.visible = false;
		secondary.visible = false;
		elementUI.AddClass('small');
	}
}

(function () {
  button.visible = false;
  button2.visible = false;
  lumberDisplay.visible = false;
})();