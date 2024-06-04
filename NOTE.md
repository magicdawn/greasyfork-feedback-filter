# Note

## release 过程

```sh
pnpm changelogen --release --github false --major
pnpm changelogen --release --github false --minor
pnpm changelogen --release --github false --patch
```

https://github.com/unjs/changelogen/blob/v0.5.5/src/commands/default.ts#L141
--github false 是不要自动 sync, 否则待会 `push tag` 时会发生 tag 已存在. (release 会自动创建 tag)