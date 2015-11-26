function PriorityQueue()
{
    this.prQueue=[];
}

function QueueItem(i, p) 
{
    this.item=i;
    this.priority=p;
}

PriorityQueue.prototype.enqueue=function(queueItem){
    var placed=false;
    var tail=this.prQueue.length;
    var a;
    var b;
    var i=0;
    while(!placed && i<tail && tail>1)
    {
        a=this.prQueue[i].priority;
        b=this.prQueue[++i].priority;
        if(a<queueItem.priority && queueItem.priority<b)
        {
            this.prQueue.splice(i,0,queueItem);
            placed=true;
        }
    }
    if(!placed)
    {
        this.prQueue.unshift(queueItem);
    }
}

PriorityQueue.prototype.dequeue=function(){
    return this.prQueue.pop(); 
}

PriorityQueue.prototype.front=function(){
    return this.prQueue[this.prQueue.length - 1];
}

PriorityQueue.prototype.size=function(){
    return this.prQueue.length;
}

PriorityQueue.prototype.isEmpty=function(){
    return this.size()==0;
}

/*
var q=new PriorityQueue();
var qi=new QueueItem('a',15);
var qi2=new QueueItem('c',5);
q.enqueue(qi);
q.enqueue(qi2);
var qi3=new QueueItem('b',10);
q.enqueue(qi3);
q.dequeue();
q.dequeue();
q.dequeue();
*/

//----------------------------------------------------------------------
function CircularQueue(n)
{
    this.circular=new Array(n);
    for(i=0;i<n;i++)
        this.circular[i]=undefined;
    this.freeIndex=0;
    this.deleteIndex=-1;
    this.elements=0;
}

CircularQueue.prototype.enqueue=function(e){
    this.circular[this.freeIndex++]=e;
    this.elements++;
    if(this.freeIndex==this.circular.length)
    {
        this.freeIndex=0;
        this.elements--;
        if(++this.deleteIndex==this.circular.length)
            this.deleteIndex=0;
    }    
    
}

CircularQueue.prototype.dequeue=function(){
    var ritorna=this.circular[this.deleteIndex];
    delete this.circular[this.deleteIndex++];
    this.elements--;
    if(this.deleteIndex==this.circular.length)
        this.deleteIndex=0;
    return ritorna; 
}

CircularQueue.prototype.front=function(){
    return this.circular[this.deleteIndex];
}

CircularQueue.prototype.size=function(){
    return this.circular.length;
}

CircularQueue.prototype.isEmpty=function(){
    return this.elements<=0;
}

/*var q=new CircularQueue(3);
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
*/




//------------------------------------------------------------------------------------------------------
//PriorityQueueCallback
//------------------------------------------------------------------------------------------------------
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