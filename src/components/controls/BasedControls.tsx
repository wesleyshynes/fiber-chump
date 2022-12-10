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
                    X: {cameraPosition.x}
                    <button onClick={() => updatePosition('x', -1)}>-</button>
                    <button onClick={() => updatePosition('x', 1)}>+</button>
                </div>
                <div className="y-axis">
                    Y: {cameraPosition.y}
                    <button onClick={() => updatePosition('y', -1)}>-</button>
                    <button onClick={() => updatePosition('y', 1)}>+</button>
                </div>
                <div className="z-axis">
                    Z: {cameraPosition.z}
                    <button onClick={() => updatePosition('z', -1)}>-</button>
                    <button onClick={() => updatePosition('z', 1)}>+</button>
                </div>

            </div>
            <div className="rotation-controls">
                Rotation Controls: <br />
                <div className="x-axis">
                    X: {radToDeg(cameraRotation.x)}
                    <button onClick={() => updateRotation('x', -10)}>-</button>
                    <button onClick={() => updateRotation('x', 10)}>+</button>
                </div>
                <div className="y-axis">
                    Y: {radToDeg(cameraRotation.y)}
                    <button onClick={() => updateRotation('y', -10)}>-</button>
                    <button onClick={() => updateRotation('y', 10)}>+</button>
                </div>
                <div className="z-axis">
                    Z: {radToDeg(cameraRotation.z)}
                    <button onClick={() => updateRotation('z', -10)}>-</button>
                    <button onClick={() => updateRotation('z', 10)}>+</button>
                </div>
            </div>
        </div>
    )
}