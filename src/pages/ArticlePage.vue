<template>
    <div class="article">

        <!-- Блок статьи с картинкой -->

        <div class="header">Что делать хозяину, если его кот орет</div>
        <div>Как быть владельцу, если его кошка постоянно орет? И можно ли вообще
          бороться с криками своего домашнего питомца? Хозяин, уставший от такого шумного
          поведения, может предпринять вот что:</div>
        <img src="src\images\cat.jpg" class="image">
        <div>Для начала важно выявить причину ора. Следует определить, досыта ли наедается животное,
          не холодно ли ему, не скучно ли? Не боится ли кошка чего-то? Если дело в голоде, то нужно увеличить
          объем порций еды или пересмотреть рацион, внеся в меню побольше белковых продуктов. Если мурлыке холодно,
          нужно включить в доме обогреватель и укрыть его пледом. Если скучно, то обязательно выкроить
          хотя бы 10-15 минут для общения с животным. Если все дело в страхе, важно успокоить питомца
          и по возможности изолировать его от источника опасности;</div>

          <!-- Блок комментариев -->

          <div class="commTitle">Комментарии</div>

          <!-- Имеющиеся комментарии (просто массив с комментами) -->

          <CommentComponent
                    v-for="(comment, index) in comments"
                    :key="index"
                    :Comment="comment"
                    class="commentComponent">
          </CommentComponent>

          <!-- Добавление нового комментария -->

          <button @click="show = true" class="addBtn">Добавить комментарий</button>
          <div v-if="show">
              <textarea v-model="comment" class="newComment" placeholder="Введите комментарий"></textarea><br>
              <button @click="send" class="sendBtn">Отправить</button>
          </div>
    </div>
</template>

<script src="../js/ArticlePage.js">

</script>

<style src="../scss/ArticlePage.css"></style>
