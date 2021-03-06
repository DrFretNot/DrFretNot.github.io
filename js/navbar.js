class NavbarComponent extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light navbar-bg-custom">
				<div class="container-fluid">
					<a class="navbar-brand" href="index.html">
						<img alt="Brand" src="../images/favicon-64.png" class="img-fluid">
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="index.html">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="resume.html">Resume</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="artportfolio.html">Art Portfolio</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="casestudies.html" >Design Case Studies</a>
							</li>
							
							<li class="nav-item">
								<a class="nav-link active" href="frontend/frontend.html">Front End</a></li>
							
						</ul>
						
					</div>
				</div>
			</nav>  
			
			`;
	}
	
}
customElements.define('navbar-component', NavbarComponent);
//<navbar-component></navbar-component>
