class FooterComponentBBB extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<hr>
			
		<div class = "text-center">
		<p><a class="subtle-link" href="about.html" >About Us</a></p>
		
		
		<code>  Copyright (c) 2021 Busy Bee Builders </code>
			</div>
			
			`;
	}
	
}
customElements.define('footer-component-bbb', FooterComponentBBB);
//<footer-component-bbb></footer-component-bbb>