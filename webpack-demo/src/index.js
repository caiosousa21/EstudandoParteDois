import{cube}from './math.js' 

if (process.env.NODE_ENV !== 'production'){
    console.log('Estamos em modo de desenvolvimento');
}

function component(){
    let element = document.createElement('pre');
    element.innerHTML=[
        'Hello caio!',
        '5 ao cubo é igual a '+cube(5)
    ].join('\n\n')
    return element;
}

document.body.appendChild(component());
