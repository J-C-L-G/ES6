/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

{
    // 'a' is not declared
    if(typeof a === "undefined"){
        console.log("cool");
    }

    // 'b' is not declared, but it is in TDZ
    if(typeof b === "undefined"){   // Reference Error.
    }
    let b;
}

