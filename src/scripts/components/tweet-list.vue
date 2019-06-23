<template>

   <div>
     <Tweet 
        v-for="t in tweets"
        :key="t.id"
        :tweet="t"
    >{{t.body}}</Tweet>
   
    
</div>
    
</template>

<script>
import Tweet from '@/components/tweet';
export default {
    name: "TweetList",
     components: {
        Tweet
    },

    props: {
        tweets: Array
    },
    
    mounted(){
        console.log(this.tweets);
    }

}
</script>

<style>

</style>
