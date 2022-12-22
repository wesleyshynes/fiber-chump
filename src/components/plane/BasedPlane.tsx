import { DoubleSide } from "three";

export default function BasedPlane(props: any) {
    const {
        meshProps,
        color
    } = props
    return (
        <mesh
            {...meshProps}
            // ref={ref}
            // scale={clicked ? 1.5 : 1}
            // onClick={(event) => click(!clicked)}
            // onPointerOver={(event) => hover(true)}
            // onPointerOut={(event) => hover(false)}
            >
            <planeGeometry args={[5, 5, 3, 3]} />
            <meshPhongMaterial color={color ? color : 'blue'} side={DoubleSide} />
        </mesh>
    )
}  