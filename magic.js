var create = function() {
    // random x and y
    var x = Math.random() * (window.innerWidth - 50); // Start at random position
    var y = window.innerHeight - 50; // Start on the floor

    // set div attributes
    var div = document.createElement('div');
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '50px';    
    div.style.height = '50px';

    // Create rabbit image
    var img = document.createElement('img');
    img.src = 'img/rabbit_icon.png'; // Path to your rabbit icon image
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '50%';
    img.style.transition = 'transform 0.2s'; // Smooth turning effect

    // Append image to div
    div.appendChild(img);

    // Append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    div.dx = 1; // Default direction to the right
    div.dy = 0;
    div.img = img; // Store reference to img for flipping
    return div;        
}

var move = function(div, x, y) {
    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';

    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';                  
}
