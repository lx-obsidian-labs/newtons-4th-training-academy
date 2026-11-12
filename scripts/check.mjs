/* Engineering: LX Obsidian Labs | https://lxobsidian.co.za | Newton's 4th Training Academy. Preserve existing third-party notices. */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const main=readFileSync('src/main.tsx','utf8');
const visuals=readFileSync('src/courseVisuals.tsx','utf8');
const catalogue=main.slice(main.indexOf('const courses='),main.indexOf('const phone='));
const names=[...catalogue.matchAll(/\[\s*['"](?:Earthmoving|Mining|Lifting|Artisan trades|Safety|Business & ICT)['"]\s*,\s*['"]([^'"]+)['"]/g)].map(m=>m[1]);
assert.equal(names.length,42,'Expected 42 catalogue entries');
assert.equal(new Set(names).size,names.length,'Duplicate programme');
const visualData=JSON.parse(visuals.slice(visuals.indexOf('courseVisuals=')+14,visuals.indexOf(' as Record')));
const topics=JSON.parse(main.slice(main.indexOf('const programmeTopics:Record<string,string[]>={')+'const programmeTopics:Record<string,string[]>='.length,main.indexOf('};',main.indexOf('const programmeTopics:Record<string,string[]>='))+1));
for(const name of names){assert.ok(visualData[name]?.alt&&visualData[name]?.aliases&&visualData[name]?.shape,'Missing visual: '+name);assert.equal(topics[name]?.length,3,'Missing learning topics: '+name)}
for(const route of ['/programmes','/programme','/visual-programmes','/compare','/learning','/student-planner','/resources','/admissions','/contact'])assert.ok(main.includes("'"+route+"':"),'Missing route '+route);
console.log('Catalogue, visuals, learning topics and route integrity checks passed.');
