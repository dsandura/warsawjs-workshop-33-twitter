import { assert } from "chai";
import App from '@/components/app';
import { mount } from '@vue/test-utils';
import TweetList from '@/components/tweet-list';
//import nock from 'nock';

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

    it.skip('should fetch tweets vis HTTP request', async () => {
        const wrapper = mount(App,  {
            stubs: {
                Tweet: true
                // "b-card": true,
                // "b-card-text": true,
            }
        

    });
      //console.log("wrapper", wrapper);
      assert.isFunction(wrapper.vm.fetchTweets);
      //console.log("wrapper.vm", wrapper.vm.fetchTweets());
      //console.log("wrapper.element", wrapper.element);
      //console.log("wrapper.options", wrapper.options);

      const ft = wrapper.vm.fetchTweets;

    //   nock("http://localhost:3000")
    //   .get('/tweets')
    //   .reply(200, [
    //       { id: 'id', body: 'body' }
    //   ]);

  const response = await ft();
  console.log(response); // JSON
  assert.lengthOf(response, 1);

    

    });
});