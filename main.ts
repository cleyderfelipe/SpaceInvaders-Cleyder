input.onButtonPressed(Button.A, function () {
    Nave.change(LedSpriteProperty.X, -1)
    basic.pause(1)
})
input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i <= 4; i++) {
        tiro = game.createSprite(Nave.get(LedSpriteProperty.X), 3 - i)
        basic.pause(100)
        if (tiro.isTouching(Asteroides)) {
            game.addScore(1)
            tiro.change(LedSpriteProperty.Brightness, 0)
            Asteroides.delete()
            tiro.delete()
        }
        tiro.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Nave.change(LedSpriteProperty.X, 1)
    basic.pause(1)
})
let Asteroides: game.LedSprite = null
let tiro: game.LedSprite = null
let Nave: game.LedSprite = null
game.startCountdown(10000)
game.setLife(3)
basic.showString("SPACE INVADERS")
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    # # . # #
    `)
basic.pause(1000)
Nave = game.createSprite(2, 5)
let i = 0
basic.forever(function () {
    Asteroides = game.createSprite(randint(0, 4), 0)
    Asteroides.set(LedSpriteProperty.Brightness, 150)
    basic.pause(500)
    for (let i = 0; i <= 4; i++) {
        Asteroides.change(LedSpriteProperty.Y, 1)
        basic.pause(220)
    }
    Asteroides.delete()
})
basic.forever(function () {
    if (Asteroides.isTouching(Nave)) {
        basic.showIcon(IconNames.No)
        game.removeLife(1)
    }
})
