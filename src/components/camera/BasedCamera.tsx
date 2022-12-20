import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three';
import { lerp } from "three/src/math/MathUtils";
import controlsService from '../../services/ControlsService';

export const BasedCamera = (props: any) => {
  const {
    cameraPosition,
    updatePosition,
    cameraRotation,
    updateRotation
  } = props

  useFrame((state, delta) => {

    const step = 5 * delta
    const turnStep = 80 * delta
    // console.log(delta)

    const pressedKeys = controlsService.pressedKeys
    if (pressedKeys['KeyA'] || pressedKeys['ArrowLeft']) {
      updateRotation('_y', turnStep)
    }
    if (pressedKeys['KeyD'] || pressedKeys['ArrowRight']) {
      updateRotation('_y', -turnStep)
    }
    if (pressedKeys['KeyW'] || pressedKeys['ArrowUp']) {
      const direction = new Vector3()
      state.camera.getWorldDirection(direction)
      updatePosition({
        x: direction.x * step, 
        y: direction.y * step,
        z: 0
      })
    }

    if (pressedKeys['KeyQ']) {
      const direction = new Vector3()
      state.camera.getWorldDirection(direction)
      updatePosition({
        x: -direction.y * step, 
        y: direction.x * step,
        z: 0
      })
    }

    if (pressedKeys['KeyE']) {
      const direction = new Vector3()
      state.camera.getWorldDirection(direction)
      updatePosition({
        x: direction.y * step, 
        y: -direction.x * step,
        z: 0
      })
    }

    if (pressedKeys['KeyS'] || pressedKeys['ArrowDown']) {
      const direction = new Vector3()
      state.camera.getWorldDirection(direction)
      updatePosition({
        x: -direction.x * step, 
        y: -direction.y * step,
        z: 0
      })
    }

    state.camera.position.lerp(cameraPosition, step)

    // rotate towards the target x
    const newX = lerp(state.camera.rotation.x, cameraRotation._x, turnStep)
    const newY = lerp(state.camera.rotation.y, cameraRotation._y, turnStep)
    const newZ = lerp(state.camera.rotation.z, cameraRotation._z, turnStep)

    state.camera.rotation.set(newX, newY, newZ)
    // state.camera.rotation.set(cameraRotation._x, cameraRotation._y, cameraRotation._z)
  });
  return null;
};