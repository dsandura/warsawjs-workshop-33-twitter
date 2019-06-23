<template>
  <b-card :img-src="tweet.author.avatar_url"
  :title="tweet.author.name" 
  :sub-title="created_time" 
  
   img-alt="Image"
   img-left
  class="m-3">
    <b-card-text>
        {{tweet.body}}
    </b-card-text>
 
 </b-card>
</template>

<script>
export default {
    name: "Tweet",
    props:{
        tweet:{
            body: String,
            id: Number,

        }
        
    },

    computed: {
       created_time() {
           const d = new Date(this.tweet.created_time);
           return d.toLocaleString('pl-PL');
       }
     },

     filters: {
         myDate(value) {
             const d = new Date(this.tweet.created_time);
             return d.toLocaleString('pl-PL');
         }
     }
   
 
}
</script>

<style>

</style>
