namespace SpriteKind {
    export const Monkey = SpriteKind.create()
    export const Egg = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Egg, assets.tile`transparency16`, function (sprite, location) {
    sprite.destroy(effects.coolRadial, 200)
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
        . . f e e e f f e e e f . . . . 
        . . f f f f f e e e e e f . f f 
        . . f d b f e e f f e e f . e f 
        . f f d d f e f f e e e f . e f 
        . f f f f f f e b b f e f f e f 
        . f d d f e e e d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Monkey)
    tiles.placeOnTile(Monkey, location)
    Monkey.setFlag(SpriteFlag.BounceOnWall, true)
    Monkey.vx = -10
})
function createLevel () {
    if (Level == 0) {
        scene.setBackgroundColor(9)
        tiles.setTilemap(tilemap`level1`)
        createPlayer()
        createMonkeys()
        maxMonkeys = sprites.allOfKind(SpriteKind.Monkey).length
    }
}
function createMonkeys () {
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monkey, function (sprite, otherSprite) {
    // Falling on top of Monkey
    if (sprite.y < otherSprite.y && sprite.vy > 0) {
        info.changeScoreBy(5)
        // rebotar
        sprite.vy = -80
        music.baDing.play()
    } else {
        info.changeLifeBy(-1)
    }
    otherSprite.destroy(effects.disintegrate, 200)
})
function newEgg () {
    if (sprites.allOfKind(SpriteKind.Monkey).length < maxMonkeys) {
        anEgg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Egg)
        tiles.placeOnRandomTile(anEgg, assets.tile`tile1`)
        anEgg.setFlag(SpriteFlag.BounceOnWall, true)
        anEgg.vy = -150
        anEgg.ay = 150
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && !(mySprite.tileKindAt(TileDirection.Center, assets.tile`tile3`))) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Egg, assets.tile`tile3`, function (sprite, location) {
    sprite.destroy()
    newEgg()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile13`, function (sprite, location) {
    game.over(true)
})
function createPlayer () {
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
}
scene.onOverlapTile(SpriteKind.Egg, assets.tile`tile13`, function (sprite, location) {
    sprite.destroy()
    newEgg()
})
let mySprite: Sprite = null
let anEgg: Sprite = null
let maxMonkeys = 0
let Monkey: Sprite = null
let Level = 0
Level = 0
info.setScore(0)
info.setLife(4)
createLevel()
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
// Monkey logic
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
        if (value.vx > 0) {
            value.image.flipX()
        }
        if (value.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`) || value.tileKindAt(TileDirection.Bottom, assets.tile`tile2`)) {
            value.vx = 0 - value.vx
        }
    }
})
game.onUpdateInterval(5000, function () {
    newEgg()
})
