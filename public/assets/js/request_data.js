const d = document;

let setData = new Set();

export function saveRequest(ids, success){
    // form element - footer - article
    const $form = d.getElementById(ids[0]),
    $formsGrand = $form.parentElement.parentElement,
    $formsParent = $form.parentElement,

    $template = d.getElementById(ids[1]).content,
    $fragment = d.createDocumentFragment(); 

    d.addEventListener("submit", e => {

        e.preventDefault();

        if(e.target == $form){
            let places = {
                name: $form.name,
                mail: $form.mail,
                feedback: $form.feedback,
            }

            let text = d.createTextNode(`${places.name.value} has been verified...`),
            btnText = d.createTextNode('Back to form');
            
            const clone = $template.cloneNode(true),
            $success = clone.querySelector(success);

            $success.children[0].append(text);
            $success.children[1].append(btnText);

            $fragment.appendChild(clone);


            for (const key in places) {
                info[key].value = '';
            }

            $formsGrand.replaceChild($fragment, $formsParent);

        }
        
    })


    d.addEventListener('click', e => {

        const $successBtn = d.querySelector(`${success} button`);

          if(e.target == $successBtn){
            
            const $success = d.querySelector(success);

            $formsGrand.replaceChild($formsParent, $success);
          }
    })
}