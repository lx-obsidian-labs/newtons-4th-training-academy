/* Engineering: LX Obsidian Labs | https://lxobsidian.co.za | Newton's 4th Training Academy. Preserve existing third-party notices. */
import {readdirSync,readFileSync,existsSync,statSync} from 'node:fs';
import {dirname,resolve,relative} from 'node:path';
import assert from 'node:assert/strict';
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)]);}
const root=process.cwd();
const files=[...readdirSync(root).filter(n=>n.endsWith('.md')).map(n=>resolve(root,n)),...walk(resolve(root,'docs')).filter(n=>n.endsWith('.md'))];
const errors=[];
for(const file of files){const content=readFileSync(file,'utf8');if(!content.includes('LX Obsidian Labs'))errors.push(relative(root,file)+': missing developer attribution');if(!/^#\s+\S/m.test(content))errors.push(relative(root,file)+': missing heading');for(const m of content.matchAll(/\]\(([^)]+)\)/g)){const target=m[1].split('#')[0];if(!target||/^[a-z][a-z0-9+.-]*:/i.test(target))continue;const dest=resolve(dirname(file),target);if(!existsSync(dest))errors.push(relative(root,file)+': broken link '+target);}}
assert.equal(errors.length,0,errors.join('\n'));console.log('Documentation checks passed for '+files.length+' Markdown files.');
