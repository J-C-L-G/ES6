/**
 * Created by JCLG on 3/30/2016.
 */

import * as foo from "./foo";

foo.bar();

foo.bar = function(){
    console.log('this has been modified');
};
foo.x = 100;
foo.bar();
