/**
 * Created by JCLG on 3/11/2016.
 */

//If the feature is not there, we provide it.
if(!Object.is){
    Object.is = function(v1 , v2){
        //test for '-0'
        if(v1 === 0 && v2 === 0){
            return 1 / v1 === 1 / v2;
        }
        //test for Nan
        if(v1 !== v1){
            return v2 !== v2;
        }
        //everything else
        return v1 === v2;
    }
}

