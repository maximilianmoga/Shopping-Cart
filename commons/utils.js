function findById(array, id) {
    console.log('hi')
   for(let i =0; i < array.length; i++ ) {
    
       const thisItem =array[i];
       
       if (id === thisItem.id) {
           return thisItem;
       }

   } 
        return null;
}
export default findById;

export function calcLineItem(array,_calcLineItem) {
    
   for(let i =0; i < array.length; i++ ) {
    
       const thisThing =array[i];
       
       if (id === thisThing.calcLineItem) {
           return thisThing;
       }

   } 
        return null;
}
