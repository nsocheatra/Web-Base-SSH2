# NeXTSSH: A Web-based SSH Client and Terminal Emulator

Connect to and command your remote servers effortlessly with **NeXTSSH**, a web-based SSH client and terminal emulator. Master your systems directly from your browser!

## Key Features

- **Seamless SSH Connections:** Establish secure connections to your remote servers with ease.
- **Responsive Terminal Experience:** Enjoy a fluid, full-featured terminal right in your web browser.
- **Organized Connection Management:** Conveniently manage multiple server connections.

## Technologies

- [NextJS](https://nextjs.org): Blazing-fast [React](https://reactjs.org)-based web framework.
- [NodeJS](https://nodejs.org): Robust JavaScript runtime environment.
- [Socket.io](https://socket.io): Real-time, bi-directional communication for seamless updates.
- [Xterm.js](https://xtermjs.org): Robust terminal emulation in the browser.
- [SSH2](https://npmjs.com/package/ssh2): Comprehensive SSH2 implementation for NodeJS.

## Local Development

1. Clone the Repository:
   ```bash
   git clone https://github.com/tapiwamla/NeXTSSH.git
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Add Environment Variables:
   Create a `.env` file with the following content:
   ```bash
   NEXT_PUBLIC_SOCKET_URL='your-production-url'
  
   ```
     - Fill in the Application Details:
     - Application Name: Enter a name for your app (e.g., "Next.js App").
     - Homepage URL: Enter your application's URL (e.g., http://localhost:3000 for local development).
    

4. Start the Development Server:
   ```bash
   npm run dev
   ```
   
   For production, first build the project:
   ```bash
   npm run build
   ```
   Then start the server:
   ```bash
   npm run start
   ```

## Testing

- The project includes [Jest](https://jestjs.io/) for unit testing.
- Run unit tests:
   ```bash
   npm test
   ```