//Bershadskyy Yaroslav

/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x > 0) {
            tot += x;
        } else {
            return tot;
        }
    }
    return tot;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// Per Tiziano.
function ex_1_I(myarray) {
    sumwhileneg(myarray);
}

function ex_1_R(myarray) {
    sumwhilenegR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}



// Per Tiziano.
function ex_2_I(x) {
    sumwhileneg(x);
}

function ex_2_R(x) {
    sumwhilenegR(x);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

// Spazio: O(1) 
// Tempo: O(1)
function ex_3_I(array)
{
    var media=0;
    for(i=0;i<10;i++)
    {
        media=media+array[i];
    }
    return media/10;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_3_R(array)
{
    if(array.length<=0)
        return 0;
    else
        return (array[0]/10+ex_3_R(array.slice(1)));
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_4_I(a,b)
{
    if(a>b)
    {
        c=a;
        a=b;
        b=c;
    }
    var somma=0;
    for(i=a;i<=b;i++)
    {
        somma=somma+i;
    }
    return somma;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_4_R(a,b)
{
    if(a==b)
        return a;
    
    if(a>b)
    {
        c=a;
        a=b;
        b=c;
    }

    return a+ex_4_R(a+1,b)
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_5_I(a,b)
{
    var prodotto=0;
    for(i=0;i<b;i++)
    {
        prodotto=prodotto+a;
    }
    return prodotto;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_5_R(a,b)
{
    if(b==0)
        return 0;
    else
        return a+ex_5_R(a,b-1);
}

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_6_I(a,b)
{
    var quoziente=0;
    while(a>=b)
    {
        a=a-b;
        quoziente++;
    }
    console.log(quoziente+' resto '+a);
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_6_R(a,b)
{
    if(a<b)
    {
        console.log('resto '+a);
        return 0;
    }
    else
        return 1+ex_6_R(a-b,b);
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_7_I(a,b)
{
    var potenza=1;
    for(i=0;i<b;i++)
    {
        potenza=potenza*a;
    }
    return potenza;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_7_R(a,b)
{
    if(b>1)   
        return a*ex_7_R(a,b-1);
    else return a;
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function ex_8_I(array)
{
    var c=0;
    var i=Math.sqrt(array.length);
    var j=i;
    //console.log(i+' '+j);
    var mat = Array.apply(null, new Array(i)).map(
        Array.prototype.valueOf,
        new Array(j)
    ); 
    
    for(n=0;n<i;n++)
    {
        for(m=0;m<j;m++)
        {
            mat[n][m]=array[c];
            c++;
        }
    }
    return mat;
}

/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_9_I(array)
{
    var j=0;
    var ris=array.slice();
    for(i=array.length-1;i>=0;i--)
    {
        ris[j]=array[i];
        j++;
    }
    return ris;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_9_R(array)
{
    var i=0;
    var j=array.length-1;
    return inverti(array,i,j);
}

function inverti(array,i,j)
{
    if(i<j)
    {
        tmp=array[i];
        array[i]=array[j];
        array[j]=tmp;
        return inverti(array,i+1,j-1);
    }else
        return array;
}



/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_10_I(a,n)
{
    array=[];
    for(i=0;i<n;i++)
    {
        array[i]=a;
    }
    return array;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_10_R(a,n)
{
    array=[];
    return incoda(array,a,n);
}

function incoda(array,a,n)
{
    if(n==0)
        return array;
    else
    {
        array.push(a);
        return incoda(array,a,n-1);
    }
}

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/

// Spazio: O(1) 
// Tempo: O(n)
function ex_11_I(array)
{
    j=0;
    for(i=array.length-1;i>=j;i--)
    {
        if(array[i]%2==1)
        {
            array.splice(0,0,array[i]);
            array.splice(++i,1);
            j++;
        }
    }
    return array;
}

// Spazio: O(n) 
// Tempo: O(n)
function ex_11_R(array)
{
    j=0;
    i=array.length-1;
    riordinaDispari(array,j,i)
    return array;
}

function riordinaDispari(array,j,i)
{
    if(i<j)
        return array;
    else
    {
        if(array[i]%2==1)
        {
            array.splice(0,0,array[i]);
            array.splice(++i,1);
            j++;
        }
        riordinaDispari(array,j,i-1);
    }
}