import { assert } from "chai";
import App from '@/components/app';
import { mount } from '@vue/test-utils';
import TweetList from '@/components/tweet-list';

//@ts-check
suite('App', () => {
    it.skip('should plus 2 and 2' ,() => {
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);

    });

    it.skip('should plus 2 and 2' ,() => {
        const input = 4 + 4;
        const output = 8;
        assert.equal(input, output);

    });

    it('should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true,
            }
        });
        assert.ok(wrapper.contains(TweetList));
        
    });
});