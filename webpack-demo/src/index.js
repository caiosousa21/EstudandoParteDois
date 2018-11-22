import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import Data from './data.xml'

function component(){
    let element = document.createElement('div');

    //função join do lodash, recebe dois parâmetros, um array de strings, e uma string para inserir entre eles
    element.innerHTML = _.join(['Hello', 'caio'], ' * ');
    //adicionando classe ao element
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
