controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
        info.startCountdown(20)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
        info.startCountdown(20)
    }
    generate()
})
function generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.sayText("Push A")
    }
    if (randomPick == 1) {
        mySprite.sayText("Push B")
    }
}
let randomPick = 0
let mySprite: Sprite = null
game.splash("Push A or B as Directed")
mySprite = sprites.create(assets.image`Trash`, SpriteKind.Player)
info.startCountdown(20)
generate()
