//Bershadskyy Yaroslav

/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function ex_1_F(myarray) 
{
        var already=false;
        var tot=myarray.reduce(
                                    function(a,x)
                                    {
                                        if(x>0 && !already)
                                            a+=x;
                                        else
                                            already=true;
                                         return a;
                                    },0
                              )
        return tot;
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function ex_2_F(n)
{
    var array=[];
    j=1;
    for(i=0;i<n;i++)
    {
        array[i]=j;
        j+=2;
    }

    return array.reduce(function(a,x){return a+x;},0);

}


/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function ex_3_F(array)
{
    var tot=array.reduce(function(a,x){return a+x;},0);
    return tot/10;
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]*/

function ex_4_F(a,b)
{
    if(a>b)
    {
        c=a;
        a=b;
        b=c;
    }
    var j=b;
    var array=[];
    for(i=0;a<=b;i++)
    {
        array[i]=a;
        a++;
    }
    return array.reduce(function(a,x){return a+x;},0);
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/

function ex_5_F(a,b)
{
    var array=[];
    for(i=0;i<b;i++)
    {
        array[i]=a;
    }
    return array.reduce(function(a,x){return a+x},0);
}

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/

function ex_6_F(a,b)
{
    if(a<b)
        return [0,b];
    else
    {
        var array=[];
        var A=a;
        var B=b;
        for(i=0;a>=b;i++)
       {
            array[i]=b;
            a-=b;
       }
        return [array.length,a];
    }
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/

function ex_7_F(a,b)
{
    var array=[];
    for(i=0;i<b;i++)
    {
        array[i]=a;
    }
    return array.reduce(function(a,x){return a*x},1); 
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/

// Spazio: O(n^2) 
// Tempo: O(n^2)
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

function ex_9_F(array)
{
    return array.reverse();
}

/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/

function ex_10_F(a,n)
{
    var array=[0];
    var i=0;
     array.forEach(
        function(x)
        {
            if(i<n)
            {
                x=a;
                i++;
                array[i]=0;
            }
            return x;
        }
    )
    return array;
}

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