/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        mono: ['Inconsolata']
      },
      fontSize: {
				'10xl': '10rem',
				'11xl': '11rem',
				'12xl': '12rem',
				'13xl': '13rem',
				'14xl': '14rem'
			},
			screens: {
				'3xl': '1792px',
				'4xl': '2048px',
				'5xl': '2304px',
				'6xl': '2560px',
				'7xl': '2816px',
				'8xl': '3072px',
				'9xl': '3328px',
				'10xl': '3584px',
			},
			spacing: {
				'84': '21rem',
				'104': '26rem',
				'112': '28rem',
				'120': '30rem',
				'128': '32rem',
				'144': '36rem',
				'160': '40rem',
				'176': '44rem',
				'192': '48rem',
				'208': '52rem',
				'224': '56rem',
				'240': '60rem',
				'256': '64rem',
				'288': '72rem',
				'304': '76rem',
				'320': '80rem',
				'336': '84rem',
				'352': '88rem',
				'368': '92rem',
				'384': '96rem',
				'448': '112rem',
				'512': '128rem',
			}
    },
  },
	plugins: [],
}
