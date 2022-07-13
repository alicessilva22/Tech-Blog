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

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add post');
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
