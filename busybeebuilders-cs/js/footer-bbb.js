class FooterComponentBBB extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<hr>
			
		<div class = "text-center">
		<h6> <a href="../casestudies.html">Back to Case Studies</a></h6>

		
		
		<code>  Copyright (c) 2021 Trent N. Ford </code>
			</div>
			
			`;
	}
	
}
customElements.define('footer-component-bbb', FooterComponentBBB);
//<footer-component-bbb></footer-component-bbb>