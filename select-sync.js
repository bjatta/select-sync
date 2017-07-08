;((container,maxItemNumber)=>{

    if(container){

        let _=container;
        let __=console.log;

        let selectListChecker = e=> {
            let selects = _.querySelectorAll('select');
            let selected = [];

            selects.forEach(select=>{
                let currentWidth = ((100-selects.length)/selects.length)+'%;'
                select.setAttribute('style','width: '+ currentWidth+' min-width: '+currentWidth);
                if (selected.indexOf(select.value) !== -1) {
                    select.value = "";
                }
                select.querySelectorAll('option').forEach(op=>{
                    if (op.selected && op.value) {
                        selected.push(op.value);
                    }
                    if (selected.indexOf(op.value) !== -1) {
                        op.setAttribute('hidden', '');
                    } else {
                        op.removeAttribute('hidden');
                    }
                });
            });
        };

        document.addEventListener("DOMContentLoaded", e=>{
            let firstSelect = _.querySelector('select');

            firstSelect.addEventListener('change',selectListChecker);
            _.querySelector('#select-sync-button').addEventListener('click',e=>{

                if (_.querySelectorAll('select').length<maxItemNumber) {
                    let clonedElement = firstSelect.cloneNode(true);

                    firstSelect.parentElement.appendChild(clonedElement);
                    clonedElement.addEventListener('change',selectListChecker);
                    selectListChecker();
                }else{
                    __('Max number of items : '+maxItemNumber+' are reached!');
                }
            });
        });

    }else{
        console.error('Container with id="#select-sync" not found. Try to correct or html or given id.');
    }

})(document.querySelector('#select-sync'),6);