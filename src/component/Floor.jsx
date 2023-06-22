import { usePlane } from "@react-three/cannon";
import { TextureLoader, RepeatWrapping } from "three";
import { useLoader } from "@react-three/fiber";

// const Floor = (props) => {
//   const [ref] = usePlane((index) => ({ type: "Static", mass: 0, ...props }));
//   // const textureLoader = new THREE.TextureLoader();

//   let texture = useLoader(TextureLoader, "./texture/grass2.jpg");

//   return (
//     <mesh receiveShadow rotation={props.rotation} ref={ref}>
//       <planeGeometry args={[100, 100]} />
//       {/* <meshStandardMaterial color={props.color} /> */}
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };


const Floor = (props) => {
  const [ref] = usePlane((index) => ({ type: "Static", mass: 0, ...props }));

  let texture = useLoader(TextureLoader, "./public/texture/grass2.jpg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  const repeatX = 100; // Jumlah duplikasi horizontal
  const repeatY = 100; // Jumlah duplikasi vertikal
  texture.repeat.set(repeatX, repeatY);

  return (
    <group>
      {[...Array(repeatX)].map((_, i) => (
        <group key={i}>
          {[...Array(repeatY)].map((_, j) => (
            <mesh
              key={j}
              receiveShadow
              rotation={props.rotation}
              position={[i * 300, j * 300, 0]}
              ref={ref}
            >
              <planeGeometry args={[300, 300]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

export default Floor;
