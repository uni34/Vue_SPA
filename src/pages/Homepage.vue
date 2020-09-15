<template>
    <div class="homepage">
      <div>

        <!-- Блок с кнопками регистрации и авторизации -->

      <div class="btns" v-if="!loggedIn">
          <button @click="close = true">Войти</button>
          <SignInWindow v-if="close" @close="close = false" @login="loggedIn = true"></SignInWindow>

          <div class="or">ИЛИ</div>
          
          <button @click="reg = true">Зарегистрироваться</button>
          <SignUpWindow v-if="reg" @close="reg = false"></SignUpWindow>
      </div>

      <!-- Сообщение после авторизации -->

      <div class="or greeting" v-if="loggedIn">Добро пожаловать, test!</div>

      <!-- Ссылка на статью -->

      <router-link class="link" :to="{name: 'articlepage'}">
          Перейти к статье
      </router-link>
    </div>
  </div>
</template>

<script src="../js/HomePage.js">

</script>

<style src="../scss/HomePage.css">

</style>
