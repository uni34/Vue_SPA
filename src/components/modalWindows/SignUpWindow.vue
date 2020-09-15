<template>
    <div class="signIn">
        <div class="m_window">
            <div class="headGroup reg">
                <div class="title">Регистрация</div>
                <a @click=" $emit('close')" class="closer">
                    Закрыть
                </a>
            </div>
            <div>
            <div class="inputGroup">
                <label for="login">Логин</label><br/>
                <input
                      id="login"
                      class="inputPlace"
                      v-model="login"
                      placeholder="Введите логин..">
            </div>
            <div class="inputGroup">
                <label for="password">Пароль</label><br/>
                <input
                      id="password"
                      class="inputPlace"
                      v-model="password"
                      placeholder="Введите пароль..">
            </div>
            </div>
            <div class="centerPosition">
                <button class="enterBtn" @click="submit">Зарегистрироваться</button>
            </div>
        </div>
    </div>
</template>

<script src="../../js/SignUpWindow.js" type="application/javascript">
</script>

<style src="../../scss/ModalWindows.css" rel="stylesheet">

</style>
