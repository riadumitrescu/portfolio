document.addEventListener('mousemove', function(e) {
    var circle = document.querySelector('.circle');
    var section = document.querySelector('.light-side-section');
    
    // Get the bounding rectangle of the section
    var rect = section.getBoundingClientRect();
    
    // Calculate the mouse position relative to the section
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    
    // Set the transform property of the circle to center it on the mouse
    circle.style.transform = 'translate(' + (x - circle.offsetWidth / 2) + 'px, ' + (y - circle.offsetHeight / 2) + 'px)';
});
