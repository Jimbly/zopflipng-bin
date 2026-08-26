import path from 'node:path';

export default  path.join(import.meta.url, '../vendor',
	process.platform === 'win32' ? 'win32' : process.platform === 'darwin' ? 'macos' : 'linux',
	process.platform === 'win32' ? 'zopflipng.exe' : 'zopflipng');
