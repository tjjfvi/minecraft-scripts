import { makeTower } from "./lib/tower";
import { retag } from "./lib/retag";
import { detag } from "./lib/detag";

console.log(makeTower([
  `execute as @a[tag=Unicorn,tag=NoHelmet] if data entity @s Inventory[{Slot:103b}] run tag @s remove NoHelmet`,
  `execute as @a[tag=Unicorn,tag=!NoHelmet] unless data entity @s Inventory[{Slot:103b}] run tag @s add NoHelmet`,
  `execute as @a[tag=Unicorn,tag=!NoHelmet] run scoreboard players set @s HornlessTime 0`,
  `tag @a[tag=Unicorn,tag=NoHelmet,tag=WearingHorn] remove WearingHorn`,
  `execute as @a[tag=Unicorn,tag=NoHelmet] run scoreboard players add @s HornlessTime 1`,
  `execute as @a[tag=Unicorn,tag=!WearingHorn] run clear @s end_rod{UnicornHorn:1}`,
  `kill @e[type=item,tag=!NotUnicornHorn,nbt={Item:{tag:{UnicornHorn:1}}}]`,
  `tag @e[type=item] add NotUnicornHorn`,
  `execute as @a[tag=Unicorn,tag=NoHelmet,scores={HornlessTime=100..}] run replaceitem entity @s armor.head end_rod{UnicornHorn:1,display:{Name:'"Unicorn Horn"'}}`,
  `execute as @a[tag=Unicorn,tag=NoHelmet,scores={HornlessTime=100..}] run tag @s add WearingHorn`,

  `execute as @a[tag=Unicorn,tag=WearingHorn] at @s rotated ~ 0 positioned ^ ^ ^1 run tag @e[distance=...5] add Stab`,
  `execute as @a[tag=Unicorn,tag=WearingHorn] at @s rotated ~ 0 positioned ^ ^ ^1 if entity @e[distance=...5,tag=!Stabbed] run tag @s remove WearingHorn`,
  `effect give @e[tag=Stab,tag=!Stabbed] absorption 1 0 true`,
  `effect give @e[tag=Stab,tag=!Stabbed] instant_damage 1 0 true`,
  detag("Stabbed"),
  ...retag("Stab", "Stabbed"),
], [
  `scoreboard objectives add HornlessTime dummy`,
], [
  `scoreboard objectives remove HornlessTime`,
]))