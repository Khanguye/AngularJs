var app= angular.module("myApp",[]);

app.filter("exclude",function(){
    return function(input,exclude){
        var result=[];
        
        for(var i=0;i<input.length;i++)
            {
                if(input[i]!==exclude)
                {result.push(input[i]);}
            }
        return result;
    };
});
