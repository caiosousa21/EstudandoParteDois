import _ from 'lodash';

function component(){
    var element = document.createElement('div');
    element.innerHTML = join(['olá','caio'], ' ');

    return element;
}

document.body.appendChild(component());