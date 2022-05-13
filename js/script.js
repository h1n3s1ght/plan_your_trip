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
const basicItems = ["ID/Passport", "Credit/Debit card(s)", "Glasses", "Watch"];
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
let $day = [
  {
    index: "Sunny",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
  {
    index: "",
    rain: false,
    sunny: true,
    tHigh: "",
    tLow: "",
  },
];

//Element References----------------------------------------------
// $response = '';

//Event Listeners----------------------------------------------

//Functions----------------------------------------------

//Hide the last paragraph at load of page
$(document).ready(function () {
  $("#afterSubmit").hide();
});

//Function to display the weather forcast on the page

function displayWeather() {
  for (let i = 0; i <= $numOfHours / 24; i++) {
    $(".theWeatherP").append(
      `<li class="addedLater"> Day ${i + 1} Weather: ${
        $day[i].index
      }! <br> High Temp: ${$day[i].tHigh} <br> Low Temp: ${$day[i].tLow} </li>`
    );
  }
}

//Determine what the weather will be and update variable to allow for correct input on page

function updateWeather() {
  for (let a = 0; a <= $numOfHours / 24; a++) {
    if ($day[a].tHigh >= 80) {
      for (let b = 0; b < hotItems.length; b++) {
        $(".thePlan").append(
          `<li class="weatherI"><input type="checkbox" id="item1"><label for="item1"> ${hotItems[b]} </label></li><br>`
        );
      }
      return;
    } else if ($day[a].tLow <= 30) {``
      for (let c = 0; c < coldItems.length; c++) {
        $(".thePlan").append(
          `<li class="weatherI"><input type="checkbox" id="item1"><label for="item1"> ${coldItems[c]} </label></li><br>`
        );
      }
      return;
    } else if ($day[a].rain === true) {
      for (let d = 0; d < rainyItems.length; d++) {
        $(".thePlan").append(
          `<li class="weatherI"><input type="checkbox" id="item1"><label for="item1"> ${rainyItems[d]} </label></li><br>`
        );
      }
      return;
    } else {
      console.log("no added item for this iteration.")
    }
  }
}

//determine what type of traveler the user is

function typeOfTraveler() {
  if ($activities === "adventureJunkie") {
    for (let a = 0; a < adventureItems.length; a++) {
      $(".thePlan").append(
        `<li class="activitiesI"><input type="checkbox" id="item1"><label for="item1"> ${adventureItems[a]} </label></li><br>`
      );
    }
  } else if ($activities === "touristyTraveler") {
    for (let b = 0; b < tourItems.length; b++) {
      $(".thePlan").append(
        `<li class="activitiesI"><input type="checkbox" id="item1"><label for="item1"> ${tourItems[b]} </label></li><br>`
      );
    }
  } else if ($activities === "cultureSeeker") {
    for (let c = 0; c < cultureItems.length; c++) {
      $(".thePlan").append(
        `<li class="activitiesI"><input type="checkbox" id="item1"><label for="item1"> ${cultureItems[c]} </label></li><br>`
      );
    }
  } else if ($activities === "citySlicker") {
    for (let d = 0; d < cityItems.length; d++) {
      $(".thePlan").append(
        `<li class="activitiesI"><input type="checkbox" id="item1"><label for="item1"> ${cityItems[d]} </label></li><br>`
      );
    }
  } else if ($activities === "soulSearcher") {
    for (let e = 0; e < soulItems.length; e++) {
      $(".thePlan").append(
        `<li class="activitiesI"><input type="checkbox" id="item1"><label for="item1"> ${soulItems[e]} </label></li><br>`
      );
    }
  }
}

//Function to make the list items appear below Div "#afterSubmit"

function makeCheckList() {
  //Diplay Hidden Div
  $("#afterSubmit").show();

  //Function to display new HTML Div after submit
  for (let a = 0; a < basicItems.length; a++) {
    $(".thePlan").append(
      `<li class="basicI"><input type="checkbox" id="item1"><label for="item1"> ${basicItems[a]} </label></li><br>`
    );
  }
  for (let b = 0; b < personalItems.length; b++) {
    $(".thePlan").append(
      `<li class="personalI"><input type="checkbox" id="item1"><label for="item1"> ${personalItems[b]} </label></li><br>`
    );
  }
  for (let c = 0; c < techItems.length; c++) {
    $(".thePlan").append(
      `<li class="techI"><input type="checkbox" id="item1"><label for="item1"> ${techItems[c]} </label></li><br>`
    );
  }
  for (let d = 0; d < clothingItems.length; d++) {
    $(".thePlan").append(
      `<li class="clothingI"><input type="checkbox" id="item1"><label for="item1"> ${clothingItems[d]} </label></li><br>`
    );
  }
}

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

    //Update Weather Info attained from API
    for (let i = 0; i <= $numOfHours / 24; i++) {
      $day[i].index = response.daily.data[i].icon;
      $day[i].tHigh = parseInt(response.daily.data[i].temperatureHigh);
      $day[i].tLow = parseInt(response.daily.data[i].temperatureLow);
      if (response.daily.data[i].icon === "rainy!") {
        $day[i].rain = true;
      }
      if (response.daily.data[i].icon === "sunny!") {
        $day[i].sunny = true;
      }
      console.log($day);
    }
    displayWeather();
    updateWeather();
  });

  //Call other functions to run in correct order
  // updateWeather();
  typeOfTraveler();
  makeCheckList();
});

