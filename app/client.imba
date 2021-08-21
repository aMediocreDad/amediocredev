import "./styles/variables.css"
import colors from "./colors"

global css html
	ff: "Open Sans", sans
	bgc: var(--bg)
	c: var(--text)
	tween:all 1s ease

global css body
	m: 0
	pt: 10vh
	max-height:100vh
	ofy:hidden

css h1
	fs: 1.6rem

css code
	ff: "Fira Code", mono

css a
	td:none
	c: var(--acc1)

let root = document.documentElement
let interval = setInterval(&, 15000) do
	changeTheme(getRandomNum())

def changeTheme index=0
	for own key, value of colors[index]
		root.style.setProperty("--{key}", value)


def getRandomNum
	Math.floor(Math.random() * colors.length,0)
tag app
	<self>
		<section[d:flex fld:column j:center a:center ta:center]>
			<h1[us:none cursor:pointer c@hover:var(--acc1)] @click=changeTheme(getRandomNum())&&clearInterval(interval) title="Click me to change themes"> "👋🏼 {<br>} Hei, I am Filip!"
			<p[font-style:italic]> "Husband, father, gamer, software developer, economist, entrepreneur, and graduate student."
			<code> "git checkout my-work at {<a[c@hover:var(--text)] href="https://github.com/aMediocreDad" target="_blank" rel="noopener"> "Github"}"
			<p> <em> "or"
			<a[p:1rem border: 1px solid var(--acc1) bg@hover:var(--acc1) c@hover:var(--text)] href="mailto:hello@amediocre.dev"> "Say Hello!"
			<div[pos:absolute b:0 max-height:500px w:100%]><svg[c:var(--acc2)] src="./waves.svg">
imba.mount <app>
