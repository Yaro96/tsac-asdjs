//Bershadskyy Yaroslav

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

function dec2bin(n)
{
    var st=new Stack();
    while(Math.floor(n/2)!=0)
    {
        st.push(n%2);
        n=Math.floor(n/2);
    }
    st.push(n%2);
    var string='';
    while(!st.isEmpty())
    {
        string+=st.pop().toString();
    }
    
    return string;
}
