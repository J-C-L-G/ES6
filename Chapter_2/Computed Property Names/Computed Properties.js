/**
 * Created by JCLG on 3/16/2016.
 */

var prefix = 'user_';

var o = {
    baz : function(){},
    [prefix+"one"] : function(){
        console.log('from one');
    },
    [prefix+"two"] : function(){
        console.log('from two');
    }
};

o.user_one();