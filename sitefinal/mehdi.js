document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
    } else {
        alert('Formulaire soumis avec succès !');
        this.reset(); 
    }
});