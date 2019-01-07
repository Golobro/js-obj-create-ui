(function(){
    let form = $('form');
    let submitted = false;
    let output = $('output');
    let body = qs('body');
    let reset = $('reset');

    // init Render
    css(body, 'height', '100vh');
    display(reset, 'hiddn');

    // addEventListeners
    reset.addEventListener('click', resetAll, false);
    form.addEventListener('submit', handleForm);

    // form
    function handleForm(e){
        e.preventDefault();
        let objName = $('input-name').value;
        let objProp = $('input-prop').value;
        let propVal = $('input-propVal').value;

        if (!submitted) {
            renderData(output, `
            <textarea> 
                var ${objName} = { 
                    ${objProp}: ${propVal} 
                };
            </textarea>  
            `);
            display(output, 'show');
            display(reset, 'visbl');
        }
    }

    // reset all fields
    function resetAll(){
        renderData(output, '');
    }
})();