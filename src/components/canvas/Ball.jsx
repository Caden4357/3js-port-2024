import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0,0,1]}
          rotation={[2*Math.PI, 0 , 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand' // Optimization: render loop only updates on demand//
      gl={{ preserveDrawingBuffer: true }} // WebGL context options
    >
      {/* Suspense component from React is used for handling the loading state */}
      <Suspense fallback={<CanvasLoader />}> {/* Fallback component shown while loading */}
        {/* OrbitControls allow the camera to orbit around a target */}
        <OrbitControls
          enableZoom={false} // Disables zooming
        />
        {/* The Computers component that loads and displays the 3D model */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload component from Drei to preload assets */}
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas