
import { escape } from "./escape";

export const makeMonocommand = (commands: string[], position = "~ ~ ~") => {
  console.log(commands)
  const initial = `execute if block ~ ~ ~ command_block run summon falling_block ${position} {Time:1,BlockState:{Name:redstone_block},Passengers:[{id:armor_stand,Health:0,Passengers:[{id:falling_block,Time:1,BlockState:{Name:activator_rail},Passengers:[{id:command_block_minecart,Command:'gamerule commandBlockOutput false'},`;
  const final = "{id:command_block_minecart,Command:'setblock ~ ~1 ~ command_block{auto:1,Command:" + '"fill ~ ~-2 ~ ~ ~ ~ air"' + "}'},{id:command_block_minecart,Command:'kill @e[type=command_block_minecart,distance=..1]'}]}]}]}";
  const middle = commands.map(cmd => {
    return (
      '{id:"command_block_minecart",Command:"' +
      escape(cmd) +
      '"},'
    )
  }).join("");
  return initial + middle + final;
}
