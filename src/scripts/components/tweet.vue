<template>
  <b-card :img-src="tweet.author.avatar_url"
  :title="tweet.author.name" 
  :sub-title="tweet.created_time" 
  style="max-width: 20rem;"
   img-alt="Image"
   img-top
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
        
    }
   
 
}
</script>

<style>

</style>
