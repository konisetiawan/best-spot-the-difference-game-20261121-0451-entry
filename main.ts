import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, parse, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
if (output === parse(output).root || output === root || root.startsWith(output + sep)) throw new Error('Output directory must be separate from the repository.');
mkdirSync(output, { recursive: true });
for (const name of ['game', 'screenshots']) rmSync(resolve(output, name), { recursive: true, force: true });
cpSync(resolve(root, 'game'), resolve(output, 'game'), { recursive: true });
cpSync(resolve(root, 'screenshots'), resolve(output, 'screenshots'), { recursive: true });
writeFileSync(
  resolve(output, 'dossier.json'),
  buildDossier(output, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
