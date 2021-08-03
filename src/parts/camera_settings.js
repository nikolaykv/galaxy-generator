import * as THREE from "three";
import {sizes} from "./other_settings";


/**
 * Настройка камеры
 *
 * @type {PerspectiveCamera}
 */
const CAMERA = new THREE.PerspectiveCamera(
    16,
    sizes.width / sizes.height,
    0.08,
    100,
);

CAMERA.position.set(
    2.3,
    1,
    3
);

export {CAMERA};