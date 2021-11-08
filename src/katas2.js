// comece a criar a sua função add na linha abaixo
function add(n1,n2){
 return n1+n2
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(n3,n4){
    let result= 0
    for(let i=0;i<=n3;i++){
        result= add(result,n4)
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(n5,n6){
    let factor=1
    for(let i=1;i<=n6;i++){
        factor=multiply(n5,factor)
    }
    return factor
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(number){
    if(number===0){
        return 1
    }
    let indicator=1
    for(number;number>=1;number--){
        indicator=multiply(indicator,number)
    }
    return indicator
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(coeficient){
    let num7=0
    let num8=1
    if(coeficient===0){
        return num7
    }
    else if (coeficient>0){
        for(let i=0;i<coeficient;i++){
            let num9=add(num7,num8)
            num7=num8
            num8=num9
        }
        return num7
    }
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
