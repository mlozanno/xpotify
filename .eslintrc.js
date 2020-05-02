module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'jest'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
		'import/prefer-default-export': 'off',
		'jsx-a11y/anchor-is-valid': 0,
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-props-no-spreading': 'off',
		'arrow-parens': [2, 'as-needed'],
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathSuffix: 'src',
			},
		},
	},
};
