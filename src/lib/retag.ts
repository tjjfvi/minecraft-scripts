import { detag } from "./detag";

export const retag = (fromTag: string, toTag: string) => [
  `tag @e[tag=${fromTag}] add ${toTag}`,
  detag(fromTag),
];