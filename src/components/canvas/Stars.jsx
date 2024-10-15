import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm.js';

const Stars = (props) => {
  const ref = useRef();
  let sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="white"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = (props) => {
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
    <div ref={canvasRef} className='w-full h-auto absolute inset-0 z-[-1]'>
      {isVisible && ( // Conditionally render the Canvas only if it's in view
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
