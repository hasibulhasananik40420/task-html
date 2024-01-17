

document.addEventListener('DOMContentLoaded', function () {
    var scrollingImage = document.querySelector('.scrolling-image img');
    var initialWidth = scrollingImage.clientWidth;
    var initialHeight = scrollingImage.clientHeight;
  
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
  
      // Calculate new dimensions based on scroll position
      var newWidth = Math.max(initialWidth - scrollPosition, 270);
      var newHeight = Math.max(initialHeight - scrollPosition, 140);
  
      // Ensure the image size doesn't go below the minimum values
      newWidth = Math.max(newWidth, 270);
      newHeight = Math.max(newHeight, 140);
  
      // Set the new size and position of the image
      scrollingImage.style.width = newWidth + 'px';
      scrollingImage.style.height = newHeight + 'px';
      scrollingImage.style.top = (initialHeight - newHeight) + 'px';
    });
  });
  