const comment = document.querySelector('#comment-body');


function formHandler() {
    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document .addEventListener('click', clickHandler());