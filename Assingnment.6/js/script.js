document.addEventListener('DOMContentLoaded', () => {
  const setLen = document.getElementById('setLen');
  const numbersCheckbox = document.getElementById('numbers');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const symbolsCheckbox = document.getElementById('symbols');
  const resultElement = document.getElementById('result');
  const clipBoardBtn = document.getElementById('clipBoard');
  const creBtn = document.getElementById('creBtn');

  const numbers = '0123456789';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '@!#$&%';

  const passwordSets = {
    [Symbol.for('numbers')]: numbers,
    [Symbol.for('lowercase')]: lowercase,
    [Symbol.for('uppercase')]: uppercase,
    [Symbol.for('symbols')]: symbols,
  };

  function* passwordGenerator(length) {
    const selectedSets = [];

    if (numbersCheckbox.checked)
      selectedSets.push(passwordSets[Symbol.for('numbers')]);
    if (lowercaseCheckbox.checked)
      selectedSets.push(passwordSets[Symbol.for('lowercase')]);
    if (uppercaseCheckbox.checked)
      selectedSets.push(passwordSets[Symbol.for('uppercase')]);
    if (symbolsCheckbox.checked)
      selectedSets.push(passwordSets[Symbol.for('symbols')]);

    if (selectedSets.length === 0) {
      yield '';
    } else {
      for (let i = 0; i < length; i++) {
        const randomSet =
          selectedSets[Math.floor(Math.random() * selectedSets.length)];
        const randomChar =
          randomSet[Math.floor(Math.random() * randomSet.length)];
        yield randomChar;
      }
    }
  }

  function generatePassword() {
    const passwordLength = parseInt(setLen.value) || 8;
    const gen = passwordGenerator(passwordLength);

    const passwordArray = [];
    for (let char of gen) {
      passwordArray.push(char);
    }

    const password = passwordArray.join('');
    resultElement.textContent = password;
  }

  creBtn.addEventListener('click', generatePassword);

  clipBoardBtn.addEventListener('click', () => {
    const password = resultElement.textContent;
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert('비밀번호 복사 성공!');
        })
        .catch((err) => {
          alert('비밀번호 복사 실패!: ' + err);
        });
    } else {
      alert('비밀번호 생성이 되지 않았습니다.');
    }
  });
});
