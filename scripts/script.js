

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i ++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log("EventListener", mode)
		setTheme(mode)
	})
} 

function setTheme(mode) {
	if(mode=='light'){
		console.log("light")
		document.getElementById('theme-style').href='css/default.css'
	}
	if(mode=='blue'){
		console.log("blue")
		document.getElementById('theme-style').href='css/blue.css'
	}
	if(mode=='green'){
		console.log("green")
		document.getElementById('theme-style').href='css/green.css'
	}
	if(mode=='purple'){
		console.log("purple")
		document.getElementById('theme-style').href='css/purple.css'
	}

	localStorage.setItem('theme', mode)
}

let theme = localStorage.getItem('theme')

if(theme == null){
	console.log("null")
	setTheme('light')
}else{
	console.log("theme")
	setTheme(theme)
}