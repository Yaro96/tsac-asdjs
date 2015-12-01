//Bershadskyy Yaroslav

function ricorsione(array)
{
    if(array.length==0)
        return 10;
    else
    {
        return 5*array[0]+ricorsione(array.splice(1));
    }
}

function ex_1a(array)
{
    return ricorsione(array);
}

function sumSquares(array,i)
{
    if(i==array.length)
        return 0;
    else
    {
        if(array[i]%2==0)
            return array[i]*array[i]+sumSquares(array,i+1);
        else
            return sumSquares(array,i+1);
    }
}

function evenElementsSquaresR(array)
{
    var i=0;
    return sumSquares(array,i);
}

function ex_1b(array)
{
    return evenElementsSquaresR(array);
}

//-------------------------------------------------------------------

function evenElementsSquaresF(array)
{
    var tot=array.reduce(
        function(acc,x)
        {
            if(x%2==0)
                return acc+x*x;
            else
                return acc;
        }
    ,0);
    return tot;
}

function ex_2(array)
{
    return evenElementsSquaresF(array);
}

//-------------------------------------------------------------------

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {  
    //this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

function putInTwoStacks(array)
{
    var even=new Stack();
    var uneven=new Stack();
    var final=new Stack();
    var e;
    var u;
    var result=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
            even.push(array[i]);
        else
            uneven.push(array[i]);
    }
    while(!even.isEmpty() && !uneven.isEmpty())
    {
        e=even.pop();
        u=uneven.pop();
        console.log(e+" * "+u);
        final.push(e*u);
        //final.push(even.pop()*uneven.pop());
    }
    while(!final.isEmpty())
    {
        result+=final.pop();
    }
    return result;
}

function ex_3(array)
{
    return putInTwoStacks(array);
}

//--------------------------------------------------------------------------

function LinkedList()
{
    this.head=null;
    this.size = 0;
}

function ListItem(i,p,n)
{
    this.item=i;
    this.next=n;
    this.prev = p;

}

LinkedList.prototype.getNode = function(index)
{
    var item = this.head;
    for(var i = 0; i < index && item != null; i++)
    {
        item=item.next;
    }
    return item;
}

LinkedList.prototype.getNodeR = function(index)
{
    function nodeR(node, i){
        if(i == index || node == null)
            return node;
        else
            return nodeR(node.next, i + 1);
    }

    nodeR(this.head, 0);
}

LinkedList.prototype.add=function(index,element) {
    var node = this.getNodeR(index);
    if(node != null){
        var item = new ListItem(element, node.prev, node);
        node.prev = item;
    }else{
        var last = getNodeR(this.size - 1)
        var item = new ListItem(element, last, null);
        last.next = item;
    }
    this.size++;
}

LinkedList.prototype.addItem=function(previousIndex,previousItem,index,element)
{
    if(++previousIndex<index && previousItem.next!=null)
        this.addItem(previousIndex,previousItem.next,index,element);
    else
        previousItem.next=new ListItem(element,previousItem.next);
}


LinkedList.prototype.get=function(index)
{
    var node = this.getNodeR(index);
    if(node != null)
        return node.item;
    else
        return null;
}



function demo()
{
    var l=new LinkedList();
    l.add(0,'a');
    l.add(1,'b');
    l.add(1,'c');
    l.add(5,'d');
    l.add(0,'e');
    console.log(l.get(0));
    console.log(l.get(1));
    console.log(l.get(2));
    console.log(l.get(3));
    console.log(l.get(4));
    console.log(l.get(8));
    console.log(l);
}