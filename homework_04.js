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

//Reverse Polish Notation
function rpn(string)
{
    var array=string.split(" ");
    var st=new Stack();
    var op;
    var a;
    var b;

    while(array.length>0)
    {
        if(array[0]!='+' && array[0]!='-' && array[0]!='*' && array[0]!='/')
        {
            st.push(parseInt(array[0]));
            array.splice(0,1);
        }else{
            op=array[0];
            array.splice(0,1);
            b=st.pop();
            a=st.pop();
            switch(op)
            {
                case '+':   st.push(a+b);
                            break;
                case '-':   st.push(a-b);
                            break;
                case '*':   st.push(a*b);
                            break;
                case '/':   st.push(a/b);
                            break;                                     
            }
        }
    }
    return st.pop();
}
