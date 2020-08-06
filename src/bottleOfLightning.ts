import { makeTower } from "./lib/tower";

console.log(makeTower([
  `tag @a[nbt={SelectedItem:{id:"minecraft:potion",tag:{Lightning:1}}}] add HadLightningPotion`,
  `tag @a[tag=HadLightningPotion,scores={DrinkPotion=1..}] add DrunkPotion`,
  `execute as @a[tag=HadLightningPotion,tag=DrunkPotion] at @s run summon lightning_bolt`,
  `tag @a[nbt=!{SelectedItem:{id:"minecraft:potion",tag:{Lightning:1}}}] remove HadLightningPotion`,
  `scoreboard players reset * DrinkPotion`,
  `tag @a[tag=DrunkPotion] remove DrunkPotion`
], [
  `scoreboard objectives add DrinkPotion minecraft.used:minecraft.potion`,
], [
  `scoreboard objectives remove DrinkPotion`,
]))