import { useEffect, useRef } from "react";
import { useThree, useFrame } from '@react-three/fiber'

export const BasedCamera = (props: any) => {
    const ref: any = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);
    useFrame(() => ref && ref.current ? ref.current.updateMatrixWorld() : null);
    return <perspectiveCamera ref={ref} {...props} />;
  };