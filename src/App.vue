<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style >
body {
    margin: 0;
    background: #212130;
  }

input{
  border-radius: 8px;
  height: 30px;
  border: none;
  min-width: 200px;
  color: #FFFFFF;
}

textarea{
  color: #FFFFFF;
}

button{
  border: none;
  border-radius: 6px;
  min-width: 150px;
  min-height: 40px;
  background: #CE6796;
  color: #FFFFFF;
}

button:hover{
  -moz-box-shadow:0 0 15px #CE6796;
    -webkit-box-shadow:0 0 15px #CE6796;
    box-shadow:0 0 15px #CE6796;
}

a:hover{
  cursor: pointer;
  text-decoration: underline;
}

label:hover{
  cursor: pointer;
}

button:hover{
  cursor: pointer;
  color: #FFFFFF;
}

/* #app {
  font-family: Verdana;
  color: navy;
  background: red;
}
.link{
  font-size: 50px;
  color: yellow; */

</style>
