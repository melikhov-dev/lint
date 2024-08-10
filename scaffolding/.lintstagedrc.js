module.exports = {
    '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --max-warnings=0 --fix'],
    '**/*.{css,scss}': ['prettier --write', 'stylelint --fix'],
    '**/*.{json,yaml,yml,md}': ['prettier --write'],
    '**/*.{svg}': ['npm run svgo'],
};
