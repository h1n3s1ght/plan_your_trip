// alert("working");

//Variables----------------------------------------------
const URL = "https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=168&lang=en"


//Element References----------------------------------------------
let $location = $('#places');
let $activities = $('typeOfT');


//Event Listeners----------------------------------------------



//Functions----------------------------------------------

//Write function to change the URL variable when a different selection is made
$('button').on('click', function(){
$activities = $('select.typeOfT option:selected')
$location = $('select.places option:selected').val();
console.log($location);
});
