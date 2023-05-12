const d = document;

export function gridItemSelected(grid){
    const $gridContainer = d.querySelector(grid[0]),
    $allItems = d.querySelectorAll(grid[1]);

    d.addEventListener('click', e => {
        $allItems.forEach(item => {
            for (const i of $gridContainer.children) {
                if(item.nextElementSibling == i){
                    if(e.target == item.nextElementSibling){
                        item.classList.remove('hide-item');
                    }
                }
                
                if(item == i){
                    if(e.target == item){
                        item.classList.add('hide-item');
                    }
                }

            }
        })
    })

}