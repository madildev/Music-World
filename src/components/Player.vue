<template>
  <div class="player">
      <div class="player-content">
        <div class="cover">
          <img :src="this.songs.images.coverart" alt="">         
          <h2>Song: {{this.songs.title}}</h2>
          <h2>Singer: {{this.songs.subtitle}}</h2>   
        </div>
        <!-- This embeds the songs preview on the webpage-->
        <div class="song-pre">
            <h2>Preview: </h2>
        <embed height="70" width="350" :src="this.songs.hub.actions[1].uri" volume="50" loop="true" controls="console" autostart="TRUE"  PLUGINSPAGE="http://www.apple.com/quicktime/download/win.html"/>
        </div>
        
      </div>
      <!--This divs displays the details of the selected song -->
      <div class="song-details">
          <h1>Song Details</h1>
          <img :src="this.songs.images.background" alt="">
          <h2>Song: {{this.songs.title}}</h2>
          <h2>Singer: {{this.songs.subtitle}}</h2>
          <h2>Genre: {{this.songs.genres.primary}}</h2>
          <h2>Type: {{this.songs.type}}</h2>
      </div>
  </div>  
</template>

<script>
export default {
    name: 'Player',
    data(){
        return{
                id: this.$route.params.songid, //This is the id send from the router 
                songs:{}  //This object holds data from the api
        }
    },
    //This mounted hook runs everytine the componenet is mounted
    async mounted()
    {
        let response = await fetch(`https://shazam.p.rapidapi.com/songs/get-details?key=${this.id}&locale=en-US`, {
	    "method": "GET",
        "headers": {
		"x-rapidapi-key": "d3c4ef33bfmshea48c175233c56dp1bf0b8jsnffa31f6c4ca3",
		"x-rapidapi-host": "shazam.p.rapidapi.com"
 	    }})
        if(response.ok)
        { 
            this.songs = await response.json();
            console.log(this.songs);
        }
    },

}
</script>

<style>
.player{
    display: flex;
    height: 100vh;
    background-color: white;
}
.player-content {
    margin-right: 150px;
    margin-left: 50px;
}
.cover{
    height: 400px;
    width: 400px;
}
.cover img{
    margin-top: 10px;
    height: 100%;
    width: 100%;
}
.cover h2{
    margin: 4px;
}
.song-details img{
    border-radius: 50%;
    height: 300px;
    width: 300px;
}
.song-pre{
    display: flex;
    margin-top: 95px;
}
.song-pre embed{
   margin-left: 5px;
}
@media screen and (max-width: 600px){
    .player{
        display: block;
    }
    .song-details{
        margin: 50px;
    }
    .song-pre{
        margin-top: 90px;
    }
}
</style>