// Раскрытие панелей по кнопкам about / projects / skills
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const panel = document.getElementById(tab.dataset.panel);
    const isOpen = panel.classList.contains('open');

    // закрыть всё
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
    tabs.forEach(t => t.classList.remove('active'));

    // открыть выбранное (повторный клик — закрывает)
    if (!isOpen) {
      panel.classList.add('open');
      tab.classList.add('active');
    }
  });
});

// Часы. Поменяй timeZone на свой, напр. 'Europe/Moscow', 'Asia/Almaty'
const TIME_ZONE = 'Europe/Moscow';
const timeEl = document.getElementById('time');

function tick() {
  timeEl.textContent = new Date().toLocaleTimeString('en-GB', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit'
  });
}

tick();
setInterval(tick, 10000);
