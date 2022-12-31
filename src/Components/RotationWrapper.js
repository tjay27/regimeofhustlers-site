import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

export default function RotationWrapper(props) {
  // This reference will give us direct access to the THREE.Mesh object

  const group = useRef(); //created a reference to group

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state,delta) => {
    if(props.scroll.current<10){
      const t= state.clock.getElapsedTime();
      group.current.position.z = -props.scroll.current;
      group.current.position.y = Math.cos(t)/4;
      state.camera.position.x=Math.sin(props.mousemoved.current[0]/(window.innerHeight/2.5))/1.5;
      state.camera.position.y=Math.sin(props.mousemoved.current[1]/(window.innerWidth/2.5))/1.5;
    }
    group.current.rotation.y = THREE.MathUtils.degToRad((props.scroll.current * 360) / 1);
  })

  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]}> 
          {props.children}
    </group>
  )
}
