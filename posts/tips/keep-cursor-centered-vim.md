---
date: 2019-01-05
draft: true
tags: ['tips', 'vim']
title: Centering Vim
path: /tips/centering-vim
description: >
              Keep your cursor centered no matter where you are in Vim.
---

## Why?
Mouse-wheel navigation is the norm for modern editors. When I started using Vim
I carried that bad habit for a long time before I was able to stick with
keyboard only navigation.

Navigating with the keyboard does have a steep learning curve and initial
issues.   It's difficult to see the context of the line that you're currently
on.  In order to center a line on screen you have to scroll ~20 lines lower
than the section you're interested in.

That's frequently 5 additional keystrokes. That may not seem like much at first
but try doing that hundreds of times during a days work.

### Default scroll behaviour
[![asciicast](https://asciinema.org/a/M1VD4tk77MWcADURoUDFhvkTI.svg)](https://asciinema.org/a/M1VD4tk77MWcADURoUDFhvkTI)

## The Final Snippet

This snippet is my solution to those concerns. It keeps the cursor vertically
centered at all times and horizontally centered when you approach the sides of the
window.

### New scroll behaviour
[![asciicast](https://asciinema.org/a/Ouqmlcyn8IeGe2VXT000zDkHF.svg)](https://asciinema.org/a/Ouqmlcyn8IeGe2VXT000zDkHF)


```vim
" Keep cursor centered at all times
set scrolloff=999    " Minimum number of lines to keep above and below cursor
set sidescroll=5     " Increment size for horizontal scrolling
set sidescrolloff=15 " Start scrolling horizontally this far from the edge
set winwidth=40      " Minimum width for focused window

" Center with zz after all search commands
nmap n nzz
nmap N Nzz
nmap * *zz
nmap # #zz
nmap g* g*zz
nmap g# g#zz
```
