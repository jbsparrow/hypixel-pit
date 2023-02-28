enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    walk_left = false
    check_direction(walk_up, walk_down, walk_left, walk_right)
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
    walk_up = true
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    walk_up = false
    check_direction(walk_up, walk_down, walk_left, walk_right)
})
function check_direction (up: boolean, down: boolean, left: boolean, right: boolean) {
    if (up && left || up && right) {
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
    } else if (down && left || down && right) {
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
    } else if (up) {
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
    } else if (down) {
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
    } else if (left) {
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
    } else if (right) {
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
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, Character)
    }
}
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    walk_down = false
    check_direction(walk_up, walk_down, walk_left, walk_right)
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
    walk_right = true
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
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
        `, false)
    scene.setTile(1, img`
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
    scene.setTile(14, img`
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
    playerDeployed = 1
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Character)
    walk_right = false
    check_direction(walk_up, walk_down, walk_left, walk_right)
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
    controller.player1.moveSprite(Character, 100, 100)
    scene.cameraFollowSprite(Character)
    scene.placeOnRandomTile(Character, 14)
})
function generate_map () {
    playerDeployed = 0
    scene.setTileMap(img`
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        6666666666666666666666677777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771111111111111111111111111111117777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeee9999eeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeee9ffff9eeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeee9ffffff9eeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeee9ffffffff9eeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeee9ffffffffff9eeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeee9ffffffffff9eeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeee9ffffffffff9eeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeee9ffffffffff9eeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeee9ffffffff9eeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeee9ffffff9eeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeee9ffff9eeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeee9999eeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771eeeeeeeeeeeeeeeeeeeeeeeeeeee17777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777771111111111111111111111111111117777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        4444444444444444444444444444447777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
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
    walk_left = true
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
    walk_down = true
})
let playerDeployed = 0
let walk_right = false
let walk_down = false
let walk_up = false
let walk_left = false
let Character: Sprite = null
generate_map()
