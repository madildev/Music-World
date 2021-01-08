<template>
  <div class="hello">
      <!-- This section shows the secrhed results -->
      <h1 v-if="show"> Search Results: </h1>
      <div class="music-section">
            <div v-for="(data,index) in tracks" :key="index" class="music-list">
                <div class="image-sec">
                  <router-link :to="{name: 'Player', params: {songid: data.track.key }}"><img :src="data.track.images.coverart" alt=""></router-link>
                </div>
                <h3>{{data.track.title}}</h3>
                <h3>{{data.track.subtitle}}</h3>
            </div> 
      </div>
      <!-- This section is for the Hits songs of the searched artist-->
      <h1 v-if="show">Other Hit Songs</h1>
      <!-- This is div that contains all the hit songs in form of grid-->
      <div class="music-section1">
            <div v-for="(data,index) in hits" :key="index" class="music-list1">
                <div class="image-sec1">
                  <router-link :to="{name: 'Player', params: {songid: data.key }}"><img :src="data.images.coverart" alt=""></router-link>
                </div>
                <h3>{{data.title}}</h3>
                <h3>{{data.subtitle}}</h3>
            </div> 
      </div> 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      show: false,
      songs: {},  //This object gets incoming object from the api
      tracks: [],  //This stores the arrays of the seacrhed song
      hits: [],   //This stores the hits songs returned by api
      artistid: ''  //This extarcts the id from the api
    }
  },
  async mounted(){
         let response = await fetch(`https://shazam.p.rapidapi.com/search?term=${this.$route.params.searched}`, 
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
                this.tracks = this.songs.tracks.hits;
                console.log(this.tracks);
                this.artistid = this.tracks[0].track.artists[0].id;
                console.log(this.artistid);
                this.show = true;
            }
  },
  methods:{
    //THis fuction gets the hits songs of the singer
    async gethitsongs()
    {
      let response = await fetch(`https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=${this.artistid}&locale=en-US`, 
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
                this.hits = await response.json();
                this.hits = this.hits.tracks;
                console.log(this.hits);
            }
    }
  },
  //This watcher calls when the artist
  watch:{
    artistid: function(id){
       this.artistid = id;
       this.gethitsongs();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin: auto;
  padding: 20px;
}
.music-section, .music-section1{
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  margin: 10px;
}
.music-list , .music-list1{
  height: 350px;
  width: 250px;
  background-color: lightgray;
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  text-align: left;
  box-shadow: 5px 5px rgba(0,0,0,0.8);
  transition: 0.5s;
}
.music-list:hover, .music-list1:hover{
  transform: scale3d(1.2,1.25,1.25);
}
.image-sec img, .image-sec1 img{
  width: 100%;
  height: 70%;
}
@media screen and (max-width: 600px){
  .hello h1{
    font-size: 22px;
  }
  .music-section{
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .music-section1{
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .music-list, .music-list1{
    height: 150px;
    width: 100px;
    font-size: 12px;
    overflow: hidden;
  }
  
}
</style>
