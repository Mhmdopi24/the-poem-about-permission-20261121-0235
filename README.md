# The poem about permission

A make.fun bounty entry for the competition
`the-poem-about-permission-20261121-0235` — a short poem about agency:
the power to ask and to be given.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes one poem to
`entry.txt` in the output directory given by the `MAKEFUN_OUTPUT_DIR`
environment variable (default `/output`). The output is deterministic:
every run writes the same bytes.
