# Reddit Oldify Extension

## Overview

**Reddit Oldify** is a browser extension that automatically redirects Reddit links to the old Reddit interface (old.reddit.com). This extension works on both Chrome and Firefox browsers.

## Features

- Automatically redirects all Reddit links to the old Reddit interface.
- Lightweight and efficient, ensuring minimal impact on browser performance.

## Installation

### Chrome

1. Download the latest release of the extension as a `.zip` file from the [Releases](https://github.com/annaelmoussa/reddit-oldify/releases) page.
2. Unzip the file to a directory on your computer.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top right corner.
5. Click on "Load unpacked" and select the directory where you unzipped the extension.

### Firefox

1. Download the latest release of the extension as a `.zip` or `.xpi` file from the [Releases](https://github.com/annaelmoussa/reddit-oldify/releases) page.
2. If you have a `.zip` file, rename it to `.xpi`.
3. Open Firefox and navigate to `about:addons`.
4. Click on the gear icon and select "Install Add-on From File...".
5. Select the `.xpi` file to install the extension.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/annaelmoussa/reddit-oldify.git
   cd reddit-oldify
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Build

To build the extension, run:

```sh
npm run build
```

This will generate the compiled files in the `dist` directory.

### Directory Structure

- `src/`: Contains the TypeScript source files.
  - `background.ts`: The main background script.
  - `utils.ts`: Utility functions for URL handling.
- `public/`: Contains static assets and the manifest file.
  - `manifest.json`: The extension manifest file.
  - `logo-48.png`: The extension icon (48x48).
  - `logo-96.png`: The extension icon (96x96).
- `dist/`: The output directory for the compiled extension.

### Running in Development Mode

1. Build the extension:

   ```sh
   npm run build
   ```

2. Load the extension in your browser as described in the Installation section, pointing to the `dist` directory.

### Testing

To test the extension, load it in your browser and navigate to any Reddit link. The link should automatically redirect to `old.reddit.com`.

## Manifest File

The `manifest.json` file contains the extension's metadata and configuration:

```json
{
  "manifest_version": 2,
  "name": "Reddit Oldify",
  "version": "1.0",
  "description": "Redirects Reddit links to old.reddit.com",
  "author": "HekimaLab",
  "icons": {
    "48": "logo-48.png",
    "96": "logo-96.png"
  },
  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "*://www.reddit.com/*",
    "*://reddit.com/*"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": true
  },
  "content_security_policy": "script-src 'self'; object-src 'self'"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [HekimaLab](mailto:annaelmoussa@gmail.com).