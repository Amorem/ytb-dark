window.onload = () => {
  const button = document.createElement('button');
  button.id = 'darkModeButton';
  button.textContent = 'Dark Mode';

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'darkSetting';

  document.querySelector('#end').prepend(button, input, 'Persist');
  button.addEventListener('click', () => enableDarkMode());
  input.addEventListener('click', () => storeSetting());
  checkSetting();
};

function enableDarkMode() {
  document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'black';
}

function storeSetting() {
  const isEnabled = document.getElementById('darkSetting').checked;
  const setting = {
    enabled: isEnabled,
  };
  chrome.storage.local.set(setting, () => {
    console.log('setting stored', setting);
  });
}

function checkSetting() {
  chrome.storage.local.get(['enabled'], result => {
    console.log('Loaded', result.enabled);
    document.getElementById('darkSetting').checked = result.enabled;
    if (result.enabled) {
      enableDarkMode();
    }
  });
}
