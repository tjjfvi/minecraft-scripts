import { makeTower } from "./lib/tower";

console.log(makeTower([
  `execute as @e[type=!lightning_bolt] at @s if block ~ ~ ~ light_weighted_pressure_plate if block ~ ~-1 ~ gold_block run tag @s add LightningTrap`,
  `execute as @e[type=!lightning_bolt,tag=LightningTrap,tag=!OldLightningTrap] at @s run summon lightning_bolt`,
  `execute as @e[type=!lightning_bolt,tag=LightningTrap,tag=OldLightningTrap] at @s if block ~ ~-2 ~ diamond_block unless entity @e[type=lightning_bolt,distance=..1] run summon lightning_bolt`,
  // `execute as @e[type=!lightning_bolt,tag=LightningTrap,tag=!OldLightningTrap] run tellraw tjjfvi "Lightning Trap"`,
  `tag @e[tag=!LightningTrap,tag=OldLightningTrap] remove OldLightningTrap`,
  `tag @e[tag=LightningTrap] add OldLightningTrap`,
  `tag @e[tag=LightningTrap] remove LightningTrap`,
]))