const editedTitle = document.querySelector('#post-title');
const editedBody = document.querySelector('#post-body');


function formHandler() {
    fetch('/api/posts', {
        method: 'PUT',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document .addEventListener('click', clickHandler());