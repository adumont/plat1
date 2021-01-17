namespace SpriteKind {
    export const Monkey = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monkey, function (sprite, otherSprite) {
    // Falling on top of Monkey
    if (sprite.y < otherSprite.y && sprite.vy > 0) {
        info.changeScoreBy(5)
        // rebotar
        sprite.vy = -100
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
    }
    otherSprite.destroy(effects.disintegrate, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
let Monkey: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999559999599959999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999959999959999599959999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999995999995955555559999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999559999555555555955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999111119999999995995555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111119999999999555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111999999999999999
    9999999999111111119999999999955555555555559995555599999999999999999999911111111119999999999999999999999999999999999999999999999999991111111111111111111999999999
    9999999911111111111199999999955555555555555559999999999999999999999999911111111119999999999999999999999999999999999999999999999999991111111111111111111999999999
    9999999911111111111199555555555555555555559999999999999999999999999911111111111111119999999999999999999999999999999999999999999999991111111111111111111999999999
    9999999911111111111199999999955555555555559999999999999999999999999911111111111111119999999999999999999999999999999999999999999999991111111111111111111999999999
    9999999911111111111199999999955555555555559999999999999999999999999911111111111111119999999999999999999999999999999999999999999999991111111111111111111999999999
    9999999911111111111199999999955555555555555555599999999999999999999911111111111111119999999999999999999999999999999999999999999999999911111111111111999999999999
    9999999999111111111999999999995555555555599999955555599999999999999911111111111111119999999999999999999999999999999999999999999999999911111111111111999999999999
    9999999999111111111999999999959555555555999999999999999999999999999999991111111111199999999999999999999999999999999999999999999999999999999911111999999999999999
    9999999999999999999999999999599955555559599999999999999999999999999999991111111111199999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999955999995995999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999599999995995999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999995999999959995999999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999959999999599995999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999599995999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999995999995999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999995999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999959999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111119999999999999999999999999999999
    9999999999999999999999999999999999999999999999911999999999999999999999999999999999999999999999999999999999999999999999999111111111199999999999999999999999999999
    9999999999999999999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999111111111111111199999999999999999999999999
    99999999999999999999999999999999999999999999111111119999999999999999999999999999999999999999999999999999999999999991111111eeeee111111111199999999999999999999999
    9999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999999999999999999999911111eeeeeeeeeeeeeeee11111999999999999999999999
    9999999999999999999999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999991111111eeeddddddddeeeeeee111119999999999999999999
    999999999999999999999999999999999999999911111111eee1111199999999999999999999999999999999999999999999999999999991111eeedddddddddddddddeeeee1111199999999999999999
    99999999999999999999999999999999999991111e11eeeeeeeeeee11199999999999999999999999999999999999999999999999999911eeeeedddddddddddddddddddeeeeee1111999999999999999
    999999999999999999999999999999999991111111eddddddddeeeee11199999999999999999999999999999999999999999999999911eeeeedddddddddddddddddddddddeeeeee11111999999999999
    999999999999999999999999999999999111111eeeddddddddddddeeee11199999999999999999999999999999999999999999991111eeeeedddddddddddddddddddddddddddeeee1111199999999999
    9999999999999999999999999999991111111eeeddddddddddddddeeeee111199999999999999999999999999999999999999991eeeeeeeeddddddddddddddddddddddddddddddeeee11111999999999
    999999999999999999999999999111111e1eeedddddddddddddddddddeeee111999999999999999999999999999999999999911eeeeeeeddddddddddddddddddddddddddddddddddeeeee11111999999
    9999999999999999999999991111111111eeddddddddddddddddddddddeeee111199999999999999999999999999999999991eeeeeeeedddddddddddddddddddddddddddddddddddddeeeee111999999
    999999999999999999999999911.111eeeddddddddddddddddddddddddddeee1111199999999999999999999999999999991eeeeeeddddddddddddddddddddddddddddddddddddddddddeeee11119999
    99999999999999999999999111111eeedddddddddddddddddddddddddddddde111111199999999999999999999999999911eeeeeeddddddddddddddddddddddddddddddddddddddddddddeeeeee11199
    999999999999999999999111111eeeeddddddddddddddddddddddddddddddddeee1111111999999999999999999999991eeeeeedddddddddddddddddddddddddddddddddddddddddddddddeeeeee1111
    9999999999999999991111111eeeeedddddddddddddddddddddddddddddddddddeee1111111999999999999999999991eeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddeeeeee11
    99999999999999991111111eeeeeedddddddddddddddddddddddddddddddddddddeeee11111111199999999999999911eeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddeeee11
    999999999999999991111eeeeeedddddddddddddddddddddddddddddddddddddddddeee11111111111111111111111eeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee
    9999999999999991111eeeedddddddddddddddddddddddddddddddddddddddddddddddeee1111888888888888888eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    99999999999991111eeeeddddddddddddddddddddddddddddddddddddddddddddddddddeeeeee888888888888888eeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999999911111eeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddeeee888888888888888eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    99999999911111eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeee6888eeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    999999111111eeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6688ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    9911111111eeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11111111eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd668888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    eeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    eeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    eeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd668888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666688888888888dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6688888888888888888888888888888888ddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666666666666888888888888888888888888dddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666668888888888888dddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666688888888dddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6688888888dddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6668888888ddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666668888ddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666668888dddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66888dddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888dddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888dddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66888dddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66688888dddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66888888ddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888888dddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888dddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888ddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888ddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888ddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888ddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888ddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888888ddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888ddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888ddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888dddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddd8888dddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888dddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888ddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd8888dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888ddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd688888ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888888ddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888888dddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6668888ddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66688888ddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66688888dddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66668888ddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66688888ddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888888dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6668888ddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd688888ddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd668888dddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6668888ddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888dddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6888888ddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd66888888ddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6688888ddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd68888ddddddddddddddddd
    `)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`tile6`)
for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
for (let value of tiles.getTilesByType(assets.tile`tile`)) {
    Monkey = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Monkey)
    tiles.placeOnTile(Monkey, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    Monkey.setFlag(SpriteFlag.BounceOnWall, true)
    Monkey.vx = -10
}
info.setScore(0)
info.setLife(4)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile3`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`tile4`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`tile4`)) {
        mySprite.ay = 0
        controller.moveSprite(mySprite, 50, 50)
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        controller.moveSprite(mySprite, 100, 0)
        mySprite.ay = 300
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Monkey)) {
        if (Math.trunc(value.x % 2) == 1) {
            value.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f f f f f e e e e f . . . . 
                . . . . f f e e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `)
        } else {
            value.setImage(img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f f e e e e e f . f f 
                . . f d b f e e f f e e f . e f 
                . f f d d f e f f e e e f . e f 
                . f f f f f f e b b f e f f e f 
                . f d d f e e e d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `)
        }
        if (!(value.tileKindAt(TileDirection.Bottom, assets.tile`tile1`) || value.tileKindAt(TileDirection.Bottom, assets.tile`tile4`))) {
            value.vx = 0 - value.vx
        }
    }
})
