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
                

            ]
        }
    },

    methods: {

      async fetchTweets() {

    const url = 'http://localhost:3000/tweets';

    try {
        const response = await fetch(url);
        return await response.json();
        

    } catch (err) {
        console.log(err);

    }

        }

    },

  async mounted() {
        console.log('app.vue is ready');
        this.tweets = await this.fetchTweets();

        //  axios
        //     .get('https://localhost:3000/tweets')
        //     .then(response => (this.tweets = response))
        //1. make http request
        // 2. parse to JSON
        // 3. assign to this.tweets
    }

}
</script>

<style>

</style>
