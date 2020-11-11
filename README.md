# Userful Local VNC Example

This app is intended to be a simple demonstration of the capabilities of Electron to launch a lightweight VNC server session (Windows only at this time) and send relevant credentials to display the primary screen of the host computer onto a display wall which is driven by a [Userful](https://www.userful.com/) server.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/hobo-derino/userful-vnc
# Go into the repository
cd userful-vnc
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Re-compile automatically

To recompile automatically and to allow using [electron-reload](https://github.com/yan-foto/electron-reload), run this in a separate terminal:

```bash
npm run watch
```

### Built with Electron + Typescript

*This is a [TypeScript](https://www.typescriptlang.org) port of the [Electron Quick Start repo](https://github.com/electron/electron-quick-start) -- a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.*

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
