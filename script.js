const button = document.getElementById("generateButton");


// ==========================================
// HATS
// ==========================================

const hats = {
    "Bohemian": [
        "Wide-brim floppy hat",
        "Decorated headscarf",
        "Embroidered hat",
        "Wide-brim felt hat"
    ],

    "Streetwear": [
        "Bucket hat",
        "Baseball cap",
        "Snapback",
        "Beanie",
        "Trucker cap"
    ],

    "Gothic": [
        "Wide-brim black hat",
        "Mini top hat",
        "Black beret",
        "Veiled hat"
    ],

    "Y2K": [
        "Trucker hat",
        "Fuzzy bucket hat",
        "Rhinestone cap",
        "Visor"
    ],

    "Western": [
        "Cowboy hat",
        "Western felt hat",
        "Rodeo hat"
    ],

    "Vintage": [
        "Cloche hat",
        "Fedora",
        "Beret",
        "Newsboy cap"
    ],

    "Japanese Streetwear": [
        "Fisherman cap",
        "Bucket hat",
        "Wide-brim hat",
        "Beanie"
    ],

    "Punk": [
        "Studded cap",
        "Patched beanie",
        "Bandana",
        "Distressed cap"
    ],

    "Cyberpunk": [
        "Futuristic visor",
        "Techwear hood",
        "Cyber goggles",
        "Utility cap"
    ],

    "Dark Academia": [
        "Newsboy cap",
        "Flat cap",
        "Beret",
        "Wool fedora"
    ],

    "Fairycore": [
        "Flower crown",
        "Floral headband",
        "Butterfly clips",
        "Decorated bonnet"
    ],

    "Preppy": [
        "Classic baseball cap",
        "Beret",
        "Flat cap",
        "Knit beanie"
    ],

    "Cowboy": [
        "Classic cowboy hat",
        "Western hat",
        "Rodeo hat"
    ],

    "Goth Lolita": [
        "Decorated bonnet",
        "Mini top hat",
        "Lace headpiece",
        "Veiled headpiece"
    ]
};


// ==========================================
// TOPS
// ==========================================

const tops = {
    "Japanese Streetwear": [
        "Oversized graphic tee",
        "Layered long-sleeve shirt",
        "Oversized hoodie",
        "Boxy jacket",
        "Graphic sweatshirt"
    ],

    "Bohemian": [
        "Flowy blouse",
        "Embroidered shirt",
        "Loose tunic",
        "Crochet top",
        "Peasant blouse"
    ],

    "Gothic": [
        "Black mesh top",
        "Ruffled blouse",
        "Black button-up",
        "Dark oversized shirt",
        "Corset-style top"
    ],

    "Y2K": [
        "Baby tee",
        "Cropped hoodie",
        "Graphic tank top",
        "Cropped jacket",
        "Fitted graphic tee"
    ],

    "Grunge": [
        "Oversized flannel",
        "Distressed band tee",
        "Layered long-sleeve",
        "Oversized sweater"
    ],

    "Techwear": [
        "Technical jacket",
        "Utility vest",
        "High-collar jacket",
        "Modular vest",
        "Technical hoodie"
    ],

    "Victorian": [
        "High-collar blouse",
        "Ruffled shirt",
        "Fitted waistcoat",
        "Lace blouse"
    ],

    "Hip-Hop": [
        "Oversized graphic tee",
        "Baggy hoodie",
        "Basketball jersey",
        "Oversized sweatshirt",
        "Varsity jacket"
    ],

    "90s Fashion": [
        "Oversized tee",
        "Denim jacket",
        "Cropped sweater",
        "Flannel shirt",
        "Track jacket"
    ],

    "Avant-Garde": [
        "Asymmetrical top",
        "Deconstructed shirt",
        "Sculptural jacket",
        "Experimental layered top"
    ],

    "Dark Academia": [
        "Turtleneck",
        "Button-up shirt",
        "Knit sweater",
        "Cable-knit vest",
        "Oxford shirt"
    ],

    "Fairycore": [
        "Flowy blouse",
        "Sheer floral top",
        "Ribbon-trimmed top",
        "Floral cardigan"
    ],

    "Punk": [
        "Band tee",
        "Studded jacket",
        "Distressed shirt",
        "Patch-covered jacket"
    ],

    "Cyberpunk": [
        "Futuristic jacket",
        "Utility vest",
        "Techwear hoodie",
        "Asymmetrical cyber jacket"
    ],

    "Preppy": [
        "Oxford shirt",
        "Varsity sweater",
        "Polo shirt",
        "Cardigan",
        "Knit vest"
    ],

    "Vintage": [
        "Retro button-up",
        "Knit sweater",
        "Denim jacket",
        "Vintage blouse"
    ]
};


// ==========================================
// BOTTOMS
// ==========================================

const bottoms = {
    "Archive Fashion": [
        "Wide-leg trousers",
        "Deconstructed jeans",
        "Oversized cargo pants",
        "Asymmetrical trousers",
        "Baggy denim"
    ],

    "90s Fashion": [
        "Baggy jeans",
        "Cargo pants",
        "Wide-leg jeans",
        "Track pants",
        "Denim shorts"
    ],

    "Gothic": [
        "Black wide-leg trousers",
        "Long black skirt",
        "Distressed black jeans",
        "Pleated black trousers"
    ],

    "Streetwear": [
        "Baggy jeans",
        "Cargo pants",
        "Parachute pants",
        "Basketball shorts",
        "Wide-leg trousers"
    ],

    "Grunge": [
        "Distressed jeans",
        "Baggy cargo pants",
        "Plaid trousers",
        "Ripped jeans"
    ],

    "Y2K": [
        "Low-rise jeans",
        "Cargo pants",
        "Mini skirt",
        "Baggy denim",
        "Track pants"
    ],

    "Preppy": [
        "Pleated trousers",
        "Chino pants",
        "Pleated skirt",
        "Tailored shorts"
    ],

    "Bohemian": [
        "Flowy maxi skirt",
        "Wide-leg pants",
        "Patchwork trousers",
        "Flared pants"
    ],

    "Techwear": [
        "Technical cargo pants",
        "Utility trousers",
        "Modular cargo pants",
        "Technical joggers"
    ],

    "Vintage": [
        "High-waisted trousers",
        "Pleated pants",
        "Wide-leg jeans",
        "A-line skirt"
    ],

    "Western": [
        "Bootcut jeans",
        "Cowboy-cut jeans",
        "Denim shorts",
        "Western trousers"
    ],

    "Fairycore": [
        "Flowy skirt",
        "Layered skirt",
        "Floral maxi skirt",
        "Ruffled skirt"
    ],

    "Punk": [
        "Plaid trousers",
        "Distressed jeans",
        "Leather-look pants",
        "Patchwork trousers"
    ],

    "Avant-Garde": [
        "Asymmetrical trousers",
        "Deconstructed pants",
        "Extra-wide trousers",
        "Layered skirt"
    ]
};


// ==========================================
// SHOES
// ==========================================

const shoes = {
    "90s Fashion": [
        "Chunky sneakers",
        "High-top sneakers",
        "Platform sneakers",
        "Classic running shoes"
    ],

    "Streetwear": [
        "High-top sneakers",
        "Chunky sneakers",
        "Skate shoes",
        "Basketball sneakers"
    ],

    "Gothic": [
        "Platform boots",
        "Combat boots",
        "Platform shoes",
        "Pointed boots"
    ],

    "Y2K": [
        "Platform sneakers",
        "Chunky sneakers",
        "Platform boots",
        "Retro trainers"
    ],

    "Western": [
        "Cowboy boots",
        "Western ankle boots",
        "Rodeo boots"
    ],

    "Japanese Streetwear": [
        "Chunky sneakers",
        "Platform sneakers",
        "High-top sneakers",
        "Loafers"
    ],

    "Punk": [
        "Combat boots",
        "Platform boots",
        "Skate shoes",
        "Studded boots"
    ],

    "Preppy": [
        "Loafers",
        "Boat shoes",
        "Classic sneakers",
        "Brogues"
    ],

    "Vintage": [
        "Retro sneakers",
        "Loafers",
        "Oxford shoes",
        "Classic boots"
    ],

    "Techwear": [
        "Technical sneakers",
        "Utility boots",
        "Combat-style boots",
        "Minimal black sneakers"
    ],

    "Fairycore": [
        "Mary Janes",
        "Ballet flats",
        "Decorated sandals",
        "Platform Mary Janes"
    ],

    "Grunge": [
        "Worn-in sneakers",
        "Combat boots",
        "Skate shoes",
        "Chunky boots"
    ],

    "Avant-Garde": [
        "Sculptural boots",
        "Platform shoes",
        "Unusual sneakers",
        "Architectural boots"
    ]
};


// ==========================================
// ACCESSORIES
// ==========================================

const accessories = {
    "Gothic": [
        "Choker",
        "Silver rings",
        "Layered necklaces",
        "Crossbody chain",
        "Dark pendant"
    ],

    "Bohemian": [
        "Layered bracelets",
        "Beaded necklace",
        "Pendant necklace",
        "Decorative scarf",
        "Stacked rings"
    ],

    "Y2K": [
        "Tinted sunglasses",
        "Beaded jewelry",
        "Chain necklace",
        "Butterfly clips",
        "Small shoulder bag"
    ],

    "Streetwear": [
        "Crossbody bag",
        "Sunglasses",
        "Chain necklace",
        "Shoulder bag",
        "Beanie"
    ],

    "Punk": [
        "Studded bracelet",
        "Safety-pin accessories",
        "Chain necklace",
        "Spiked bracelet",
        "Patch accessories"
    ],

    "Victorian": [
        "Pocket watch",
        "Cameo brooch",
        "Pendant necklace",
        "Lace gloves",
        "Decorative brooch"
    ],

    "Cyberpunk": [
        "Futuristic goggles",
        "Techwear bag",
        "Utility straps",
        "Futuristic visor",
        "Tech accessory"
    ],

    "Dark Academia": [
        "Round glasses",
        "Leather satchel",
        "Vintage watch",
        "Tie",
        "Decorative bookmark"
    ],

    "Fairycore": [
        "Flower clips",
        "Butterfly jewelry",
        "Floral necklace",
        "Ribbon",
        "Decorative hair clips"
    ],

    "Western": [
        "Bandana",
        "Western belt",
        "Turquoise-style necklace",
        "Large belt buckle",
        "Leather bracelet"
    ],

    "Preppy": [
        "Classic watch",
        "Tie",
        "Headband",
        "Shoulder bag",
        "Pearl-style necklace"
    ],

    "Vintage": [
        "Vintage watch",
        "Brooch",
        "Silk scarf",
        "Round sunglasses",
        "Pendant necklace"
    ],

    "Avant-Garde": [
        "Sculptural necklace",
        "Statement glasses",
        "Unusual bag",
        "Abstract brooch",
        "Experimental jewelry"
    ]
};


// ==========================================
// RANDOM FUNCTIONS
// ==========================================

function randomAesthetic(category) {
    const aesthetics = Object.keys(category);
    return aesthetics[Math.floor(Math.random() * aesthetics.length)];
}

function randomItem(category, aesthetic) {
    const items = category[aesthetic];
    return items[Math.floor(Math.random() * items.length)];
}


// ==========================================
// CATEGORY ORDER
// ==========================================

const categories = [
    {
        name: "Hat",
        emoji: "🧢",
        database: hats,
        element: "hat"
    },
    {
        name: "Top",
        emoji: "👕",
        database: tops,
        element: "top"
    },
    {
        name: "Bottom",
        emoji: "👖",
        database: bottoms,
        element: "bottom"
    },
    {
        name: "Shoes",
        emoji: "👟",
        database: shoes,
        element: "shoes"
    },
    {
        name: "Accessories",
        emoji: "💍",
        database: accessories,
        element: "accessories"
    }
];


// ==========================================
// GENERATOR
// ==========================================

let currentCategory = 0;
let generating = false;


function generateNext() {

    if (generating) {
        return;
    }

    generating = true;

    const category = categories[currentCategory];

    const aesthetic = randomAesthetic(category.database);
    const item = randomItem(category.database, aesthetic);

    const result = document.getElementById(category.element);

    result.textContent = "🎲 Rolling...";

    setTimeout(function () {

        result.textContent = aesthetic + " → " + item;

        currentCategory++;
        generating = false;

        if (currentCategory < categories.length) {

            button.textContent =
                "NEXT " +
                categories[currentCategory].emoji +
                " " +
                categories[currentCategory].name;

        } else {

            button.textContent = "🔄 NEW OUTFIT";

        }

    }, 600);
}


// ==========================================
// NEW OUTFIT
// ==========================================

function newOutfit() {

    currentCategory = 0;

    document.getElementById("hat").textContent = "---";
    document.getElementById("top").textContent = "---";
    document.getElementById("bottom").textContent = "---";
    document.getElementById("shoes").textContent = "---";
    document.getElementById("accessories").textContent = "---";

    button.textContent = "🎲 GENERATE HAT";
}


// ==========================================
// BUTTON
// ==========================================

button.addEventListener("click", function () {

    if (currentCategory >= categories.length) {
        newOutfit();
    } else {
        generateNext();
    }

});


// ==========================================
// INITIAL BUTTON
// ==========================================

button.textContent = "🎲 GENERATE HAT";
