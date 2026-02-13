import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { randomUUID } from 'crypto';

const args = process.argv.slice(2);
const command = args[0];

console.log(`[mock] all ${args.join(' ')}`);

if (command === 'build') {
  mkdirSync('dist', { recursive: true });
  writeFileSync('dist/bundle.js', `// Build hash: ${randomUUID()}\n`);
  console.log('Generated dist/bundle.js');
} else if (command === 'clean') {
  rmSync('dist', { recursive: true, force: true });
  console.log('Cleaned dist/');
}
