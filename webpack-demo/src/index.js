import _ from 'lodash';
import Print from './print';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'Olá Caio');

    return element;
}

document.body.appendChild(component());