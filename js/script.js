// alert("working");

//Variables----------------------------------------------
const settings = {
	"async": true,
	"crossDomain": true,
	"url": " ",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
		"X-RapidAPI-Key": "3282c2cba4msh00975632392a7f6p11275fjsne77488776eae"
	}
};

let $location = $('.places');
let $activities = $('.typeOfT');
let $startMonth = $('.start_month');
let $endMonth = $('.end_month');
let $startDay = $('.start_month');
let $endDay = $('.end_month');
let $startDate = [];
let $endDate = [];
let $numOfHours = '';

//Element References----------------------------------------------



//Event Listeners----------------------------------------------



//Functions----------------------------------------------

//Hide the last paragraph at load of page
$(document).ready(function(){
    $('#afterSubmit').hide();
});

//Write function that selects the correct API link

function runApi(){
    if($location === 'sanDiego'){
        settings.url = `https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'yellowStone'){
        settings.url = `https://dark-sky.p.rapidapi.com/44.4280,-110.5885?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'newYork'){
        settings.url = `https://dark-sky.p.rapidapi.com/40.7128,-74.0060?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'miami'){
        settings.url = `https://dark-sky.p.rapidapi.com/25.7617,-80.1918?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'zion'){
        settings.url = `https://dark-sky.p.rapidapi.com/37.2982,-113.0263?units=auto&extend=${$numOfHours}&lang=en`;
    }  else {
        console.log('location does not match listed options.')
    }
}

//On-Click function--- run the following-----

$('button').on('click', function(){

//Change the URL variable when a different selection is made
$activities = $('select.typeOfT option:selected').val();
$location = $('select.places option:selected').val();
$startMonth = $('select.start_month option:selected').val();
$startDay = $('select.start_day option:selected').val();
$endMonth = $('select.end_month option:selected').val();
$endDay = $('select.end_day option:selected').val();
$startDate = (`${$startMonth} ${$startDay}`);
$endDate = (`${$endMonth} ${$endDay}`);
$numOfHours = (($endDay - $startDay)* 24);
console.log($location, $activities , $startDate, $endDate , $numOfHours);
runApi();
console.log(settings.url);

//call the Ajax URL

$.ajax(settings).done(function (response) {
	console.log('Weather forcast is ready');
    console.log(response);
});

// //Function to display new HTML Div after submit
// $('#afterSubmit').


});
