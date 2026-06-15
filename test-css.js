const fs = require('fs');
const css = fs.readFileSync('app/globals.css', 'utf8');
const lines = css.split('\n');
let layerBaseEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '} /* layer base end */' || lines[i] === '}' && lines[i-1] && lines[i-1].includes('text-transform: uppercase;')) {
    layerBaseEnd = i;
  }
}
console.log('Layer base ends at', layerBaseEnd);
