
let lightMode = localStorage.getItem('lightMode'); 
const darkModeToggle =  document.getElementById('chk');

const enableDarkMode = () => {
  
  document.body.classList.add('dark');

 
  localStorage.setItem('lightMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('dark');

  
  localStorage.setItem('lightMode', null);
}
 

if (lightMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
 
 lightMode = localStorage.getItem('lightMode'); 
  

  if (lightMode !== 'enabled') {
    enableDarkMode();
 
  } else {  
    disableDarkMode(); 
  }
});


