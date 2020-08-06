
import { makeTower } from "./lib/tower";

interface Spell {
  instant?: boolean,
  item: string,
  tag: string,
  particle?: string,
  commands: string[],
  setupCommands?: string[],
  customArmorStandTag?: string,
  detag?: boolean,
  itemNbt?: string,
  additionalCondition?: string,
}

const spells: Spell[] = [
  {
    item: "scute",
    tag: "Block",
    particle: "item barrier",
    commands: [
      `execute as @e[tag=Block] at @s if entity @e[tag=Move,tag=!Block,distance=..4,limit=1] run tag @s add Blocking`,
      `execute as @e[tag=Block,tag=Blocking] at @s as @e[tag=Move,tag=!Block,distance=..4,limit=1,sort=nearest] run tag @s add Done`,
      `execute as @e[tag=Block,tag=Blocking] at @s run particle ~ ~ ~ .1 .1 .1 0 2 force @a[tag=WIZARD]`,
      `tag @e[tag=Block,tag=Blocking] add Done`,
    ]
  },
  {
    item: "blaze_powder",
    tag: "Lightning",
    particle: "flame",
    commands: [
      `execute as @e[tag=Done,tag=Lightning] at @s run summon lightning_bolt`,
    ]
  },
  {
    item: "tnt",
    tag: "Tnt",
    particle: "smoke",
    commands: [
      `execute as @e[tag=Done,tag=Tnt] at @s run summon tnt`,
    ]
  },
  {
    item: "bone",
    tag: "Wolf",
    particle: "item bone",
    commands: [
      `execute as @e[tag=Done,tag=Wolf] at @s run summon wolf`,
      `execute as @e[tag=Done,tag=Wolf] at @s run summon snowball ~ ~2 ~`,
      `execute as @e[tag=Done,tag=Wolf] at @s as @p[distance=..10] run data modify entity @e[type=snowball,sort=nearest,limit=1] Owner set from entity @s UUID`,
    ]
  },
  {
    item: "rotten_flesh",
    tag: "Zombie",
    particle: "item rotten_flesh",
    commands: [
      `execute as @e[tag=Done,tag=Zombie] at @s run summon zombie`,
    ]
  },
  {
    item: "fermented_spider_eye",
    tag: "SpiderJockey",
    particle: "item fermented_spider_eye",
    commands: [
      `execute as @e[tag=Done,tag=SpiderJockey] at @s run summon spider ~ ~ ~ {Passengers:[{id:skeleton,HandItems:[{id:bow,Count:1}]}]}`,
    ]
  },
  {
    item: "soul_torch",
    tag: "Spectate",
    instant: true,
    commands: [
      `execute as @a[tag=Spectate] run playsound minecraft:block.gilded_blackstone.hit ambient @a ~ ~ ~`,
      `execute as @a[scores={SpectatorTime=1..},gamemode=spectator] run scoreboard players remove @s SpectatorTime 1`,
      `execute as @a[gamemode=spectator] unless entity @s[scores={SpectatorTime=0}] at @s run particle minecraft:soul_fire_flame ~ ~1 ~ .1 .1 .1 0.01 1 normal @a[tag=WIZARD]`,
      `execute as @a[tag=Spectate] run scoreboard players set @s SpectatorTime 120`,
      `execute as @a[tag=Spectate,gamemode=creative] run tag @s add Creative`,
      `execute as @a[tag=Spectate,gamemode=adventure] run tag @s add Adventure`,
      `execute as @a[tag=Spectate,gamemode=survival] run tag @s add Survival`,
      `execute as @a[tag=Spectate] run gamemode spectator`,
      `execute as @e[tag=Spectate] at @s run particle minecraft:smoke ~ ~1 ~ 0.5 1 0.5 0.1 256 normal`,
      `tag @a[tag=Spectate] remove Spectate`,
      `execute as @a[scores={SpectatorTime=1},gamemode=spectator] run tag @s add Despectate`,
      `execute as @a[tag=Despectate] run playsound minecraft:block.gilded_blackstone.hit ambient @a ~ ~ ~`,
      `execute as @a[tag=Despectate,tag=Survival] run gamemode survival @s`,
      `execute as @a[tag=Despectate,tag=Creative] run gamemode creative @s`,
      `execute as @a[tag=Despectate,tag=Adventure] run gamemode adventure @s`,
      `execute as @a[tag=Despectate] run tag @s remove Creative`,
      `execute as @a[tag=Despectate] run tag @s remove Survival`,
      `execute as @a[tag=Despectate] run tag @s remove Adventure`,
      `execute as @e[tag=Despectate] at @s run particle minecraft:smoke ~ ~1 ~ 0.5 1 0.5 0.1 256 normal`,
      `execute as @a[tag=Despectate] run tag @s remove Despectate`,
    ],
    detag: false,
  },
  {
    item: "vine",
    tag: "Vines",
    particle: "block vine",
    commands: [
      `execute as @e[tag=Done,tag=Vines] at @s run effect give @e[distance=..2] slowness 3 255 true`,
      `execute as @e[tag=Done,tag=Vines] at @s run effect give @e[distance=..2] jump_boost 3 200 true`,
      `execute as @e[tag=Done,tag=Vines] at @s run effect give @e[distance=..2] slow_falling 3 255 true`,
      `execute as @e[tag=Done,tag=Vines] at @s run tp @e[distance=..2] ~ ~ ~`,
      `execute as @e[tag=Done,tag=Vines] at @s run summon falling_block ~ ~ ~ {BlockState:{Name:vine,Properties:{north:"true",south:"true",west:"true",east:"true"}},NoGravity:1,Time:540,DropItem:false}`,
    ]
  },
  {
    item: "blackstone",
    tag: "Night",
    instant: true,
    commands: [
      `execute as @e[tag=Night] run time set midnight`,
    ]
  },
  {
    item: "potion",
    itemNbt: `CustomPotionColor:16776960,Lightning:1,display:{Name:'"Bottle of Lightning"'}`,
    tag: "WeatherThunder",
    instant: true,
    commands: [
      `execute as @e[tag=WeatherThunder,gamemode=!creative] run give @s glass_bottle`,
      `execute as @e[tag=WeatherThunder] run weather thunder`,
    ],
    additionalCondition: " unless entity @e[tag=RainCheck,tag=Raining]",
  },
  {
    item: "potion",
    itemNbt: `Potion:"minecraft:water"`,
    tag: "WeatherRain",
    instant: true,
    commands: [
      `execute as @e[tag=WeatherRain,gamemode=!creative] run give @s glass_bottle`,
      `execute as @e[tag=WeatherRain] run weather rain`,
    ],
    additionalCondition: " unless entity @e[tag=RainCheck,tag=Raining]",
  },
  {
    item: "glass_bottle",
    tag: "WeatherClear",
    instant: true,
    commands: [
      `execute as @e[tag=WeatherClear,gamemode=!creative] unless entity @e[tag=ThunderCheck,tag=Thunder] run give @s potion{Potion:"minecraft:water"}`,
      `execute as @e[tag=WeatherClear,gamemode=!creative] if entity @e[tag=ThunderCheck,tag=Thunder] run give @s potion{CustomPotionColor:16776960,Lightning:1,display:{Name:'"Bottle of Lightning"'}}`,
      `execute as @e[tag=WeatherClear] run weather clear`,
    ],
    additionalCondition: " unless entity @e[tag=RainCheck,tag=!Raining]",
  },
  {
    item: "glowstone",
    tag: "Day",
    instant: true,
    commands: [
      `execute as @e[tag=Day] run time set noon`,
    ]
  },
]

console.log(makeTower([
  `execute as @a if score @s Clicks > @e[type=armor_stand,sort=nearest,limit=1] Clicks run tag @s add Reset`,
  `scoreboard players set @e[tag=Reset] Clicks 0`,
  `execute as @e[tag=Reset,nbt=!{SelectedItem:{tag:{Magic:1}}}] run tag @s remove Reset`,
  ...spells.flatMap(spell => {
    const playerTag = spell.instant ? spell.tag : "Activated" + spell.tag;
    return [
      {
        command: (
          `\
 execute as @e[tag=Reset,nbt={Inventory:[{id:"minecraft:${spell.item}",Slot:-106b${spell.itemNbt ? `,tag:{${spell.itemNbt}}` : ""}}]}]\
 if entity @s[tag=WIZARD]${spell.additionalCondition ?? ""} at @s run tag @s add ${playerTag}\
`
        ),
        toggle: true,
        itemComment: spell.item,
        itemCommentNbt: spell.itemNbt,
      },
      ...(
        !spell.instant ?
          [
            `\
 execute as @a[tag=${playerTag}] at @s run\
 summon armor_stand ^ ^ ^1\
 {NoGravity:1b,Tags:[${spell.instant ? `"Done"` : `"Move","New"`},"${spell.tag}"],Invisible:1,${spell.customArmorStandTag ?? ""}}\
`
          ] :
          []
      ),
      `\
 execute as @a[tag=${playerTag},gamemode=!creative]\
 at @s run clear @s ${spell.item}${spell.itemNbt ? `{${spell.itemNbt}}` : ""} 1\
`,
      ...(spell.setupCommands ?? []),
    ]
  }),
  `tag @a[tag=Reset] remove Reset`,
  `execute as @e[tag=New] at @s facing entity @p feet facing ^ ^ ^-1 run tp @s ~ ~1.75 ~ ~ ~`,
  `execute as @e[tag=Move] at @s run tp ^ ^ ^1`,
  `execute as @e[tag=Move] at @s unless block ^ ^ ^1 air run tag @s add Done`,
  `execute as @e[tag=Move,tag=!New] at @s if entity @e[tag=!Move,distance=..1] run tag @s add Done`,
  `tag @e[tag=New] remove New`,
  ...spells.flatMap(spell => spell.commands),
  ...spells.filter(spell => spell.particle).map(spell =>
    `execute as @e[tag=${spell.tag}] at @s run particle ${spell.particle} ~ ~ ~ 0.1 0.1 0.1 0 2 force @a[tag=WIZARD]`,
  ),
  `kill @e[tag=Done]`,
  `execute as @e[tag=Move] at @s unless entity @a[distance=..64] run kill @s`,
  ...spells.filter(spell => spell.detag ?? true).map(spell => {
    const tag = spell.instant ? spell.tag : "Activated" + spell.tag;
    return `tag @a[tag=${tag}] remove ${tag}`
  }),
  `execute as @e[type=item,nbt={Item:{id:"minecraft:carrot_on_a_stick"}},nbt=!{Item:{Enchantments:[{id:"Wand"}]}}] at @s if block ~ ~ ~ minecraft:enchanting_table run data merge entity @s {Item:{tag:{Magic:1,Enchantments:[{}],display:{Name:'"Magic Wand"'}}}}`,
  `execute as @e[type=item,nbt={Item:{id:"minecraft:carrot_on_a_stick",tag:{Magic:1}}},nbt=!{Item:{tag:{Enchantments:[{}]}}}] run data merge entity @s {Item:{tag:{Enchantments:[{}]}}}`,
].map(x => typeof x === "string" ? x.trim() : { ...x, command: x.command.trim() }), [
  `summon armor_stand ~-3 ~ ~ {Invulnerable:1b,Tags:["Reset"]}`,
  `scoreboard objectives add SpectatorTime dummy`,
  `scoreboard objectives add Clicks minecraft.used:minecraft.carrot_on_a_stick`,
  `tellraw @a[tag=WIZARD] "Wizard powers activated"`,
], [
  `kill @e[type=armor_stand,sort=nearest,limit=1,distance=..6]`,
  `scoreboard objectives remove SpectatorTime`,
  `scoreboard objectives remove Clicks`,
  `tellraw @a[tag=WIZARD] "Wizard powers deactivated"`,
]));
