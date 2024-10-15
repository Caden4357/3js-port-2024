import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  if (!decal) {
    console.error("Failed to load the texture");
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const canvasRef = useRef(null); // Ref to the canvas container div

  useEffect(() => {
    // Set up IntersectionObserver to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility state
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current); // Start observing the canvas div
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-auto">
      {isVisible && ( // Conditionally render the Canvas only if it's in view
        <Canvas
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
