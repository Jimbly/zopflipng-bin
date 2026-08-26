const path = require('path');

module.exports = path.join(__dirname, 'vendor',
	process.platform === 'win32' ? 'win32' : process.platform === 'darwin' ? 'macos' : 'linux',
	process.platform === 'win32' ? 'zopflipng.exe' : 'zopflipng');
