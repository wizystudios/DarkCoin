document.getElementById('converter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;
  
    const response = await fetch(`php/api.php?from=${from}&to=${to}`);
    const data = await response.json();
    const rate = data.rate;
    const result = (amount * rate).toFixed(2);
  
    document.getElementById('result').innerText = `${amount} ${from} = ${result} ${to}`;
  });

  // Get DOM Elements
const overlay = document.getElementById('overlay');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const walletLink = document.getElementById('walletLink'); // Ensure this ID matches the link

// Show Login Popup when My Wallet is clicked
walletLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  console.log('My Wallet clicked'); // Debugging
  overlay.style.display = 'block';
  loginPopup.style.display = 'block';
});

// Switch to Register Popup
showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Show Register clicked'); // Debugging
  loginPopup.style.display = 'none';
  registerPopup.style.display = 'block';
});

// Switch to Login Popup
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Show Login clicked'); // Debugging
  registerPopup.style.display = 'none';
  loginPopup.style.display = 'block';
});

// Close Popups when overlay is clicked
overlay.addEventListener('click', () => {
  console.log('Overlay clicked'); // Debugging
  overlay.style.display = 'none';
  loginPopup.style.display = 'none';
  registerPopup.style.display = 'none';
});

// Simulate Login Success
document.querySelector('#loginPopup form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Login form submitted'); // Debugging
  overlay.style.display = 'none';
  loginPopup.style.display = 'none';
  document.getElementById('wallet').style.display = 'block'; // Show My Wallet section
});