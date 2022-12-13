import { useEffect, useRef } from "react";
import { useThree, useFrame } from '@react-three/fiber'

export const BasedCamera = (props: any) => {
  const {
    cameraPosition,
    cameraTarget,
    // cameraRotation,
    // zoom,
  } = props
  const ref: any = useRef();
  const ballRef: any = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame((state, delta) => {

    // ref && ref.current ? ref.current.updateMatrixWorld() : null
    const step = 0.1
    // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, step)
    // state.camera.rotation = THREE.MathUtils.lerp(cameraRotation, step)
    state.camera.position.lerp(cameraPosition, step)

    // THREE.Quaternion.slerp(state.camera.quaternion, cameraRotation, state.camera.quaternion, step)

    // lookAtPos.x = Math.sin(state.clock.getElapsedTime() * 2)
    if(ballRef && ballRef.current) {
      ballRef.current.position.lerp(cameraTarget, step)
      state.camera.lookAt(ballRef.current.position)
      state.camera.rotation.y = 0
    }
    // state.camera.updateProjectionMatrix()
  });
  return (
    <>
      <perspectiveCamera ref={ref} />
      <mesh
        position={[0, 0, 0]}
        ref={ballRef}
        scale={1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
    </>
  );
};