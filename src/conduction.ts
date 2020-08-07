import { makeTower } from "./lib/tower";
import { retag } from "./lib/retag";

console.log(makeTower([
  `execute as @e[type=lightning_bolt,tag=!Conducted] at @s if block ~ ~-1 ~ gold_block run summon armor_stand ~ ~-1 ~ {NoGravity:1,Invisible:1,Invulnerable:1,Tags:["ActiveConduction","Conduction"]}`,
  `tag @e[type=lightning_bolt,tag=!Conducted] add Conducted`,
  ..."~1 ~ ~, ~-1 ~ ~, ~ ~1 ~, ~ ~-1 ~, ~ ~ ~1, ~ ~ ~-1".split(", ").map(pos =>
    `execute as @e[tag=ActiveConduction] at @s run summon armor_stand ${pos} {NoGravity:1,Invisible:1,Invulnerable:1,Tags:["NewConduction","Conduction"]}`
  ),
  `execute as @e[tag=NewConduction] at @s if entity @e[tag=Conduction,tag=!NewConduction,distance=...5] run kill @s`,
  `execute as @e[tag=NewConduction] at @s unless block ~ ~ ~ gold_block run kill @s`,
  `execute as @e[tag=NewConduction] at @s unless block ~ ~1 ~ gold_block run summon lightning_bolt ~ ~1 ~ {Tags:["Conducted"]}`,
  `kill @e[tag=OldConduction]`,
  ...retag("ActiveConduction", "OldConduction"),
  ...retag("NewConduction", "ActiveConduction"),
]))