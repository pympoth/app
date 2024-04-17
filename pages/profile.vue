<script setup>
const edit = ref(false);
</script>

<template>
  <div class="page">
    <h1>Профиль</h1>
    <div class="edit">
      <button v-on:click="edit = !edit">Редактировать</button>
      <div class="view" v-if="!edit">
        <p>Пользователь</p>

        <profileTabs />
      </div>
      <div class="edit" v-else>
        <h2>Загрузить фото:</h2>
        <imageLoader />
        <p>Редактировать профиль:</p>
        <div class="edit_profile1">
          <p>ФИО:</p>
          <input type="text" />
        </div>
        <div class="edit_profile2">
          <p>Номер телефона:</p>
          <input type="text" />
        </div>
        <div class="edit_profile3">
          <p>Место проживания:</p>
          <input type="text" />
        </div>
        <div class="edit_profile4">
          <p>Место работы</p>
          <input type="text" />
        </div> 
             <div class="butt">
        <button>Сохранить</button>
      </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 15px;
}
button {
  border-radius: 10px;
  border: none;
  padding: 5px;
  background: #fff;
  box-shadow: 0px 0px 9px 4px rgba(21, 107, 255, 0.227);
}
p {
  font-weight: bolder;
  font-size: 20px;
}
.edit_profile1 {
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.edit_profile2 {
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.edit_profile3 {
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.edit_profile4 {
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.butt button {
  border-radius: 0;
  margin-left: 150px;
  margin-top: 25px;
}
</style>
