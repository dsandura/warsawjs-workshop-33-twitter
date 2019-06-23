<template>
    <div>
    <TweetList :tweets="tweets"/> 
    
</div>
</template>

<script>
import TweetList from '@/components/tweet-list';
export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return{
            tweets: [
                {id: 1, body:"awesome WarsawJS"},
                {id:2, body: "Learning Vue.js"},
                {id:3, body: "Happy Coding"}

            ]
        }
    }

}
</script>

<style>

</style>
