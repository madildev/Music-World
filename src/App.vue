<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
         <h1>Music World</h1>
      </div>
      <div class="options">
         <ul>
         <li><router-link to="/">Trending</router-link></li>
         </ul>
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
  font-size: 22px;
}
#nav {
  padding: 10px;
  background-color: black;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: 0.5s;
}

#nav a.router-link-exact-active {
  color: white;
  font-size: 30px;
}
#nav ul{
  list-style: none;
}
.options
{
  float: right;
  margin-top: -35px;
}
.options ul{
  display: flex;
  flex-direction: row;
}
.options li{
   padding-bottom: 10px;
   font-size: 28px;
}
footer{
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
