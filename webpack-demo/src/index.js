
async function getComponent(){
    var element = document.createElement('div');
    const {default: _ } = await import(/*webpackChunckName "lodash"*/'lodash');

    element.innerHTML = _.join(['Hello','caio'],' ');

    return element;
}

getComponent().then(component=>{
    document.body.appendChild(component);
})