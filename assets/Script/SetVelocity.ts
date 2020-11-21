const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    maxX = 500;
    minX = -500;

    onLoad() {
        let body = this.getComponent(cc.RigidBody);
        body.linearVelocity = cc.v2(
            Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX),
            Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX));
    }
}