/**
 No rating - just a question, comment, or feature request
 Bad - script does not work
 OK - script works, but has bugs
 Good - script works
 */

export enum ERating {
  NoRating = 1,
  Bad,
  Ok,
  Good,
}

export type ERatingKey = keyof typeof ERating

export const ERatingKeys = Object.keys(ERating).filter((x) => !/^\d+$/.test(x)) as ERatingKey[]
