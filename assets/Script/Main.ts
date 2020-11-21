const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    static mode: number = null;

    maxX = 800;
    minX = 0;
    maxColor = 255

    @property(cc.Prefab)
    circle: cc.Prefab = null;

    @property(cc.Prefab)
    triangle: cc.Prefab = null;

    @property(cc.Prefab)
    rectangle: cc.Prefab = null;


    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        if (Main.mode == 1) {
            this.generateFigure(this.circle);
        } else if (Main.mode == 2) {
            this.generateFigure(this.triangle);
        } else if (Main.mode == 3) {
            this.generateFigure(this.rectangle);
        }
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode == cc.macro.KEY.escape) {
            cc.director.loadScene("Menu");
        }
    }

    generateFigure(figurePrefab: cc.Prefab) {
        for (let index = 0; index < 30; index++) {
            let figure = cc.instantiate(figurePrefab);
            figure.color = new cc.Color(
                Math.floor(Math.random() * (this.maxColor - this.minX + 1) + this.minX),
                Math.floor(Math.random() * (this.maxColor - this.minX + 1) + this.minX),
                Math.floor(Math.random() * (this.maxColor - this.minX + 1) + this.minX));

            figure.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX),
                Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX));

            cc.director.getScene().addChild(figure);
        }
    }
}