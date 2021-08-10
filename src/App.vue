<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
      <router-link to="/"><h1>Music World</h1></router-link>
      </div>
    </div>
      <router-view/>
    <footer></footer>
 </div> 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Aladin&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Aladin', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 10px;
  background-color: black;
  color: white;
}

#nav a {
  text-decoration: none;
  transition: 0.5s;
}

#nav a{
  color: white;
  font-size: 20px;
}
#nav ul{
  list-style: none;
}
footer {
  position: relative;
  height: 30px;
  background-color: black;
  margin: 5px;
}
@media screen and (max-width: 600px){
  .logo{
    font-size: 18px;
  }
  
}
</style>
