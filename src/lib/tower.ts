
import { makeMonocommand } from "./monocommand";
import { escape } from "./escape";

// const torchLookup = (h: number) =>
//   [
//     `setblock ~-2 ~${h} ~2 wall_torch[facing=south]`,
//     `setblock ~-3 ~${h} ~2 wall_torch[facing=south]`,
//     `setblock ~-4 ~${h} ~2 wall_torch[facing=south]`,
//     `setblock ~-5 ~${h} ~1 wall_torch[facing=west]`,
//     `setblock ~-5 ~${h} ~0 wall_torch[facing=west]`,
//     `setblock ~-5 ~${h} ~-1 wall_torch[facing=west]`,
//     `setblock ~-4 ~${h} ~-2 wall_torch[facing=north]`,
//     `setblock ~-3 ~${h} ~-2 wall_torch[facing=north]`,
//     `setblock ~-2 ~${h} ~-2 wall_torch[facing=north]`,
//     `setblock ~-1 ~${h} ~-1 wall_torch[facing=east]`,
//     `setblock ~-1 ~${h} ~0 wall_torch[facing=east]`,
//     `setblock ~-1 ~${h} ~1 wall_torch[facing=east]`,
//   ];

export interface TowerCommand {
  command: string,
  toggle?: boolean,
  default?: boolean,
  itemComment?: string,
  itemCommentNbt?: string,
}

export const makeTower = (_commands: (string | TowerCommand)[], setup: string[] = [], teardown: string[] = []) => {
  const commands = _commands.map(c => typeof c === "string" ? { command: c } : c).map((c, i) => ({ ...c, index: i }));
  const height = commands.length + 2 + 1;
  console.log(commands)
  return makeMonocommand([
    ...commands.map((cmd, i) =>
      `setblock ~-3 ~${i} ~ ${i === 0 ? "repeating_" : "chain_"}command_block[facing=up]{Command:"${escape(
        (cmd.toggle ? `execute if block ~ ~ ~2 lever[powered=true] run ` : "") + cmd.command
      )}",auto:1b}`
    ),
    `setblock ~-3 ~${height - 3} ~ command_block[facing=up]{Command:"${escape(
      makeMonocommand([
        `fill ~-5 ~${height - 1} ~-2 ~-1 ~ ~2 stone`,
        `fill ~-5 ~${height - 1} ~-2 ~-1 ~ ~2 air`,
        `fill ~-4 ~-1 ~-1 ~-2 ~-1 ~1 air replace obsidian`,
        `setblock ~-3 ~ ~ lever[face=floor,facing=north]`,
        ...commands.filter(cmd => cmd.itemComment).map(cmd =>
          `execute positioned ~-2 ~${cmd.index} ~2 run kill @e[type=item_frame,distance=..1,limit=1]`,
        ),
        ...teardown,
      ], `~3 ~${-height + 2} ~`)
    )}",auto:0b}`,
    `fill ~-4 ~-1 ~-1 ~-4 ~${height - 2} ~1 obsidian`,
    `fill ~-2 ~-1 ~-1 ~-2 ~${height - 2} ~1 obsidian`,
    `fill ~-4 ~-1 ~-1 ~-2 ~${height - 2} ~-1 obsidian`,
    `fill ~-4 ~-1 ~1 ~-2 ~${height - 2} ~1 obsidian`,
    `fill ~-4 ~ ~-1 ~-2 ~${height - 3} ~1 glass replace obsidian`,
    `setblock ~-3 ~${height - 2} ~ obsidian`,
    `setblock ~-3 ~${height - 1} ~ lever[face=floor,facing=south]`,
    // ...Array(height - 2).fill(undefined).flatMap((_, h) => [
    //   torchLookup(h)[h % 12],
    //   torchLookup(h)[(h + 6) % 12],
    // ]).filter(x => x),
    ...commands.filter(cmd => cmd.toggle).map(cmd =>
      `setblock ~-3 ~${cmd.index} ~2 lever[face=wall,facing=south,powered=${cmd.default ?? true}]`
    ),
    ...commands.filter(cmd => cmd.itemComment).map(cmd =>
      `summon item_frame ~-2 ~${cmd.index} ~2 {Facing:3,Item:{id:${cmd.itemComment},Count:1,tag:{${cmd.itemCommentNbt ?? ""}}},Invisible:1,Invulnerable:1}`,
    ),
    ...setup,
  ], "~3 ~ ~");
}
