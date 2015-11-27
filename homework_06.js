
function mergeOrderedArrays(sortedA,sortedB)
{
    var merged=[];
    var a=0;
    var b=0;
    var n=sortedA.length+sortedB.length;
    for(var i=0;i<n;i++)
    {
        if(sortedA[a]<sortedB[b] || b==sortedB.length)
            merged[i]=sortedA[a++];
        else if(sortedA[a]>=sortedB[b] || a==sortedA.length)
            merged[i]=sortedB[b++];
    }
    return merged;
}