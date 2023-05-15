async function getData(url) {
  let data = await fetch(url);
  return await data.json();
}
async function search() {
  let data = await getData(
    "http://api.weatherapi.com/v1/forecast.json?key=ff7a627ee9654f1a911220314231602&q=cairo&days=3&aqi=no&alerts=no"
  );

  if (localStorage.getItem("url") != null) {
    display(data);
  }

  let searchInput = document.getElementById("search");
  let city = document.getElementById("city");

  searchInput.addEventListener("keypress", async function () {
    data = await getData(
      `http://api.weatherapi.com/v1/forecast.json?key=ff7a627ee9654f1a911220314231602&q=${this.value}&days=3&aqi=no&alerts=no`
    );
    city.innerHTML = this.value;
    display(data);
    localStorage.setItem("url", JSON.stringify(data));
  });

  let find = document.getElementById("find");
  find.onclick = function () {
    city.innerHTML = data.location.name;
  };
}

search();

function display(data) {
  let {
    current,
    forecast: {
      forecastday: [one, two, three],
    },
  } = data;

  let degree = document.getElementById("degFone");
  let fcaseWeather = document.getElementById("fcaseWeather");
  let Fimg = document.getElementById("Fimg");
  let date = document.getElementById("tar");
  let imgdaytwo = document.getElementById("daytwo");
  let days = [
    "sunday",
    "monday",
    "tusday",
    "wensday",
    "thursday",
    "friday",
    "saterday",
  ];
  let dayone = new Date(one.date).getDay();
  let fday = document.getElementById("fday");
  let degDayTwo = document.getElementById("degtwob");
  let degDayTwos = document.getElementById("degtwos");
  let sday = document.getElementById("sday");
  let daytwo = new Date(two.date).getDay();
  let daytwocase = document.getElementById("twoCase");
  let degthreebig = document.getElementById("degthb");
  let imgth = document.getElementById("daythree");
  let dayth = document.getElementById("dayth");
  let thd = new Date(three.date).getDay();
  let degths = document.getElementById("degths");
  let thcase = document.getElementById("thCase");

  degree.innerHTML = `${one.day.maxtemp_c}<span class="o">o</span>c`;

  fcaseWeather.innerHTML = current.condition.text;

  Fimg.src = current.condition.icon;

  date.innerHTML = one.date;

  fday.innerHTML = days[dayone];

  imgdaytwo.src = two.day.condition.icon;

  degDayTwo.innerHTML = `${two.day.maxtemp_c} <span class="o fs-4 sectop">o</span>c`;

  degDayTwos.innerHTML = `${two.day.maxtemp_f} <span class="o fs-5 sectop">o</span>`;

  sday.innerHTML = days[daytwo];
  daytwocase.innerHTML = two.day.condition.text;
  console.log(two);
  degthreebig.innerHTML = `${three.day.maxtemp_c}<span class="o fs-5 sectop">o</span>`;
  imgth.scr = three.day.condition.icon;

  dayth.innerHTML = days[thd];
  degths.innerHTML = three.day.maxtemp_f;
  thcase.innerHTML = three.day.condition.text;

  /**
   *
   * let data-Weather
   */
}
