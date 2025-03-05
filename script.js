function saveTextAreas() {
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach((textArea, index) => {
      localStorage.setItem(`textArea_${index}`, textArea.value);
    });
  }
  
  function restoreTextAreas() {
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach((textArea, index) => {
      const savedValue = localStorage.getItem(`textArea_${index}`);
      if (savedValue) {
        textArea.value = savedValue;
      }
    });
  }
  
  // Save text areas before the page unloads (e.g., close, refresh)
  window.addEventListener('beforeunload', saveTextAreas);
  
  // Restore text areas when the page loads
  window.addEventListener('load', restoreTextAreas);
  
  // Optionally, save on input changes as well
  document.addEventListener('input', (event) => {
    if (event.target.tagName === 'TEXTAREA') {
      const textAreas = document.querySelectorAll('textarea');
      textAreas.forEach((textArea, index) => {
        localStorage.setItem(`textArea_${index}`, textArea.value);
      });
    }
  });
  
  //example html
  /*
  <textarea id="textArea1" rows="4" cols="50"></textarea>
  <textarea id="textArea2" rows="4" cols="50"></textarea>
  <textarea id="textArea3" rows="4" cols="50"></textarea>
  */

  