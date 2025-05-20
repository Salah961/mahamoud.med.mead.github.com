document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Récupérer les valeurs des champs
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation simple
  if (nom === '' || email === '' || message === '') {
    document.getElementById('form-message').textContent = 'Veuillez remplir tous les champs.';
    return;
  }

  // Afficher un message de confirmation
  document.getElementById('form-message').textContent = 'Merci pour votre message ! Je vous répondrai bientôt.';

  // Réinitialiser le formulaire
  document.getElementById('contact-form').reset();
});