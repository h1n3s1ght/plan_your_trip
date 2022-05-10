// alert("working");

//Variables----------------------------------------------
let URL = "https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=168&lang=en"


//Element References----------------------------------------------
let $location = $('.places');
let $activities = $('.typeOfT');
let $startMonth = $('.start_month');
let $endMonth = $('.end_month');
let $startDay = $('.start_month');
let $endDay = $('.end_month');
let $startDate = [];
let $endDate = [];
let $numOfHours = '';


//Event Listeners----------------------------------------------



//Functions----------------------------------------------

//Create a function to call the Ajax URL
function runApi(){
    if($location === 'sanDiego'){
        URL = `https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'yellowStone'){
        URL = `https://dark-sky.p.rapidapi.com/44.4280,-110.5885?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'newYork'){
        URL = `https://dark-sky.p.rapidapi.com/40.7128,-74.0060?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'miami'){
        URL = `https://dark-sky.p.rapidapi.com/25.7617,-80.1918?units=auto&extend=${$numOfHours}&lang=en`;
    } else if ($location === 'zion'){
        URL = `https://dark-sky.p.rapidapi.com/37.2982,-113.0263?units=auto&extend=${$numOfHours}&lang=en`;
    }  else {
        console.log('location does not match listed options.')
    }
}

//Write function to change the URL variable when a different selection is made
$('button').on('click', function(){
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
console.log(URL);
});
