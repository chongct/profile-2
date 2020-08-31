import React, { Component, createRef } from 'react';
import * as THREE from 'three';

import threeHelper from '../three';

class App extends Component {
  constructor() {
    super();
    this.appRef = createRef();
  }

  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    this.appRef.current.appendChild(renderer.domElement);

    threeHelper({ camera, renderer, scene });
  }

  render() {
    return (
      <div ref={this.appRef} />
    )
  }
}

export default App;
