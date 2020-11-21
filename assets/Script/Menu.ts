import Main from "./Main";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

    @property(cc.Button)
    circleButton: cc.Button = null;

    @property(cc.Button)
    triangleButton: cc.Button = null;

    @property(cc.Button)
    rectangleButton: cc.Button = null;

    onLoad() {
        this.circleButton.node.on('click', this.circleBrownianMotion, this);
        this.triangleButton.node.on('click', this.triangleBrownianMotion, this);
        this.rectangleButton.node.on('click', this.rectangleBrownianMotion, this);
    }

    circleBrownianMotion() {
        Main.mode = 1;
        cc.director.loadScene("BrownianMotion");
    }

    triangleBrownianMotion() {
        Main.mode = 2;
        cc.director.loadScene("BrownianMotion");
    }

    rectangleBrownianMotion() {
        Main.mode = 3;
        cc.director.loadScene("BrownianMotion");
    }
}