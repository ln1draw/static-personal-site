window.onload = function () {
	var header = document.getElementsByTagName("header")[0]
	var body = document.getElementsByClassName("body")[0]
	console.log(body)

	if (window.scrollY >= 256) {
		header.classList.add("fixed")
	}

	window.onscroll = function () {
		if (window.scrollY > 256) {
			header.classList.add("fixed")
			body.classList.add("fixed")
		} else {
			header.classList.remove("fixed")
			body.classList.remove("fixed")
		}
	}
}