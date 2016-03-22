/**
 * Created by JCLG on 3/22/2016.
 */

var arr = [1,2,3],
    iterator = arr[Symbol.iterator](),
    iteratorResult;

//do{
//    iteratorResult = iterator.next();
//    console.log(iteratorResult.value);
//}while(iteratorResult.done != true);

while( (iteratorResult = iterator.next()) && (iteratorResult.done != true)){
    console.log(iteratorResult.value);
}
