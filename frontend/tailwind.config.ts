import type { Config } from 'tailwindcss'

const config: Config = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			width: {
				'1p': '1%',
				'2p': '2%',
				'3p': '3%',
				'4p': '4%',
				'5p': '5%',
				'6p': '6%',
				'7p': '7%',
				'8p': '8%',
				'9p': '9%',
				'10p': '10%',
				'11p': '11%',
				'12p': '12%',
				'13p': '13%',
				'14p': '14%',
				'15p': '15%',
				'16p': '16%',
				'17p': '17%',
				'18p': '18%',
				'19p': '19%',
				'20p': '20%',
				'21p': '21%',
				'22p': '22%',
				'23p': '23%',
				'24p': '24%',
				'25p': '25%',
				'26p': '26%',
				'27p': '27%',
				'28p': '28%',
				'29p': '29%',
				'30p': '30%',
				'31p': '31%',
				'32p': '32%',
				'33p': '33%',
				'34p': '34%',
				'35p': '35%',
				'36p': '36%',
				'37p': '37%',
				'38p': '38%',
				'39p': '39%',
				'40p': '40%',
				'41p': '41%',
				'42p': '42%',
				'43p': '43%',
				'44p': '44%',
				'45p': '45%',
				'46p': '46%',
				'47p': '47%',
				'48p': '48%',
				'49p': '49%',
				'50p': '50%',
				'51p': '51%',
				'52p': '52%',
				'53p': '53%',
				'54p': '54%',
				'55p': '55%',
				'56p': '56%',
				'57p': '57%',
				'58p': '58%',
				'59p': '59%',
				'60p': '60%',
				'61p': '61%',
				'62p': '62%',
				'63p': '63%',
				'64p': '64%',
				'65p': '65%',
				'66p': '66%',
				'67p': '67%',
				'68p': '68%',
				'69p': '69%',
				'70p': '70%',
				'71p': '71%',
				'72p': '72%',
				'73p': '73%',
				'74p': '74%',
				'75p': '75%',
				'76p': '76%',
				'77p': '77%',
				'78p': '78%',
				'79p': '79%',
				'80p': '80%',
				'81p': '81%',
				'82p': '82%',
				'83p': '83%',
				'84p': '84%',
				'85p': '85%',
				'86p': '86%',
				'87p': '87%',
				'88p': '88%',
				'89p': '89%',
				'90p': '90%',
				'91p': '91%',
				'92p': '92%',
				'93p': '93%',
				'94p': '94%',
				'95p': '95%',
				'96p': '96%',
				'97p': '97%',
				'98p': '98%',
				'99p': '99%'
			},
			borderRadius: {
				4: '4px'
			},
			colors: {
				white: '#fff',
				black: '#000000',
				transparent: 'transparent',
				primary: '#001226',
				textColor: '#333333',
				success: '#51B579',
				gray: '#919191',
				gray50: '#A7A7A7',
				lightGray: '#E2E9F2',
				grayMedium: '#4D4D4D',
				grayAdmin: {
					50: '#F8F8F8'
				},
				yellow: {
					50: '#FFFAE6',
					100: '#FFF5CC',
					150: '#FFF0B3',
					200: '#FFEB99',
					250: '#FFE166',
					300: '#FFD733',
					350: '#FFD733',
					400: '#FFCD00',
					450: '#CCA400',
					500: '#997B00',
					550: '#665200',
					600: '#4D3E00',
					700: '#332900',
					800: '#1A1500'
				},
				blue: {
					50: '#E5F1FF',
					100: '#CEE2F8',
					150: '#B7D3F2',
					200: '#A0C4EB',
					250: '#89B5E4',
					300: '#5C97D7',
					350: '#2E79C9',
					400: '#005BBC',
					450: '#004996',
					500: '#003771',
					550: '#00244B',
					600: '#001B38',
					700: '#001226',
					800: '#000913'
				},
				red: {
					50: '#FFECED',
					100: '#FFD9DC',
					150: '#FFC6CA',
					200: '#FFB3B8',
					250: '#FF8E95',
					300: '#FF6871',
					350: '#FF424E',
					400: '#D1353F',
					450: '#A32830',
					500: '#751A20',
					550: '#5E1419',
					600: '#470D11',
					700: '#30070A',
					800: '#190002',
					900: '#f8fbff'
				},
				cyan: {
					50: '#CBFDFF',
					100: '#B7F3F6',
					150: '#A2EAEC',
					200: '#8EE0E3',
					250: '#7AD7DA',
					300: '#51C3C7',
					350: '#29B0B5',
					400: '#009DA2',
					450: '#007E82',
					500: '#005E61',
					550: '#003F41',
					600: '#002F31',
					700: '#001F20',
					800: '#001010'
				}
			}
		}
	},
	plugins: []
}
export default config
