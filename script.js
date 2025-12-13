const nameCard = document.getElementById('nameCard');
const apologyCard = document.getElementById('apologyCard');
const nicknameInput = document.getElementById('nickname');
const submitName = document.getElementById('submitName');
const apologyText = document.getElementById('apologyText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const heartsContainer = document.getElementById('hearts');
const popupTitle = document.getElementById('popupTitle');
const popupMsg = document.getElementById('popupMsg');

let noScale = 1.0;
let yesScale = 1.0;
let nickname = '';

submitName.addEventListener('click', () => {
  nickname = nicknameInput.value.trim();
  if (!nickname) {
	alert('Isi dulu nama panggilan kamu dong maniezzz');
	return;
  }

  nameCard.style.display = 'none';
  apologyCard.style.display = 'block';

  const apologyTitle = apologyCard.querySelector('h1');
  apologyTitle.textContent = `${nickname}, aku minta maaf`;

  apologyText.innerHTML = `Aku gak bermaksud bikin kamu kesel.<br>Maafin aku, ya?`;
});

let noScale = 1;

noBtn.addEventListener('click', () => {
  noScale -= 0.15;            // tiap klik makin kecil

  if (noScale <= 0.25) {
	noScale = 0.25;           // batas minimum
	noBtn.style.pointerEvents = 'none'; // akhirnya gak bisa diklik
	noBtn.textContent = '...';
  }

  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = noScale; // sekalian makin pudar
});

yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  popupTitle.textContent = `Makasih ya, ${nickname}udah mau maafin`;
  popupMsg.textContent = ent = `Aku janji gak bakal bikin kamu kesel, suerr dehh`;
  generateHearts();
  setTimeout(() => {
	popup.classList.remove('active');
	noScale = 1;
	yesScale = 1;
	noBtn.style.transform = `scale(1)`;
	yesBtn.style.transform = `scale(${1 + (1 - noScale) * 0.4})`;
  }, 5000);
});

function generateHearts() {
  for (let i = 0; i < 12; i++) {
	const heart = document.createElement('div');
	heart.className = 'heart';
	heart.style.left = `${Math.random() * 100 - 50}px`;
	heart.style.top = `${Math.random() * 40 - 20}px`;
	heart.style.animationDelay = `${Math.random() * 0.3}s`;
	heartsContainer.appendChild(heart);
	setTimeout(() => heart.remove(), 2000);
  }
}
