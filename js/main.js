const about = document.querySelector('#abt')
const contact = document.querySelector('#cont')
const aboutContent = document.querySelector('#about')
const contactContent = document.querySelector('#contact')

about.addEventListener('click', () => {
	const aboutbox = new WinBox({
		title: 'About Me',
		background: '#00aa00',
		width: '400px',
		height: '400px',
		top: 50,
		right: 50,
		bottom: 50,
		left: 50,
		mount: aboutContent,

		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function () {
			this.setBackground('#777')
		},
	})
})

contact.addEventListener('click', () => {
	const contactbox = new WinBox({
		title: 'Contact Me',
		background: '#00aa00',
		width: '400px',
		height: '400px',
		top: 100,
		right: 50,
		bottom: 50,
		left: 100,
		mount: contactContent,

		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function () {
			this.setBackground('#777')
		},
	})
})
