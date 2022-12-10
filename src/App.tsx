import './App.scss';
import { Canvas } from '@react-three/fiber'
import BasedBox from './components/box/BasedBox';
import BasedPlane from './components/plane/BasedPlane';
import { BasedCamera } from './components/camera/BasedCamera';
import { useState } from 'react';
import BasedControls from './components/controls/BasedControls';
import { degToRad, radToDeg } from 'three/src/math/MathUtils';

function App() {
  const [cameraPosition, setCameraPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [cameraRotation, setCameraRotation] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const updateCameraPosition = (axis: string, value: number) => {
    const newCameraPosition: any = { ...cameraPosition };
    newCameraPosition[axis] += value;
    setCameraPosition(newCameraPosition);
  }

  const updateCameraRotation = (axis: string, value: number) => {
    const newCameraRotation: any = { ...cameraRotation };
    newCameraRotation[axis] = degToRad(radToDeg(newCameraRotation[axis]) + value);
    setCameraRotation(newCameraRotation);
  }


  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <BasedCamera
          cameraPosition={cameraPosition}
          position={[
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
          ]}
          cameraRotation={cameraRotation}
          rotation={[
            cameraRotation.x,
            cameraRotation.y,
            cameraRotation.z,
          ]} />
        <pointLight position={[10, 10, 10]} />
        <BasedBox position={[-1.2, 0, 0]} />
        <BasedBox position={[1.2, 0, 0]} />
        <BasedPlane position={[0, 0, -2]} />
      </Canvas>
      <BasedControls
        updatePosition={updateCameraPosition}
        updateRotation={updateCameraRotation}
        cameraPosition={cameraPosition}
        cameraRotation={cameraRotation}
      />
    </div>
  );
}

export default App;
