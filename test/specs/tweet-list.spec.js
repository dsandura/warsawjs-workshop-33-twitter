import { assert } from "chai";
import App from '@/components/app';
import { mount } from '@vue/test-utils';
import TweetList from '@/components/tweet-list';
import Tweet from '@/components/tweet';

//@ts-check
suite('TweetList', () => {

    it('should render Tweet item', () => {
        const wrapper = mount(TweetList);
        assert.ok(wrapper.contains(Tweet));
        
    });
});