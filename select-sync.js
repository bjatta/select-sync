;((container,maxItemNumber)=>{
    if(container){

        let _=container;
        let __=console.log;

        let selectListChecker = e=>{
            let selects=_.querySelectorAll('select');
            let selected=[];

            selects.forEach(
                select=>{
                    if (selected.indexOf(select.value)!==-1){
                        select.value="";
                    }
                        select.querySelectorAll('option').forEach(
                        op=>{
                            if (op.selected && op.value) {
                                selected.push(op.value);
                            }
                            if (selected.indexOf(op.value)!==-1){
                                op.setAttribute('hidden','');
                            }else{
                                op.removeAttribute('hidden');
                            }
                        });
                });
        };

        document.addEventListener("DOMContentLoaded", e=>{

            firstSelect = _.querySelector('div.select-wrapper');
            firstSelect.firstElementChild.addEventListener('change',selectListChecker);
            _.querySelector('#select-sync-button').addEventListener('click',e=>{

                if (_.querySelectorAll('select').length<maxItemNumber) {
                    let clonedElement = firstSelect.cloneNode(true);

                    _.insertBefore(clonedElement, _.lastChild);
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