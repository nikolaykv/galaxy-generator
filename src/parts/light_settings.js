import * as THREE from "three";
import params from "../params.json";

let lightOne = new THREE.PointLight(
    params.lightColor,
    params.lightIntensity
);

let lightTwo = new THREE.PointLight(
    params.lightColor,
    params.lightIntensity
);

lightOne.position.set(
    params.lightOne.x,
    params.lightOne.y,
    params.lightOne.z
);

lightTwo.position.set(
    params.lightTwo.x,
    params.lightTwo.y,
    params.lightTwo.z
);

export {lightOne, lightTwo};