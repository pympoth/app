<script setup>
const { data } = await useFetch("/api/tasks");
console.log(data.value);
let tasks = [];
tasks = data;
</script>

<template>
  <h1>Задания</h1>
  <div class="tasks">
    <div class="task" v-for="task in data.body" :key="task.id">
      <div class="nameanddisc">
        <NuxtLink v-bind:to="'/task/' + task.id">
          <h3>{{ task.name }}</h3>
        </NuxtLink>
        <p>{{ task.description }}</p>
      </div>
      <img v-bind:src="task.url" alt="" />
      <p class="t">Курс обучения на Python.pdf</p>
    </div>
  </div>
</template>

<style scoped>
.tasks {
  display: flex;
  box-shadow: 0px 2px 20px 5px rgb(113, 119, 197);
  border-radius: 10px;
  background: #ddfcf9;
  width: 410px;
  flex-direction: column;
}
.tasks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
}
a {
  color: black;
  text-decoration: none;
}
h3 {
  cursor: pointer;
}
.task img {
  width: 50px;
}
.nameanddisc {
  display: flex;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #ddfcf9;
  width: 410px;
  flex-direction: column;
}
.t {
  font-size: 12px;
}
</style>
