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
    animation.stop_animation(animation.AnimationTypes.ALL, mp.get_player_sprite(player2))
    sprites.set_data_boolean(mp.get_player_sprite(player2), "walk_left", False)
    check_direction(sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player2), "walk_right"),
        mp.get_player_sprite(player2))
mp.on_button_event(mp.MultiplayerButton.LEFT,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_left_released)

def on_button_multiplayer_right_pressed(player22):
    animation.run_image_animation(mp.get_player_sprite(player22),
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    sprites.set_data_boolean(mp.get_player_sprite(player22), "walk_right", True)
mp.on_button_event(mp.MultiplayerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_right_pressed)

def create_keeper():
    global Keeper
    Keeper = sprites.create(assets.image("""
        The Keeper
    """), SpriteKind.NPC)
    tiles.place_on_tile(Keeper, tiles.get_tile_location(146, 10))

def on_button_multiplayer_up_released(player23):
    animation.stop_animation(animation.AnimationTypes.ALL, mp.get_player_sprite(player23))
    sprites.set_data_boolean(mp.get_player_sprite(player23), "walk_up", False)
    check_direction(sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player23), "walk_right"),
        mp.get_player_sprite(player23))
mp.on_button_event(mp.MultiplayerButton.UP,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_up_released)

def on_button_multiplayer_right_released(player24):
    animation.stop_animation(animation.AnimationTypes.ALL, mp.get_player_sprite(player24))
    sprites.set_data_boolean(mp.get_player_sprite(player24), "walk_right", False)
    check_direction(sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player24), "walk_right"),
        mp.get_player_sprite(player24))
mp.on_button_event(mp.MultiplayerButton.RIGHT,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_right_released)

def on_button_multiplayer_a_pressed(player25):
    if not (sprites.read_data_boolean(mp.get_player_sprite(player25), "attacking")):
        sprites.set_data_boolean(mp.get_player_sprite(player25), "attacking", True)
        pause(200)
        sprites.set_data_boolean(mp.get_player_sprite(player25), "attacking", False)
        sprites.read_data_sprite(mp.get_player_sprite(player25), "sword").set_image(img("""
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
        """))
mp.on_button_event(mp.MultiplayerButton.A,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_a_pressed)

def on_sprite_start_overlapping(sprite, otherSprite):
    if otherSprite == Keeper and Keeper_Quest_Phase == 0:
        
        def on_start_cutscene():
            global Keeper_Quest_Phase
            mp.set_player_indicators_visible(False)
            sprites.set_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                "speed",
                0)
            mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE),
                sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                    "speed"),
                sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                    "speed"))
            story.sprite_say_text(Keeper,
                "Careful there. This is no place for an unskilled player such as yourself.")
            story.show_player_choices("Who Are You?", "I Dont Care Leave Me Alone!")
            if story.check_last_answer("Who Are You?"):
                story.sprite_say_text(Keeper,
                    "I am the Keeper, I have watched over these lands for thousands of years.")
                story.print_character_text("Can you teach me how to play?")
                story.sprite_say_text(Keeper,
                    "Of Course! You can use the space bar to attack. Killing enemy's in that pit behind you will give Xp and Gold")
                story.show_player_choices("What do I gain?", "Thats Boring")
            if story.check_last_answer("I Dont Care Leave Me Alone!"):
                story.cancel_all_cutscenes()
            if story.check_last_answer("What do I gain?"):
                story.sprite_say_text(Keeper, "The treasure of course")
                story.print_character_text("What treasure?")
                story.sprite_say_text(Keeper,
                    "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!")
                story.show_player_choices("What does Gold and Xp do?", "")
            if story.check_last_answer("Thats Boring"):
                story.sprite_say_text(Keeper,
                    "Very Rude, but it is meant to be. It deters silly adventurers such as yourself from obtaining the hidden treasure")
                story.print_character_text("What treasure?")
                story.sprite_say_text(Keeper,
                    "Isnt that why you are here in the first place? Thats the whole point of the game, to get the treasure and win!")
                story.show_player_choices("What does Gold and Xp do?", "")
            if story.check_last_answer("What does Gold and Xp do?"):
                story.sprite_say_text(Keeper,
                    "Xp is needed to level up, and Gold allows you to buy better upgrades. You will need both of these to be able to prestige.")
                story.print_character_text("Prestige?")
                story.sprite_say_text(Keeper,
                    "Yes you will need to complete some simple requirements to prestige, in turn unlocking the treasure. Come back when you are level 10.")
                Keeper_Quest_Phase = 1
                sprites.set_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                    "speed",
                    100)
                mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE),
                    sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                        "speed"),
                    sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
                        "speed"))
        story.start_cutscene(on_start_cutscene)
        
events.sprite_event(SpriteKind.player,
    SpriteKind.NPC,
    events.SpriteEvent.START_OVERLAPPING,
    on_sprite_start_overlapping)

def check_direction(up: bool, down: bool, left: bool, right: bool, user: Sprite):
    if up and left or up and right or up and (left and right):
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif down and left or down and right or down and (left and right):
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif up:
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif down:
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif left:
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    elif right:
        animation.run_image_animation(user,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            200,
            True)
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, user)
def setup_items():
    global bow, sword_inv_item, Potion
    bow = Inventory.create_item("Bow",
        img("""
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
        """))
    sword_inv_item = Inventory.create_item("Sword",
        img("""
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
        """))
    Potion = Inventory.create_item("Potion (Instant Regen II)",
        assets.image("""
            Potion of regen
        """))

def on_button_multiplayer_down_pressed(player26):
    animation.run_image_animation(mp.get_player_sprite(player26),
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    sprites.set_data_boolean(mp.get_player_sprite(player26), "walk_down", True)
mp.on_button_event(mp.MultiplayerButton.DOWN,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_down_pressed)

def on_button_multiplayer_left_pressed(player27):
    animation.run_image_animation(mp.get_player_sprite(player27),
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    sprites.set_data_boolean(mp.get_player_sprite(player27), "walk_left", True)
mp.on_button_event(mp.MultiplayerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_left_pressed)

def on_hit_tile(sprite2):
    scene.place_on_random_tile(sprite2, 12)
    sprites.set_data_boolean(sprite2, "deployed", True)
scene.on_hit_tile(SpriteKind.player, 15, on_hit_tile)

def on_button_multiplayer_down_released(player28):
    animation.stop_animation(animation.AnimationTypes.ALL, mp.get_player_sprite(player28))
    sprites.set_data_boolean(mp.get_player_sprite(player28), "walk_down", False)
    check_direction(sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_up"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_down"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_left"),
        sprites.read_data_boolean(mp.get_player_sprite(player28), "walk_right"),
        mp.get_player_sprite(player28))
mp.on_button_event(mp.MultiplayerButton.DOWN,
    ControllerButtonEvent.RELEASED,
    on_button_multiplayer_down_released)

def on_player2_connected():
    global Character2, statusbar2
    Character2 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    sprites.set_data_boolean(Character2, "deployed", False)
    sprites.set_data_number(Character2, "speed", 100)
    controller.player2.move_sprite(Character2,
        sprites.read_data_number(Character2, "speed"),
        sprites.read_data_number(Character2, "speed"))
    scene.camera_follow_sprite(Character2)
    tiles.place_on_tile(Character2, tiles.get_tile_location(146, 11))
    sprites.set_data_sprite(Character2,
        "sword",
        sprites.create(img("""
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
            """),
            SpriteKind.Weapon))
    statusbar2 = statusbars.create(20, 4, StatusBarKind.health)
    statusbar2.attach_to_sprite(Character2, 2, 0)
    statusbar2.set_color(2, 15, 3)
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

def on_button_multiplayer_up_pressed(player29):
    animation.run_image_animation(mp.get_player_sprite(player29),
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        True)
    sprites.set_data_boolean(mp.get_player_sprite(player29), "walk_up", True)
mp.on_button_event(mp.MultiplayerButton.UP,
    ControllerButtonEvent.PRESSED,
    on_button_multiplayer_up_pressed)

def on_player1_connected():
    global Character, statusbar, Keeper_Quest_Phase
    mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.create(img("""
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
            """),
            SpriteKind.player))
    Character = sprites.create(img("""
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
        """),
        SpriteKind.player)
    sprites.set_data_boolean(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "deployed",
        False)
    sprites.set_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "speed",
        100)
    mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE),
        sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
            "speed"),
        sprites.read_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
            "speed"))
    scene.camera_follow_sprite(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)))
    tiles.place_on_tile(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        tiles.get_tile_location(145, 11))
    sprites.set_data_sprite(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "sword",
        sprites.create(img("""
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
            """),
            SpriteKind.Weapon))
    statusbar = statusbars.create(20, 4, StatusBarKind.health)
    statusbar.attach_to_sprite(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        2,
        0)
    statusbar.set_color(2, 15, 3)
    sprites.set_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "Gold",
        0)
    sprites.set_data_number(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "XP",
        0)
    story.sprite_say_text(mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        "\"I should walk around using WASD\"",
        15,
        1,
        story.TextSpeed.NORMAL)
    mp.set_player_indicators_visible(True)
    Keeper_Quest_Phase = 0
controller.player1.on_event(ControllerEvent.CONNECTED, on_player1_connected)

def generate_map():
    global playerDeployed
    playerDeployed = 0
    scene.set_tile_map(assets.image("""
        Map
    """))
    scene.set_tile(14,
        img("""
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
        """),
        False)
    scene.set_tile(7,
        img("""
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
        """),
        False)
    scene.set_tile(3,
        img("""
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
        """),
        True)
    scene.set_tile(15,
        img("""
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
        """),
        True)
    scene.set_tile(12,
        img("""
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
        """),
        False)
    scene.set_tile(1,
        img("""
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
        """),
        True)
    scene.set_tile(9,
        img("""
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
        """),
        False)
playerDeployed = 0
statusbar: StatusBarSprite = None
Character: Sprite = None
statusbar2: StatusBarSprite = None
Character2: Sprite = None
Potion: Inventory.Item = None
sword_inv_item: Inventory.Item = None
bow: Inventory.Item = None
Keeper_Quest_Phase = 0
Keeper: Sprite = None
generate_map()
create_keeper()
setup_items()

def on_on_update():
    for value in sprites.all_of_kind(SpriteKind.player):
        if sprites.read_data_boolean(value, "attacking"):
            if sprites.read_data_number(value, "horizontal") == -1:
                sprites.read_data_sprite(value, "sword").right = value.left
                value.set_image(assets.image("""
                    Attack Left
                """))
                sprites.read_data_sprite(value, "sword").set_image(assets.image("""
                    Sword Attack Left
                """))
                sprites.read_data_sprite(value, "sword").y = value.y
            if sprites.read_data_number(value, "horizontal") == 1:
                sprites.read_data_sprite(value, "sword").left = value.right
                value.set_image(assets.image("""
                    Attack Right
                """))
                sprites.read_data_sprite(value, "sword").set_image(assets.image("""
                    Sword Attack Right
                """))
                sprites.read_data_sprite(value, "sword").y = value.y
            if sprites.read_data_number(value, "vertical") == 1:
                sprites.read_data_sprite(value, "sword").top = value.bottom
                value.set_image(assets.image("""
                    Attack Down
                """))
                sprites.read_data_sprite(value, "sword").set_image(assets.image("""
                    Sword Attack Down
                """))
                sprites.read_data_sprite(value, "sword").x = value.x
            if sprites.read_data_number(value, "vertical") == -1:
                sprites.read_data_sprite(value, "sword").bottom = value.top
                value.set_image(assets.image("""
                    Attack Up
                """))
                sprites.read_data_sprite(value, "sword").set_image(assets.image("""
                    Sword Attack Up
                """))
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

def on_up_pressed():
    if in_inventory:
        move_up_in_inventory_toolbar()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    handle_b_key_in_inventory_toolbar()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def remove_item_from_toolbar(index: number):
    global item3
    item3 = toolbar.get_items()[index]
    if not (item3):
        return [][0]
    if item3.get_text(ItemTextAttribute.TOOLTIP) == "":
        if toolbar.get_items().remove_at(index):
            pass
    elif item3.get_text(ItemTextAttribute.TOOLTIP) == "2":
        item3.set_text(ItemTextAttribute.TOOLTIP, "")
    else:
        item3.set_text(ItemTextAttribute.TOOLTIP,
            convert_to_text(parse_float(item3.get_text(ItemTextAttribute.TOOLTIP)) - 1))
    toolbar.update()
    return Inventory.create_item(item3.get_text(ItemTextAttribute.NAME), item3.get_image())

def on_up_repeated():
    if in_inventory:
        move_up_in_inventory_toolbar()
controller.up.on_event(ControllerButtonEvent.REPEATED, on_up_repeated)

def on_a_pressed():
    global item3
    if in_inventory:
        handle_a_key_in_inventory_toolbar()
    else:
        item3 = remove_item_from_toolbar(toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX))
        if item3:
            the_player.say_text("That " + item3.get_text(ItemTextAttribute.NAME) + " was delicious!",
                2000,
                True)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_right_repeated():
    if in_inventory:
        move_right_in_inventory_toolbar()
controller.right.on_event(ControllerButtonEvent.REPEATED, on_right_repeated)

def on_left_pressed():
    if in_inventory:
        move_left_in_inventory_toolbar()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def spawn_item():
    global the_food
    the_food = sprites.create(all_food._pick_random(), SpriteKind.food)
    the_food.set_position(randint(0, scene.screen_width()),
        randint(0, scene.screen_height()))
    the_food.lifespan = 5000
def move_down_in_inventory_toolbar():
    if cursor_in_inventory:
        if inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) < len(inventory.get_items()) - 8:
            inventory.change_number(InventoryNumberAttribute.SELECTED_INDEX, 8)
    else:
        toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX,
            toolbar.get_number(ToolbarNumberAttribute.MAX_ITEMS) - 1)
def enable_movement(en: bool):
    if en:
        controller.move_sprite(the_player)
    else:
        controller.move_sprite(the_player, 0, 0)

def on_right_pressed():
    if in_inventory:
        move_right_in_inventory_toolbar()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def give_item(idx: number):
    global the_food
    the_food = sprites.create(all_food[idx], SpriteKind.food)
    the_food.set_position(the_player.x, the_player.y)
    the_food.lifespan = 5000
def handle_a_key_in_inventory_toolbar():
    if cursor_in_inventory:
        if len(toolbar.get_items()) < toolbar.get_number(ToolbarNumberAttribute.MAX_ITEMS):
            toolbar.get_items().append(inventory.get_items().remove_at(inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX)))
            handle_b_key_in_inventory_toolbar()
            toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX,
                len(toolbar.get_items()) - 1)
    else:
        if len(inventory.get_items()) < inventory.get_number(InventoryNumberAttribute.MAX_ITEMS) and toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX) < len(toolbar.get_items()):
            inventory.get_items().append(toolbar.get_items().remove_at(toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX)))
            handle_b_key_in_inventory_toolbar()
            inventory.set_number(InventoryNumberAttribute.SELECTED_INDEX,
                len(inventory.get_items()) - 1)
    toolbar.update()
    inventory.update()
def make_player():
    global the_player
    the_player = sprites.create(img("""
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
        """),
        SpriteKind.player)
    the_player.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
    the_player.z = 10
    enable_movement(True)

def on_down_repeated():
    if in_inventory:
        move_down_in_inventory_toolbar()
controller.down.on_event(ControllerButtonEvent.REPEATED, on_down_repeated)

def on_down_pressed():
    if in_inventory:
        move_down_in_inventory_toolbar()
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def move_left_in_inventory_toolbar():
    if cursor_in_inventory:
        if inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) % 8 > 0:
            inventory.change_number(InventoryNumberAttribute.SELECTED_INDEX, -1)
    else:
        if toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX) > 0:
            toolbar.change_number(ToolbarNumberAttribute.SELECTED_INDEX, -1)
def move_right_in_inventory_toolbar():
    if cursor_in_inventory:
        if inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) % 8 < 7 and inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) < len(inventory.get_items()) - 1:
            inventory.change_number(InventoryNumberAttribute.SELECTED_INDEX, 1)
    else:
        if toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX) < toolbar.get_number(ToolbarNumberAttribute.MAX_ITEMS) - 1:
            toolbar.change_number(ToolbarNumberAttribute.SELECTED_INDEX, 1)

def on_menu_pressed():
    handle_menu_key_in_inventory_toolbar()
controller.menu.on_event(ControllerButtonEvent.PRESSED, on_menu_pressed)

def on_on_overlap(sprite, otherSprite):
    index2 = 0
    while index2 <= len(all_food) - 1:
        if otherSprite.image.equals(all_food[index2]):
            if add_item([Inventory.create_item(all_labels[index2], all_food[index2])]):
                otherSprite.destroy()
                break
        index2 += 1
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def handle_menu_key_in_inventory_toolbar():
    global in_inventory, cursor_in_inventory, last_toolbar_select, last_inventory_select
    in_inventory = not (in_inventory)
    inventory.set_flag(SpriteFlag.INVISIBLE, not (in_inventory))
    enable_movement(not (in_inventory))
    cursor_in_inventory = False
    if in_inventory:
        inventory.set_number(InventoryNumberAttribute.SELECTED_INDEX, -1)
        last_toolbar_select = toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX)
    else:
        toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, last_toolbar_select)
        if inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) != -1:
            last_inventory_select = inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX)
def move_up_in_inventory_toolbar():
    if cursor_in_inventory:
        if inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX) > 7:
            inventory.change_number(InventoryNumberAttribute.SELECTED_INDEX, -8)
    else:
        toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, 0)
def make_toolbar():
    global toolbar
    toolbar = Inventory.create_toolbar([], 3)
    toolbar.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    toolbar.left = 4
    toolbar.bottom = scene.screen_height() - 4
    toolbar.z = 50
def prepare_environment():
    scene.set_background_color(7)
def make_inventory_toolbar():
    global in_inventory, cursor_in_inventory, last_toolbar_select, last_inventory_select
    in_inventory = False
    cursor_in_inventory = False
    last_toolbar_select = 0
    last_inventory_select = 0
    make_toolbar()
    make_inventory()
def add_item(item_in_list: List[Inventory.Item]):
    for item in toolbar.get_items():
        if item.get_image().equals(item_in_list[0].get_image()):
            if item.get_text(ItemTextAttribute.TOOLTIP) == "":
                item.set_text(ItemTextAttribute.TOOLTIP, "2")
            else:
                item.set_text(ItemTextAttribute.TOOLTIP,
                    convert_to_text(parse_float(item.get_text(ItemTextAttribute.TOOLTIP)) + 1))
            toolbar.update()
            return True
    for item2 in inventory.get_items():
        if item2.get_image().equals(item_in_list[0].get_image()):
            if item2.get_text(ItemTextAttribute.TOOLTIP) == "":
                item2.set_text(ItemTextAttribute.TOOLTIP, "2")
            else:
                item2.set_text(ItemTextAttribute.TOOLTIP,
                    convert_to_text(parse_float(item2.get_text(ItemTextAttribute.TOOLTIP)) + 1))
            inventory.update()
            return True
    if len(toolbar.get_items()) < toolbar.get_number(ToolbarNumberAttribute.MAX_ITEMS):
        toolbar.get_items().append(item_in_list[0])
        item_in_list[0].set_text(ItemTextAttribute.TOOLTIP, "")
        toolbar.update()
        return True
    if len(inventory.get_items()) < inventory.get_number(InventoryNumberAttribute.MAX_ITEMS):
        inventory.get_items().append(item_in_list[0])
        item_in_list[0].set_text(ItemTextAttribute.TOOLTIP, "")
        inventory.update()
        return True
    return False
def handle_b_key_in_inventory_toolbar():
    global cursor_in_inventory, last_inventory_select, last_toolbar_select
    if in_inventory:
        cursor_in_inventory = not (cursor_in_inventory)
        if len(inventory.get_items()) == 0:
            cursor_in_inventory = False
        if cursor_in_inventory:
            if last_inventory_select == -1:
                last_inventory_select = 0
            inventory.set_number(InventoryNumberAttribute.SELECTED_INDEX,
                Math.constrain(last_inventory_select, 0, len(inventory.get_items()) - 1))
            last_toolbar_select = toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX)
            toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, -1)
        else:
            if last_toolbar_select == -1:
                last_toolbar_select = 0
            toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, last_toolbar_select)
            last_inventory_select = inventory.get_number(InventoryNumberAttribute.SELECTED_INDEX)
            inventory.set_number(InventoryNumberAttribute.SELECTED_INDEX, -1)
    else:
        toolbar.change_number(ToolbarNumberAttribute.SELECTED_INDEX, 1)
        if toolbar.get_number(ToolbarNumberAttribute.SELECTED_INDEX) == toolbar.get_number(ToolbarNumberAttribute.MAX_ITEMS):
            toolbar.set_number(ToolbarNumberAttribute.SELECTED_INDEX, 0)
def make_inventory():
    global inventory
    inventory = Inventory.create_inventory([], 32)
    inventory.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    inventory.set_flag(SpriteFlag.INVISIBLE, True)
    inventory.left = 4
    inventory.top = 4
    inventory.z = 50

def on_left_repeated():
    if in_inventory:
        move_left_in_inventory_toolbar()
controller.left.on_event(ControllerButtonEvent.REPEATED, on_left_repeated)

last_inventory_select = 0
last_toolbar_select = 0
inventory: Inventory.Inventory = None
cursor_in_inventory = False
the_food: Sprite = None
the_player: Sprite = None
toolbar: Inventory.Toolbar = None
item3: Inventory.Item = None
in_inventory = False
all_labels: List[str] = []
all_food: List[Image] = []
prepare_environment()
make_player()
make_inventory_toolbar()
controller.configure_repeat_event_defaults(333, 50)
all_food = [img("""
        . . . . c c c b b b b b . . . .
            . . c c b 4 4 4 4 4 4 b b b . .
            . c c 4 4 4 4 4 5 4 4 4 4 b c .
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e
            . e b 4 4 4 4 4 5 4 4 4 4 b e .
            8 7 e e b 4 4 4 4 4 4 b e e 6 8
            8 7 2 e e e e e e e e e e 2 7 8
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e
            e b e 8 8 c c 8 8 c c c 8 e b e
            e e b e c c e e e e e c e b e e
            . e e b b 4 4 4 4 4 4 4 4 e e .
            . . . c c c c c e e e e e . . .
    """),
    img("""
        . . . . . . . e c 7 . . . . . .
            . . . . e e e c 7 7 e e . . . .
            . . c e e e e c 7 e 2 2 e e . .
            . c e e e e e c 6 e e 2 2 2 e .
            . c e e e 2 e c c 2 4 5 4 2 e .
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
            . e e e 2 2 2 2 2 2 2 2 2 4 e .
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
            . . 2 e e 2 2 2 2 2 4 4 2 e . .
            . . . 2 2 e e 4 4 4 2 e e . . .
            . . . . . 2 2 e e e e . . . . .
    """),
    img("""
        4 4 4 . . 4 4 4 4 4 . . . . . .
            4 5 5 4 4 5 5 5 5 5 4 4 . . . .
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
            . . c 4 4 d 4 4 4 4 4 d d 5 d c
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4
            . . . . c c b 4 4 4 b b 4 5 4 4
            . . . . . . c c c c c c b b 4 .
    """),
    img("""
        . . 2 2 b b b b b . . . . . . .
            . 2 b 4 4 4 4 4 4 b . . . . . .
            2 2 4 4 4 4 d d 4 4 b . . . . .
            2 b 4 4 4 4 4 4 d 4 b . . . . .
            2 b 4 4 4 4 4 4 4 d 4 b . . . .
            2 b 4 4 4 4 4 4 4 4 4 b . . . .
            2 b 4 4 4 4 4 4 4 4 4 e . . . .
            2 2 b 4 4 4 4 4 4 4 b e . . . .
            . 2 b b b 4 4 4 b b b e . . . .
            . . e b b b b b b b e e . . . .
            . . . e e b 4 4 b e e e b . . .
            . . . . . e e e e e e b d b b .
            . . . . . . . . . . . b 1 1 1 b
            . . . . . . . . . . . c 1 d d b
            . . . . . . . . . . . c 1 b c .
            . . . . . . . . . . . . c c . .
    """),
    img("""
        . . . . . . 2 2 2 2 . . . . . .
            . . . . 2 2 3 3 3 3 2 e . . . .
            . . . 2 3 d 1 1 d d 3 2 e . . .
            . . 2 3 1 d 3 3 3 d d 3 e . . .
            . 2 3 1 3 3 3 3 3 d 1 3 b e . .
            . 2 1 d 3 3 3 3 d 3 3 1 3 b b .
            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b
            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b
            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e
            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e
            e d 3 3 3 3 d 3 3 3 d d b 4 4 e
            e d d 3 3 3 d 3 3 3 1 3 b 4 b e
            e 3 d 3 3 1 d d 3 d 1 b b e e .
            . e 3 1 1 d d 1 1 1 b b e e e .
            . . e 3 3 3 3 3 3 b e e e e . .
            . . . e e e e e e e e e e . . .
    """),
    img("""
        . . . . . . b b b b . . . . . .
            . . . . . . b 4 4 4 b . . . . .
            . . . . . . b b 4 4 4 b . . . .
            . . . . . b 4 b b b 4 4 b . . .
            . . . . b d 5 5 5 4 b 4 4 b . .
            . . . . b 3 2 3 5 5 4 e 4 4 b .
            . . . b d 2 2 2 5 7 5 4 e 4 4 e
            . . . b 5 3 2 3 5 5 5 5 e e e e
            . . b d 7 5 5 5 3 2 3 5 5 e e e
            . . b 5 5 5 5 5 2 2 2 5 5 d e e
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4
            . b 2 2 2 5 5 5 5 5 5 d d e 4 .
            b d 3 2 d 5 5 5 d d d 4 4 . . .
            b 5 5 5 5 d d 4 4 4 4 . . . . .
            4 d d d 4 4 4 . . . . . . . . .
            4 4 4 4 . . . . . . . . . . . .
    """),
    img("""
        . . . . . . b b b b a a . . . .
            . . . . b b d d d 3 3 3 a a . .
            . . . b d d d 3 3 3 3 3 3 a a .
            . . b d d 3 3 3 3 3 3 3 3 3 a .
            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b
            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b
            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b
            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e
            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e
            a 3 3 3 3 3 3 3 d d a 4 4 4 e .
            a a 3 3 3 d d d a a 4 4 4 e e .
            . e a a a a a a 4 4 4 4 e e . .
            . . e e b b 4 4 4 4 b e e . . .
            . . . e e e e e e e e . . . . .
            . . . . . . . . . . . . . . . .
    """),
    img("""
        . . . . . . . . . . b b b . . .
            . . . . . . . . b e e 3 3 b . .
            . . . . . . b b e 3 2 e 3 a . .
            . . . . b b 3 3 e 2 2 e 3 3 a .
            . . b b 3 3 3 3 3 e e 3 3 3 a .
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
            b 3 3 3 d d d d 3 3 3 3 3 d d a
            b b b b b b b 3 d d d d d d 3 a
            b d 5 5 5 5 d b b b a a a a a a
            b 3 d d 5 5 5 5 5 5 5 d d d d a
            b 3 3 3 3 3 3 d 5 5 5 d d d d a
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a
            b b b 3 d 5 5 5 5 5 5 5 d d b a
            . . . b b b 3 d 5 5 5 5 d d 3 a
            . . . . . . b b b b 3 d d d b a
            . . . . . . . . . . b b b a a .
    """),
    img("""
        . . . . . 3 3 b 3 3 d d 3 3 . .
            . . . . 3 1 1 d 3 d 1 1 1 1 3 .
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3
            . 3 1 1 d 1 1 1 1 d d 1 1 b . .
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 .
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 .
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 .
            . 4 4 d 1 1 1 1 1 1 d d d b b .
            . 4 d b d 1 1 1 1 1 1 1 1 3 . .
            4 d d 5 b d 1 1 1 1 1 1 1 3 . .
            4 5 d 5 5 b b d 1 1 1 1 d 3 . .
            4 5 5 d 5 5 d b b b d d 3 . . .
            4 5 5 5 d d d d 4 4 b 3 . . . .
            . 4 5 5 5 4 4 4 . . . . . . . .
            . . 4 4 4 . . . . . . . . . . .
    """),
    img("""
        . . . . . . . 6 . . . . . . . .
            . . . . . . 8 6 6 . . . 6 8 . .
            . . . e e e 8 8 6 6 . 6 7 8 . .
            . . e 2 2 2 2 e 8 6 6 7 6 . . .
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
            e 2 2 2 2 2 2 2 4 e 2 e e c . .
            e e 2 e 2 2 4 2 2 e e e c . . .
            e e e e 2 e 2 2 e e e c . . . .
            e e e 2 e e c e c c c . . . . .
            . c c c c c c c . . . . . . . .
    """),
    img("""
        . . . . . . . . . . . 6 6 6 6 6
            . . . . . . . . . 6 6 7 7 7 7 8
            . . . . . . 8 8 8 7 7 8 8 6 8 8
            . . e e e e c 6 6 8 8 . 8 7 8 .
            . e 2 5 4 2 e c 8 . . . 6 7 8 .
            e 2 4 2 2 2 2 2 c . . . 6 7 8 .
            e 2 2 2 2 2 2 2 c . . . 8 6 8 .
            e 2 e e 2 2 2 2 e e e e c 6 8 .
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
            . c 2 e e e 2 e 2 4 2 2 2 2 c .
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e
            . . . e c c e c 2 2 2 2 2 2 2 e
            . . . . . . . c 2 e e 2 2 e 2 c
            . . . . . . . c e e e e e e 2 c
            . . . . . . . . c e 2 2 2 2 c .
            . . . . . . . . . c c c c c . .
    """),
    img("""
        . . . . . . . e e e e . . . . .
            . . . . . e e 4 5 5 5 e e . . .
            . . . . e 4 5 6 2 2 7 6 6 e . .
            . . . e 5 6 6 7 2 2 6 4 4 4 e .
            . . e 5 2 2 7 6 6 4 5 5 5 5 4 .
            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4
            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4
            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4
            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4
            e 5 c c e 5 4 5 5 5 4 5 5 5 e .
            e 5 c c 5 5 5 5 5 5 5 5 4 e . .
            e 5 e c 5 4 5 4 5 5 5 e e . . .
            e 5 e e 5 5 5 5 5 4 e . . . . .
            4 5 4 e 5 5 5 5 e e . . . . . .
            . 4 5 4 5 5 4 e . . . . . . . .
            . . 4 4 e e e . . . . . . . . .
    """)]
all_labels = ["Burger",
    "Apple",
    "Lemon",
    "Drumstick",
    "Ham",
    "Pizza",
    "Donut",
    "Cake",
    "Ice cream",
    "Strawberry",
    "Cherries",
    "Taco"]
index3 = 0
while index3 <= len(all_food) - 1:
    for index22 in range(3):
        give_item(index3)
    index3 += 1

def on_update_interval():
    spawn_item()
game.on_update_interval(1000, on_update_interval)
