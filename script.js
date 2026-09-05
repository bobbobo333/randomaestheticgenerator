// ==========================================
// BL3CKPURPLE RANDOM AESTHETIC GENERATOR
// ==========================================


// 🧢 HATS
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
        "Visor",
        "Rhinestone cap"
    ],

    "Western": [
        "Cowboy hat",
        "Wide-brim western hat",
        "Rodeo hat"
    ],

    "Preppy": [
        "Beret",
        "Classic baseball cap",
        "Flat cap",
        "Knit beanie"
    ],

    "Vintage": [
        "Cloche hat",
        "Fedora",
        "Beret",
        "Newsboy cap"
    ],

    "Japanese Streetwear": [
        "Bucket hat",
        "Beanie",
        "Fisherman cap",
        "Wide-brim hat"
    ],

    "Punk": [
        "Studded cap",
        "Patched beanie",
        "Mohawk-style headpiece",
        "Bandana"
    ],

    "Cyberpunk": [
        "Techwear hood",
        "Futuristic visor",
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

    "Cowboy": [
        "Classic cowboy hat",
        "Western felt hat",
        "Rodeo hat"
    ],

    "Goth Lolita": [
        "Mini top hat",
        "Decorated bonnet",
        "Lace headpiece",
        "Veiled headpiece"
    ],

    "Techwear": [
        "Utility hood",
        "Technical cap",
        "Tactical-style hood",
        "Minimal black beanie"
    ]
};


// 👕 TOPS
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
        "Corset-style top",
        "Black button-up",
        "Dark oversized shirt"
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
        "Layered experimental top"
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
    ]
};


// 👖 BOTTOMS
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
        "Tactical-style pants",
        "Modular cargo pants"
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
        "Leather-look trousers"
    ],

    "Fairycore": [
        "Flowy skirt",
        "Layered skirt",
        "Floral maxi skirt",
        "Ruffled skirt"
    ]
};


// 👟 SHOES
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
        "Combat-style boots",
        "Utility boots",
        "Minimal black sneakers"
    ],

    "Fairycore": [
        "Mary Janes",
        "Ballet flats",
        "Decorated sandals",
        "Platform Mary Janes"
    ]
};


// 💍 ACCESSORIES
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
        "Beanie",
        "Shoulder bag"
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
        "LED-style accessories",
        "Digital-looking visor"
    ],

    "Dark Academia": [
        "Round glasses",
        "Leather satchel",
        "Vintage watch",
        "Tie",
        "Book-shaped accessory"
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
        "Belt buckle",
        "Leather bracelet"
    ]
};


// ==========================================
// RANDOMIZER FUNCTIONS
// ==========================================

// Pick a random key/aesthetic
function randomAesthetic(category) {
    const aesthetics = Object.keys(category);
    return aesthetics[Math.floor(Math.random() * aesthetics.length)];
}

// Pick a random item from an aesthetic
function randomItem(category, aesthetic) {
    const items = category[aesthetic];
    return items[Math.floor(Math.random() * items.length)];
}


// ==========================================
// GENERATOR
// ==========================================

document.getElementById("generateButton").addEventListener("click", function() {

    // HAT
    const hatAesthetic = randomAesthetic(hats);
    const hatItem = randomItem(hats, hatAesthetic);

    // TOP
    const topAesthetic = randomAesthetic(tops);
    const topItem = randomItem(tops, topAesthetic);

    // BOTTOM
    const bottomAesthetic = randomAesthetic(bottoms);
    const bottomItem = randomItem(bottoms, bottomAesthetic);

    // SHOES
    const shoeAesthetic = randomAesthetic(shoes);
    const shoeItem = randomItem(shoes, shoeAesthetic);

    // ACCESSORIES
    const accessoryAesthetic = randomAesthetic(accessories);
    const accessoryItem = randomItem(accessories, accessoryAesthetic);


    // Display results
    document.getElementById("hat").textContent =
        `${hatAesthetic} → ${hatItem}`;

    document.getElementById("top").textContent =
        `${topAesthetic} → ${topItem}`;

    document.getElementById("bottom").textContent =
        `${bottomAesthetic} → ${bottomItem}`;

    document.getElementById("shoes").textContent =
        `${shoeAesthetic} → ${shoeItem}`;

    document.getElementById("accessories").textContent =
        `${accessoryAesthetic} → ${accessoryItem}`;
});
