# Hide YouTube Shorts

An extension to remove YouTube Shorts from the homepage and sidebar.

## Table of Contents

- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Removes the Shorts button from the YouTube sidebar
- Removes Shorts feed from the home page
- Removes YouTube Playables from the home page
- Toggle settings via a popup interface
- Persistent settings using browser storage

## Architecture Overview

This extension is built as a Chrome/Edge extension using Manifest V3. It consists of:

- `content.js`: Content script that runs on YouTube pages to remove Shorts elements
- `background.js`: Background script that handles icon updates
- `popup.html` and `popup.js`: User interface for toggling settings
- `manifest.json`: Extension metadata and permissions

The extension uses MutationObserver to detect changes in the DOM and reapply removals when new Shorts elements are loaded.

## Prerequisites

- Google Chrome or Microsoft Edge browser
- Developer mode enabled in browser extensions settings

## Installation

1. Download or clone this repository to a local folder
2. Open your browser's extensions page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
3. Enable Developer mode
4. Click on "Load unpacked"
5. Select the folder containing the repository files

## Configuration

The extension provides a popup interface for configuration:

- Remove Shorts from sidebar
- Remove Shorts feed from home
- Remove YouTube Playables

Settings are saved automatically and persist between sessions.

## Usage Examples

After installation, the extension will automatically remove Shorts elements from YouTube pages. Use the extension icon to toggle settings:

1. Click the extension icon in the browser toolbar
2. Check/uncheck options to enable/disable removal of specific Shorts elements
3. Settings are applied immediately

## Project Structure

```
youtube-shorts-removal/
├── images
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-48.png
├── background.js
├── content.js
├── manifest.json
├── popup.html
├── popup.js
└── README.md
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss changes.

## Testing

To test the extension:

1. Load the extension in developer mode as described in Installation
2. Navigate to YouTube
3. Verify that Shorts elements are removed according to selected settings
4. Test toggling settings in the popup interface

## License

This project is licensed under the MIT License.

## Acknowledgements

This extension was created to help users avoid getting lost in YouTube Shorts while still being able to watch interesting videos through thumbnails.
