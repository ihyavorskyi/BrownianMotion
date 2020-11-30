const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    Delta: number = 6;

    leftMove: boolean = false;
    rightMove: boolean = false;
    topMove: boolean = false;
    bottomMove: boolean = false;
    score = 0;

    @property(cc.Prefab)
    triangle: cc.Prefab = null;

    @property(cc.Prefab)
    rectangle: cc.Prefab = null;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }


    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.name == "Circle<PhysicsCircleCollider>") {

            this.score++;
            let label = cc.find("Canvas/label").getComponent(cc.Label);
            label.string = "Score: " + this.score;


            console.log(selfCollider.name + otherCollider.name);
            otherCollider.node.destroy();
        }
    }



    onKeyUp(e: KeyboardEvent) {
        if (e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a) {
            this.leftMove = false;
        } else if (e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d) {
            this.rightMove = false;
        } else if (e.keyCode == cc.macro.KEY.up || e.keyCode == cc.macro.KEY.w) {
            this.topMove = false;
        } else if (e.keyCode == cc.macro.KEY.down || e.keyCode == cc.macro.KEY.s) {
            this.bottomMove = false;
        }
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a) {
            this.leftMove = true;
            this.node.runAction(cc.flipX(true));
        } else if (e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d) {
            this.rightMove = true;
            this.node.runAction(cc.flipX(false));
        } else if (e.keyCode == cc.macro.KEY.up || e.keyCode == cc.macro.KEY.w) {
            this.topMove = true;
        } else if (e.keyCode == cc.macro.KEY.down || e.keyCode == cc.macro.KEY.s) {
            this.bottomMove = true;
        }
    }
    update(dt) {

        let delta = 0;
        if (this.leftMove) {
            delta = -this.Delta;
            this.node.x = this.node.x + delta;
        } else if (this.rightMove) {
            delta = this.Delta
            this.node.x = this.node.x + delta;
        } else if (this.topMove) {
            delta = this.Delta
            this.node.y = this.node.y + delta;
        } else if (this.bottomMove) {
            delta = -this.Delta
            this.node.y = this.node.y + delta;
        } else return;
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}