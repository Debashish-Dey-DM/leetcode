var input = [1, 2, 3,4];
var length = input.length;
for (var i = 0; i < length; i++){
    input.push(input[i]);
}
return input;