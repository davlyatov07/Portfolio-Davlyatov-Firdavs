var typed = new Typed('.typewriter-text', {
	strings: [
		' ',
		'Front-End Developer',
		' Bodybuilder',
		'Freelancer',
		'Youtuber',
	],
	typeSpeed: 100,
	backSpeed: 70,
	loop: true,
})

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

let section = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('.header nav a')
window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY
		let offset = window.offsetTop - 150
		let height = window.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active')
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active')
			})
		}
	})
}

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x')
	navbar.classList.toggle('active')
}
function sendMail() {
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
	}

	const serviceID = 'service_p7k560x'
	const templateID = 'template_sz6wnvv'

	emailjs
		.send(serviceID, templateID, params)
		.then(res => {
			document.getElementById('name').value = ''
			document.getElementById('email').value = ''
			document.getElementById('message').value = ''
			console.log(res)
			alert('Your message sent successfully!!')
		})
		.catch(err => console.log(err))
}
