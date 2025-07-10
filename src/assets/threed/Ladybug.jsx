import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ladybug-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.top.geometry} material={materials['0.917647_0.917647_0.917647_0.000000_0.000000']} />
      <mesh geometry={nodes.motor_holder.geometry} material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']} />
      <mesh geometry={nodes.base.geometry} material={materials['0.231373_0.380392_0.705882_0.000000_0.000000']} />
    </group>
  )
}

useGLTF.preload('/ladybug-transformed.glb')
