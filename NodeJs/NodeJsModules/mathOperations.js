// export is treated as objects
exports.add=function(a,b){
    return a+b;
};

exports.subtract=function(a,b){
    return a-b;
};

exports.multiply=function(a,b){
    return a*b;
};

exports.divide=function(a,b){
    if(b!==0){
        return a/b;
    }else{
        return "Cannot divide by zero";
    }
};