if("__TAURI__"in window){var __TAURI_PLUGIN_FS__=function(t){"use strict";function e(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}function n(t,e,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(t,n):o?o.value=n:e.set(t,n),n}var i,o,r,a;"function"==typeof SuppressedError&&SuppressedError;class s{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,i.set(this,(()=>{})),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((t=>{e(this,i,"f").call(this,t)}))}set onmessage(t){n(this,i,t,"f")}get onmessage(){return e(this,i,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function c(t,e={},n){return window.__TAURI_INTERNALS__.invoke(t,e,n)}i=new WeakMap;class f{get rid(){return e(this,o,"f")}constructor(t){o.set(this,void 0),n(this,o,t,"f")}async close(){return c("plugin:resources|close",{rid:this.rid})}}function l(t){return{isFile:t.isFile,isDirectory:t.isDirectory,isSymlink:t.isSymlink,size:t.size,mtime:null!=t.mtime?new Date(t.mtime):null,atime:null!=t.atime?new Date(t.atime):null,birthtime:null!=t.birthtime?new Date(t.birthtime):null,readonly:t.readonly,fileAttributes:t.fileAttributes,dev:t.dev,ino:t.ino,mode:t.mode,nlink:t.nlink,uid:t.uid,gid:t.gid,rdev:t.rdev,blksize:t.blksize,blocks:t.blocks}}o=new WeakMap,t.BaseDirectory=void 0,(r=t.BaseDirectory||(t.BaseDirectory={}))[r.Audio=1]="Audio",r[r.Cache=2]="Cache",r[r.Config=3]="Config",r[r.Data=4]="Data",r[r.LocalData=5]="LocalData",r[r.Document=6]="Document",r[r.Download=7]="Download",r[r.Picture=8]="Picture",r[r.Public=9]="Public",r[r.Video=10]="Video",r[r.Resource=11]="Resource",r[r.Temp=12]="Temp",r[r.AppConfig=13]="AppConfig",r[r.AppData=14]="AppData",r[r.AppLocalData=15]="AppLocalData",r[r.AppCache=16]="AppCache",r[r.AppLog=17]="AppLog",r[r.Desktop=18]="Desktop",r[r.Executable=19]="Executable",r[r.Font=20]="Font",r[r.Home=21]="Home",r[r.Runtime=22]="Runtime",r[r.Template=23]="Template",t.SeekMode=void 0,(a=t.SeekMode||(t.SeekMode={}))[a.Start=0]="Start",a[a.Current=1]="Current",a[a.End=2]="End";class u extends f{constructor(t){super(t)}async read(t){if(0===t.byteLength)return 0;const[e,n]=await c("plugin:fs|read",{rid:this.rid,len:t.byteLength});return t.set(e),0===n?null:n}async seek(t,e){return c("plugin:fs|seek",{rid:this.rid,offset:t,whence:e})}async stat(){return l(await c("plugin:fs|fstat",{rid:this.rid}))}async truncate(t){return c("plugin:fs|ftruncate",{rid:this.rid,len:t})}async write(t){return c("plugin:fs|write",{rid:this.rid,data:Array.from(t)})}}async function p(t){await c("plugin:fs|unwatch",{id:t})}return t.FileHandle=u,t.copyFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol||e instanceof URL&&"file:"!==e.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|copy_file",{fromPath:t instanceof URL?t.toString():t,toPath:e instanceof URL?e.toString():e,options:n})},t.create=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await c("plugin:fs|create",{path:t instanceof URL?t.toString():t,options:e});return new u(n)},t.exists=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|exists",{path:t instanceof URL?t.toString():t,options:e})},t.lstat=async function(t,e){return l(await c("plugin:fs|lstat",{path:t instanceof URL?t.toString():t,options:e}))},t.mkdir=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|mkdir",{path:t instanceof URL?t.toString():t,options:e})},t.open=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await c("plugin:fs|open",{path:t instanceof URL?t.toString():t,options:e});return new u(n)},t.readDir=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|read_dir",{path:t instanceof URL?t.toString():t,options:e})},t.readFile=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=await c("plugin:fs|read_file",{path:t instanceof URL?t.toString():t,options:e});return Uint8Array.from(n)},t.readTextFile=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|read_text_file",{path:t instanceof URL?t.toString():t,options:e})},t.readTextFileLines=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const n=t instanceof URL?t.toString():t;return Promise.resolve({path:n,rid:null,async next(){this.rid||(this.rid=await c("plugin:fs|read_text_file_lines",{path:n,options:e}));const[t,i]=await c("plugin:fs|read_text_file_lines_next",{rid:this.rid});return i&&(this.rid=null),{value:i?"":t,done:i}},[Symbol.asyncIterator](){return this}})},t.remove=async function(t,e){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|remove",{path:t instanceof URL?t.toString():t,options:e})},t.rename=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol||e instanceof URL&&"file:"!==e.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|rename",{oldPath:t instanceof URL?t.toString():t,newPath:e instanceof URL?e.toString():e,options:n})},t.stat=async function(t,e){return l(await c("plugin:fs|stat",{path:t instanceof URL?t.toString():t,options:e}))},t.truncate=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|truncate",{path:t instanceof URL?t.toString():t,len:e,options:n})},t.watch=async function(t,e,n){const i={recursive:!1,delayMs:2e3,...n},o=Array.isArray(t)?t:[t];for(const t of o)if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const r=new s;r.onmessage=e;const a=await c("plugin:fs|watch",{paths:o.map((t=>t instanceof URL?t.toString():t)),options:i,onEvent:r});return()=>{p(a)}},t.watchImmediate=async function(t,e,n){const i={recursive:!1,...n,delayMs:null},o=Array.isArray(t)?t:[t];for(const t of o)if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");const r=new s;r.onmessage=e;const a=await c("plugin:fs|watch",{paths:o.map((t=>t instanceof URL?t.toString():t)),options:i,onEvent:r});return()=>{p(a)}},t.writeFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|write_file",{path:t instanceof URL?t.toString():t,data:Array.from(e),options:n})},t.writeTextFile=async function(t,e,n){if(t instanceof URL&&"file:"!==t.protocol)throw new TypeError("Must be a file URL.");return c("plugin:fs|write_text_file",{path:t instanceof URL?t.toString():t,data:e,options:n})},t}({});Object.defineProperty(window.__TAURI__,"fs",{value:__TAURI_PLUGIN_FS__})}
