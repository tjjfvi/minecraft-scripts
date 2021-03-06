
import { makeTower } from "./lib/tower";

console.log(makeTower([
  `execute as @e[tag=Clock] store result score @s Clock run time query daytime`,
  `execute as @e[tag=ThunderCheck] run tag @s remove Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23074..23297}] if block ~ 254 ~ minecraft:daylight_detector[power=2] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23298..23532}] if block ~ 254 ~ minecraft:daylight_detector[power=2] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23298..23532}] if block ~ 254 ~ minecraft:daylight_detector[power=3] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23533..23768}] if block ~ 254 ~ minecraft:daylight_detector[power=3] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23533..23768}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23769..23963}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23964..23999}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=23964..23999}] if block ~ 254 ~ minecraft:daylight_detector[power=5] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=0..170}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=0..170}] if block ~ 254 ~ minecraft:daylight_detector[power=5] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=171..537}] if block ~ 254 ~ minecraft:daylight_detector[power=5] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=171..537}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=538..940}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=941..1375}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=941..1375}] if block ~ 254 ~ minecraft:daylight_detector[power=7] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=1376..1867}] if block ~ 254 ~ minecraft:daylight_detector[power=7] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=1376..1867}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=1868..2450}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=2451..3175}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=2451..3175}] if block ~ 254 ~ minecraft:daylight_detector[power=9] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=3176..4301}] if block ~ 254 ~ minecraft:daylight_detector[power=9] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=3176..4301}] if block ~ 254 ~ minecraft:daylight_detector[power=10] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=4302..7707}] if block ~ 254 ~ minecraft:daylight_detector[power=10] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=7708..8833}] if block ~ 254 ~ minecraft:daylight_detector[power=10] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=7708..8833}] if block ~ 254 ~ minecraft:daylight_detector[power=9] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=8834..9957}] if block ~ 254 ~ minecraft:daylight_detector[power=9] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=8834..9957}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=9958..10139}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=10140..10632}] if block ~ 254 ~ minecraft:daylight_detector[power=8] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=10140..10632}] if block ~ 254 ~ minecraft:daylight_detector[power=7] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=10633..11067}] if block ~ 254 ~ minecraft:daylight_detector[power=7] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=10633..11067}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=11068..11469}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=11470..11836}] if block ~ 254 ~ minecraft:daylight_detector[power=6] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=11470..11836}] if block ~ 254 ~ minecraft:daylight_detector[power=5] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=11837..12041}] if block ~ 254 ~ minecraft:daylight_detector[power=5] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=11837..12041}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12042..12238}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12239..12474}] if block ~ 254 ~ minecraft:daylight_detector[power=4] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12239..12474}] if block ~ 254 ~ minecraft:daylight_detector[power=3] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12475..12708}] if block ~ 254 ~ minecraft:daylight_detector[power=3] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12475..12708}] if block ~ 254 ~ minecraft:daylight_detector[power=2] run tag @s add Thunder`,
  `execute as @e[tag=ThunderCheck] if entity @s[scores={Clock=12709..12933}] if block ~ 254 ~ minecraft:daylight_detector[power=2] run tag @s add Thunder`,
], [
  `summon armor_stand ~-3 ~ ~ {Tags:["Clock","ThunderCheck"]}`,
  `scoreboard objectives add Clock dummy`,
  `setblock ~-3 254 ~ daylight_detector`,
], [
  `execute positioned ~-3 ~ ~ run kill @e[type=armor_stand,sort=nearest,limit=1]`,
  `scoreboard objectives remove Clock`,
  `setblock ~-3 254 ~ air replace daylight_detector`,
]))