/*** Art Gallery ****/
//product_greatball.png , product_pokeball.png , product_ultraball.png
/*
abstract_brushstroke.png , 
abstract_professional_hats.png , 
abstract_professional_hats_bg.png , 
	comic_gamera.png , 
	creature_armorsnake.png , 
	creature_armorsnake_lineart.png , 
	creature_bee.png , 
	creature_elephant.png , 
	creature_lion.png , 
	creature_pepocari_bg_white.png , 
	creature_sabertoothmistbat_bg_white.png , 
	creature_shrythe.png , 
	creature_spinosaurus.png , 
	deco_pokeball.png ,  
	furniture.png , 
	game_scorchy.png , 
	heraldry_lozenge.png , 
	heraldry_shield.png , 
	product_greatball.png , 
	product_pokeball.png , 
	product_ultraball.png , 
	stained_glass_bat.png , 
	stained_glass_turtle.png

*/

var pictureDictionary = { 
	image00: { address: "product_pokeball.png", name: "Pokeball" },
	image01: { address: "product_greatball.png", name: "GreatBall" },
	image02: { address: "product_ultraball.png", name: "Ultraball" },
	
	image03: { address: "creature_elephant.png", name: "Elephant" },
	image04: { address: "creature_bee.png", name: "Bee" },
	image05: { address: "creature_lion.png", name: "Lion" },
	
	image06: {address: "creature_pepocari_bg_white.png", name: "Pepocari Invented Creature"},
	image07: {address: "creature_sabertoothmistbat_bg_white.png", name: "Sabertooth MistBat Invented Creature"},
	image08: {address: "creature_shrythe.png", name: "Shrythe Invented Creature"},
	image09: {address: "creature_armorsnake_lineart.png", name: "Armored Blade Snake Invented Creature Lineart"},
	image10: {address: "creature_armorsnake.png", name: "Armored Blade Snake Invented Creature"},
	image11: {address: "stained_glass_bat.png", name: "Stained Glass with Bat Symbol"},
	image12: {address: "stained_glass_turtle.png", name: "Stainted Glass with Turtle Shell Pattern"},
	image13: {address: "abstract_professional_hats_bg.png", name: "Abstract Professional Hats"},
	
	image14: { address: "deco_pokeball.png", name: "Doodle/Deco style Pokeball" },
	image15: { address: "comic_gamera.png", name: "Comic Style Gamera (Turtle Kaiju)" },
	image16: { address: "heraldry_lozenge.png", name: "Heraldry Lozenge" },
	image17: { address: "heraldry_shield.png", name: "Heraldry Shield" },
	image18: { address: "furniture.png", name: "Furniture" }

	
}

var codeBlock = "<div class='container'>" + "<div class = 'row '>";
var codePiece = "";
var i = 0;

//console.log(pictureDictionary['image00'].address);
//<a class="thumbnail" href="#thumb"><img src="media/ocean_thumb.jpg" width="100px" height="66px" border="0" /><span><img src="media/ocean.jpg" /><br />So real, it's unreal. Or is it?</span></a>


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


//console.log(codeBlock);
class ArtGalleryComponent extends HTMLElement {
	constructor(){
		super();
	}
	
	connectedCallback() {
		this.innerHTML = codeBlock;
		
		
	}
	
}
customElements.define('artgallery-component', ArtGalleryComponent);