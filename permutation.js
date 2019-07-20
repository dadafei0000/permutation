var permute = function(nums) {
      var res=[], n=nums.length;
var backtrace=function(curList){
  if(curList.length==n){
    res.push(curList.slice());}
  else{for(var i=0;i<n;i++){
      var exist=false;
    for(var j=0;j<curList.length;j++){
      if(curList[j]==nums[i]){
        exist=true;
        break;
      }
    }
    if(exist){
      continue;
    }
    curList.push(nums[i]);
    backtrace(curList.slice());
    curList.pop();
  }
}
}
backtrace([]);

    
         
    return res;
};    
