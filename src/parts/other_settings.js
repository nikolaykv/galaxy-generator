import * as THREE from 'three';

/**
 * Размеры холста
 *
 * @type {{width: number, height: number}}
 */
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * @type {Element}
 */
const CANVAS = document.querySelector('canvas.webgl');

/**
 * Объект three.js для учета времени
 * @type {Clock}
 */
const CLOCK = new THREE.Clock();


export {
    sizes,
    CANVAS,
    CLOCK
};