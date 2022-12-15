import './App.scss';
import { Canvas } from '@react-three/fiber'
import BasedBox from './components/box/BasedBox';
import BasedPlane from './components/plane/BasedPlane';
import { BasedCamera } from './components/camera/BasedCamera';
import { useState } from 'react';
import BasedControls from './components/controls/BasedControls';
import { degToRad, radToDeg } from 'three/src/math/MathUtils';
import { Euler, Vector3 } from 'three';

const CAMERA_START = new Vector3(0, -10, 0)
const CAMERA_ROTATION = new Euler(degToRad(90), 0, 0)

function App() {
  const [cameraPosition, setCameraPosition] = useState(CAMERA_START);
  const [cameraRotation, setCameraRotation] = useState(CAMERA_ROTATION);

  const updateCameraPosition = (axis: string, value: number) => {
    const newCameraPosition: any = { ...cameraPosition };
    newCameraPosition[axis] += value;
    setCameraPosition(newCameraPosition);
  }

  const updateCameraPositionByAxis = (coords: {x: number, y: number, z: number}) => {
    const newCameraPosition: any = { ...cameraPosition };
    const {x, y, z} = coords
    newCameraPosition['x'] += x;
    newCameraPosition['y'] += y;
    newCameraPosition['z'] += z;
    // newCameraPosition[axis] += value;
    setCameraPosition(newCameraPosition);
  }

  const updateCameraRotation = (axis: string, value: number) => {
    const newCameraRotation: any = { ...cameraRotation };
    newCameraRotation[axis] = degToRad(radToDeg(newCameraRotation[axis]) + value);
    setCameraRotation(newCameraRotation);
  }

  return (
    <div className="App">
      <Canvas
        camera={{
          position: cameraPosition,
          rotation: cameraRotation
        }}
      >
        <ambientLight />
        <BasedCamera
          cameraPosition={cameraPosition}
          cameraRotation={cameraRotation}
          updatePosition={updateCameraPositionByAxis}
          updateRotation={updateCameraRotation}
        />
        <pointLight position={[10, 10, 10]} />
        <BasedBox position={[-1.2, 0, 0]} />
        <BasedBox position={[1.2, 0, 0]} />
        <BasedPlane position={[0, 0, -2]} />
      </Canvas>
      <BasedControls
        cameraPosition={cameraPosition}
        updatePosition={updateCameraPosition}
        cameraRotation={cameraRotation}
        updateRotation={updateCameraRotation}
      />
    </div>
  );
}

export default App;
