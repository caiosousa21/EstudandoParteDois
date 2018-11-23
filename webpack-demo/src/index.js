function getComponent(){
    return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _ })=>{
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello','caio'], " ");

        return element;
    }).catch(error => 'Um erro ocorreu enquanto carregavamos o componente :c');
}

getComponent().then(component=>{
    document.body.appendChild(component);
})