class ControlsService {
    pressedKeys: { [key: string]: boolean } = {};

    constructor() {
        document.addEventListener('keydown', (e) => {
            this.pressedKeys[e.code] = true
          })
          document.addEventListener('keyup', (e) => {
            this.pressedKeys[e.code] = false
          })
    }
}


const controlsService = new ControlsService();
export default controlsService;