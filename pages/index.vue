<script setup>
const city = "Волгодонск";
const { data } = await useFetch("https://wttr.in/${city}?format=j1");

console.log(data.value.current_condition);
const currentWeather = data.value.current_condition[0];

const descWeather = currentWeather.weatherDesc[0].value.trim();
console.log(descWeather);

const weatherSymbols = {
  Unknown: "✨",
  Cloudy: "☁️",
  Fog: "🌫",
  "Heav rain": "🌧",
  "Heavy showers": "🌧",
  "Heavy snow": "❄️",
  "Heavy snow showers": "❄️",
  "Light rain": "🌦",
  "Light showers": "🌦",
  "Light sleet": "🌧",
  "Light sleet showers": "🌧",
  "Light snow": "🌨",
  "Light snow showers": "🌨",
  "Partly cloudy": "⛅️",
  Sunny: "☀️",
  "Thundery heavy rain": "🌩",
  "Thundery showers": "⛈",
  "Thundery snow showers": "⛈",
  "Very cloudy": "☁️",
  Overcast: "☁️",
};
let currentSymbol = "";
if (weatherSymbols.hasOwnProperty(descWeather)) {
  currentSymbol = weatherSymbols[descWeather];
} else {
  console.log("Неизвестный символ");
}
</script>

<template>
  <h1>Главная</h1>

  <div class="widget" v-if="currentWeather">
    <h3>Температура: {{ currentWeather.temp_C }} C</h3>
    <p class="p">Ощущается как: {{ currentWeather.FeelsLikeC }} C</p>
    <p class="symbol">{{ currentSymbol }}</p>
    <div class="circle"></div>
    <div class="circles"></div>
  </div>
  <div class="calendar">
    <h3>Завтра в 8:00:</h3>
    <p class="p1">Начало уроков</p>
    <div class="string"></div>
    <h3 class="h3">Завтра в 13:30:</h3>
    <p class="p2">Конец уроков</p>
        <div class="string"></div>
  </div>
</template>
<script scoped>
</script>
<style scoped>
.widget {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px;
  border: 3px solid blue;
  border-radius: 15px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  background: #add2ff;
}
.symbol {
  position: absolute;
  top: -32px;
  right: 207px;
  font-size: 120pt;
  margin: -17px -17px -25px -17px;
}
.p {
  position: relative;
  top: -30px;
}
.circle {
  border: 3px solid blue;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 80px;
  border-radius: 100px;
  right: -40px;
  background: #add2ff;
}
.circles {
  border: 3px solid blue;
  width: 100px;
  height: 100px;
  position: absolute;
  top: -88px;
  border-radius: 100px;
  right: -65px;
  background: #add2ff;
}
.calendar {
  margin: 20px;
  border: 3px solid blue;
  border-radius: 15px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  background: #add2ff;
}
.p1 {
  position: relative;
  top: -20px;
}
.string {
  border: 3px solid blue;
  border-radius: 15px;
  padding: 0px;
  position: relative;
  overflow: hidden;
  background: #add2ff;
  top: -30px;
  width: 400px;
  right: 10px;
}
.h3 {
  position: relative;
  top: -40px;
}
.p2 {
  position: relative;
  top: -60px;
}
</style>