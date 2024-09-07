import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const lightCustomTheme: CustomThemeConfig = {
	name: 'light-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '2px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #D8EBF2
		'--color-primary-50': '249 252 253', // #f9fcfd
		'--color-primary-100': '247 251 252', // #f7fbfc
		'--color-primary-200': '245 250 252', // #f5fafc
		'--color-primary-300': '239 247 250', // #eff7fa
		'--color-primary-400': '228 241 246', // #e4f1f6
		'--color-primary-500': '216 235 242', // #D8EBF2
		'--color-primary-600': '194 212 218', // #c2d4da
		'--color-primary-700': '162 176 182', // #a2b0b6
		'--color-primary-800': '130 141 145', // #828d91
		'--color-primary-900': '106 115 119', // #6a7377
		// secondary | #F2DEA2
		'--color-secondary-50': '253 250 241', // #fdfaf1
		'--color-secondary-100': '252 248 236', // #fcf8ec
		'--color-secondary-200': '252 247 232', // #fcf7e8
		'--color-secondary-300': '250 242 218', // #faf2da
		'--color-secondary-400': '246 232 190', // #f6e8be
		'--color-secondary-500': '242 222 162', // #F2DEA2
		'--color-secondary-600': '218 200 146', // #dac892
		'--color-secondary-700': '182 167 122', // #b6a77a
		'--color-secondary-800': '145 133 97', // #918561
		'--color-secondary-900': '119 109 79', // #776d4f
		// tertiary | #CCC2F2
		'--color-tertiary-50': '247 246 253', // #f7f6fd
		'--color-tertiary-100': '245 243 252', // #f5f3fc
		'--color-tertiary-200': '242 240 252', // #f2f0fc
		'--color-tertiary-300': '235 231 250', // #ebe7fa
		'--color-tertiary-400': '219 212 246', // #dbd4f6
		'--color-tertiary-500': '204 194 242', // #CCC2F2
		'--color-tertiary-600': '184 175 218', // #b8afda
		'--color-tertiary-700': '153 146 182', // #9992b6
		'--color-tertiary-800': '122 116 145', // #7a7491
		'--color-tertiary-900': '100 95 119', // #645f77
		// success | #7663F2
		'--color-success-50': '234 232 253', // #eae8fd
		'--color-success-100': '228 224 252', // #e4e0fc
		'--color-success-200': '221 216 252', // #ddd8fc
		'--color-success-300': '200 193 250', // #c8c1fa
		'--color-success-400': '159 146 246', // #9f92f6
		'--color-success-500': '118 99 242', // #7663F2
		'--color-success-600': '106 89 218', // #6a59da
		'--color-success-700': '89 74 182', // #594ab6
		'--color-success-800': '71 59 145', // #473b91
		'--color-success-900': '58 49 119', // #3a3177
		// warning | #F2B749
		'--color-warning-50': '253 244 228', // #fdf4e4
		'--color-warning-100': '252 241 219', // #fcf1db
		'--color-warning-200': '252 237 210', // #fcedd2
		'--color-warning-300': '250 226 182', // #fae2b6
		'--color-warning-400': '246 205 128', // #f6cd80
		'--color-warning-500': '242 183 73', // #F2B749
		'--color-warning-600': '218 165 66', // #daa542
		'--color-warning-700': '182 137 55', // #b68937
		'--color-warning-800': '145 110 44', // #916e2c
		'--color-warning-900': '119 90 36', // #775a24
		// error | #8C0F0F
		'--color-error-50': '238 219 219', // #eedbdb
		'--color-error-100': '232 207 207', // #e8cfcf
		'--color-error-200': '226 195 195', // #e2c3c3
		'--color-error-300': '209 159 159', // #d19f9f
		'--color-error-400': '175 87 87', // #af5757
		'--color-error-500': '140 15 15', // #8C0F0F
		'--color-error-600': '126 14 14', // #7e0e0e
		'--color-error-700': '105 11 11', // #690b0b
		'--color-error-800': '84 9 9', // #540909
		'--color-error-900': '69 7 7', // #450707
		// surface | #f8f7f7
		'--color-surface-50': '254 254 254', // #fefefe
		'--color-surface-100': '254 253 253', // #fefdfd
		'--color-surface-200': '253 253 253', // #fdfdfd
		'--color-surface-300': '252 252 252', // #fcfcfc
		'--color-surface-400': '250 249 249', // #faf9f9
		'--color-surface-500': '248 247 247', // #f8f7f7
		'--color-surface-600': '223 222 222', // #dfdede
		'--color-surface-700': '186 185 185', // #bab9b9
		'--color-surface-800': '149 148 148', // #959494
		'--color-surface-900': '122 121 121' // #7a7979
	}
};
