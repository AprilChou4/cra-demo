const arr=[1,99,88,2,7,66,5]
function bubble(arr){
  const len=arr.length;
 for(let i=0;i<len;i++){
   for(let j=0;j<len-1;j++){
     if(arr[j]>arr[j+1]){
      const temp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=temp;
     }
   }
 }
 return arr;
}