const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    function signupFormHandler() {
      fetch('/api/posts', {
          method: 'PUT',
          body: JSON.stringify({ title, text }),
          headers: { 'Content-Type': 'application/json' },
      });
  };
  
  document .addEventListener('click', clickHandler());