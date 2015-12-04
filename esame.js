//Bershadskyy Yaroslav

//https://docs.google.com/document/d/1U7JmjatKLBhtjWwMI-GFGn44qAeGDWQvGp24FDt0LxA/edit#

//Esercizio Ricorsione (15 punti)

function ricorsione(array){
    if(array.length == 0)
        return 0;
    else if(array[0] == 5070)
        return 1 + ricorsione(array.splice(1)); 
    else
        return ricorsione(array.splice(1));       
}

//Esercizio filter/map/reduce (15 punti)

function sqrtSumEvenPositiveElementsSquares(array){
    return Math.sqrt(array.filter(x => x >= 0).filter(x => x%2 == 0).map(x => x*x).reduce((acc, x) => acc+x, 0));
}

//Tree (15 punti)

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
         if (currentNode.l == null)
           currentNode.l = newNode;
         else
           this.addNode(currentNode.l, newNode);
    } else {
         if (currentNode.r == null)
           currentNode.r = newNode;
         else
           this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

BST.prototype.findMaxR = function(rightNode){
    if(rightNode.r == null)
        return rightNode.item;
    else
        return this.findMaxR(rightNode.r);
}

BST.prototype.findMax = function(){
    if(this.root == null)
        return null;
    else if(this.root.r == null)
        return this.root.item;
    else
        return this.findMaxR(this.root.r);
}

function insertArrayIntoBST(array){
    var tree = new BST();
    for(var i = 0; i < array.length; i++){
        tree.add(array[i]);
    }
    return tree.findMax();
}

//Tree complessità (15 punti)
//Se l'albero non e' bilanciato, il numero di salti da fare non si dimezza ad
//ogni nodo nel peggior caso l'albero e' una lista (inserendo un array ordinato)
//e la complessita' raggiunge O(n)

//Esercizio Stack (25 punti)

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

function evaluateExpression(string){
    var array=string.split(" ");
    var v = new Stack();
    var s = new Stack();
    var op;
    var a;
    var b;
    while(array.length > 0){
        if(array[0] != '(' && array[0] != '+' && array[0] != '-' && array[0] != '*' && array[0] != '/' && array[0] != ')'){
            v.push(parseInt(array[0]));
            array.splice(0,1);
        }else{
            op=array[0];
            array.splice(0,1);
            if(op == ')'){
                b = v.pop();
                a = v.pop();
                op = s.pop();
                s.pop();
                switch(op){
                    case '+':   v.push(a + b);
                                break;
                    case '-':   v.push(a - b);
                                break;
                    case '*':   v.push(a * b);
                                break;
                    case '/':   v.push(a / b);
                                break;                                     
                }
            }else
                s.push(op); 
        }
    }
    return v.pop();
}


//Array debug
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

function demo(){
	console.log('Esercizio Ricorsione risultato = ' + ricorsione( initialArray() ) );
	console.log('Esercizio filter/map/reduce risultato = ' + sqrtSumEvenPositiveElementsSquares( initialArray() ) );
	console.log('Esercizio Stack risultato = ' + evaluateExpr( evaluateExpression ) );
	console.log('Complessità algoritmo stack: O(n)');
	console.log('Esercizio Tree risultato = ' + insertArrayIntoBST( initialArray() ) );
	console.log('Tree complessità: Se l albero non è bilanciato, il numero di salti da fare non si dimezza ad ogni nodo e nel peggior caso l albero è una lista (inserendo un array ordinato) e la complessità raggiunge O(n)');
	console.log('Esercizio Bonus Algoritmo ordinamento: O(n log n) perchè il merge è sempre lineare, a meno che non si esegua un controllo prima del MergeSort, allora diventa O(n)');
}