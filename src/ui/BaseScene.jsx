import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "../App.css";
import Lights from "../component/Lights";
import Floor from "../component/Floor";

import { useState, useEffect } from "react";

const BasicScene = ({ children }) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div>
      <Canvas shadows camera={{ fov: 50 }} id="three-canvas-container">
        {/* <Lights /> */}

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
