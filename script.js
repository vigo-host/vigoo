document.addEventListener("DOMContentLoaded", () => {

  const nameCard = document.getElementById('nameCard');
  const apologyCard = document.getElementById('apologyCard');
  const nicknameInput = document.getElementById('nickname');
  const submitName = document.getElementById('submitName');
  const apologyText = document.getElementById('apologyText');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  let nickname = '';
  let noScale = 1;

  // ===== TOMBOL LANJUT =====
  submitName.addEventListener('click', () => {
    nickname = nicknameInput.value.trim();

    if (!nickname) {
      alert('Isi dulu nama panggilan kamu dong maniezzz');
      return;
    }

    nameCard.style.display = 'none';
    apologyCard.style.display = 'block';

    apologyCard.querySelector('h1').textContent =
      `${nickname}, aku minta maaf`;

    apologyText.innerHTML =
      `Aku gak bermaksud bikin kamu kesel.<br>Maafin aku, ya?`;
  });

  // ===== TOMBOL TIDAK MAKIN KECIL =====
  noBtn.addEventListener('click', () => {
    noScale -= 0.15; // makin kecil tiap klik

    if (noScale <= 0.25) {
      noScale = 0.25;
      noBtn.style.pointerEvents = 'none'; // akhirnya gak bisa diklik
    }

    noBtn.style.transform = `scale(${noScale})`;
    noBtn.style.opacity = noScale;
  });

  // ===== TOMBOL MAAFIN (NORMAL) =====
  yesBtn.addEventListener('click', () => {
    alert(`Makasih ya ${nickname} 🤍`);
  });

});
