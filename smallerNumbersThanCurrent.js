var nums = [7,7,7,7];
var result = [];
for (var i = 0; i < nums.length; i++){
    result[i] = 0;
}
for (var i = 0; i < nums.length; i++){                 
    for (var j = 0; j < nums.length; j++){              
        if (nums[i] > nums[j]) {                        
            result[i]++;                                  
        }        
    }                                  
}

return result;