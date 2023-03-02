enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Attacking
}
namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Weapon = SpriteKind.create()
}
function Keeper_Cutscene (mySprite: Sprite) {
    story.startCutscene(function () {
        let otherSprite: Sprite = null
        if (Character.overlapsWith(otherSprite)) {
            story.cancelSpriteMovement(Character)
        }
    })
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    sprites.setDataBoolean(Character, "walk_left", false)
    check_direction(sprites.readDataBoolean(Character, "walk_up"), sprites.readDataBoolean(Character, "walk_down"), sprites.readDataBoolean(Character, "walk_left"), sprites.readDataBoolean(Character, "walk_right"), Character)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Character,
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
    sprites.setDataBoolean(Character, "walk_up", true)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    sprites.setDataBoolean(Character, "walk_up", false)
    check_direction(sprites.readDataBoolean(Character, "walk_up"), sprites.readDataBoolean(Character, "walk_down"), sprites.readDataBoolean(Character, "walk_left"), sprites.readDataBoolean(Character, "walk_right"), Character)
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
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    sprites.setDataBoolean(Character, "walk_down", false)
    check_direction(sprites.readDataBoolean(Character, "walk_up"), sprites.readDataBoolean(Character, "walk_down"), sprites.readDataBoolean(Character, "walk_left"), sprites.readDataBoolean(Character, "walk_right"), Character)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Character,
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
    sprites.setDataBoolean(Character, "walk_right", true)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (!(sprites.readDataBoolean(Character, "attacking"))) {
        sprites.setDataBoolean(Character, "attacking", true)
        pause(200)
        sprites.setDataBoolean(Character, "attacking", false)
        sprites.readDataSprite(Character, "sword").setImage(img`
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
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    scene.placeOnRandomTile(sprite, 12)
    sprites.setDataBoolean(sprite, "deployed", true)
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
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    sprites.setDataBoolean(Character, "walk_right", false)
    check_direction(sprites.readDataBoolean(Character, "walk_up"), sprites.readDataBoolean(Character, "walk_down"), sprites.readDataBoolean(Character, "walk_left"), sprites.readDataBoolean(Character, "walk_right"), Character)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
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
    sprites.setDataBoolean(Character, "deployed", false)
    sprites.setDataNumber(Character, "speed", 100)
    controller.player1.moveSprite(Character, sprites.readDataNumber(Character, "speed"), sprites.readDataNumber(Character, "speed"))
    scene.cameraFollowSprite(Character)
    tiles.placeOnTile(Character, tiles.getTileLocation(146, 11))
    sprites.setDataSprite(Character, "sword", sprites.create(img`
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
    tiles.placeOnTile(Keeper, tiles.getTileLocation(146, 8))
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(Character, 2, 0)
    statusbar.setColor(2, 15, 3)
})
function generate_map () {
    playerDeployed = 0
    scene.setTileMap(assets.image`Map`)
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
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Character,
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
    sprites.setDataBoolean(Character, "walk_left", true)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Character,
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
    sprites.setDataBoolean(Character, "walk_down", true)
})
let playerDeployed = 0
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let Character2: Sprite = null
let Character: Sprite = null
let Keeper: Sprite = null
generate_map()
mp.setPlayerIndicatorsVisible(true)
tiles.placeOnTile(Keeper, tiles.getTileLocation(146, 8))
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
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.vx > 0) {
            sprites.setDataNumber(value, "vertical", 0)
            sprites.setDataNumber(value, "horizontal", 1)
        }
        if (value.vx < 0) {
            sprites.setDataNumber(value, "vertical", 0)
            sprites.setDataNumber(value, "horizontal", -1)
        }
        if (value.vy < 0) {
            sprites.setDataNumber(value, "vertical", -1)
            sprites.setDataNumber(value, "horizontal", 0)
        }
        if (value.vy > 0) {
            sprites.setDataNumber(value, "vertical", 1)
            sprites.setDataNumber(value, "horizontal", 0)
        }
    }
})
