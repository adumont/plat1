controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
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
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile3`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`tile4`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`tile4`)) {
        mySprite.ay = 0
        controller.moveSprite(mySprite, 50, 50)
    } else {
        controller.moveSprite(mySprite, 100, 0)
        mySprite.ay = 300
    }
})
