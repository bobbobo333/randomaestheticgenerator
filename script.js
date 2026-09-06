const hats = {
    "Bohemian": [
        "Wide-brim floppy hat",
        "Decorated headscarf",
        "Embroidered hat"
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

    "Goth Lolita": [
        "Decorated bonnet",
        "Mini top hat",
        "Lace headpiece"
    ]
};


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


/* LOWER-BODY LAYERS */

const bottomLayers = {

    "Streetwear": [
        "Baggy jeans",
        "Cargo pants",
        "Parachute pants",
        "Basketball shorts",
        "Wide-leg trousers"
    ],

    "Gothic": [
        "Long black skirt",
        "Black wide-leg trousers",
        "Pleated black trousers",
        "Distressed black jeans"
    ],

    "Y2K": [
        "Mini skirt",
        "Low-rise jeans",
        "Baggy denim",
        "Cargo pants",
        "Track pants"
    ],

    "Grunge": [
        "Distressed jeans",
        "Plaid trousers",
        "Baggy cargo pants",
        "Ripped jeans"
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
        "Patchwork trousers",
        "Leather-look pants"
    ],

    "Avant-Garde": [
        "Asymmetrical trousers",
        "Deconstructed pants",
        "Extra-wide trousers",
        "Layered skirt"
    ],

    "Archive Fashion": [
        "Deconstructed jeans",
        "Wide-leg trousers",
        "Oversized cargo pants",
        "Asymmetrical trousers"
    ]
};


/* LEGWEAR */

const legwear = {

    "Everyday": [
        "Ankle socks",
        "Crew socks",
        "Ribbed socks",
        "No-show socks"
    ],

    "Streetwear": [
        "Crew socks",
        "Tube socks",
        "Basketball socks",
        "Striped crew socks"
    ],

    "Preppy": [
        "Knee-high socks",
        "Ribbed knee-high socks",
        "Crew socks",
        "Tights"
    ],

    "Gothic": [
        "Fishnet tights",
        "Sheer black tights",
        "Patterned tights",
        "Black stockings"
    ],

    "Punk": [
        "Fishnet stockings",
        "Striped knee-high socks",
        "Distressed tights",
        "Patterned stockings"
    ],

    "Y2K": [
        "Leg warmers",
        "Scrunched socks",
        "Colorful knee-high socks",
        "Striped leg warmers"
    ],

    "Fairycore": [
        "Lace-trimmed socks",
        "Sheer tights",
        "Ribbon socks",
        "Floral tights"
    ],

    "Vintage": [
        "Stockings",
        "Ankle socks",
        "Ribbed socks",
        "Classic tights"
    ],

    "Grunge": [
        "Slouch socks",
        "Striped crew socks",
        "Worn-in knee socks",
        "Patterned tights"
    ],

    "Japanese Streetwear": [
        "Tabi-style socks",
        "Crew socks",
        "Leg warmers",
        "Knee-high socks"
    ],

    "Layered Legwear": [
        "Leggings",
        "Fishnet tights",
        "Sheer stockings",
        "Layered tights"
    ]
};


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
        "Futuristic visor"
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


/* RANDOM HELPERS */

function randomAesthetic(database) {

    const names = Object.keys(database);

    return names[
        Math.floor(Math.random() * names.length)
    ];
}


function randomItem(database, aesthetic) {

    const items = database[aesthetic];

    return items[
        Math.floor(Math.random() * items.length)
    ];
}


function rollResult(element, finalText, callback) {

    let count = 0;

    const fakeResults = [
        "Rolling...",
        "Choosing...",
        "Searching...",
        "???",
        "Almost..."
    ];

    const interval = setInterval(function () {

        element.textContent =
            fakeResults[count % fakeResults.length];

        count++;

    }, 100);


    setTimeout(function () {

        clearInterval(interval);

        element.textContent = finalText;

        if (callback) {
            callback();
        }

    }, 900);
}


/* HAT */

function generateHat() {

    const button =
        document.getElementById("hatButton");

    button.disabled = true;

    const result =
        document.getElementById("hat");


    const noHat =
        Math.random() < 0.20;


    let finalResult;


    if (noHat) {

        finalResult = "NO HAT";

    } else {

        const aesthetic =
            randomAesthetic(hats);

        const item =
            randomItem(hats, aesthetic);

        finalResult =
            aesthetic + " → " + item;
    }


    rollResult(
        result,
        finalResult,
        function () {

            button.textContent =
                "HAT LOCKED";

        }
    );
}


/* UPPER BODY LAYERS */

function generateLayers() {

    const button =
        document.getElementById("layerButton");

    button.disabled = true;


    const countResult =
        document.getElementById("layerCount");


    const roll =
        Math.random();


    let layerCount;


    if (roll < 0.55) {

        layerCount = 1;

    } else if (roll < 0.90) {

        layerCount = 2;

    } else {

        layerCount = 3;
    }


    rollResult(
        countResult,
        layerCount +
        " LAYER" +
        (layerCount > 1 ? "S" : ""),
        function () {

            generateLayerResults(layerCount);

        }
    );
}


function generateLayerResults(layerCount) {

    const container =
        document.getElementById("layers");

    container.innerHTML = "";


    const layerNames = [];


    if (layerCount === 1) {

        layerNames.push("Main Layer");

    }


    if (layerCount === 2) {

        layerNames.push("Inner Layer");
        layerNames.push("Outer Layer");

    }


    if (layerCount === 3) {

        layerNames.push("Inner Layer");
        layerNames.push("Middle Layer");
        layerNames.push("Outer Layer");

    }


    layerNames.forEach(function (layerName, index) {

        const box =
            document.createElement("div");

        box.className =
            "sub-result";


        box.innerHTML =
            "<strong>" +
            layerName +
            "</strong>" +
            "Rolling...";


        container.appendChild(box);


        setTimeout(function () {

            let finalResult;


            if (
                layerName === "Outer Layer" &&
                Math.random() < 0.25
            ) {

                finalResult =
                    "NO OUTER LAYER";

            } else {

                const aesthetic =
                    randomAesthetic(tops);

                const item =
                    randomItem(tops, aesthetic);

                finalResult =
                    aesthetic +
                    " → " +
                    item;
            }


            rollResult(
                box,
                finalResult
            );

        }, index * 300);

    });


    document.getElementById(
        "layerButton"
    ).textContent =
        "LAYERS LOCKED";
}


/* LOWER BODY LAYERS */

function generateBottomLayers() {

    const button =
        document.getElementById("bottomLayerButton");

    button.disabled = true;


    const countResult =
        document.getElementById("bottomLayerCount");


    const roll =
        Math.random();


    let layerCount;


    if (roll < 0.60) {

        layerCount = 1;

    } else if (roll < 0.95) {

        layerCount = 2;

    } else {

        layerCount = 3;
    }


    rollResult(
        countResult,
        layerCount +
        " LOWER-BODY LAYER" +
        (layerCount > 1 ? "S" : ""),
        function () {

            generateBottomLayerResults(layerCount);

        }
    );
}


function generateBottomLayerResults(layerCount) {

    const container =
        document.getElementById("bottomLayers");

    container.innerHTML = "";


    const layerNames = [];


    if (layerCount === 1) {

        layerNames.push("Main Layer");

    }


    if (layerCount === 2) {

        layerNames.push("Inner Layer");
        layerNames.push("Outer Layer");

    }


    if (layerCount === 3) {

        layerNames.push("Inner Layer");
        layerNames.push("Middle Layer");
        layerNames.push("Outer Layer");

    }


    layerNames.forEach(function (layerName, index) {

        const box =
            document.createElement("div");

        box.className =
            "sub-result";


        box.innerHTML =
            "<strong>" +
            layerName +
            "</strong>" +
            "Rolling...";


        container.appendChild(box);


        setTimeout(function () {

            const aesthetic =
                randomAesthetic(bottomLayers);

            const item =
                randomItem(
                    bottomLayers,
                    aesthetic
                );


            const finalResult =
                aesthetic +
                " → " +
                item;


            rollResult(
                box,
                finalResult
            );

        }, index * 300);

    });


    document.getElementById(
        "bottomLayerButton"
    ).textContent =
        "LAYERS LOCKED";
}


/* LEGWEAR */

function generateLegwear() {

    const button =
        document.getElementById("legwearButton");

    button.disabled = true;


    const result =
        document.getElementById("legwear");


    const noLegwear =
        Math.random() < 0.20;


    let finalResult;


    if (noLegwear) {

        finalResult =
            "NO SOCKS / NO LEGWEAR";

    } else {

        const aesthetic =
            randomAesthetic(legwear);

        const item =
            randomItem(
                legwear,
                aesthetic
            );

        finalResult =
            aesthetic +
            " → " +
            item;
    }


    rollResult(
        result,
        finalResult,
        function () {

            button.textContent =
                "LEGWEAR LOCKED";

        }
    );
}


/* SHOES */

function generateShoes() {

    const button =
        document.getElementById("shoesButton");

    button.disabled = true;


    const result =
        document.getElementById("shoes");


    const aesthetic =
        randomAesthetic(shoes);

    const item =
        randomItem(
            shoes,
            aesthetic
        );


    rollResult(
        result,
        aesthetic +
        " → " +
        item,
        function () {

            button.textContent =
                "SHOES LOCKED";

        }
    );
}


/* ACCESSORIES */

function generateAccessories() {

    const button =
        document.getElementById("accessoryButton");

    button.disabled = true;


    const countResult =
        document.getElementById("accessoryCount");


    const roll =
        Math.random();


    let count;


    if (roll < 0.25) {

        count = 1;

    } else if (roll < 0.70) {

        count = 2;

    } else if (roll < 0.93) {

        count = 3;

    } else {

        count = 4;
    }


    rollResult(
        countResult,
        count +
        " ACCESSOR" +
        (count > 1 ? "IES" : "Y"),
        function () {

            generateAccessoryResults(count);

        }
    );
}


function generateAccessoryResults(count) {

    const container =
        document.getElementById("accessories");

    container.innerHTML = "";


    const usedItems = [];


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const box =
            document.createElement("div");


        box.className =
            "sub-result";


        box.innerHTML =
            "<strong>" +
            "Accessory " +
            (i + 1) +
            "</strong>" +
            "Rolling...";


        container.appendChild(box);


        setTimeout(function () {

            let aesthetic;
            let item;
            let attempts = 0;


            do {

                aesthetic =
                    randomAesthetic(accessories);

                item =
                    randomItem(
                        accessories,
                        aesthetic
                    );

                attempts++;

            } while (
                usedItems.includes(item) &&
                attempts < 20
            );


            usedItems.push(item);


            rollResult(
                box,
                aesthetic +
                " → " +
                item
            );


        }, i * 300);

    }


    document.getElementById(
        "accessoryButton"
    ).textContent =
        "ACCESSORIES LOCKED";
}


/* NEW OUTFIT */

function resetGenerator() {

    location.reload();

}
