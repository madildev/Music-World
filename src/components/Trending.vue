<template>
    <div class="trend">
        <!--This section shows the trending songs -->
        <div class = "header">
          <input type="search" name="song" id="song" v-model="searched" placeholder="Type the Song/Singer/Genre Name">
          <router-link :to="{name: 'Search', params: {searched: this.searched}}"><button>Search</button></router-link>
        </div>
       <h1 v-if="show">Trending</h1>
       <div class="music-section">
           <!-- Here is where the loops iterates-->
          <div v-for="(data,index) in tracks" :key="index" class="music-list">
                <div class="image-sec">
                    <router-link :to="{name: 'Player', params: {songid: data.key }}"><img :src="data.images.coverart" alt=""></router-link>
                </div>
                <!-- This is the router link go to the player component-->
                <h3>{{data.title}}</h3>
                <h4>{{data.subtitle}}</h4>
          </div>  
     </div>
    </div>
</template>

<script>
export default {
    name: 'Trending',
    data(){
        return {
         songs: {},  //This object holds data coming from the api
         tracks: [],  //This objects holds the array from the songs object
         show: false,  //This controls the visibility of the elements 
         searched: ''
       }
    },
    //This is mounted hook and calls evereytime the component is mounted
    async mounted()
    {
        let response = await fetch("https://shazam.p.rapidapi.com/charts/track?&pageSize=30&startFrom=0", 
        {
	        "method": "GET",
            "headers": 
                {
		         "x-rapidapi-key": "d3c4ef33bfmshea48c175233c56dp1bf0b8jsnffa31f6c4ca3",
                 "x-rapidapi-host": "shazam.p.rapidapi.com"
                 }
            })
            if(response.ok)
            {
                this.songs = await response.json();
                this.tracks = this.songs.tracks;
                this.show = true;
            }
    },
};
</script>

<style scoped>
.trend{
    margin: auto;
    padding: 10px;
}
.header{
  margin-top: 20px;
  margin: auto;
  padding-left: 250px;
}
.header input{
  height: 30px;
  width: 250px;
  color: black;
}
.header button{
    font-size: 14px;
    padding: 5px;
    outline: none;
    margin: 4px;
}
.music-section {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
.music-section h3{
    cursor: pointer;
}
.music-section a{
    text-decoration: none;
    color: black;
}
.music-list{
  height: 330px;  
  width: 250px;
  background-color: lightgray;
  margin: 8px;
  box-shadow: 5px 5px rgba(0, 0,0, 0.8);
  transition: 0.5s;
}
.music-list:hover{
 transform: scale3d(1.25,1.25,1.25);
}
.image-sec img{
 height: 70%;
 width: 100%;
}

@media screen and (max-width: 700px){
  .header{
      padding-left: 100px;
  }
  .music-section {
      display: grid;
      grid-template-columns: auto auto auto auto;
  }
  .music-list{
     height: 150px;
     width: 100px;
     font-size: 14px;
     overflow: hidden; 
  }
    
}
</style>