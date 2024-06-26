let errormessage = "You must write something!";

function newItem() {
    // Adding a new item to the list of items:
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if (inputValue === '') {
        //alert("You must write something!");
        showErrorMessage(errormessage);
    } else {
        showErrorMessage(null);
        $('#list').append(li);
    }

    // Crossing out an item from the list of items:
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.addClass('fa fa-trash');
    //crossOutButton.append(document.createTextNode('x'));
    li.append(crossOutButton);

    // Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete")
    }
    // Reordering the items: 
    $('#list').sortable();

    // Remove input value
    $('#input').val('');
}

// Add new item when the input is not empty and the key Enter is pressed.
window.addEventListener('keydown', (e) => {
    let input = $('#input').val();
    if (e.key === 'Enter') {
        e.preventDefault();
        if (input !== '') {
            newItem();
        } else if ($('#input').is(":focus")) {
            showErrorMessage(errormessage);
        }
    }
});

function showErrorMessage(message) {
    // Remove an existing error
    $('.error-message').text('');

    // Now add the error, if the message is not empty
    if (message) {
        $('.error-message').text(message);
    }
}