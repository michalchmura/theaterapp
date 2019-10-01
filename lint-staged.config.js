module.exports = {
  '*.{ts, tsx}': [
    // Prettify files.
    'prettier --write',
    // Lint TypeScript and attempt to fix it.
    'yarn lint --fix',
    // Add fixed files to commit.
    'git add',
  ],
  '*.{js}': [
    // Prettify files.
    'prettier --write',
    // Lint Javascript and attempt to fix it.
    'eslint --fix',
    // Add fixed files to commit.
    'git add',
  ],
  '*.{md, graphql}': [
    // Prettify files.
    'prettier --write',
    // Add fixed files to commit.
    'git add',
  ],
};
