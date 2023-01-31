/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class', // This can be 'media' if preferred.
	// Don't add a glob below `public` as Rollup doesn't
	// recognize them and will rebuild in an infinite loop.
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				svelte: '#ff3e00',
				darkBlue: '#22303E',
				darkDarkBlue: 'rgba(34, 48, 62, 0.9);',
				darkTextGrayish: '#90A4B6',
				medGrayish: '#E4E9ED',
				b9b9: '#B9B9B9',
				yellowz: '#F2D31B',
				lightBlue: '#ACD0FF',
				medBlue: '#406EAA',
				d9d9: '#D9D9D9',
				dfec: '#DFECFE',
				darkPink: '#FCB0EE',
				medPink: '#FFCFEF',
				lightPink: '#FFEEFB',
				backgroundz: '#F5F5F5'
			},
			fontFamily: {
				'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				...defaultTheme.screens,
				'mercado-max': '1160px'

			},
			maxWidth: {
				...defaultTheme.maxWidth,
				'mercado-max': '1160px'
			},
			dropShadow: {
				'mercado-white': '10px 10px 30px rgba(255, 255, 255, 0.37)',
			}
		},
		backgroundImage: {
			'extended-header': "url('https://s3-alpha-sig.figma.com/img/a1c5/d0b6/c551c0b7a3ebf13f45bd46af656166ee?Expires=1676246400&Signature=P0L-hXztPpqENQEC42fbOlE4sALfTeJA~LE9-SduDc7FdIvHbDQpr1Ec0iYzzslHaWv6zCd6EpUa1ODkyfPGG~qW4pmL7RRgltshGipOZEdbpo~yel3x5UqtV4DToQJZaYS0s~5nkHvHIawSmVTLluxX6D5UPzugotdSHktdEx24Fu1wISlw0GjyPRfuKySSsiThICnv~YemPF2XZ~7HGSEI1f-ElX0e1-~tIjBaL-OjQ-EzwKpO5ds4VSDLmwRh4OU3vQQPiKN2hYhdHGzkolH7j~qFXWFGGzvqiTXvMKP7jwfyhpJfoqA07OfJHBVkLG6eHJAdrXWzAWqv6VJX6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

