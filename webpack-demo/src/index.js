import _ from 'lodash';

function component(){
    let element = document.createElement('div');

    //função join do lodash, recebe dois parâmetros, um array de strings, e uma string para inserir entre eles
    element.innerHTML = _.join(['Hello', 'caio'], ' * ');
    //adicionando classe ao element
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());
