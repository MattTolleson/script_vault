// update-changelog.js
// Purpose: Update CHANGELOG.md with file changes and increment version
// Author: Merlin
// Version: 0.1.0
// Usage: node .github/scripts/update-changelog.js <changed-file>

const fs = require('fs');
const path = require('path');

const changelogPath = path.resolve(__dirname, '../../CHANGELOG.md');
const fileChanged = process.argv[2];
const now = new Date().toISOString().split('T')[0];

// Read current changelog
let changelog = fs.readFileSync(changelogPath, 'utf8');

// Find current version
const versionRegex = /mvp-(\d+)\.(\d+)\.(\d+)/;
let match = changelog.match(/mvp-(\d+)\.(\d+)\.(\d+)/);
let [major, minor, patch] = match ? match.slice(1, 4).map(Number) : [0, 1, 0];

// Increment patch version for file save
patch += 1;
const newVersion = `mvp-${major}.${minor}.${patch}`;

// Prepend new entry after the first heading
const newEntry = `\n## [${newVersion}] - ${now}\n- Updated: ${fileChanged}\n`;
if (changelog.includes('## [')) {
  changelog = changelog.replace(/(## \[.*\] - .*)/, newEntry + '$1');
} else {
  changelog += newEntry;
}

// Write back
fs.writeFileSync(changelogPath, changelog, 'utf8');