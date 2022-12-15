import { radToDeg } from "../utils/mathFunctions"

export default function (props: any) {
    const {
        updatePosition,
        updateRotation,
        cameraPosition,
        cameraRotation,
    } = props

    return (
        <div className="control-container">
            <div className="position-controls">
                Position Controls: <br />
                <div className="x-axis">
                    X: {cameraPosition.x.toFixed(2)}
                    <button onClick={() => updatePosition('x', -1)}>-</button>
                    <button onClick={() => updatePosition('x', 1)}>+</button>
                </div>
                <div className="y-axis">
                    Y: {cameraPosition.y.toFixed(2)}
                    <button onClick={() => updatePosition('y', -1)}>-</button>
                    <button onClick={() => updatePosition('y', 1)}>+</button>
                </div>
                <div className="z-axis">
                    Z: {cameraPosition.z.toFixed(2)}
                    <button onClick={() => updatePosition('z', -1)}>-</button>
                    <button onClick={() => updatePosition('z', 1)}>+</button>
                </div>

            </div>
            <div className="rotation-controls">
                Rotation Controls: <br />
                <div className="x-axis">
                    X: {Math.round(radToDeg(cameraRotation._x))}
                    <button onClick={() => updateRotation('_x', -15)}>-</button>
                    <button onClick={() => updateRotation('_x', 15)}>+</button>
                </div>
                <div className="y-axis">
                    Y: {Math.round(radToDeg(cameraRotation._y))}
                    <button onClick={() => updateRotation('_y', -15)}>-</button>
                    <button onClick={() => updateRotation('_y', 15)}>+</button>
                </div>
                {/* <div className="z-axis">
                    Z: {Math.round(radToDeg(cameraRotation._z))}
                    <button onClick={() => updateRotation('_z', -10)}>-</button>
                    <button onClick={() => updateRotation('_z', 10)}>+</button>
                </div> */}
            </div>
        </div>
    )
}