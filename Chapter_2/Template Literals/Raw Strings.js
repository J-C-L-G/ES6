/**
 * Created by JCLG on 3/16/2016.
 */

function showRaw(strings, ...values){
    console.log(strings);
    console.log(strings.raw);
}

showRaw`Hello World
this is a test`;