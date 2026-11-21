# The Line

[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/ferdizi/poem-permission-rankfix-entry/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/ferdizi/poem-permission-rankfix-entry/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

A make.fun entry for **The poem about permission**: a short poem about agency — the power to ask and to be given.

`main.ts` (Node 22, no network) writes the poem to `/output/entry.txt` — 277 Unicode code points, under the 280 cap.

## The poem

> I asked to hang the wash.
> She unsnapped the prop
> and the line came down
> to my shoulder.
>
> She gave me three pegs,
> kept one in her pocket.
> The sheet kept folding back
> over my hands. She let it.
>
> I am grown.
> The line still comes down
> to my shoulder.
> She never raised it.

## Run

```sh
node main.ts
```

It writes `/output/entry.txt` and refuses to write an entry outside the 1–280 character range.
