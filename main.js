import './style.css'

const menuBtn = document.getElementById('menu-btn')
const mobileMenuOverlay = document.getElementById('overlay')


const closeMenu = () => {
	mobileMenuOverlay.classList.remove('block')
	mobileMenuOverlay.classList.add('hidden')
}


menuBtn.addEventListener('click', event => {
	let active = mobileMenuOverlay.classList.contains('block')
	if (active) closeMenu()
	else {
		mobileMenuOverlay.classList.remove('hidden')
		mobileMenuOverlay.classList.add('block')
	}
})


mobileMenuOverlay.addEventListener('click', event => {
	event.stopPropagation()
	closeMenu()
})