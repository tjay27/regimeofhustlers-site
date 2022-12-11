import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/HumansMesh.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.male.geometry} material={nodes.male.material} position={[-1.24, 0, 0]} />
      <mesh geometry={nodes.female.geometry} material={nodes.female.material} position={[1.08, 0, 0]} scale={1.01} />
    </group>
  )
}

useGLTF.preload('/HumansMesh.glb')
