/**
 * Created by JCLG on 3/30/2016.
 */

import foo from "./a";

export default function bar(y){
    if(y > 5){
        return foo(y-2);
    }else{
        return y * 3;
    }
}