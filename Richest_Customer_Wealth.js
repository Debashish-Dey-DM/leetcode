var a = [[1, 2, 3], [3, 5, 1]];
var sum = 0;
var result = [];
for (var i = 0; i < a.length; i++){
    for (var j = 0; j < a[i].length; j++){
        sum = sum + a[i][j];
    }
    result.push(sum);
    sum = 0;
}

var largest = Math.max.apply(0, result);
return largest;