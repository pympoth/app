<script setup>
const { data } = await useFetch("/api/courses");
console.log(data.value);
let courses = [];
courses = data;
</script>

<template>
  <h1>Курсы</h1>
  <div class="courses">
    <div class="course" v-for="course in data.body" :key="course.id">
      <NuxtLink v-bind:to="'/course/' + course.id">
        <h3>{{ course.name }}</h3>
      </NuxtLink>
      <p>{{ course.description }}</p>
      <img v-bind:src="course.url" alt="" />
    </div>
  </div>
</template>

<style scoped>
h3 {
  cursor: pointer;
}
a{
  color: black;
  text-decoration: none;
}
.course {
  display: flex;
  box-shadow: 0px 2px 20px 10px rgba(66, 68, 90, 1);
  border-radius: 10px;
  background: #a1d3ff;
  width: 200px;
  flex-direction: column-reverse;
  align-items: center;
}
.course img {
  width: 100px;
}
.courses {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
}
</style>