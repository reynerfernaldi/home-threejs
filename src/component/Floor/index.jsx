import React from "react";
import { angleToRadians } from "../../utils/angle";
import { PerspectiveCamera, OrbitControls, Environment, useTexture, Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, LinearEncoding, Mesh, PointLight, PointLightHelper, Vector2 } from "three";

const Floor = () => {
  let texture = useLoader(TextureLoader, "texture/grass.jpeg");
  return (
    <>
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial map={texture} metalness={1} roughness={1} aoMapIntensity={1} displacementScale={1} transparent metalnessMap={null} normalScale={new Vector2(1, 1)} />
      </mesh>
    </>
  );
};

export default Floor;
