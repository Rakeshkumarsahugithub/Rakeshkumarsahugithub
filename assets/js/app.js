/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js', {
  "particles": {
      "number": {
          "value": 300,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": ["#ff0000", "#00ff00", "#ff00ff", "#ffff00", "#00ffff","#ffffff","#FFA500","#39FF14","#FF69B4","#FFD700","#FF00FF","#40E0D0","#DC143C","#FF00FF","#39FF14"] // Rainbow colors
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000"
          }
      },
      "opacity": {
          "value": 1.8,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1.9,
              "opacity_min": 1.2,
              "sync": false
          }
      },
      "size": {
          "value": 5,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 3,
              "size_min": 2,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 700,
              "rotateY": 200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab" // Particles follow cursor on hover
          },
          "onclick": {
              "enable": true,
              "mode": "push" // Add new particles on click
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 200,
              "line_linked": {
                  "opacity": 2.5
              }
          },
          "push": {
              "particles_nb": 20
          }
      }
  },
  "retina_detect": true
});