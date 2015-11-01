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