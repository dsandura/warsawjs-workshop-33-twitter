import { assert } from "chai";
import App from '@/components/app';
import { mount } from '@vue/test-utils';
import TweetList from '@/components/tweet-list';
import Tweet from '@/components/tweet';

//@ts-check
suite('TweetList', () => {

    it('should render Tweet item in Tweet List', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                {id: 1, body:"awesome WarsawJS"},
                {id:2, body: "Learning Vue.js"},
                {id:3, body: "Happy Coding"}
                ]

            },
            stubs: {
                "b-card": true,
                "b-card-text": true,
            }
        });
        assert.ok(wrapper.contains(Tweet));
        
    });
});