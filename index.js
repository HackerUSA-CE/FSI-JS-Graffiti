
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

//footer.style.borderStyle = 'solid'
let footer = document.querySelector('.footer')
footer.style.color = 'purple'
footer.style.borderStyle = 'solid'
footer.style.backgroundColor = 'beige'

let doggoNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < doggoNames.length; i++){
	doggoNames[i].style.textAlign = 'left'
	doggoNames[i].style.color = 'navy'
	doggoNames[i].style.font = 'Arial'
}