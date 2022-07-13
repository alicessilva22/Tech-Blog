const title = document.querySelector('#post-title')
const text = document.querySelector('#post-body')

function formHandler() {
    fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document .addEventListener('click', clickHandler());
