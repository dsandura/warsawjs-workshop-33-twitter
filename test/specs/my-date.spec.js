import {myDate} from '@/helpers/my-date';
import { AssertionError } from 'assert';

suite('myDate', () => {
    it('should return null when passed falsy value', () => {
        // ...
       const input =  myDate('');
       const output = null;
       assert.equal(input, output);
       
    });

    

    it('should return proper date when pass UTC Date string', () => {
        // ...
    });
});