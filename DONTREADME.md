## NOTES

### Lessons learned

Use for in loops for resolving a series of promises when you need to make sure they all work in
sequence and don't have race conditions. Not as performant as Promise.all(array) but cleaner

It's hard to polyfill worker logic and in-place static logic. There's a version of it in the BouncyBalls
demo for offscreen canvas rendering, but I'd love to clean up the core engine to make it easier. Maybe
I can do this in EGL to avoid problems.

AVOID RABBITHOLES. Keep hacking.


### FEATURES TO ADD

Make it so Entify doesn't require all entities be passed to all systems: let them have a subset
