class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    Attacking = 3


@namespace
class SpriteKind:
    Object = SpriteKind.create()
    Weapon = SpriteKind.create()
    NPC = SpriteKind.create()


def on_button_multiplayer_left_released(player2):
    animation.stop_animation(
        animation.AnimationTypes.ALL, mp.get_player_sprite(player2)
    )
    sprites.set_data_boolean(mp.get_player_sprite(player2), "walk_left", False)
    check_direction(
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_right"),
        mp.get_player_sprite(player2),
    )


mp.on_button_event(
    mp.MultiplayerButton.LEFT,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_left_released,
)


def on_button_multiplayer_right_pressed(player22):
    animation.run_image_animation(
        mp.get_player_sprite(player22),
        [
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
        ],
        200,
        True,
    )
    sprites.set_data_boolean(mp.get_player_sprite(player22), "walk_right", True)


mp.on_button_event(
    mp.MultiplayerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_right_pressed,
)


def create_keeper():
    global Keeper
    Keeper = sprites.create(
        assets.image(
            """
        The Keeper
    """
        ),
        SpriteKind.NPC,
    )
    tiles.place_on_tile(Keeper, tiles.get_tile_location(146, 10))


def on_button_multiplayer_up_released(player23):
    animation.stop_animation(
        animation.AnimationTypes.ALL, mp.get_player_sprite(player23)
    )
    sprites.set_data_boolean(mp.get_player_sprite(player23), "walk_up", False)
    check_direction(
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_right"),
        mp.get_player_sprite(player23),
    )


mp.on_button_event(
    mp.MultiplayerButton.UP,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_up_released,
)


def on_button_multiplayer_right_released(player24):
    animation.stop_animation(
        animation.AnimationTypes.ALL, mp.get_player_sprite(player24)
    )
    sprites.set_data_boolean(mp.get_player_sprite(player24), "walk_right", False)
    check_direction(
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_right"),
        mp.get_player_sprite(player24),
    )


mp.on_button_event(
    mp.MultiplayerButton.RIGHT,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_right_released,
)


def on_button_multiplayer_a_pressed(player25):
    if not (sprites.read_data_boolean(mp.get_player_sprite(player25), "attacking")):
        sprites.set_data_boolean(mp.get_player_sprite(player25), "attacking", True)
        pause(200)
        sprites.set_data_boolean(mp.get_player_sprite(player25), "attacking", False)
        sprites.read_data_sprite(mp.get_player_sprite(player25), "sword").set_image(
            img(
                """
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
        """
            )
        )


mp.on_button_event(
    mp.MultiplayerButton.A,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_a_pressed,
)


def on_sprite_start_overlapping(sprite, otherSprite):
    sprites.set_data_number(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "speed", 0
    )
    if otherSprite == Keeper and Keeper_Quest_Phase == 0:

        def on_start_cutscene():
            global Keeper_Quest_Phase
            mp.set_player_indicators_visible(False)
            story.cancel_sprite_movement(
                mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE))
            )
            story.sprite_say_text(
                Keeper,
                "Careful there. This is no place for an unskilled player such as yourself.",
            )
            story.show_player_choices("Who Are You?", "I Dont Care Leave Me Alone!")
            if story.check_last_answer("Who Are You?"):
                story.sprite_say_text(
                    Keeper,
                    "I am the Keeper, I have watched over these lands for thousands of years.",
                )
                story.print_character_text("Can you teach me how to play?")
                story.sprite_say_text(
                    Keeper,
                    "Of Course! You can use the space bar to attack. Killing enemy's in that pit behind you will give Xp and Gold",
                )
                story.show_player_choices("What do I gain?", "Thats Boring")
            if story.check_last_answer("I Dont Care Leave Me Alone!"):
                story.cancel_all_cutscenes()
            if story.check_last_answer("What do I gain?"):
                story.sprite_say_text(Keeper, "The treasure of course")
                story.print_character_text("What treasure?")
                story.sprite_say_text(
                    Keeper,
                    "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!",
                )
                story.show_player_choices("What does Gold and Xp do?", "")
            if story.check_last_answer("Thats Boring"):
                story.sprite_say_text(
                    Keeper,
                    "Very Rude, but it is meant to be. It deters silly adventurers such as yourself from obtaining the hidden treasure",
                )
                story.print_character_text("What treasure?")
                story.sprite_say_text(
                    Keeper,
                    "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!",
                )
                story.show_player_choices("What does Gold and Xp do?", "")
            if story.check_last_answer("What does Gold and Xp do?"):
                story.sprite_say_text(
                    Keeper,
                    "Xp is needed to level up, and Gold allows you to buy better upgrades. You will need both of these to be able to prestige.",
                )
                story.print_character_text("Prestige?")
                story.sprite_say_text(
                    Keeper,
                    "Yes you will need to complete some simple requirements to prestige, in turn unlocking the treasure. Come back when you are level 10.",
                )
                Keeper_Quest_Phase = 1
            story.cancel_all_cutscenes()

        story.start_cutscene(on_start_cutscene)


events.sprite_event(
    SpriteKind.player,
    SpriteKind.NPC,
    events.SpriteEvent.START_OVERLAPPING,
    on_sprite_start_overlapping,
)


def check_direction(up: bool, down: bool, left: bool, right: bool, user: Sprite):
    if up and left or up and right or up and (left and right):
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    elif down and left or down and right or down and (left and right):
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    elif up:
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    elif down:
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    elif left:
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    elif right:
        animation.run_image_animation(
            user,
            [
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
                img(
                    """
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
                """
                ),
            ],
            200,
            True,
        )
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, user)


def on_button_multiplayer_down_pressed(player26):
    animation.run_image_animation(
        mp.get_player_sprite(player26),
        [
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
        ],
        200,
        True,
    )
    sprites.set_data_boolean(mp.get_player_sprite(player26), "walk_down", True)


mp.on_button_event(
    mp.MultiplayerButton.DOWN,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_down_pressed,
)


def on_button_multiplayer_left_pressed(player27):
    animation.run_image_animation(
        mp.get_player_sprite(player27),
        [
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
        ],
        200,
        True,
    )
    sprites.set_data_boolean(mp.get_player_sprite(player27), "walk_left", True)


mp.on_button_event(
    mp.MultiplayerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_left_pressed,
)


def spawn_enemy():
    global target2, temp_enemy_sprite
    if len(sprites.all_of_kind(SpriteKind.enemy)) < 10:
        target2 = mp.get_player_sprite(mp.all_players()._pick_random())
        while not (sprites.read_data_boolean(target2, "deployed")):
            target2 = mp.get_player_sprite(mp.all_players()._pick_random())
        temp_enemy_sprite = sprites.create(
            img(
                """
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
            """
            ),
            SpriteKind.enemy,
        )
        sprites.set_data_number(temp_enemy_sprite, "Health", 100)
        sprites.set_data_number(temp_enemy_sprite, "Damage", 5)
        sprites.set_data_number(temp_enemy_sprite, "speed", 100)
        temp_enemy_sprite.set_position(0, 0)
        Enemies.append(temp_enemy_sprite)


def on_hit_tile(sprite2):
    scene.place_on_random_tile(sprite2, 12)
    sprites.set_data_boolean(sprite2, "deployed", True)


scene.on_hit_tile(SpriteKind.player, 15, on_hit_tile)


def on_button_multiplayer_down_released(player28):
    animation.stop_animation(
        animation.AnimationTypes.ALL, mp.get_player_sprite(player28)
    )
    sprites.set_data_boolean(mp.get_player_sprite(player28), "walk_down", False)
    check_direction(
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_right"),
        mp.get_player_sprite(player28),
    )


mp.on_button_event(
    mp.MultiplayerButton.DOWN,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_down_released,
)


def on_player2_connected():
    global Character2, statusbar2
    Character2 = sprites.create(
        img(
            """
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
        """
        ),
        SpriteKind.player,
    )
    sprites.set_data_boolean(Character2, "deployed", False)
    sprites.set_data_number(Character2, "speed", 100)
    controller.player2.move_sprite(
        Character2,
        sprites.read_data_number(Character2, "speed"),
        sprites.read_data_number(Character2, "speed"),
    )
    scene.camera_follow_sprite(Character2)
    tiles.place_on_tile(Character2, tiles.get_tile_location(146, 11))
    sprites.set_data_sprite(
        Character2,
        "sword",
        sprites.create(
            img(
                """
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
            """
            ),
            SpriteKind.Weapon,
        ),
    )
    statusbar2 = statusbars.create(20, 4, StatusBarKind.health)
    statusbar2.attach_to_sprite(Character2, 2, 0)
    statusbar2.set_color(2, 15, 3)


controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)


def on_button_multiplayer_up_pressed(player29):
    animation.run_image_animation(
        mp.get_player_sprite(player29),
        [
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
            img(
                """
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
            """
            ),
        ],
        200,
        True,
    )
    sprites.set_data_boolean(mp.get_player_sprite(player29), "walk_up", True)


mp.on_button_event(
    mp.MultiplayerButton.UP,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_up_pressed,
)


def generate_close_position(
    target: Sprite, min_range: number = -10, max_range: number = 10
):
    """Generates a random position near a specific sprite within the specified range."""
    return [
        target.x + rng.random_range(min_range, max_range),
        target.y + rng.random_range(min_range, max_range),
    ]


def on_player1_connected():
    global Character, statusbar, Keeper_Quest_Phase
    mp.set_player_sprite(
        mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(
            img(
                """
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
            """
            ),
            SpriteKind.player,
        ),
    )
    Character = sprites.create(
        img(
            """
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
        """
        ),
        SpriteKind.player,
    )
    sprites.set_data_boolean(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "deployed", False
    )
    sprites.set_data_number(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "speed", 100
    )
    mp.move_with_buttons(
        mp.player_selector(mp.PlayerNumber.ONE),
        sprites.read_data_number(
            mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "speed"
        ),
        sprites.read_data_number(
            mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "speed"
        ),
    )
    scene.camera_follow_sprite(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE))
    )
    tiles.place_on_tile(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        tiles.get_tile_location(145, 11),
    )
    sprites.set_data_sprite(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "sword",
        sprites.create(
            img(
                """
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
            """
            ),
            SpriteKind.Weapon,
        ),
    )
    statusbar = statusbars.create(20, 4, StatusBarKind.health)
    statusbar.attach_to_sprite(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), 2, 0
    )
    statusbar.set_color(2, 15, 3)
    sprites.set_data_number(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "Gold", 0
    )
    sprites.set_data_number(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)), "XP", 0
    )
    story.sprite_say_text(
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        '"I should walk around using WASD"',
        15,
        1,
        story.TextSpeed.NORMAL,
    )
    mp.set_player_indicators_visible(True)
    Keeper_Quest_Phase = 0


controller.player1.on_event(ControllerEvent.CONNECTED, on_player1_connected)


def generate_map():
    global playerDeployed
    playerDeployed = 0
    scene.set_tile_map(
        assets.image(
            """
        Map
    """
        )
    )
    scene.set_tile(
        14,
        img(
            """
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
        """
        ),
        False,
    )
    scene.set_tile(
        7,
        img(
            """
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
        """
        ),
        False,
    )
    scene.set_tile(
        3,
        img(
            """
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
        """
        ),
        True,
    )
    scene.set_tile(
        15,
        img(
            """
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
        """
        ),
        True,
    )
    scene.set_tile(
        12,
        img(
            """
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
        """
        ),
        False,
    )
    scene.set_tile(
        1,
        img(
            """
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
        """
        ),
        True,
    )
    scene.set_tile(
        9,
        img(
            """
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
        """
        ),
        False,
    )


playerDeployed = 0
statusbar: StatusBarSprite = None
Character: Sprite = None
statusbar2: StatusBarSprite = None
Character2: Sprite = None
temp_enemy_sprite: Sprite = None
target2: Sprite = None
Keeper_Quest_Phase = 0
Keeper: Sprite = None
Enemies: List[Sprite] = []
rng: FastRandomBlocks = None
rng = Random.create_rng(game.runtime())
Enemies = []
generate_map()
create_keeper()


def on_on_update():
    for value in sprites.all_of_kind(SpriteKind.player):
        if sprites.read_data_boolean(value, "attacking"):
            if sprites.read_data_number(value, "horizontal") == -1:
                sprites.read_data_sprite(value, "sword").right = value.left
                value.set_image(
                    assets.image(
                        """
                    Attack Left
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").set_image(
                    assets.image(
                        """
                    Sword Attack Left
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").y = value.y
            if sprites.read_data_number(value, "horizontal") == 1:
                sprites.read_data_sprite(value, "sword").left = value.right
                value.set_image(
                    assets.image(
                        """
                    Attack Right
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").set_image(
                    assets.image(
                        """
                    Sword Attack Right
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").y = value.y
            if sprites.read_data_number(value, "vertical") == 1:
                sprites.read_data_sprite(value, "sword").top = value.bottom
                value.set_image(
                    assets.image(
                        """
                    Attack Down
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").set_image(
                    assets.image(
                        """
                    Sword Attack Down
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").x = value.x
            if sprites.read_data_number(value, "vertical") == -1:
                sprites.read_data_sprite(value, "sword").bottom = value.top
                value.set_image(
                    assets.image(
                        """
                    Attack Up
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").set_image(
                    assets.image(
                        """
                    Sword Attack Up
                """
                    )
                )
                sprites.read_data_sprite(value, "sword").x = value.x


game.on_update(on_on_update)


def on_on_update2():
    for value2 in sprites.all_of_kind(SpriteKind.player):
        if value2.vx > 0:
            sprites.set_data_number(value2, "vertical", 0)
            sprites.set_data_number(value2, "horizontal", 1)
        if value2.vx < 0:
            sprites.set_data_number(value2, "vertical", 0)
            sprites.set_data_number(value2, "horizontal", -1)
        if value2.vy < 0:
            sprites.set_data_number(value2, "vertical", -1)
            sprites.set_data_number(value2, "horizontal", 0)
        if value2.vy > 0:
            sprites.set_data_number(value2, "vertical", 1)
            sprites.set_data_number(value2, "horizontal", 0)


game.on_update(on_on_update2)
