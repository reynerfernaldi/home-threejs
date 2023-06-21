/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Kless Gyzen (https://sketchfab.com/klessgyzen)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/moss-rock-14-free-rock-pack-vol2-f612d3d436784570a19893e89c94019f
title: Moss Rock 14 (Free) Rock Pack Vol.2
*/

import React, { useRef } from 'react'
import { useBox } from "@react-three/cannon";
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF('/rock.glb')

  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0.06, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.moss_rock_14} />
      </group>
    </group>
  )
}

useGLTF.preload('/rock.glb')