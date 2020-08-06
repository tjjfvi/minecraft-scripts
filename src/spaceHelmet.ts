import { makeTower } from "./lib/tower";
import { retag } from "./lib/retag";

console.log(makeTower([
  `execute as @e[type=endermite,name=SpaceHelmetStation] at @s run summon armor_stand ~ ~ ~ {Invisible:1b,Tags:["SpaceHelmetStation","HasHelmet"]}`,
  `kill @e[type=endermite,name=SpaceHelmetStation]`,

  `execute as @e[tag=SpaceHelmetStation,tag=!HasHelmet] at @s unless entity @p[distance=..1] run tag @s add HasHelmet`,
  `execute as @e[tag=SpaceHelmetStation,tag=HasHelmet] run data modify entity @s ArmorItems set value [{},{},{},{id:white_stained_glass,Count:1}]`,
  `execute as @e[tag=SpaceHelmetStation,tag=HasHelmet] at @s if entity @p[distance=..1] run tag @p add AddSpaceHelmet`,
  `execute as @e[tag=SpaceHelmetStation,tag=HasHelmet] at @s if entity @p[distance=..1] run tag @s remove HasHelmet`,
  `execute as @e[tag=SpaceHelmetStation,tag=!HasHelmet] run data modify entity @s ArmorItems set value [{},{},{},{}]`,

  `execute as @a[tag=AddSpaceHelmet] if data entity @s Inventory[{Slot:103b}] run tag @s remove AddSpaceHelmet`,
  `execute as @a[tag=AddSpaceHelmet] run replaceitem entity @s armor.head white_stained_glass{display:{Name:'"Space Helmet"'},SpaceHelmet:1b}`,
  `tag @a[tag=AddSpaceHelmet] add WearingSpaceHelmet`,
  `tag @a[tag=AddSpaceHelmet] remove AddSpaceHelmet`,
  `execute as @a[tag=WearingSpaceHelmet] unless data entity @s Inventory[{Slot:103b,tag:{SpaceHelmet:1b}}] run tag @s remove WearingSpaceHelmet`,
  `execute as @a if data entity @s Inventory[{tag:{SpaceHelmet:1b,TryRewear:1b}}] run tag @s add AddSpaceHelmet`,
  `execute as @a[tag=WearingSpaceHelmet,tag=AddSpaceHelmet] run clear @s white_stained_glass{SpaceHelmet:1b}`,
  `execute as @a[tag=!WearingSpaceHelmet] run clear @s white_stained_glass{SpaceHelmet:1b}`,
  `tag @e[type=item,nbt={Item:{tag:{SpaceHelmet:1b}}},tag=!SpaceHelmet,tag=!NotSpaceHelmet] add NewSpaceHelmet`,
  `execute as @e[tag=NewSpaceHelmet] run data merge entity @s {Item:{tag:{TryRewear:1b}}}`,
  ...retag("NewSpaceHelmet", "SpaceHelmet"),
  `tag @e[type=item,tag=!SpaceHelmet,tag=!NotSpaceHelmet] add NotSpaceHelmet`,
  `execute as @e[tag=SpaceHelmet] at @s unless entity @p[distance=..1,tag=!WearingSpaceHelmet] run data modify entity @s Owner set from entity @s UUID`,
  `execute as @e[tag=SpaceHelmet] at @s if entity @p[distance=..1,tag=!WearingSpaceHelmet] run data modify entity @s Owner set from entity @p[tag=!WearingSpaceHelmet] UUID`,

  `execute as @a[tag=WearingSpaceHelmet,tag=!GivenSpaceHelmetBreathTime,scores={AirLeft=299}] at @s run effect give @s water_breathing 5 0 true`,
  `tag @a[tag=WearingSpaceHelmet,tag=!GivenSpaceHelmetBreathTime,scores={AirLeft=299}] add GivenSpaceHelmetBreathTime`,
  `tag @a[tag=GivenSpaceHelmetBreathTime,scores={AirLeft=300}] remove GivenSpaceHelmetBreathTime`,
  // `execute as @a[tag=WearingSpaceHelmet] unless data entity @s Inventory[{Slot:103b,tag:{SpaceHelmet:1b}}] run tag @s add RemoveSpaceHelmet`,
  // `execute as @a[tag=RemoveSpaceHelmet] run clear @s white_stained_glass{SpaceHelmet:1b}`,
  // `tag @a[tag=RemoveSpaceHelmet] remove WearingSpaceHelmet`,
  // `tag @a[tag=RemoveSpaceHelmet] remove RemoveSpaceHelmet`,
], [
  `scoreboard objectives add AirLeft air`,
], [
  `scoreboard objectives remove AirLeft`
]));