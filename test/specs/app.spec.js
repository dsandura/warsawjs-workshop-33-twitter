import { assert } from "chai";

//@ts-check
suite('App', () => {
    it('should plus 2 and 2' ,() => {
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);

    });

    it('should plus 2 and 2' ,() => {
        const input = 4 + 4;
        const output = 8;
        assert.equal(input, output);

    });
});