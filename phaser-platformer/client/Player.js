/**
 * Created by Igor on 6/22/2017.
 */

class Player extends Entity {
    constructor(game) {
        super(game, 50, 300, 'player');
        this.addAnimations();
        this.exist = true;
        this.body.bounce.y = 0;
        this.direction = 'right';
        this.doNothing = true;
        this.weaponStatus = undefined;
        this.stamina = 100;
        this.maxStamina = 100;
        this.maxRunningVelocity = 120;
        this.maxJumpVelocity = 310;
        this.velocityIncrement = 10;
        this.frictionForce = 100;
        this.superRunAdditionalVelocity = 200;
        this.superRunVelocityIncrement = 10;
        this.superJumpAdditionalVelocity = 200;
        this.staminaUsing = 0.5;
        this.staminaRegen = 0.01;
        this.superPowerButton = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
        this.cursors = game.input.keyboard.createCursorKeys();
        // game.camera.follow(this);

        this.displayFields();
    }

    displayFields() {
        console.log(this);
    }

    addAnimations() {
        // console.log(this.animations);
        this.animations.add('run', [0,1,2,3,4,5,6,7,8,9]);
        this.game.add.existing(this);
        this.animations.add('stand', [10,11,12]);
        this.animations.add('jump', [13,14,15,16,17,18,19,20,21]);
        this.animations.add('superJump', [15]);
        this.animations.add('superRun', [1]);
    }

    jump() {
        if (this.body.onFloor()) {
            this.body.velocity.y = this.maxJumpVelocity * -1;
            this.animations.play('jump', 5, true);
            this.doNothing = false;
        }

        if (this.superPowerButton.isDown
            && this.body.onFloor()
            && this.stamina > this.staminaUsing) {

            this.body.velocity.y = (this.maxJumpVelocity + this.superJumpAdditionalVelocity) * -1;
            this.animations.play('jump', 5, true);
            this.animations.play('superJump', 10, true);
        }

    };

    walkLeft() {
        if (this.direction !== 'left') {
            this.scale.x *= -1;
            this.direction = 'left';
        }
        if (this.body.velocity.x === 0 ||
            (this.animations.currentAnim.name !== 'run' && this.body.onFloor())) {
        }

        if ((this.superPowerButton.isDown || this.cursors.left.isDown
            && this.superPowerButton.isDown) && this.stamina > this.staminaUsing) {
            if (this.body.velocity.x < (this.maxRunningVelocity + this.superRunAdditionalVelocity) * -1) {
                this.body.velocity.x = (this.maxRunningVelocity + this.superRunAdditionalVelocity) * -1;
            }

            this.body.velocity.x -= this.velocityIncrement + this.superRunVelocityIncrement;
            if (this.body.onFloor())
                this.animations.play('superRun', 20, true);
        }

        else {
            if (this.body.velocity.x < this.maxRunningVelocity * -1) {
                this.body.velocity.x = this.maxRunningVelocity * -1;
                if (this.body.onFloor())
                    this.animations.play('run', 10, true);
            }

            this.body.velocity.x -= this.velocityIncrement;
        }
        this.doNothing = false;
    };

    walkRight() {
        if(this.direction !== 'right'){
            this.scale.x *= -1;
            this.direction = 'right';
        }

        if(this.body.velocity.x === 0 ||
            (this.animations.currentAnim.name !== 'left' && this.body.onFloor())){
        }

        if((this.superPowerButton.isDown || this.cursors.right.isDown
            && this.superPowerButton.isDown) && this.stamina > this.staminaUsing) {
            if(this.body.velocity.x > this.maxRunningVelocity + this.superRunAdditionalVelocity){
                this.body.velocity.x = this.maxRunningVelocity + this.superRunAdditionalVelocity;
            }

            this.body.velocity.x += this.velocityIncrement + this.superRunVelocityIncrement;
            if(this.body.onFloor())
                this.animations.play('superRun', 20, true);
        }

        else {
            if(this.body.velocity.x > this.maxRunningVelocity){
                this.body.velocity.x = this.maxRunningVelocity;
                if(this.body.onFloor())
                    this.animations.play('run', 10, true);
            }

            this.body.velocity.x += this.velocityIncrement;
        }
        this.doNothing = false;
    };

    stand() {
        if (this.body.velocity.x > this.frictionForce) {
            this.body.velocity.x -= this.frictionForce;
        }
        else if (this.body.velocity.x < this.frictionForce * -1) {
            this.body.velocity.x += this.frictionForce;
        }
        else {
            this.body.velocity.x = 0;
        }
        if (this.body.onFloor()) {
            this.animations.play('stand', 3, true);
        }
    };

    increaseStamina(staminaAmount) {
        if(this.stamina < this.maxStamina - staminaAmount) {
            this.stamina += staminaAmount;
        }
    }

    autoIncreaseStamina() {
        if(this.stamina < this.maxStamina)
            this.stamina = this.stamina + this.staminaRegen;
    };

     decreaseStamina() {
        if (this.stamina >= this.staminaUsing) {
            this.stamina = this.stamina - this.staminaUsing;
        }
    };

    displayInfo() {
        super.displayInfo(32, 32);
        game.debug.line(`direction: ${this.direction}`);
        game.debug.line(`doNothing: ${this.doNothing}`);
        game.debug.line(`weaponStatus: ${this.weaponStatus}`);
        game.debug.line(`stamina: ${this.stamina}`);
        game.debug.line(`maxStamina: ${this.maxStamina}`);
        game.debug.line(`maxRunningVelocity: ${this.maxRunningVelocity}`);
        game.debug.line(`maxJumpVelocity: ${this.maxJumpVelocity}`);
        game.debug.line(`velocityIncrement: ${this.velocityIncrement}`);
        game.debug.line(`frictionForce: ${this.frictionForce}`);
        game.debug.line(`superRunAdditionalVelocity: ${this.superRunAdditionalVelocity}`);
        game.debug.line(`superRunVelocityIncrement: ${this.superRunVelocityIncrement}`);
        game.debug.line(`superJumpAdditionalVelocity: ${this.superJumpAdditionalVelocity}`);
        game.debug.line(`superJumpStaminaUsing: ${this.staminaUsing}`);
    }

    update() {

        game.physics.arcade.collide(this, layer);

        this.doNothing = true;

        if (this.cursors.left.isDown) {
            this.walkLeft();
        }

        else if (this.cursors.right.isDown) {
            this.walkRight();
        }

        if (this.cursors.up.justDown) {
            this.jump();
        }

        //TODO: sqats

        if (this.doNothing) {
            this.stand();
        }

        if(this.superPowerButton.isDown) {
            this.decreaseStamina();
        }
        else {
            this.autoIncreaseStamina();
        }
    }

}