// ตัวอย่าง: สลับเปลี่ยนธีมสีพื้นหลัง (Light/Dark Mode)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = '白天模式/夜间模式';
  btn.style.position = 'fixed';
  btn.style.top = '24px';
  btn.style.right = '24px';
  btn.style.zIndex = '99';
  btn.style.padding = '8px 18px';
  btn.style.background = '#f6d686';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.color = '#2a2c4c';
  btn.style.fontWeight = 'bold';
  btn.style.cursor = 'pointer';

  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      document.body.style.background = '#23253a';
      document.querySelector('.main-content').style.background = '#202234';
      document.querySelector('.main-content').style.color = '#eee';
    } else {
      document.body.style.background = '#e8ebf7';
      document.querySelector('.main-content').style.background = '#fff';
      document.querySelector('.main-content').style.color = '#2a2c4c';
    }
    function move() {
  var elem = document.getElementById("myBar");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("demo").innerHTML = width * 1  + '%';
    }
  }
}
  });
});