import './App.scss';
import { Canvas } from '@react-three/fiber'
import BasedBox from './components/box/BasedBox';
import BasedPlane from './components/plane/BasedPlane';
import { BasedCamera } from './components/camera/BasedCamera';
import { useState } from 'react';
import BasedControls from './components/controls/BasedControls';
import { degToRad, radToDeg } from 'three/src/math/MathUtils';
import { Euler, Vector3 } from 'three';
import { LEVEL_FLOOR, LEVEL_TILE_SIZE } from './components/constants/LevelConstants';

const CAMERA_START = new Vector3(0, -10, 2)
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
    newCameraRotation[axis] = degToRad((radToDeg(newCameraRotation[axis]) + value)%360);
    setCameraRotation(newCameraRotation);
  }

  return (
    <div className="App">
      <Canvas
        camera={{
          position: cameraPosition,
          rotation: cameraRotation,
          fov: 60,
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
        <BasedBox position={[-1.2, 0, 2]} />
        <BasedBox position={[1.2, 0, 2]} />
        <BasedPlane position={[-2.5, 0, 2.5]} rotation={new Euler(0, degToRad(90), 0)} />
        {LEVEL_FLOOR.map((tile: any, index: number) => (
          <BasedPlane key={index} position={[
            tile[0],
            tile[1] * LEVEL_TILE_SIZE,
            tile[2]
          ]} />
        ))}
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
