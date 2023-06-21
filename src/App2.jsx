import { Suspense } from "react";
import "./App.css";
import sunCalc from "suncalc";

/** Person */
import { Sky, Environment } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import ThreeModel from "./component/ThreeModel";
import BaseCharacter from "./ui/BaseCharacter";
import Rumah from "./component/Home/Rumah";
import Sun from "./component/Sun/Sun1";
import Lampu from "./component/Lampu";
import Garden from "./component/French_chateau";
import Rock from "./component/Rock";
import Gate from "./component/Gate";
import Moon from "./component/Moon/Moon";

function App(props) {
    // get today's sunlight times for surabaya
  const times = sunCalc.getTimes(new Date(), -7.25, 112.7688);

  // // format sunrise time from the Date object
  // const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

  // const location = sunCalc.getPosition(times.sunrise, -7.25, 112.7688);
  const location = sunCalc.getPosition(times.night, -7.25, 112.7688);
  // const location = sunCalc.getPosition(new Date(), -7.25, 112.7688);

  const azimuth = (location.azimuth * 180) / Math.PI;
  const altitude = (location.altitude * 180) / Math.PI;

  const radius = window.innerWidth / -30;
  const height = window.innerHeight / 20;
  const theta = azimuth + 90;
  const delta = altitude;
  var apparentRadius = radius * Math.cos((delta * Math.PI) / 180);
  const position_x = apparentRadius * Math.cos((theta * Math.PI) / 180);
  const position_y = apparentRadius * Math.sin((theta * Math.PI) / 180) + height;
  const position_z = radius * Math.sin((delta * Math.PI) / 180);
  // console.log(position_x + " " + position_y + " " + position_z);
  console.log(location);

  const position = [-position_x, position_y, position_z];

  const dummy = sunCalc.getPosition(times.sunset, -7.25, 112.7688);
  console.log(dummy);

  if(location.azimuth >= dummy.azimuth ){
    console.log("benar");
    return (
      <>
        {/* <Suspense> */}
        <BaseScene>
          <BaseCharacter controls position={[0, 5, 30]} args={[2.5]} color="yellow" />
          <Rumah />
          {/* <ambientLight args={["#ffffff", 0.25]} /> */}
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 1]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, 5]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, 20]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[3, 0, 20]} />
          {/* <Sun args={[0.2, 2, 0.2]} scale={0.7} /> */}
          <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[4, 0.05, 13]} />
          <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0.05, 13]} />
          <Garden args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0.05, -13.35]} />
  
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 5]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -7]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -10]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -13]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -16]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -19]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -22]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -7]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -10]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -13]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -16]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -19]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -19]} />
          <Rock args={[0.5, 2, 0.5]} scale={1} position={[4.5, 0.8, 21]} />
          <Gate args={[0.5, 2, 0.5]} scale={0.05} position={[-0.3, -0.05, 19]} />
          <Moon args={[0.5, 2, 0.5]} scale={0.005} position={position}/>
          <pointLight args={["#ffffff", 2]} position={position} />
          {/* <mesh position={[-2, 1.75, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
          </mesh> */}
          {/* <ambientLight args={["#ffffff", 0.5]} /> */}
          {/* <group ref={ref} {...props} dispose={null}> */}
          {/* <pointLight args={["#ffffff", 2]} position={[0.2, 10, 0.2]} /> */}
          {/* </group> */}
  
          

          {/* <Sky distance={450000} azimuth={1} /> */}
          {/* <Environment background>
            <mesh>
              <sphereGeometry args={[50, 100, 100]} />
              <meshBasicMaterial />
            </mesh>
          </Environment> */}
        </BaseScene>
        {/* </Suspense> */}
      </>
    );
  }

    return (
      <>
        {/* <Suspense> */}
        <BaseScene>
          <BaseCharacter controls position={[0, 5, 30]} args={[2.5]} color="yellow" />
          <Rumah />
          {/* <ambientLight args={["#ffffff", 0.25]} /> */}
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 1]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, 5]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, 20]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[3, 0, 20]} />
          <Sun args={[0.2, 2, 0.2]} scale={0.7} />
          <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[4, 0.05, 13]} />
          <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0.05, 13]} />
          <Garden args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0.05, -13.35]} />

          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 5]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -7]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -10]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -13]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -16]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -19]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-7, 0, -22]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -7]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -10]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -13]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -16]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -19]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, -19]} />
          <Rock args={[0.5, 2, 0.5]} scale={1} position={[4.5, 0.8, 21]} />
          <Gate args={[0.5, 2, 0.5]} scale={0.05} position={[-0.3, -0.05, 19]} />
          {/* <Moon args={[0.5, 2, 0.5]} scale={0.005} position={[7, 100, 19]}/> */}
          {/* <mesh position={[-2, 1.75, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
          </mesh> */}
          {/* <ambientLight args={["#ffffff", 0.5]} /> */}
          {/* <group ref={ref} {...props} dispose={null}> */}
          {/* <pointLight args={["#ffffff", 2]} position={[0.2, 10, 0.2]} /> */}
          {/* </group> */}

          

          <Sky distance={450000} azimuth={1} />
          {/* <Environment background>
            <mesh>
              <sphereGeometry args={[50, 100, 100]} />
              <meshBasicMaterial />
            </mesh>
          </Environment> */}
        </BaseScene>
        {/* </Suspense> */}
      </>
    );
  

  

}

export default App;
