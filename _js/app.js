(function($, THREE, App){
  //Private
  var _app = {};


  function startLightShow() {
    // Three.js ray.intersects with offset canvas

    var container, camera, scene, renderer, mesh,

    mouse = { x: 0, y: 0 },
    objects = [],

    count = 0,

    CANVAS_WIDTH = 400,
    CANVAS_HEIGHT = 200;

    container = document.getElementById( 'canvas' );
    document.body.appendChild( container );

    renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    container.appendChild( renderer.domElement );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000 );
    camera.position.y = 150;
    camera.position.z = 500;
    camera.lookAt( scene.position );

    mesh = new THREE.Mesh(
      new THREE.BoxGeometry( 100, 100, 100, 1, 1, 1 ),
      new THREE.MeshBasicMaterial( { color : 0xff0000, wireframe: true }
      ) );
      scene.add( mesh );
      objects.push( mesh );

      // find intersections
      var vector = new THREE.Vector3();
      var raycaster = new THREE.Raycaster();

      function render() {
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;
        mesh.rotation.x += 0.03;

        renderer.render( scene, camera );
      }
      (function animate() {
        requestAnimationFrame( animate );
        render();
      })();


    }

    function showText(target, message, index, interval) {
      if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, Math.random()*interval);
      } else {
        startLightShow();
      }
    }

    function findTargetToShowText() {
      if (document.getElementById('show-text')) {
        var target = document.getElementById('show-text');
        var message = "Hello World";
        showText(target, message, 0, 250);
      }
    }

    //Public
    App.State = {
      init: function(){
        App.Helpers.showMe();
        App.Index.init();
        App.Nav.init();
        if (/portfolios/.test(window.location.href)) {
          App.Portfolio.init();
        }
        _app.appendLandingText = findTargetToShowText();

      }
    }

    //Load it All
    window.addEventListener('load', function() {
      'use strict';
      App.State.init();
    });

  })(jQuery, window.THREE = window.THREE, window.App = window.App || {});
