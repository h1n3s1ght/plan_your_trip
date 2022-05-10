// alert("working");

//Variables----------------------------------------------
const URL = "https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=168&lang=en"


//Element References----------------------------------------------
let $location = $('.places');
let $activities = $('.typeOfT');
let $startMonth = $('.start_month');
let $endMonth = $('.end_month');
let $startDay = $('.start_month');
let $endDay = $('.end_month');
let $startDate = '';
let $endDate = '';


//Event Listeners----------------------------------------------



//Functions----------------------------------------------

//Write function to change the URL variable when a different selection is made
$('button').on('click', function(){
$activities = $('select.typeOfT option:selected').val();
$location = $('select.places option:selected').val();
$startMonth = $('select.start_month option:selected').val();
$startDay = $('select.start_day option:selected').val();
$endMonth = $('select.end_month option:selected').val();
$endDay = $('select.end_day option:selected').val();
console.log($location, $activities , $endDay, $endMonth, $startDay , $startMonth);
});
