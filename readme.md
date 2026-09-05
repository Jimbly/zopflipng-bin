# @jimbly/zopflipng-bin

This fork includes the binary dependencies without needing install scripts or run-time internet access.  This fork includes the latest Win32 version which fixes an inability to read some files output by `optipng`, however it seems to then throw errors on _other_ files the old version could read fine, so is only recommended for troubleshooting purposes.

Fork usage, in package.json:
```json
  "overrides": {
    "zopflipng-bin": "npm:@jimbly/zopflipng-bin@^1.0.0"
  }
```

# Original documentation below

> [zopfli](https://github.com/google/zopfli) Compression Algorithm is a new zlib (gzip, deflate) compatible compressor that takes more time (~100x slower), but compresses around 5% better than zlib and better than any other zlib-compatible compressor

You probably want [`imagemin-zopfli`](https://github.com/imagemin/imagemin-zopfli) instead.


## Install

```
$ npm install zopflipng-bin
```


## Usage

```js
import {execFile} from 'node:child_process';
import zopflipng from 'zopflipng-bin';

execFile(zopflipng, ['-m', '--lossy_8bit', 'input.png', 'outout.png'], () => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global zopflipng-bin
```

```
$ zopflipng --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
