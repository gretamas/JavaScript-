const block = document.getElementById('block');

let isResizing = false;
  let previousX;
  let previousY;

  block.addEventListener('mousedown', function(event) {
    if (event.offsetX >= block.offsetWidth - 10 && event.offsetY >= block.offsetHeight - 10) {
      isResizing = true;
      previousX = event.clientX;
      previousY = event.clientY;
    }
  });

  document.addEventListener('mousemove', function(event) {
    if (isResizing) {
      const changeX = event.clientX - previousX;
      const changeY = event.clientY - previousY;
      block.style.width = (block.offsetWidth + changeX) + 'px';
      block.style.height = (block.offsetHeight + changeY) + 'px';
      previousX = event.clientX;
      previousY = event.clientY;
    }
  });

  document.addEventListener('mouseup', function() {
    isResizing = false;
  });  