///<reference path='../../typings/bundle.d.ts' />

import assert = require("power-assert")

describe('Hoge', function(){
    describe('#hoge()', function(){
        it('should return 1', function(){
            assert(1 === 2);
        })
        
        it('should return 2', function(){
            throw Error('exception');
            assert(2 === 2);
        })
    })
});
