async function newFormHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector('#post_title').value;
    const post_body = document.querySelector('#post_body').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_body,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    document.location.replace('/dashboard');
}

document.querySelector('.create-btn').addEventListener('submit', newFormHandler);
