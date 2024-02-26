// Import necessary React hooks and components from React, React Three Fiber, and Drei
import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber' // Component used to render a 3D scene
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' // Drei components for controls and model loading
import CanvasLoader from '../Loader' // Custom loader component for the canvas

// Define a component to load and display the 3D model
const Computers = () => {
  // Load a GLTF model of a computer. The path is relative to the public directory or wherever your assets are served from.
  const computer = useGLTF('./desktop_pc/scene.gltf')

  // Return a mesh (a group of polygons) to be rendered. Inside it, define the lights and the model itself.
  return (
    <mesh>
      {/* Hemisphere light simulates indirect daylight with an intensity and ground color */}
      <hemisphereLight
        intensity={1.15}
        groundColor={'black'}
      />
      {/* Point light emits light in all directions from a single point */}
      <pointLight intensity={1}/>
      {/* Spot light emits light in a cone shape. It can cast shadows. */}
      <spotLight
        position={[-3, 5, 1]} // Position of the light in 3D space
        angle={1} // The angle of the light cone
        penumbra={1} // The softness of the edge of the light cone
        intensity={300} // The brightness of the light
        castShadow // Enables shadow casting for this light
        shadow-mapSize={1024} // The resolution of the shadow map
      />

      {/* The model loaded from the GLTF file. Positioned, scaled, and rotated in the scene. */}
      <primitive 
        object={computer.scene} // The 3D object to render
        scale={0.75} // Scale the model to fit the scene
        position={[0, -3.25, -1.5]} // Position of the model in 3D space
        rotation={[-0.01, -0.2, -0.1]} // Rotation of the model in radians
      />
    </mesh>
  )
}

// Define a component to set up the canvas and include the Computers component within it
const ComputersCanvas = () => {
  return (
    // The Canvas component is used to render our 3D scene
    <Canvas 
      frameloop='demand' // Optimization: render loop only updates on demand
      shadows // Enable shadow rendering in the scene
      camera={{position: [20,3,5], fov:25}} // Camera setup: position and field of view
      gl={{preserveDrawingBuffer:true}} // WebGL context options
    >
      {/* Suspense component from React is used for handling the loading state */}
      <Suspense fallback={<CanvasLoader/>}> {/* Fallback component shown while loading */}
        {/* OrbitControls allow the camera to orbit around a target */}
        <OrbitControls 
          enableZoom={false} // Disables zooming
          maxPolarAngle={Math.PI / 2} // Limit the orbit angle to prevent flipping
          minPolarAngle={Math.PI / 2} // Same as above, ensures camera only orbits horizontally
        />
        {/* The Computers component that loads and displays the 3D model */}
        <Computers/>
      </Suspense>
      {/* Preload component from Drei to preload assets */}
      <Preload all/> 
    </Canvas>
  )
}

// Export the ComputersCanvas component to be used in other parts of the application
export default ComputersCanvas
