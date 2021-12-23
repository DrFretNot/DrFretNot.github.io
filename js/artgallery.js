/*** Art Gallery ****/

var pictureDictionary = { 
	
	image09: {address: "creature_armorsnake_lineart.png", name: "Armored Blade Snake Invented Creature Lineart"},
	image10: {address: "creature_armorsnake.png", name: "Armored Blade Snake Invented Creature"},
	
	image20: { address: "game_scorchy.png", name: "Early Stage Character Design: Scorchy (Reptilian)" },
	
	
	image00: { address: "product_pokeball.png", name: "Pokeball" },
	image01: { address: "product_greatball.png", name: "GreatBall" },
	image02: { address: "product_ultraball.png", name: "Ultraball" },
	image18: { address: "furniture.png", name: "Furniture" },
	
	image03: { address: "creature_elephant.png", name: "Elephant" },
	image04: { address: "creature_bee.png", name: "Bee on Flower" },
	image05: { address: "creature_lion.png", name: "Lion" },
	
	image06: {address: "creature_pepocari_bg_white.png", name: "Pepocari Invented Creature"},
	image07: {address: "creature_sabertoothmistbat_bg_white.png", name: "Sabertooth MistBat Invented Creature"},
	image08: {address: "creature_shrythe.png", name: "Shrythe Invented Creature"},
	
	image19: { address: "creature_spinosaurus.png", name: "Spinosaurus (Dinosaur)" },

	image15: { address: "comic_gamera.png", name: "Comic Style Gamera (Turtle Kaiju)" },
	image16: { address: "heraldry_lozenge.png", name: "Heraldry Lozenge" },
	image17: { address: "heraldry_shield.png", name: "Heraldry Shield" },
	
	image11: {address: "stained_glass_bat.png", name: "Stained Glass with Bat Symbol"},
	image12: {address: "stained_glass_turtle.png", name: "Stainted Glass with Turtle Shell Pattern"},
	image13: {address: "abstract_professional_hats_bg.png", name: "Abstract Professional Hats"},
	
	image14: { address: "deco_pokeball.png", name: "Doodle/Deco style Pokeball" }
		
}

var codeBlock = "<div class='container'>" + "<div class = 'row '>";
var codePiece = "";
var i = 0;

for (var m in pictureDictionary) {
	var codePiece =
		"<div class = ' col-4 col-sm-3 col-lg-2'>"+
		
		"<img class=' img-fluid ' src ='../images/" +
		pictureDictionary[m].address +
		"' alt='"+
		pictureDictionary[m].name +
		"' id = image-" +
		i +
		"'>"+
		
	"<div class= 'text-center'>"+
		pictureDictionary[m].name +
		"</div></div>" ;
	codeBlock += codePiece;
	i++;
}
codeBlock += "</div>" + "</div>";

class ArtGalleryComponent extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = codeBlock;
	}
	
}
customElements.define('artgallery-component', ArtGalleryComponent);