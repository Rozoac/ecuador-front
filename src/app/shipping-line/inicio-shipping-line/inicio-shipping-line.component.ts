import { Component, OnInit } from '@angular/core';
import {Power1, Bounce, Expo} from 'gsap/all';
import * as THREE from 'three';

declare var TweenMax: any;

@Component({
  selector: 'app-inicio-shipping-line',
  templateUrl: './inicio-shipping-line.component.html',
  styleUrls: ['../shipping-line.component.css']
})
export class InicioShippingLineComponent implements OnInit {

  public scene = new THREE.Scene();

  constructor() {}
  
  ngOnInit() {

      this.generarRender();
      this.generarSombras();

      // const loader = new THREE.GLTFLoader();
      // loader.load('scene.gltf', function(gltf) {
      // const car = gltf.scene.children[0];
      // car.scale.set(0.5,0.5,0.5);
      // scene.add(gltf.scene);
      // animate();
      // });



    TweenMax.from('.left-col', 2, {
      width: '0%',
      ease: Expo.easeInOut
});
TweenMax.from('.logo', 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.buy', 2, {
      delay: 2.8,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.year', 2, {
      delay: 3.1,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-name', 2, {
      delay: 2.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-artist', 2, {
      delay: 2.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.about h1', 2, {
      delay: 3,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-name2', 2, {
      delay: 3.2,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-artist2', 2, {
      delay: 3.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-genre2', 2, {
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.media p', 2, {
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.staggerFrom('.media ul li', 2, {
      delay: 3.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
}, 0.1);
TweenMax.from('.album-name3', 2, {
      delay: 4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.album-artist3', 2, {
      delay: 4.2,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.next', 2, {
      delay: 4.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
TweenMax.from('.more', 2, {
      delay: 4.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
});
  }
  generarRender() {
      this.scene.background = new THREE.Color(0xdddddd);
      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight , 1 , 5000);
      camera.rotation.y = 45 / 180 * Math.PI;
      camera.position.x = 800;
      camera.position.y = 100;
      camera.position.z = 1000;
      const renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  }

  generarSombras() {
      const hlight = new THREE.AmbientLight (0x404040, 100);
      this.scene.add(hlight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      this.scene.add(directionalLight);
      const light = new THREE.PointLight(0xc4c4c4, 10);
      light.position.set(0, 300, 500);
      this.scene.add(light);
      const light2 = new THREE.PointLight(0xc4c4c4, 10);
      light2.position.set(500, 100, 0);
      this.scene.add(light2);
      const light3 = new THREE.PointLight(0xc4c4c4, 10);
      light3.position.set(0, 100, -500);
      this.scene.add(light3);
      const light4 = new THREE.PointLight(0xc4c4c4, 10);
      light4.position.set(-500, 300, 500);
      this.scene.add(light4);
  }
}
