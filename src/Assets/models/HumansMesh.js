import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ModelPath from './HumansMesh.glb';


export default function Model(props) {
  const { nodes, materials } = useGLTF(ModelPath)
  return (
    <group {...props} dispose={null} scale={0.0001}>
      <mesh geometry={nodes.male.geometry} material={nodes.female.material} position={[-1.24, 0, 0]} />
      <mesh geometry={nodes.female.geometry} material={nodes.female.material} position={[1.08, 0, 0]} scale={1.01} />
    </group>
  )
}

useGLTF.preload(ModelPath)
