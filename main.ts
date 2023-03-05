namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Weapon = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Released, function (player2) {
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(player2))
    sprites.setDataBoolean(mp.getPlayerSprite(player2), "walk_left", false)
    check_direction(sprites.readDataBoolean(mp.getPlayerSprite(player2), "walk_up"), sprites.readDataBoolean(mp.getPlayerSprite(player2), "walk_down"), sprites.readDataBoolean(mp.getPlayerSprite(player2), "walk_left"), sprites.readDataBoolean(mp.getPlayerSprite(player2), "walk_right"), mp.getPlayerSprite(player2))
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite2) {
    scene.placeOnRandomTile(sprite2, 12)
    sprites.setDataBoolean(sprite2, "deployed", true)
})
function create_keeper () {
    Keeper = sprites.create(assets.image`The Keeper`, SpriteKind.NPC)
    tiles.placeOnTile(Keeper, tiles.getTileLocation(146, 10))
}
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Released, function (player23) {
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(player23))
    sprites.setDataBoolean(mp.getPlayerSprite(player23), "walk_up", false)
    check_direction(sprites.readDataBoolean(mp.getPlayerSprite(player23), "walk_up"), sprites.readDataBoolean(mp.getPlayerSprite(player23), "walk_down"), sprites.readDataBoolean(mp.getPlayerSprite(player23), "walk_left"), sprites.readDataBoolean(mp.getPlayerSprite(player23), "walk_right"), mp.getPlayerSprite(player23))
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Released, function (player24) {
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(player24))
    sprites.setDataBoolean(mp.getPlayerSprite(player24), "walk_right", false)
    check_direction(sprites.readDataBoolean(mp.getPlayerSprite(player24), "walk_up"), sprites.readDataBoolean(mp.getPlayerSprite(player24), "walk_down"), sprites.readDataBoolean(mp.getPlayerSprite(player24), "walk_left"), sprites.readDataBoolean(mp.getPlayerSprite(player24), "walk_right"), mp.getPlayerSprite(player24))
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player29) {
    animation.runImageAnimation(
    mp.getPlayerSprite(player29),
    [img`
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . f f f f f 2 2 f f f f f . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e 2 f 2 f f 2 f 2 e f . .
        . . f f f 2 2 e e 2 2 f f f . .
        . f f e f 2 f e e f 2 f e f f .
        . f e e f f e e e e f e e e f .
        . . f e e e e e e e e e e f . .
        . . . f e e e e e e e e f . . .
        . . e 4 f f f f f f f f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . . f f f f 2 2 f f f f . . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e 2 f 2 f f f 2 f e f . .
        . . f f f 2 f e e 2 2 f f f . .
        . . f e 2 f f e e 2 f e e f . .
        . f f e f f e e e f e e e f f .
        . f f e e e e e e e e e e f f .
        . . . f e e e e e e e e f . . .
        . . . e f f f f f f f f 4 e . .
        . . . 4 f 2 2 2 2 2 e d d 4 . .
        . . . e f f f f f f e e 4 . . .
        . . . . f f f . . . . . . . . .
        `,img`
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . f f f f f 2 2 f f f f f . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e 2 f 2 f f 2 f 2 e f . .
        . . f f f 2 2 e e 2 2 f f f . .
        . f f e f 2 f e e f 2 f e f f .
        . f e e f f e e e e f e e e f .
        . . f e e e e e e e e e e f . .
        . . . f e e e e e e e e f . . .
        . . e 4 f f f f f f f f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . . f f f f 2 2 f f f f . . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e f 2 f f f 2 f 2 e f . .
        . . f f f 2 2 e e f 2 f f f . .
        . . f e e f 2 e e f f 2 e f . .
        . f f e e e f e e e f f e f f .
        . f f e e e e e e e e e e f f .
        . . . f e e e e e e e e f . . .
        . . e 4 f f f f f f f f e . . .
        . . 4 d d e 2 2 2 2 2 f 4 . . .
        . . . 4 e e f f f f f f e . . .
        . . . . . . . . . f f f . . . .
        `],
    200,
    true
    )
    sprites.setDataBoolean(mp.getPlayerSprite(player29), "walk_up", true)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player25) {
    if (!(sprites.readDataBoolean(mp.getPlayerSprite(player25), "attacking"))) {
        sprites.setDataBoolean(mp.getPlayerSprite(player25), "attacking", true)
        pause(200)
        sprites.setDataBoolean(mp.getPlayerSprite(player25), "attacking", false)
        sprites.readDataSprite(mp.getPlayerSprite(player25), "sword").setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            `)
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.NPC, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    sprites.setDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "speed", 0)
    if (otherSprite == Keeper && Keeper_Quest_Phase == 0) {
        story.startCutscene(function () {
            mp.setPlayerIndicatorsVisible(false)
            story.cancelSpriteMovement(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
            story.spriteSayText(Keeper, "Careful there. This is no place for an unskilled player such as yourself.")
            story.showPlayerChoices("Who Are You?", "I Dont Care Leave Me Alone!")
            if (story.checkLastAnswer("Who Are You?")) {
                story.spriteSayText(Keeper, "I am the Keeper, I have watched over these lands for thousands of years.")
                story.printCharacterText("Can you teach me how to play?")
                story.spriteSayText(Keeper, "Of Course! You can use the space bar to attack. Killing enemy's in that pit behind you will give Xp and Gold")
                story.showPlayerChoices("What do I gain?", "Thats Boring")
            }
            if (story.checkLastAnswer("I Dont Care Leave Me Alone!")) {
                story.cancelAllCutscenes()
            }
            if (story.checkLastAnswer("What do I gain?")) {
                story.spriteSayText(Keeper, "The treasure of course")
                story.printCharacterText("What treasure?")
                story.spriteSayText(Keeper, "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!")
                story.showPlayerChoices("What does Gold and Xp do?", "")
            }
            if (story.checkLastAnswer("Thats Boring")) {
                story.spriteSayText(Keeper, "Very Rude, but it is meant to be. It deters silly adventurers such as yourself from obtaining the hidden treasure")
                story.printCharacterText("What treasure?")
                story.spriteSayText(Keeper, "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!")
                story.showPlayerChoices("What does Gold and Xp do?", "")
            }
            if (story.checkLastAnswer("What does Gold and Xp do?")) {
                story.spriteSayText(Keeper, "Xp is needed to level up, and Gold allows you to buy better upgrades. You will need both of these to be able to prestige.")
                story.printCharacterText("Prestige?")
                story.spriteSayText(Keeper, "Yes you will need to complete some simple requirements to prestige, in turn unlocking the treasure. Come back when you are level 10.")
                Keeper_Quest_Phase = 1
            }
            story.cancelAllCutscenes()
        })
    }
})
function check_direction (up: boolean, down: boolean, left: boolean, right: boolean, user: Sprite) {
    if (up && left || up && right || up && (left && right)) {
        animation.runImageAnimation(
        user,
        [img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f f 2 f e f . .
            . . f f f 2 f e e 2 2 f f f . .
            . . f e 2 f f e e 2 f e e f . .
            . f f e f f e e e f e e e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . . e f f f f f f f f 4 e . .
            . . . 4 f 2 2 2 2 2 e d d 4 . .
            . . . e f f f f f f e e 4 . . .
            . . . . f f f . . . . . . . . .
            `,img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e f 2 f f f 2 f 2 e f . .
            . . f f f 2 2 e e f 2 f f f . .
            . . f e e f 2 e e f f 2 e f . .
            . f f e e e f e e e f f e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f e . . .
            . . 4 d d e 2 2 2 2 2 f 4 . . .
            . . . 4 e e f f f f f f e . . .
            . . . . . . . . . f f f . . . .
            `],
        200,
        true
        )
    } else if (down && left || down && right || down && (left && right)) {
        animation.runImageAnimation(
        user,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . . f e 4 d d d d 4 e f e . .
            . . f e f 2 2 2 2 e d d 4 e . .
            . . e 4 f 2 2 2 2 e d d e . . .
            . . . . f 4 4 5 5 f e e . . . .
            . . . . f f f f f f f . . . . .
            . . . . f f f . . . . . . . . .
            `,img`
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
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f e e 2 2 2 2 2 2 e f f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . e f e 4 d d d d 4 e f . . .
            . . e 4 d d e 2 2 2 2 f e f . .
            . . . e d d e 2 2 2 2 f 4 e . .
            . . . . e e f 5 5 4 4 f . . . .
            . . . . . f f f f f f f . . . .
            . . . . . . . . . f f f . . . .
            `],
        200,
        true
        )
    } else if (up) {
        animation.runImageAnimation(
        user,
        [img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f f 2 f e f . .
            . . f f f 2 f e e 2 2 f f f . .
            . . f e 2 f f e e 2 f e e f . .
            . f f e f f e e e f e e e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . . e f f f f f f f f 4 e . .
            . . . 4 f 2 2 2 2 2 e d d 4 . .
            . . . e f f f f f f e e 4 . . .
            . . . . f f f . . . . . . . . .
            `,img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e f 2 f f f 2 f 2 e f . .
            . . f f f 2 2 e e f 2 f f f . .
            . . f e e f 2 e e f f 2 e f . .
            . f f e e e f e e e f f e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f e . . .
            . . 4 d d e 2 2 2 2 2 f 4 . . .
            . . . 4 e e f f f f f f e . . .
            . . . . . . . . . f f f . . . .
            `],
        200,
        true
        )
    } else if (down) {
        animation.runImageAnimation(
        user,
        [img`
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
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . . f e 4 d d d d 4 e f e . .
            . . f e f 2 2 2 2 e d d 4 e . .
            . . e 4 f 2 2 2 2 e d d e . . .
            . . . . f 4 4 5 5 f e e . . . .
            . . . . f f f f f f f . . . . .
            . . . . f f f . . . . . . . . .
            `,img`
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
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f e e 2 2 2 2 2 2 e f f . .
            . f f e 2 f f f f f f 2 e f f .
            . f f f f f e e e e f f f f f .
            . . f e f b f 4 4 f b f e f . .
            . . f e 4 1 f d d f 1 4 e f . .
            . . e f e 4 d d d d 4 e f . . .
            . . e 4 d d e 2 2 2 2 f e f . .
            . . . e d d e 2 2 2 2 f 4 e . .
            . . . . e e f 5 5 4 4 f . . . .
            . . . . . f f f f f f f . . . .
            . . . . . . . . . f f f . . . .
            `],
        200,
        true
        )
    } else if (left) {
        animation.runImageAnimation(
        user,
        [img`
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d d 4 e e e f . . .
            . . . f e 4 4 4 e e f f . . . .
            . . . f 2 2 2 e d d 4 . . . . .
            . . . f 2 2 2 e d d e . . . . .
            . . . f 5 5 4 f e e f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . f f f . . . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d e e e e e f . . .
            . . . f e 4 e d d 4 f . . . . .
            . . . f 2 2 e d d e f . . . . .
            . . f f 5 5 f e e f f f . . . .
            . . f f f f f f f f f f . . . .
            . . . f f f . . . f f . . . . .
            `,img`
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d d 4 e e e f . . .
            . . . f e 4 4 4 e e f f . . . .
            . . . f 2 2 2 e d d 4 . . . . .
            . . . f 2 2 2 e d d e . . . . .
            . . . f 5 5 4 f e e f . . . . .
            . . . . f f f f f f . . . . . .
            . . . . . . f f f . . . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 2 f e e e e f f . . . .
            . . f 2 2 2 f e e e e f f . . .
            . . f e e e e f f e e e f . . .
            . f e 2 2 2 2 e e f f f f . . .
            . f 2 e f f f f 2 2 2 e f . . .
            . f f f e e e f f f f f f f . .
            . f e e 4 4 f b e 4 4 e f f . .
            . . f e d d f 1 4 d 4 e e f . .
            . . . f d d d d 4 e e e f . . .
            . . . f e 4 4 4 e d d 4 . . . .
            . . . f 2 2 2 2 e d d e . . . .
            . . f f 5 5 4 4 f e e f . . . .
            . . f f f f f f f f f f . . . .
            . . . f f f . . . f f . . . . .
            `],
        200,
        true
        )
    } else if (right) {
        animation.runImageAnimation(
        user,
        [img`
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e 4 d d d d f . . .
            . . . . f f e e 4 4 4 e f . . .
            . . . . . 4 d d e 2 2 2 f . . .
            . . . . . e d d e 2 2 2 f . . .
            . . . . . f e e f 4 5 5 f . . .
            . . . . . . f f f f f f . . . .
            . . . . . . . f f f . . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e e e d d d f . . .
            . . . . . f 4 d d e 4 e f . . .
            . . . . . f e d d e 2 2 f . . .
            . . . . f f f e e f 5 5 f f . .
            . . . . f f f f f f f f f f . .
            . . . . . f f . . . f f f . . .
            `,img`
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e 4 d d d d f . . .
            . . . . f f e e 4 4 4 e f . . .
            . . . . . 4 d d e 2 2 2 f . . .
            . . . . . e d d e 2 2 2 f . . .
            . . . . . f e e f 4 5 5 f . . .
            . . . . . . f f f f f f . . . .
            . . . . . . . f f f . . . . . .
            `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f f f . . . .
            . . . . f f e e e e f 2 f . . .
            . . . f f e e e e f 2 2 2 f . .
            . . . f e e e f f e e e e f . .
            . . . f f f f e e 2 2 2 2 e f .
            . . . f e 2 2 2 f f f f e 2 f .
            . . f f f f f f f e e e f f f .
            . . f f e 4 4 e b f 4 4 e e f .
            . . f e e 4 d 4 1 f d d e f . .
            . . . f e e e 4 d d d d f . . .
            . . . . 4 d d e 4 4 4 e f . . .
            . . . . e d d e 2 2 2 2 f . . .
            . . . . f e e f 4 4 5 5 f f . .
            . . . . f f f f f f f f f f . .
            . . . . . f f . . . f f f . . .
            `],
        200,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, user)
    }
}
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player27) {
    animation.runImageAnimation(
    mp.getPlayerSprite(player27),
    [img`
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e e f f . . . .
        . . . f 2 2 2 e d d 4 . . . . .
        . . . f 2 2 2 e d d e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d e e e e e f . . .
        . . . f e 4 e d d 4 f . . . . .
        . . . f 2 2 e d d e f . . . . .
        . . f f 5 5 f e e f f f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
        `,img`
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e e f f . . . .
        . . . f 2 2 2 e d d 4 . . . . .
        . . . f 2 2 2 e d d e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e d d 4 . . . .
        . . . f 2 2 2 2 e d d e . . . .
        . . f f 5 5 4 4 f e e f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
        `],
    200,
    true
    )
    sprites.setDataBoolean(mp.getPlayerSprite(player27), "walk_left", true)
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player26) {
    animation.runImageAnimation(
    mp.getPlayerSprite(player26),
    [img`
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
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f f 2 2 f f f . . . .
        . . . f f f 2 2 2 2 f f f . . .
        . . f f f e e e e e e f f f . .
        . . f f e 2 2 2 2 2 2 e e f . .
        . f f e 2 f f f f f f 2 e f f .
        . f f f f f e e e e f f f f f .
        . . f e f b f 4 4 f b f e f . .
        . . f e 4 1 f d d f 1 4 e f . .
        . . . f e 4 d d d d 4 e f e . .
        . . f e f 2 2 2 2 e d d 4 e . .
        . . e 4 f 2 2 2 2 e d d e . . .
        . . . . f 4 4 5 5 f e e . . . .
        . . . . f f f f f f f . . . . .
        . . . . f f f . . . . . . . . .
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f f 2 2 f f f . . . .
        . . . f f f 2 2 2 2 f f f . . .
        . . f f f e e e e e e f f f . .
        . . f e e 2 2 2 2 2 2 e f f . .
        . f f e 2 f f f f f f 2 e f f .
        . f f f f f e e e e f f f f f .
        . . f e f b f 4 4 f b f e f . .
        . . f e 4 1 f d d f 1 4 e f . .
        . . e f e 4 d d d d 4 e f . . .
        . . e 4 d d e 2 2 2 2 f e f . .
        . . . e d d e 2 2 2 2 f 4 e . .
        . . . . e e f 5 5 4 4 f . . . .
        . . . . . f f f f f f f . . . .
        . . . . . . . . . f f f . . . .
        `],
    200,
    true
    )
    sprites.setDataBoolean(mp.getPlayerSprite(player26), "walk_down", true)
})
function spawn_enemy () {
    if (sprites.allOfKind(SpriteKind.Enemy).length < 10) {
        target2 = mp.getPlayerSprite(mp.allPlayers()._pickRandom())
        while (!(sprites.readDataBoolean(target2, "deployed"))) {
            target2 = mp.getPlayerSprite(mp.allPlayers()._pickRandom())
        }
        temp_enemy_sprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            `, SpriteKind.Enemy)
        sprites.setDataNumber(temp_enemy_sprite, "Health", 100)
        sprites.setDataNumber(temp_enemy_sprite, "Damage", 5)
        sprites.setDataNumber(temp_enemy_sprite, "speed", 100)
        temp_enemy_sprite.setPosition(0, 0)
        Enemies.push(temp_enemy_sprite)
    }
}
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player22) {
    animation.runImageAnimation(
    mp.getPlayerSprite(player22),
    [img`
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . f f e e 4 4 4 e f . . .
        . . . . . 4 d d e 2 2 2 f . . .
        . . . . . e d d e 2 2 2 f . . .
        . . . . . f e e f 4 5 5 f . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . f f f . . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e e e d d d f . . .
        . . . . . f 4 d d e 4 e f . . .
        . . . . . f e d d e 2 2 f . . .
        . . . . f f f e e f 5 5 f f . .
        . . . . f f f f f f f f f f . .
        . . . . . f f . . . f f f . . .
        `,img`
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . f f e e 4 4 4 e f . . .
        . . . . . 4 d d e 2 2 2 f . . .
        . . . . . e d d e 2 2 2 f . . .
        . . . . . f e e f 4 5 5 f . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . f f f . . . . . .
        `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . 4 d d e 4 4 4 e f . . .
        . . . . e d d e 2 2 2 2 f . . .
        . . . . f e e f 4 4 5 5 f f . .
        . . . . f f f f f f f f f f . .
        . . . . . f f . . . f f f . . .
        `],
    200,
    true
    )
    sprites.setDataBoolean(mp.getPlayerSprite(player22), "walk_right", true)
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Released, function (player28) {
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(player28))
    sprites.setDataBoolean(mp.getPlayerSprite(player28), "walk_down", false)
    check_direction(sprites.readDataBoolean(mp.getPlayerSprite(player28), "walk_up"), sprites.readDataBoolean(mp.getPlayerSprite(player28), "walk_down"), sprites.readDataBoolean(mp.getPlayerSprite(player28), "walk_left"), sprites.readDataBoolean(mp.getPlayerSprite(player28), "walk_right"), mp.getPlayerSprite(player28))
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Character2 = sprites.create(img`
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
    sprites.setDataBoolean(Character2, "deployed", false)
    sprites.setDataNumber(Character2, "speed", 100)
    controller.player2.moveSprite(Character2, sprites.readDataNumber(Character2, "speed"), sprites.readDataNumber(Character2, "speed"))
    scene.cameraFollowSprite(Character2)
    tiles.placeOnTile(Character2, tiles.getTileLocation(146, 11))
    sprites.setDataSprite(Character2, "sword", sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, SpriteKind.Weapon))
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.attachToSprite(Character2, 2, 0)
    statusbar2.setColor(2, 15, 3)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
        `, SpriteKind.Player))
    Character = sprites.create(img`
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
    sprites.setDataBoolean(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "deployed", false)
    sprites.setDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "speed", 100)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), sprites.readDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "speed"), sprites.readDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "speed"))
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(145, 11))
    sprites.setDataSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "sword", sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, SpriteKind.Weapon))
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 2, 0)
    statusbar.setColor(2, 15, 3)
    sprites.setDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "Gold", 0)
    sprites.setDataNumber(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "XP", 0)
    story.spriteSayText(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), "\"I should walk around using WASD\"", 15, 1, story.TextSpeed.Normal)
    mp.setPlayerIndicatorsVisible(true)
    Keeper_Quest_Phase = 0
})
function generate_map () {
    playerDeployed = 0
    scene.setTileMap(img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        `)
    scene.setTile(14, img`
        b d d d d d d c c d d d d d d c
        d b b b b b c d d c b b b b b c
        d b b b b c d b b b c b b b b c
        d b b b c d b b b b b c b b b c
        d b b c d b b b b b b b c b b c
        d b c d b b b b b b b b b c b c
        d c d b b b b b b b b b b b c b
        c d b b b b b b b b b b b b b c
        c d b b b b b b b b b b b b c d
        d c b b b b b b b b b b b c d c
        d b c b b b b b b b b b c d b c
        d b b c b b b b b b b c d b b c
        d b b b c b b b b b c d b b b c
        d b b b b c b b b c d b b b b c
        d b b b b b c b c d b b b b b c
        c c c c c c b c d c c c c c c a
        `, false)
    scene.setTile(7, img`
        7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7
        7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7
        7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7
        7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7
        7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, false)
    scene.setTile(3, img`
        7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7
        7 7 5 7 5 5 7 7 7 7 7 7 7 7 7 7
        7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 7
        7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 7
        7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, true)
    scene.setTile(15, img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c b c c c c b c
        c c b c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c b c c c c b c c c c
        c c c c c c c c c c c c c c c c
        c b c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c b c c c c c b c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c b c c c c c c c c c c b c c
        c c c c c c c b c c c c c c c c
        c c c c c c c c c c c c c c c c
        `, true)
    scene.setTile(12, img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c b c c c c b c
        c c b c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c b c c c c b c c c c
        c c c c c c c c c c c c c c c c
        c b c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c b c c c c c b c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c b c c c c c c c c c c b c c
        c c c c c c c b c c c c c c c c
        c c c c c c c c c c c c c c c c
        `, false)
    scene.setTile(1, img`
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        1 d d d d d d d d d d d d d d b
        b b b b b b b b b b b b b b b b
        `, true)
    scene.setTile(9, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        `, false)
}
let playerDeployed = 0
let statusbar: StatusBarSprite = null
let Character: Sprite = null
let statusbar2: StatusBarSprite = null
let Character2: Sprite = null
let temp_enemy_sprite: Sprite = null
let target2: Sprite = null
let Keeper_Quest_Phase = 0
let Keeper: Sprite = null
let Enemies: Sprite[] = []
let rng : FastRandomBlocks = null
class ActionKind {
    static Walking: number
    private ___Walking_is_set: boolean
    private ___Walking: number
    get Walking(): number {
        return this.___Walking_is_set ? this.___Walking : ActionKind.Walking
    }
    set Walking(value: number) {
        this.___Walking_is_set = true
        this.___Walking = value
    }

    static Idle: number
    private ___Idle_is_set: boolean
    private ___Idle: number
    get Idle(): number {
        return this.___Idle_is_set ? this.___Idle : ActionKind.Idle
    }
    set Idle(value: number) {
        this.___Idle_is_set = true
        this.___Idle = value
    }

    static Jumping: number
    private ___Jumping_is_set: boolean
    private ___Jumping: number
    get Jumping(): number {
        return this.___Jumping_is_set ? this.___Jumping : ActionKind.Jumping
    }
    set Jumping(value: number) {
        this.___Jumping_is_set = true
        this.___Jumping = value
    }

    static Attacking: number
    private ___Attacking_is_set: boolean
    private ___Attacking: number
    get Attacking(): number {
        return this.___Attacking_is_set ? this.___Attacking : ActionKind.Attacking
    }
    set Attacking(value: number) {
        this.___Attacking_is_set = true
        this.___Attacking = value
    }

    public static __initActionKind() {
        ActionKind.Walking = 0
        ActionKind.Idle = 1
        ActionKind.Jumping = 2
        ActionKind.Attacking = 3
    }

}
ActionKind.__initActionKind()
function generate_close_position(target: Sprite, min_range: number = -10, max_range: number = 10): any[] {
    /** Generates a random position near a specific sprite within the specified range. */
    return [target.x + rng.randomRange(min_range, max_range), target.y + rng.randomRange(min_range, max_range)]
}
rng = Random.createRNG(game.runtime())
Enemies = []
generate_map()
create_keeper()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (sprites.readDataBoolean(value, "attacking")) {
            if (sprites.readDataNumber(value, "horizontal") == -1) {
                sprites.readDataSprite(value, "sword").right = value.left
                value.setImage(assets.image`Attack Left`)
                sprites.readDataSprite(value, "sword").setImage(assets.image`Sword Attack Left`)
                sprites.readDataSprite(value, "sword").y = value.y
            }
            if (sprites.readDataNumber(value, "horizontal") == 1) {
                sprites.readDataSprite(value, "sword").left = value.right
                value.setImage(assets.image`Attack Right`)
                sprites.readDataSprite(value, "sword").setImage(assets.image`Sword Attack Right`)
                sprites.readDataSprite(value, "sword").y = value.y
            }
            if (sprites.readDataNumber(value, "vertical") == 1) {
                sprites.readDataSprite(value, "sword").top = value.bottom
                value.setImage(assets.image`Attack Down`)
                sprites.readDataSprite(value, "sword").setImage(assets.image`Sword Attack Down`)
                sprites.readDataSprite(value, "sword").x = value.x
            }
            if (sprites.readDataNumber(value, "vertical") == -1) {
                sprites.readDataSprite(value, "sword").bottom = value.top
                value.setImage(assets.image`Attack Up`)
                sprites.readDataSprite(value, "sword").setImage(assets.image`Sword Attack Up`)
                sprites.readDataSprite(value, "sword").x = value.x
            }
        }
    }
})
game.onUpdate(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        if (value2.vx > 0) {
            sprites.setDataNumber(value2, "vertical", 0)
            sprites.setDataNumber(value2, "horizontal", 1)
        }
        if (value2.vx < 0) {
            sprites.setDataNumber(value2, "vertical", 0)
            sprites.setDataNumber(value2, "horizontal", -1)
        }
        if (value2.vy < 0) {
            sprites.setDataNumber(value2, "vertical", -1)
            sprites.setDataNumber(value2, "horizontal", 0)
        }
        if (value2.vy > 0) {
            sprites.setDataNumber(value2, "vertical", 1)
            sprites.setDataNumber(value2, "horizontal", 0)
        }
    }
})
