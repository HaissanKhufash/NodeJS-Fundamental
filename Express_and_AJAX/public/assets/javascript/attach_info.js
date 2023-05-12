export function films(){
    const d = document,
    $form = d.querySelector(".form"),
    $template = d.querySelector('#logged-films').content,
    $fragment = d.createDocumentFragment(),

    getAll = async e => {
        try{
            const res = await fetch('/get-films'),
            json = await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            const $tbody = d.querySelector('.table-body')

            // ASSIGNING TEMPLATE ELEMENTS TO TBODY AND GIVING THEM SOME VALUES - AND APPLYING DATASETS TO BUTTONS
            json.films.forEach(el => {
                const clone = d.importNode($template, true),
                $name = clone.querySelector('.film-name'),
                $rate = clone.querySelector('.film-rate')

                $name.textContent = el.film
                $rate.textContent = el.rating

                $fragment.append(clone)
            })
            $tbody.append($fragment);
        } 
        catch(err){
            const $error = d.createElement('p'),
            message = `Error ${err.status} has happened. Therefore: ${err.statusText}`,
            errorMessage = d.createTextNode(message);

            $error.append(errorMessage)
            console.log(err)

            $form.insertAdjacentElement('afterend', $error)
        }
    }
    
    getAll()
    
}

export function postFilm(){
    const d = document,
    $form = d.querySelector(".form")
    const submitAction = async e => {
        if(e.target == $form){
            try{
                const name = await d.querySelector('.film-name').value,
                rate = await d.querySelector('.film-rate').value,
                options = {method: 'POST', 
                           headers: {'Content-Type': 'application/json'},
                           body: JSON.stringify({film: name, rating: rate})
                }

                const res = await fetch('/new', options)
        
                if(!res.ok) throw {status: res.status, statusText: res.statusText}
                
                location.reload()
            } 
            catch(err){
                const $error = d.createElement('p'),
                message = `Error ${err.status} has happened. Therefore: ${err.statusText}`,
                errorMessage = d.createTextNode(message);
        
                $error.append(errorMessage)
                console.log(err)
        
                $form.insertAdjacentElement('afterend', $error)
            }
        }        
    }

    d
    .addEventListener('submit', submitAction)

}