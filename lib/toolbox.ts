export function transform(tool:string,input:string,action:string){
 if(tool==='json')return JSON.stringify(JSON.parse(input),null,action==='minify'?0:2);
 if(tool==='base64'){if(action==='decode'){const bytes=Uint8Array.from(atob(input.trim()),c=>c.charCodeAt(0));return new TextDecoder('utf-8',{fatal:true}).decode(bytes)}return btoa(Array.from(new TextEncoder().encode(input),b=>String.fromCharCode(b)).join(''))}
 if(tool==='url')return action==='decode'?decodeURIComponent(input):encodeURIComponent(input);
 return input;
}
