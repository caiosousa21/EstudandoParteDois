import _ from 'lodash';

function component(){
    var element = document.createElement('div');
    element.innerHTML = join(['olá','caio'], ' ');

    this.alert('Hmmm, testando...');

    return element;
}

document.body.appendChild(component());