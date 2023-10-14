
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBookForm)
}

function renderBookForm(book) {
    let bookForm = document.querySelector('.container')
 // creating a list item -setting text for li to be the book title
    let bookLi = document.createElement("li")
    bookLi.textContent = book.title
// creating a textbox, we used the input element and setting value into book quantity
    let bookQuantity = document.createElement("input")
    bookQuantity.value = book.quantity
//    append the text box (input element we created) to the li
    bookLi.append(bookQuantity)

    let saveButton = document.createElement('button')
    saveButton.textContent = 'SAVE'

    // adding an event listener to save button
    saveButton.addEventListener('click', () => {
        let response = fetch('http://localhost:3001/updateBook',{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                id: book.id, 
                quantity: bookQuantity.value

            })
        })
    })
    bookLi.append(saveButton)
// append li to the book form div container we have.
    bookForm.append(bookLi)

   0 
    
}

main()