import { DoubleSide } from "three";

export default function BasedPlane(props: any) {
    return (
        <mesh
            {...props}
            // ref={ref}
            // scale={clicked ? 1.5 : 1}
            // onClick={(event) => click(!clicked)}
            // onPointerOver={(event) => hover(true)}
            // onPointerOut={(event) => hover(false)}
            >
            <planeGeometry args={[5, 5, 3, 3]} />
            <meshPhongMaterial color={'blue'} side={DoubleSide} />
        </mesh>
    )
}  