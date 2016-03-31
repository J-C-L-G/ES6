/**
 * Created by JCLG on 3/30/2016.
 */

import bar from "./b";

export default function foo(x){
    if(x > 10){
        return bar(x-1);
    }else{
        return x * 2;
    }
}