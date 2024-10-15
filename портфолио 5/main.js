document.getElementById('generateBtn').addEventListener('click', function () {
  const length = parseInt(document.getElementById('length').value);
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  document.getElementById('password').innerText = password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  let charSet = '';
  if (includeUppercase) charSet += uppercaseChars;
  if (includeLowercase) charSet += lowercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSymbols) charSet += symbolChars;

  if (charSet === '') return ''; // Если не выбрано ни одного типа символов

  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
  }
  
  return password;
}
