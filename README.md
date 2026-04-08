# Desktop Music App

This is a pixel-style desktop music player that I designed and built from scratch. The goal of this project was to create something that feels like a comfy, interactive widget sitting on your desktop instead of just another basic music player.

## Design

I created the full UI layout in Figma first and then brought it to life with HTML, CSS, JavaScript, and Electron.

Figma Mockup: https://www.figma.com/design/1sOFdwg83QU27MFeKnmc1u/Music-App?node-id=0-1&p=f&t=1dlbxBzj4hsqgF29-0 

All visual assets in this project were drawn by me using Piskel, including:

* background and window scene
* UI panels
* buttons (play, skip, close, minimize)
* animated elements (plant + steam)

## Features

* Custom pixel UI and layout
* Animated elements (frame-by-frame plant + steam)
* Music playback with play, pause, skip, and back
* Clickable progress bar (seek through songs)
* Dynamic song title + artist display
* Frameless desktop app using Electron
* Custom close and minimize buttons
* Draggable window

## Tech Used

* HTML
* CSS
* JavaScript
* Electron

## How to Run

```bash
npm install
npm start
```

## Notes

This project focuses heavily on UI/UX and interaction. Instead of using pre-made assets or libraries, I wanted everything to feel personal and cohesive, so I designed and illustrated every element myself.

It also helped me understand how to:

* structure layered UI layouts
* animate using frame switching
* build a custom media player
* convert a web app into a desktop app

## Future Improvements

* Spotify/Apple Music integration
* volume control
* playlist UI
* mac-style window snapping / positioning
