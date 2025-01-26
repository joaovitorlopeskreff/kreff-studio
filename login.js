// Get the login form element
const loginForm = document.getElementById('login-form');

// Add submit event listener to the form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email && password) {
        // // Make API call to authenticate
        // fetch('/database/data.sql', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password,
        //         query: `SELECT id, email FROM usuarios WHERE email = '${email}' AND senha = '${password}'`
        //     })
        // })
        // .then(response => response.json()) 
        // .then(data => {
        //     if (data && data.length > 0) {
        //         // Login successful - user found in database
        //         alert('Login realizado com sucesso!');
        //         // Store user info
        //         localStorage.setItem('userId', data[0].id);
        //         localStorage.setItem('userEmail', data[0].email);
        //         // Redirect to home
        //         window.location.href = '/';
        //     } else {
        //         // No matching user found
        //         alert('Email ou senha inválidos');
        //     }
        // })
        // .catch(error => {
        //     console.error('Erro ao conectar com banco de dados:', error);
        //     alert('Erro ao verificar credenciais. Tente novamente.');
        // });


        
        // Close the browser window
        window.close();
    } else {
        alert('Por favor, preencha todos os campos');
    }

    
});


