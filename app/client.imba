import "./styles/app.css" # Imba doesn't support advanced media queries or multiple declarations
import "./styles/variables.css"
import colors from "./colors"

# Simple CSS definitions
global css html
	ff: "Open Sans", sans
	bgc: var(--bg)
	c: var(--text)
	tween:all 1s ease

css h1
	fs: 1.6rem

css code
	ff: "Fira Code", mono

css a
	td:none
	c: var(--acc1)

# Theme logic
let root = document.documentElement
let interval = setInterval(&, 15000) do
	changeTheme(getRandomNum())

def changeTheme index=0
	for own key, value of colors[index]
		root.style.setProperty("--{key}", value)

def getRandomNum
	Math.floor(Math.random() * colors.length,0)

# Component tag
tag app
	<self.app>
		<section[]>
			<h1[us:none cursor:pointer c@hover:var(--acc1)] @click=changeTheme(getRandomNum())&&clearInterval(interval) title="Click me to change themes"> "👋🏼 {<br>} Hei, I am Filip!"
			<p[font-style:italic]> "Husband, father, gamer, software developer, economist, entrepreneur, and graduate student."
			<code> "git checkout my-work at {<a[c@hover:var(--text)] href="https://github.com/aMediocreDad" target="_blank" rel="noopener"> "Github"}"
			<p> <em> "or"
			<a[p:1rem border: 1px solid var(--acc1) bg@hover:var(--acc1) c@hover:var(--text)] href="mailto:hello@amediocre.dev"> "Say Hello!"
		<svg.waves src="./waves.svg" aria-hidden="true">
imba.mount <app>
