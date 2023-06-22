import { Suspense } from "react";
// import Three from "./component/three";
import "./App.css";
import sunCalc from "suncalc";

/** Person */
import { Sky, Environment } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import ThreeModel from "./component/ThreeModel";
import BaseCharacter from "./ui/BaseCharacter";
import Rumah from "./component/Home/Rumah";
import Sun from "./component/Sun/Sun";
import Lampu from "./component/Lampu";
import Garden from "./component/French_chateau";
import Rock from "./component/Rock";
import Gate from "./component/Gate";
import Moon from "./component/Moon/Moon";

function App(props) {
  const times = sunCalc.getTimes(new Date(), -7.25, 112.7688);

  // // format sunrise time from the Date object
  // const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

  // const location = sunCalc.getPosition(times.sunrise, -7.25, 112.7688);
  const locationSunset = sunCalc.getPosition(times.sunset, -7.25, 112.7688);

  const azimuthSunset = (locationSunset.azimuth * 180) / Math.PI;
  const altitudeSunset = (locationSunset.altitude * 180) / Math.PI;

  const radiusSunset = window.innerWidth / -30;
  const heightSunset = window.innerHeight / 20;
  const thetaSunset = azimuthSunset + 90;
  const deltaSunset = altitudeSunset;
  var apparentRadius = radiusSunset * Math.cos((deltaSunset * Math.PI) / 180);
  const position_xSunset = apparentRadius * Math.cos((thetaSunset * Math.PI) / 180);
  const position_ySunset = apparentRadius * Math.sin((thetaSunset * Math.PI) / 180) + heightSunset;
  const position_zSunset = radiusSunset * Math.sin((deltaSunset * Math.PI) / 180);
  console.log(position_xSunset + " " + position_ySunset + " " + position_zSunset);
  
  // const location = sunCalc.getPosition(times.sunset, -7.25, 112.7688);
  const location = sunCalc.getPosition(new Date(), -7.25, 112.7688);

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
  console.log(position_x + " " + position_y + " " + position_z);

  const positionSun = [-position_x, position_y, position_z];
  const positionMoon = [-position_x+100, position_y, position_z];
  
  return (
      <>
        <BaseScene>
          <BaseCharacter controls position={[0, 5, 30]} args={[2.5]} color="yellow" />
          <Rumah />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 1]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, 5]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, 20]} />
          <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[3, 0, 20]} />
          {position_xSunset >= position_x && position_ySunset <= position_y && position_zSunset >= position_z ? 
          (<Sun args={[0.2, 2, 0.2]} scale={0.08} position={[-position_x, position_y, position_z]}/>) :
          (<Moon args={[0.2, 2, 0.2]} scale={0.001} position={[-position_x+100, position_y, position_z]}/>)
          }
          {position_xSunset >= position_x && position_ySunset <= position_y && position_zSunset >= position_z ? 
          (<Sky distance={450000} azimuth={1} />) :
          (<directionalLight args={["#ffffff", 2]} position={positionMoon} />)
          }
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
        </BaseScene>
      </>
    );
}

export default App;
