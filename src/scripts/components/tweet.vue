<template>
  <b-card :img-src="tweet.author.avatar_url"
  :title="tweet.author.name" 
  :sub-title="tweet.created_time | myDate" 
  
   img-alt="Image"
   img-left
  class="m-3">
    <b-card-text>
        {{tweet.body}}
    </b-card-text>
 
 </b-card>
</template>

<script>
import {myDate} from "@/helpers/my-date"
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
             return myDate(value);
             
         }
     }
   
 
}
</script>

<style>

</style>
