import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('/service-worker.js').then(registration =>{
            console.log('SW registered: ', registration);
        }).catch(registrationError =>{
            console.log('SW registration failed ', registrationError);
        });
    });
}
console.log('caio')
function component(){
    let element = document.createElement('div');
    var btn = document.createElement('button');

    //função join do lodash, recebe dois parâmetros, um array de strings, e uma string para inserir entre eles
    element.innerHTML = _.join(['Hello', 'caio'], ' * ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

//passando função como parâmetro irá criar os elementos duas vezes, uma na chamada de appendChild e outra na chamada de element
// let element = component();
// document.body.appendChild(element);
document.body.appendChild(component);


if (module.hot) {
       module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
         document.body.removeChild(element);
         element = component();
         document.body.appendChild(element);
      })
     }