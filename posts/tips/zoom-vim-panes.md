---
draft: true
date: 2019-01-03
tags: ['tips', 'vim']
title: Tmux-like Zoom for Vim Panes
path: /tips/tmux-like-zoom-for-vim-panes
description: >
              Zoom Vim panes/windows like Tmux's native pane zoom. Use a
              simple VimL snippet with no plugins required.
---

## Why?

Maximizing productivity with Vim and Tmux for development requires maintaining
a consistent set of bindings between the two platforms.  When the only
difference between similar commands is the `vim>><Prefix>`, keeping a tidy
workspace is substantially easier.

For example, binding `vim>><C-w>z` in Vim and `vim>><C-a>z` in Tmux to
maximizing the selected pane lets you dig into tiny panes in busy workspaces.

Unfortunately though, Vim doesn't ship with any notion of a _zoomed window_.
Finding a plugin or guide is hopeless with the only result I could dig up being
[5 years out of date and super buggy.](https://github.com/vim-scripts/ZoomWin)

## The Snippet

The following snippet is my quick fix solution.

`vim>>wincmd` is used in place of `vim>><C-w>` due to it not requiring access
to normal mode making it usable in functions due to the lack of a `CursorHold`
autocommand event.

We store whether the window is currently zoomed by checking the window-local
variable `vim>>w:zoomed`. If we leave a window we execute an autocommand to
unzoom the window by equally resizing all windows in the current tab with
`vim>>wincmd =`

Now running `<C-w>z` will give you an approximation of the existing Tmux
functionality.

```vim
function! UnzoomWindow()
  if !exists('w:zoomed')
    echo 'Could not unzoom'
  else
    unlet w:zoomed
    wincmd =
  endif
endfunction

" A toggleable zooming function that stores whether the current window has been
" zoomed by storing a window local variable `zoomed`
function! ZoomWindow()
  if exists('w:zoomed')
    call UnzoomWindow()
  else
    let w:zoomed = 'TRUE'
    wincmd |
    wincmd _
  endif
endfunction

" If the current window is zoomed, run the UnzoomWindow function
autocmd  WinLeave,TabLeave * if exists('w:zoomed') | silent! call UnzoomWindow() | endif

nnoremap <silent> <C-w>z :call ZoomWindow()<CR>
```

You can find my entire `.vimrc` [on Github](https://github.com/JamesApple/.configurator/tree/master/input/.vimrc).
