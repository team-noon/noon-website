import { Center } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Route = createLazyFileRoute('/previous/bordeaux')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Center h="100vh">
        <Canvas
          camera={{
            position: [0, 1, -1.5],
            rotation: [0, 0, 0],
            fov: 85,
          }}
          className="w-full h-full"
          id="draggable"
        >
          <directionalLight position={[0, 1.5, 0]}
            rotation={[Math.PI / -6, 0, 0]} intensity={2} />
          <ambientLight position={[0, 0, 0]} intensity={1} />
          <OrbitControls enableZoom={false} target={[0, 0, 0]} enablePan={false} autoRotate />
          
        </Canvas>
      </Center>
    </>
  )
}

