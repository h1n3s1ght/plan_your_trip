// alert("working");

//Variables----------------------------------------------
const settings = {
  async: true,
  crossDomain: true,
  url: " ",
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
    "X-RapidAPI-Key": "3282c2cba4msh00975632392a7f6p11275fjsne77488776eae",
  },
};
const basicItems = ["ID/Passport", "Credit/Debit card(s)", "glasses", "watch"];
const clothingItems = [
  "Shirt/Top(s)",
  "Bottom(long/short)",
  "Under Garments (Socks, Underwear, Bras)",
  "Shoes (comfy for travel)",
  "Swimsuit",
];
const personalItems = [
  "Toothbrush",
  "Toothpaste",
  "Hair Products",
  "Hair Tools",
  "Skin Products",
  "Cosmetics/Makeup",
  "Medication",
];
const techItems = [
  "Headphones",
  "Phone Charger",
  "Cell Phone (fully charged)",
  "iPad/tablet",
  "Tablet Charger",
  "Computer",
  "Computer Charger",
  "Cables for Computer",
  "Camera",
];
const adventureItems = [
  "Backpack",
  "Tent",
  "Make sure clothes are fit for nature",
  "Hiking Boots",
  "Water Bottle",
  "Step Tracker",
  "GPS",
  "Camping Permit",
];
const soulItems = ["Journal"];
const cityItems = ["High Fashion attire for clubbing", "Dinner Reservations"];
const cultureItems = ["Pepto", "Translator App/Book"];
const tourItems = ["Walking Shoes", "Tour Itenerary", "Step Tracker"];
const coldItems = [
  "Jacket",
  "Top(s) should be LONG sleeved",
  "Pants/Jeans are best",
];
const hotItems = [
  "Top(s) should include short sleeves or tank tops",
  "Shorts and Skirts",
];
const sunnyItems = ["Sun Block", "Bug Spray"];
const rainyItems = ["Umbrella", "Rain Jacket or Poncho"];

let $location = $(".places");
let $activities = $(".typeOfT");
let $startMonth = $(".start_month");
let $endMonth = $(".end_month");
let $startDay = $(".start_month");
let $endDay = $(".end_month");
let $startDate = [];
let $endDate = [];
let $numOfHours = "";

//Element References----------------------------------------------

//Event Listeners----------------------------------------------

//Functions----------------------------------------------


//Hide the last paragraph at load of page
$(document).ready(function () {
  $("#afterSubmit").hide();
});


//Function to display the weather forcast on the page

function displayWeather(){

};


//Function to make the list items appear below Div "#afterSubmit"

function makeCheckList() {
  //Diplay Hidden Div
  $("#afterSubmit").show();

  //Function to display new HTML Div after submit
  $(".thePlan").after(
    `<p><input type="checkbox" id="item1"><label for="item1"> Suitcase </label><br> <input type="checkbox" id="item1"><label for="item1"> Suitcase </label><br> <input type="checkbox" id="item1"><label for="item1"> Suitcase </label><br> <input type="checkbox" id="item1"><label for="item1"> Suitcase </label><br> <input type="checkbox" id="item1"><label for="item1"> Suitcase </label><br> </p>`
  );
};


//Write function that selects the correct API link

function runApi() {
  if ($location === "sanDiego") {
    settings.url = `https://dark-sky.p.rapidapi.com/32.7157,-117.1611?units=auto&extend=${$numOfHours}&lang=en`;
  } else if ($location === "yellowStone") {
    settings.url = `https://dark-sky.p.rapidapi.com/44.4280,-110.5885?units=auto&extend=${$numOfHours}&lang=en`;
  } else if ($location === "newYork") {
    settings.url = `https://dark-sky.p.rapidapi.com/40.7128,-74.0060?units=auto&extend=${$numOfHours}&lang=en`;
  } else if ($location === "miami") {
    settings.url = `https://dark-sky.p.rapidapi.com/25.7617,-80.1918?units=auto&extend=${$numOfHours}&lang=en`;
  } else if ($location === "zion") {
    settings.url = `https://dark-sky.p.rapidapi.com/37.2982,-113.0263?units=auto&extend=${$numOfHours}&lang=en`;
  } else {
    console.log("location does not match listed options.");
  }
}



//On-Click function--- run the following-----

$("button").on("click", function () {
  //Change the URL variable when a different selection is made
  $activities = $("select.typeOfT option:selected").val();
  $location = $("select.places option:selected").val();
  $startMonth = $("select.start_month option:selected").val();
  $startDay = $("select.start_day option:selected").val();
  $endMonth = $("select.end_month option:selected").val();
  $endDay = $("select.end_day option:selected").val();
  $startDate = `${$startMonth} ${$startDay}`;
  $endDate = `${$endMonth} ${$endDay}`;
  $numOfHours = ($endDay - $startDay) * 24;
  console.log($location, $activities, $startDate, $endDate, $numOfHours);
  runApi();
  console.log(settings.url);

  //call the Ajax URL

  $.ajax(settings).done(function (response) {
    console.log("Weather forcast is ready");
    console.log(response);
  });
  displayWeather();
  makeCheckList();
});
