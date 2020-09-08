
    const add = document.querySelector('.addButton')
    const input = document.querySelector('input')
    const contain = document.querySelector('.contain')

    class item {
        constructor(itemName) {
            this.createDiv(itemName);
        
        }
        createDiv(itemName) {
            let input = document.createElement('input');
            input.value = itemName;
            input.disabled = true;
            input.classList.add('item__input')
            input.classList.add('item__input')
            input.type = 'text';

            let itemBox = document.createElement('div')
            itemBox.classList.add('contain__item');

            // icons
            
            
            let editIcon =  document.createElement('i')
            editIcon.classList.add('fas');
            editIcon.classList.add('fa-pen');
            editIcon.classList.add('col');
        
            let removeIcon =  document.createElement('i')
            removeIcon.classList.add('fas');
            removeIcon.classList.add('fa-trash');
            removeIcon.classList.add('col');

            // End of Icons

            let toggleButton=  document.createElement('input')
            toggleButton.type = 'checkbox'
            toggleButton.name = 'check'
            toggleButton.id = 'check'

            let editButton = document.createElement('button');
            editButton.classList.add('editButton');
            editButton.appendChild(editIcon)
                

            let removeButton = document.createElement('button');
            removeButton.classList.add('removeButton');
            removeButton.appendChild(removeIcon)


            contain.appendChild(itemBox);
            itemBox.appendChild(toggleButton)
            itemBox.appendChild(input)
            itemBox.appendChild(editButton)
            itemBox.appendChild(removeButton)


            

        toggleButton.addEventListener('click', function(input) {
            var id = toggleButton.parentNode;
            var todos = id.querySelector('.item__input')
           todos.classList.toggle('done')
        });
        
        editButton.addEventListener('click', () => this.edit(input));
        
        removeButton.addEventListener('click', function() {
            const list = removeButton.parentNode;
            contain.removeChild(list)
        });
        
        }
        edit(input) {
            input.disabled = !input.disabled;
        }
        
    }
    function cheeck() {
        if(input.value !== "") {
            new item(input.value)
            input.value = "" 
        }
        
    }
add.addEventListener('click', cheeck)
       
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        cheeck();
    }
})

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', "Nov", "Dec"]

const d = new Date();
var day = d.getDay()
var month = d.getMonth()

var monthValue = months[month]
document.getElementById('date').innerHTML = day +" "+ monthValue;
