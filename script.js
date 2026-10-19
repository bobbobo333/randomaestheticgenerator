/* =========================================================
   RANDOM AESTHETIC GENERATOR — BL3CKPURPLE
========================================================= */


/* =========================
   HATS
========================= */

const hats = {
    "Bohemian": [
        "Wide-brim floppy hat",
        "Decorated headscarf",
        "Embroidered hat",
        "Woven sun hat"
    ],

    "Streetwear": [
        "Bucket hat",
        "Baseball cap",
        "Snapback",
        "Beanie",
        "Trucker cap",
        "Five-panel cap"
    ],

    "Gothic": [
        "Wide-brim black hat",
        "Mini top hat",
        "Black beret",
        "Veiled hat",
        "Wide-brim fedora"
    ],

    "Y2K": [
        "Trucker hat",
        "Fuzzy bucket hat",
        "Rhinestone cap",
        "Visor",
        "Graphic cap"
    ],

    "Western": [
        "Cowboy hat",
        "Western felt hat",
        "Rodeo hat",
        "Straw cowboy hat"
    ],

    "Vintage": [
        "Cloche hat",
        "Fedora",
        "Beret",
        "Newsboy cap",
        "Pillbox-style hat"
    ],

    "Japanese Streetwear": [
        "Fisherman cap",
        "Bucket hat",
        "Wide-brim hat",
        "Beanie",
        "Newsboy cap"
    ],

    "Punk": [
        "Studded cap",
        "Patched beanie",
        "Bandana",
        "Distressed cap",
        "Military-style cap"
    ],

    "Cyberpunk": [
        "Futuristic visor",
        "Cyber goggles",
        "Utility cap",
        "Techwear hood"
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
    ],

    "Cottagecore": [
        "Straw hat",
        "Floral bonnet",
        "Woven sun hat",
        "Ribboned straw hat"
    ],

    "Harajuku": [
        "Colorful bucket hat",
        "Decorated beret",
        "Graphic cap",
        "Statement headband"
    ],

    "Scene": [
        "Striped beanie",
        "Graphic cap",
        "Studded beanie",
        "Patterned headband"
    ],

    "Visual Kei": [
        "Wide-brim fedora",
        "Decorated top hat",
        "Black beret",
        "Statement hat"
    ],

    "Gorpcore": [
        "Trail cap",
        "Technical bucket hat",
        "Outdoor beanie",
        "Five-panel trail cap"
    ]
};


/* =========================
   UPPER BODY
========================= */

const upperBase = {

    "Japanese Streetwear": [
        "Oversized graphic tee",
        "Graphic long-sleeve",
        "Boxy shirt",
        "Oversized tank",
        "Layered jersey"
    ],

    "Bohemian": [
        "Flowy blouse",
        "Embroidered shirt",
        "Loose tunic",
        "Crochet top",
        "Relaxed linen shirt"
    ],

    "Gothic": [
        "Black mesh top",
        "Ruffled blouse",
        "Black button-up",
        "Dark fitted shirt",
        "Oversized black tee"
    ],

    "Y2K": [
        "Baby tee",
        "Graphic tank top",
        "Fitted graphic tee",
        "Cropped top",
        "Oversized graphic tee",
        "Racing jersey"
    ],

    "Grunge": [
        "Band tee",
        "Distressed shirt",
        "Striped long-sleeve",
        "Fitted thermal",
        "Oversized flannel shirt"
    ],

    "Victorian": [
        "High-collar blouse",
        "Ruffled shirt",
        "Lace blouse",
        "Poet shirt",
        "High-collar button-up"
    ],

    "Dark Academia": [
        "Button-up shirt",
        "Turtleneck",
        "Oxford shirt",
        "Fitted knit top",
        "Relaxed knit polo"
    ],

    "Fairycore": [
        "Flowy blouse",
        "Sheer floral top",
        "Ribbon-trimmed top",
        "Floral top",
        "Embroidered peasant shirt"
    ],

    "Punk": [
        "Band tee",
        "Distressed shirt",
        "Graphic tank",
        "Striped shirt",
        "Oversized graphic tee"
    ],

    "Preppy": [
        "Oxford shirt",
        "Polo shirt",
        "Fitted button-up",
        "Classic blouse",
        "Rugby shirt"
    ],

    "Vintage": [
        "Retro button-up",
        "Vintage blouse",
        "Knit top",
        "Retro shirt",
        "Bowling shirt"
    ],

    "Cottagecore": [
        "Linen shirt",
        "Embroidered blouse",
        "Plaid shirt",
        "Relaxed cotton shirt",
        "Peasant blouse"
    ],

    "Balletcore": [
        "Wrap top",
        "Fitted knit top",
        "Soft cardigan top",
        "Ribbon-trimmed top",
        "Fitted long-sleeve"
    ],

    "Coquette": [
        "Ribbon blouse",
        "Lace-trimmed top",
        "Fitted cardigan top",
        "Bow-detail shirt",
        "Soft button-up"
    ],

    "Emo": [
        "Band tee",
        "Striped long-sleeve",
        "Graphic tee",
        "Black thermal",
        "Layered tee"
    ],

    "Scene": [
        "Graphic tee",
        "Striped shirt",
        "Bright graphic tank",
        "Band tee",
        "Color-blocked tee"
    ],

    "Visual Kei": [
        "Ruffled shirt",
        "High-collar shirt",
        "Decorative button-up",
        "Asymmetrical top",
        "Poet shirt"
    ],

    "Normcore": [
        "Plain white tee",
        "Plain black tee",
        "Basic polo",
        "Relaxed button-up",
        "Simple crewneck"
    ],

    "Athleisure": [
        "Performance tee",
        "Raglan shirt",
        "Training top",
        "Athletic tank",
        "Quarter-zip base top"
    ],

    "Minimalist": [
        "Plain tee",
        "Clean button-up",
        "Mock-neck top",
        "Minimal polo",
        "Simple long-sleeve"
    ],

    "Mod": [
        "Geometric shirt",
        "High-neck top",
        "Slim button-up",
        "Color-blocked shirt",
        "Retro polo"
    ]
};


const upperMiddle = {

    "Japanese Streetwear": [
        "Oversized hoodie",
        "Oversized sweatshirt",
        "Zip hoodie",
        "Overshirt",
        "Utility vest"
    ],

    "Streetwear": [
        "Varsity jacket",
        "Oversized hoodie",
        "Track jacket",
        "Overshirt",
        "Utility vest"
    ],

    "Gothic": [
        "Mesh cardigan",
        "Cropped jacket",
        "Dark cardigan",
        "Fitted vest",
        "Long-sleeve cardigan"
    ],

    "Y2K": [
        "Cropped hoodie",
        "Cropped jacket",
        "Zip hoodie",
        "Bolero",
        "Graphic zip-up"
    ],

    "Grunge": [
        "Oversized flannel",
        "Denim vest",
        "Oversized sweater",
        "Zip hoodie",
        "Knit cardigan"
    ],

    "Preppy": [
        "Knit vest",
        "Cardigan",
        "Varsity sweater",
        "Sweater vest",
        "Rugby sweater"
    ],

    "Dark Academia": [
        "Knit sweater",
        "Cable-knit vest",
        "Cardigan",
        "Sweater vest",
        "Academic cardigan"
    ],

    "Fairycore": [
        "Floral cardigan",
        "Ribbon cardigan",
        "Crochet cardigan",
        "Sheer cardigan",
        "Embroidered cardigan"
    ],

    "Punk": [
        "Studded vest",
        "Patched vest",
        "Cropped jacket",
        "Denim vest",
        "Graphic sweater"
    ],

    "Vintage": [
        "Knit sweater",
        "Cardigan",
        "Sweater vest",
        "Denim vest",
        "Retro pullover"
    ],

    "Cottagecore": [
        "Knit cardigan",
        "Patchwork vest",
        "Cable-knit sweater",
        "Quilted vest",
        "Overshirt"
    ],

    "Balletcore": [
        "Wrap cardigan",
        "Soft knit cardigan",
        "Cropped cardigan",
        "Warm-up jacket",
        "Fitted sweater"
    ],

    "Coquette": [
        "Ribbon cardigan",
        "Cropped cardigan",
        "Decorated sweater",
        "Soft bolero",
        "Button cardigan"
    ],

    "Emo": [
        "Striped cardigan",
        "Zip hoodie",
        "Graphic sweater",
        "Denim vest",
        "Oversized hoodie"
    ],

    "Scene": [
        "Graphic hoodie",
        "Striped zip hoodie",
        "Denim vest",
        "Colorful cardigan",
        "Oversized sweater"
    ],

    "Visual Kei": [
        "Decorative vest",
        "Long cardigan",
        "Fitted jacket",
        "Asymmetrical cardigan",
        "Statement sweater"
    ],

    "Normcore": [
        "Plain hoodie",
        "Simple cardigan",
        "Crewneck sweatshirt",
        "Fleece vest",
        "Zip sweater"
    ],

    "Athleisure": [
        "Track jacket",
        "Quarter-zip",
        "Zip hoodie",
        "Training jacket",
        "Lightweight fleece"
    ],

    "Minimalist": [
        "Clean cardigan",
        "Minimal overshirt",
        "Plain sweater",
        "Simple zip jacket",
        "Knit vest"
    ],

    "Mod": [
        "Geometric cardigan",
        "Retro sweater",
        "Color-blocked vest",
        "Cropped jacket",
        "Structured cardigan"
    ]
};


const upperOuter = {

    "Streetwear": [
        "Varsity jacket",
        "Bomber jacket",
        "Oversized denim jacket",
        "Track jacket",
        "Workwear jacket"
    ],

    "Japanese Streetwear": [
        "Oversized jacket",
        "Bomber jacket",
        "Utility jacket",
        "Long coat",
        "Workwear jacket"
    ],

    "Gothic": [
        "Long black coat",
        "Cropped jacket",
        "Trench coat",
        "Long cardigan",
        "Tailored black coat"
    ],

    "Y2K": [
        "Cropped jacket",
        "Faux-fur jacket",
        "Oversized denim jacket",
        "Track jacket",
        "Racing jacket"
    ],

    "Grunge": [
        "Oversized denim jacket",
        "Military-style jacket",
        "Leather-look jacket",
        "Oversized flannel",
        "Work jacket"
    ],

    "Techwear": [
        "Technical jacket",
        "Utility jacket",
        "Long technical coat",
        "Modular jacket",
        "Shell jacket"
    ],

    "Victorian": [
        "Long coat",
        "Tailored coat",
        "Decorative jacket",
        "Cloak-style coat",
        "Structured coat"
    ],

    "Dark Academia": [
        "Long wool coat",
        "Tailored coat",
        "Trench coat",
        "Blazer",
        "Structured overcoat"
    ],

    "Punk": [
        "Studded jacket",
        "Patched jacket",
        "Leather-look jacket",
        "Oversized denim jacket",
        "Military jacket"
    ],

    "Vintage": [
        "Vintage coat",
        "Denim jacket",
        "Bomber jacket",
        "Tailored jacket",
        "Coach jacket"
    ],

    "Cottagecore": [
        "Quilted jacket",
        "Waxed cotton jacket",
        "Long wool coat",
        "Patchwork jacket",
        "Utility overshirt"
    ],

    "Balletcore": [
        "Soft wrap jacket",
        "Cropped jacket",
        "Long cardigan",
        "Warm-up jacket",
        "Fitted coat"
    ],

    "Coquette": [
        "Decorated coat",
        "Cropped jacket",
        "Ribbon-detail jacket",
        "Soft bolero",
        "Tailored coat"
    ],

    "Emo": [
        "Black denim jacket",
        "Long black coat",
        "Military jacket",
        "Oversized hoodie jacket",
        "Patchwork jacket"
    ],

    "Scene": [
        "Colorful bomber",
        "Graphic jacket",
        "Denim jacket",
        "Bright windbreaker",
        "Patched jacket"
    ],

    "Visual Kei": [
        "Long dramatic coat",
        "Tailored jacket",
        "Decorative coat",
        "Asymmetrical jacket",
        "Statement overcoat"
    ],

    "Normcore": [
        "Simple denim jacket",
        "Coach jacket",
        "Fleece jacket",
        "Plain bomber",
        "Utility jacket"
    ],

    "Athleisure": [
        "Track jacket",
        "Windbreaker",
        "Training jacket",
        "Puffer jacket",
        "Technical shell"
    ],

    "Minimalist": [
        "Clean overcoat",
        "Simple bomber",
        "Minimal trench coat",
        "Structured jacket",
        "Long wool coat"
    ],

    "Mod": [
        "Geometric coat",
        "Structured jacket",
        "Retro overcoat",
        "Color-blocked jacket",
        "Cropped mod jacket"
    ],

    "Gorpcore": [
        "Technical shell jacket",
        "Puffer jacket",
        "Trail jacket",
        "Fleece jacket",
        "Outdoor windbreaker"
    ]
};


/* =========================
   LOWER BODY
========================= */

const bottomBase = {

    "Japanese Streetwear": [
        "Baggy jeans",
        "Wide-leg trousers",
        "Parachute pants",
        "Cargo pants",
        "Utility trousers"
    ],

    "Streetwear": [
        "Baggy jeans",
        "Jorts",
        "Cargo pants",
        "Basketball shorts",
        "Track pants",
        "Loose-fit trousers"
    ],

    "Gothic": [
        "Black wide-leg trousers",
        "Long black skirt",
        "Black jeans",
        "Pleated black trousers",
        "Asymmetrical trousers",
        "Dark cargo pants"
    ],

    "Y2K": [
        "Low-rise jeans",
        "Baggy denim",
        "Cargo pants",
        "Mini skirt",
        "Track pants",
        "Wide-leg jeans"
    ],

    "Grunge": [
        "Distressed jeans",
        "Baggy cargo pants",
        "Plaid trousers",
        "Ripped jeans",
        "Denim shorts",
        "Loose-fit jeans"
    ],

    "Preppy": [
        "Pleated trousers",
        "Chino pants",
        "Pleated skirt",
        "Tailored shorts",
        "Straight-leg trousers",
        "Rugby shorts"
    ],

    "Bohemian": [
        "Flowy maxi skirt",
        "Wide-leg pants",
        "Flared pants",
        "Patchwork trousers",
        "Relaxed linen pants",
        "Long wrap skirt"
    ],

    "Techwear": [
        "Technical cargo pants",
        "Utility trousers",
        "Modular cargo pants",
        "Technical joggers",
        "Technical shorts"
    ],

    "Vintage": [
        "High-waisted trousers",
        "Pleated pants",
        "Wide-leg jeans",
        "A-line skirt",
        "Corduroy trousers",
        "Retro shorts"
    ],

    "Western": [
        "Bootcut jeans",
        "Cowboy-cut jeans",
        "Denim shorts",
        "Western trousers",
        "Relaxed denim",
        "Corduroy western pants"
    ],

    "Fairycore": [
        "Flowy skirt",
        "Floral maxi skirt",
        "Ruffled skirt",
        "Layered skirt",
        "Wide-leg floral pants",
        "Embroidered trousers"
    ],

    "Punk": [
        "Plaid trousers",
        "Distressed jeans",
        "Patchwork trousers",
        "Leather-look pants",
        "Utility pants",
        "Cargo jeans"
    ],

    "Avant-Garde": [
        "Asymmetrical trousers",
        "Deconstructed pants",
        "Extra-wide trousers",
        "Layered skirt",
        "Draped trousers",
        "Sculptural pants"
    ],

    "Cottagecore": [
        "Relaxed linen trousers",
        "Corduroy pants",
        "Patchwork trousers",
        "Long skirt",
        "Denim overalls",
        "High-waisted shorts"
    ],

    "Balletcore": [
        "Wide-leg knit pants",
        "Soft track pants",
        "Wrap skirt",
        "Pleated trousers",
        "Fitted leggings",
        "Warm-up pants"
    ],

    "Coquette": [
        "Pleated trousers",
        "A-line skirt",
        "Ribbon-detail skirt",
        "Wide-leg trousers",
        "Tailored shorts",
        "Pleated shorts"
    ],

    "Emo": [
        "Black jeans",
        "Distressed jeans",
        "Plaid trousers",
        "Cargo pants",
        "Black shorts",
        "Wide-leg jeans"
    ],

    "Scene": [
        "Skinny-style jeans",
        "Graphic shorts",
        "Plaid trousers",
        "Bright cargo pants",
        "Distressed jeans",
        "Colorful track pants"
    ],

    "Visual Kei": [
        "Wide-leg trousers",
        "Asymmetrical pants",
        "Tailored trousers",
        "Layered skirt",
        "Deconstructed pants",
        "Decorative trousers"
    ],

    "Normcore": [
        "Straight-leg jeans",
        "Chino pants",
        "Relaxed trousers",
        "Denim shorts",
        "Cargo pants",
        "Simple joggers"
    ],

    "Athleisure": [
        "Joggers",
        "Track pants",
        "Basketball shorts",
        "Training shorts",
        "Performance leggings",
        "Sweatpants"
    ],

    "Minimalist": [
        "Straight-leg trousers",
        "Wide-leg trousers",
        "Clean jeans",
        "Tailored shorts",
        "Simple midi skirt",
        "Relaxed chinos"
    ],

    "Mod": [
        "Geometric trousers",
        "Slim trousers",
        "Pleated pants",
        "A-line skirt",
        "Tailored shorts",
        "Retro trousers"
    ],

    "Gorpcore": [
        "Technical hiking pants",
        "Trail shorts",
        "Convertible pants",
        "Utility trousers",
        "Technical joggers",
        "Outdoor cargo pants"
    ]
};


const bottomOverlayer = {

    "Gothic": [
        "Long black skirt",
        "Sheer overskirt",
        "Asymmetrical skirt",
        "Wrap skirt",
        "Long utility overskirt"
    ],

    "Streetwear": [
        "Jorts",
        "Basketball shorts",
        "Utility shorts",
        "Oversized shorts",
        "Cargo overshorts"
    ],

    "Japanese Streetwear": [
        "Wrap skirt",
        "Utility overskirt",
        "Wide shorts",
        "Layered skirt",
        "Utility kilt"
    ],

    "Y2K": [
        "Mini skirt",
        "Denim skirt",
        "Wrap skirt",
        "Low-rise shorts",
        "Denim overshorts"
    ],

    "Punk": [
        "Plaid skirt",
        "Utility kilt",
        "Distressed shorts",
        "Asymmetrical skirt",
        "Cargo overshorts"
    ],

    "Grunge": [
        "Plaid skirt",
        "Denim skirt",
        "Long skirt",
        "Distressed shorts",
        "Oversized denim shorts"
    ],

    "Preppy": [
        "Pleated skirt",
        "Tailored shorts",
        "Wrap skirt",
        "Kilt-style skirt",
        "Rugby shorts"
    ],

    "Bohemian": [
        "Flowy overskirt",
        "Wrap skirt",
        "Patchwork skirt",
        "Layered skirt",
        "Wide overshorts"
    ],

    "Fairycore": [
        "Sheer overskirt",
        "Floral overskirt",
        "Layered skirt",
        "Ruffled overskirt",
        "Embroidered overskirt"
    ],

    "Vintage": [
        "A-line skirt",
        "Pleated skirt",
        "Wrap skirt",
        "Long skirt",
        "Tailored shorts"
    ],

    "Western": [
        "Denim skirt",
        "Western overskirt",
        "Fringed skirt",
        "Jorts",
        "Denim overshorts"
    ],

    "Avant-Garde": [
        "Deconstructed skirt",
        "Asymmetrical overskirt",
        "Draped skirt",
        "Experimental wrap",
        "Sculptural overshorts"
    ],

    "Cottagecore": [
        "Patchwork overskirt",
        "Apron-style overskirt",
        "Long overskirt",
        "Denim overshorts",
        "Layered wrap skirt"
    ],

    "Balletcore": [
        "Wrap skirt",
        "Soft overskirt",
        "Pleated overskirt",
        "Warm-up shorts",
        "Layered knit skirt"
    ],

    "Coquette": [
        "Ribbon overskirt",
        "Pleated overskirt",
        "A-line overskirt",
        "Decorated wrap skirt",
        "Tailored shorts"
    ],

    "Emo": [
        "Plaid overskirt",
        "Denim overshorts",
        "Utility shorts",
        "Black wrap skirt",
        "Layered shorts"
    ],

    "Scene": [
        "Bright overshorts",
        "Plaid skirt",
        "Graphic shorts",
        "Colorful overskirt",
        "Layered denim shorts"
    ],

    "Visual Kei": [
        "Asymmetrical overskirt",
        "Layered skirt",
        "Draped wrap",
        "Decorative overshorts",
        "Deconstructed skirt"
    ],

    "Normcore": [
        "Denim overshorts",
        "Relaxed shorts",
        "Utility shorts",
        "Simple wrap skirt",
        "Casual overshorts"
    ],

    "Athleisure": [
        "Basketball shorts",
        "Training shorts",
        "Track shorts",
        "Utility overshorts",
        "Warm-up shorts"
    ],

    "Minimalist": [
        "Clean wrap skirt",
        "Tailored overshorts",
        "Simple overskirt",
        "Pleated overshorts",
        "Minimal layered shorts"
    ],

    "Mod": [
        "Geometric overskirt",
        "Tailored overshorts",
        "Pleated overskirt",
        "Color-blocked shorts",
        "Structured wrap"
    ]
};


const bottomOuter = {

    "Gothic": [
        "Sheer black overskirt",
        "Long asymmetrical skirt",
        "Layered black skirt",
        "Draped skirt",
        "Long utility overskirt"
    ],

    "Streetwear": [
        "Oversized utility shorts",
        "Long jorts",
        "Cargo overshorts",
        "Layered shorts",
        "Utility wrap"
    ],

    "Japanese Streetwear": [
        "Long utility overskirt",
        "Asymmetrical wrap",
        "Layered skirt",
        "Draped overskirt",
        "Long utility shorts"
    ],

    "Y2K": [
        "Sheer mini overskirt",
        "Denim overskirt",
        "Layered mini skirt",
        "Wrap skirt",
        "Denim utility overshorts"
    ],

    "Punk": [
        "Tartan overskirt",
        "Utility kilt",
        "Deconstructed skirt",
        "Asymmetrical skirt",
        "Layered cargo shorts"
    ],

    "Fairycore": [
        "Sheer floral overskirt",
        "Layered tulle-style skirt",
        "Ribbon overskirt",
        "Draped floral layer",
        "Embroidered overskirt"
    ],

    "Avant-Garde": [
        "Deconstructed overskirt",
        "Sculptural skirt",
        "Asymmetrical drape",
        "Experimental fabric layer",
        "Sculptural overshorts"
    ],

    "Vintage": [
        "Long overskirt",
        "Pleated overskirt",
        "A-line overskirt",
        "Draped skirt",
        "Tailored overshorts"
    ],

    "Cottagecore": [
        "Patchwork overskirt",
        "Long apron-style layer",
        "Layered wrap skirt",
        "Quilted overskirt",
        "Denim overshorts"
    ],

    "Balletcore": [
        "Long wrap layer",
        "Soft overskirt",
        "Pleated wrap",
        "Warm-up overshorts",
        "Layered knit wrap"
    ],

    "Coquette": [
        "Ribbon overskirt",
        "Layered A-line overskirt",
        "Decorated wrap",
        "Pleated overskirt",
        "Tailored overshorts"
    ],

    "Emo": [
        "Black layered overskirt",
        "Plaid overshorts",
        "Distressed utility layer",
        "Layered shorts",
        "Black wrap layer"
    ],

    "Scene": [
        "Colorful layered shorts",
        "Graphic overshorts",
        "Bright wrap layer",
        "Patterned overskirt",
        "Layered denim"
    ],

    "Visual Kei": [
        "Draped overskirt",
        "Asymmetrical wrap",
        "Long decorative layer",
        "Deconstructed overshorts",
        "Sculptural skirt layer"
    ],

    "Normcore": [
        "Utility overshorts",
        "Relaxed layered shorts",
        "Simple wrap layer",
        "Denim overshorts",
        "Casual utility layer"
    ],

    "Athleisure": [
        "Layered training shorts",
        "Utility overshorts",
        "Track overshorts",
        "Warm-up layer",
        "Technical wrap"
    ],

    "Minimalist": [
        "Minimal wrap layer",
        "Clean overshorts",
        "Simple pleated layer",
        "Structured overskirt",
        "Layered tailored shorts"
    ],

    "Mod": [
        "Geometric overskirt",
        "Structured wrap",
        "Color-blocked overshorts",
        "Pleated outer layer",
        "Retro sculptural layer"
    ]
};


/* =========================
   LEGWEAR
========================= */

const legwear = {

    "Everyday": [
        "Ankle socks",
        "Crew socks",
        "Ribbed socks",
        "No-show socks",
        "Tube socks"
    ],

    "Streetwear": [
        "Crew socks",
        "Tube socks",
        "Basketball socks",
        "Striped crew socks",
        "Quarter socks"
    ],

    "Preppy": [
        "Knee-high socks",
        "Ribbed knee-high socks",
        "Crew socks",
        "Tights",
        "Argyle socks"
    ],

    "Gothic": [
        "Fishnet tights",
        "Sheer black tights",
        "Patterned tights",
        "Black stockings",
        "Black knee-high socks"
    ],

    "Punk": [
        "Fishnet stockings",
        "Striped knee-high socks",
        "Distressed tights",
        "Patterned stockings",
        "Striped crew socks"
    ],

    "Y2K": [
        "Leg warmers",
        "Scrunched socks",
        "Colorful knee-high socks",
        "Striped leg warmers",
        "Tube socks"
    ],

    "Fairycore": [
        "Lace-trimmed socks",
        "Sheer tights",
        "Ribbon socks",
        "Floral tights",
        "Embroidered socks"
    ],

    "Vintage": [
        "Stockings",
        "Ankle socks",
        "Ribbed socks",
        "Classic tights",
        "Knee socks"
    ],

    "Grunge": [
        "Slouch socks",
        "Striped crew socks",
        "Worn-in knee socks",
        "Patterned tights",
        "Crew socks"
    ],

    "Japanese Streetwear": [
        "Tabi-style socks",
        "Crew socks",
        "Leg warmers",
        "Knee-high socks",
        "Striped socks"
    ],

    "Layered Legwear": [
        "Leggings",
        "Fishnet tights",
        "Sheer stockings",
        "Layered tights",
        "Leg warmers over leggings"
    ],

    "Athleisure": [
        "Compression-style socks",
        "Crew socks",
        "Quarter socks",
        "Training socks",
        "Knee-high sports socks"
    ],

    "Scene": [
        "Striped knee-high socks",
        "Colorful leg warmers",
        "Patterned tights",
        "Striped crew socks",
        "Bright tube socks"
    ],

    "Emo": [
        "Striped knee-high socks",
        "Black tights",
        "Crew socks",
        "Patterned tights",
        "Striped crew socks"
    ]
};


/* =========================
   SHOES
========================= */

const shoes = {

    "90s Fashion": [
        "Chunky sneakers",
        "High-top sneakers",
        "Platform sneakers",
        "Classic running shoes",
        "Retro skate shoes"
    ],

    "Streetwear": [
        "High-top sneakers",
        "Chunky sneakers",
        "Skate shoes",
        "Basketball sneakers",
        "Retro runners"
    ],

    "Gothic": [
        "Platform boots",
        "Combat boots",
        "Platform shoes",
        "Pointed boots",
        "Black lace-up boots"
    ],

    "Y2K": [
        "Platform sneakers",
        "Chunky sneakers",
        "Platform boots",
        "Retro trainers",
        "Racing sneakers"
    ],

    "Western": [
        "Cowboy boots",
        "Western ankle boots",
        "Rodeo boots",
        "Western work boots"
    ],

    "Japanese Streetwear": [
        "Chunky sneakers",
        "Platform sneakers",
        "High-top sneakers",
        "Loafers",
        "Split-toe inspired shoes"
    ],

    "Punk": [
        "Combat boots",
        "Platform boots",
        "Skate shoes",
        "Studded boots",
        "Lace-up boots"
    ],

    "Preppy": [
        "Loafers",
        "Boat shoes",
        "Classic sneakers",
        "Brogues",
        "Canvas sneakers"
    ],

    "Vintage": [
        "Retro sneakers",
        "Loafers",
        "Oxford shoes",
        "Classic boots",
        "Retro lace-up shoes"
    ],

    "Techwear": [
        "Technical sneakers",
        "Utility boots",
        "Combat-style boots",
        "Minimal black sneakers",
        "Trail shoes"
    ],

    "Fairycore": [
        "Mary Janes",
        "Ballet flats",
        "Decorated sandals",
        "Platform Mary Janes",
        "Floral sneakers"
    ],

    "Grunge": [
        "Worn-in sneakers",
        "Combat boots",
        "Skate shoes",
        "Chunky boots",
        "Canvas high-tops"
    ],

    "Avant-Garde": [
        "Sculptural boots",
        "Platform shoes",
        "Unusual sneakers",
        "Architectural boots",
        "Deconstructed shoes"
    ],

    "Gorpcore": [
        "Trail runners",
        "Hiking boots",
        "Technical sneakers",
        "Outdoor sandals",
        "Approach-style shoes"
    ],

    "Balletcore": [
        "Ballet flats",
        "Mary Janes",
        "Ribbon sneakers",
        "Soft slip-on shoes"
    ],

    "Mod": [
        "Chelsea boots",
        "Retro loafers",
        "Geometric shoes",
        "Classic lace-up shoes"
    ]
};


/* =========================
   ACCESSORIES
========================= */

const accessories = {

    "Gothic": [
        "Choker",
        "Silver rings",
        "Layered necklaces",
        "Crossbody chain",
        "Dark pendant",
        "Black belt"
    ],

    "Bohemian": [
        "Layered bracelets",
        "Beaded necklace",
        "Pendant necklace",
        "Decorative scarf",
        "Stacked rings",
        "Woven belt"
    ],

    "Y2K": [
        "Tinted sunglasses",
        "Beaded jewelry",
        "Chain necklace",
        "Butterfly clips",
        "Small shoulder bag",
        "Graphic belt"
    ],

    "Streetwear": [
        "Crossbody bag",
        "Sunglasses",
        "Chain necklace",
        "Shoulder bag",
        "Beanie",
        "Utility belt"
    ],

    "Punk": [
        "Studded bracelet",
        "Safety-pin accessories",
        "Chain necklace",
        "Spiked bracelet",
        "Patch accessories",
        "Studded belt"
    ],

    "Victorian": [
        "Pocket watch",
        "Cameo brooch",
        "Pendant necklace",
        "Lace gloves",
        "Decorative brooch",
        "Vintage tie pin"
    ],

    "Cyberpunk": [
        "Futuristic goggles",
        "Techwear bag",
        "Utility straps",
        "Futuristic visor",
        "Utility belt",
        "Tech accessories"
    ],

    "Dark Academia": [
        "Round glasses",
        "Leather satchel",
        "Vintage watch",
        "Tie",
        "Decorative bookmark",
        "Tie clip"
    ],

    "Fairycore": [
        "Flower clips",
        "Butterfly jewelry",
        "Floral necklace",
        "Ribbon",
        "Decorative hair clips",
        "Floral bracelet"
    ],

    "Western": [
        "Bandana",
        "Western belt",
        "Turquoise-style necklace",
        "Large belt buckle",
        "Leather bracelet",
        "Bolo tie"
    ],

    "Preppy": [
        "Classic watch",
        "Tie",
        "Headband",
        "Shoulder bag",
        "Pearl-style necklace",
        "Tie clip"
    ],

    "Vintage": [
        "Vintage watch",
        "Brooch",
        "Silk scarf",
        "Round sunglasses",
        "Pendant necklace",
        "Leather belt"
    ],

    "Avant-Garde": [
        "Sculptural necklace",
        "Statement glasses",
        "Unusual bag",
        "Abstract brooch",
        "Experimental jewelry",
        "Sculptural belt"
    ],

    "Cottagecore": [
        "Woven belt",
        "Floral scarf",
        "Embroidered bag",
        "Simple pendant",
        "Ribbon",
        "Canvas satchel"
    ],

    "Balletcore": [
        "Ribbon",
        "Soft headband",
        "Small shoulder bag",
        "Delicate necklace",
        "Wrap accessory",
        "Simple bracelet"
    ],

    "Coquette": [
        "Ribbon hair accessory",
        "Bow necklace",
        "Small shoulder bag",
        "Pearl-style bracelet",
        "Decorative brooch",
        "Ribbon belt"
    ],

    "Emo": [
        "Studded belt",
        "Chain necklace",
        "Striped wristbands",
        "Dark pendant",
        "Graphic pins",
        "Crossbody bag"
    ],

    "Scene": [
        "Colorful wristbands",
        "Graphic pins",
        "Bright sunglasses",
        "Chain necklace",
        "Patterned belt",
        "Statement bag"
    ],

    "Visual Kei": [
        "Decorative necklace",
        "Statement brooch",
        "Layered chains",
        "Decorative gloves",
        "Ornate belt",
        "Statement rings"
    ],

    "Normcore": [
        "Simple watch",
        "Canvas bag",
        "Baseball cap",
        "Simple belt",
        "Sunglasses",
        "Minimal bracelet"
    ],

    "Athleisure": [
        "Sports watch",
        "Crossbody bag",
        "Baseball cap",
        "Headband",
        "Utility belt",
        "Gym-style bag"
    ],

    "Minimalist": [
        "Simple watch",
        "Minimal necklace",
        "Clean belt",
        "Structured bag",
        "Simple sunglasses",
        "Plain ring"
    ],

    "Mod": [
        "Geometric glasses",
        "Retro watch",
        "Statement brooch",
        "Color-blocked scarf",
        "Structured bag",
        "Retro belt"
    ],

    "Gorpcore": [
        "Technical backpack",
        "Trail cap",
        "Utility belt",
        "Outdoor sunglasses",
        "Carabiner accessory",
        "Technical waist bag"
    ]
};


/* =========================
   RANDOM HELPERS
========================= */

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


/* =========================
   HAT GENERATOR
========================= */

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


/* =========================
   UPPER BODY
========================= */

function generateLayers() {
    const button =
        document.getElementById("layerButton");

    button.disabled = true;

    const countResult =
        document.getElementById("layerCount");

    const roll =
        Math.random();

    let layerCount;

    if (roll < 0.15) {
        rollResult(
            countResult,
            "NO LAYERS",
            function () {
                button.textContent =
                    "LAYERS LOCKED";
            }
        );

        return;
    }

    if (roll < 0.60) {
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
            generateUpperLayerResults(
                layerCount
            );
        }
    );
}


function generateUpperLayerResults(layerCount) {
    const container =
        document.getElementById("layers");

    container.innerHTML = "";

    const layerNames = [];

    if (layerCount === 1) {
        layerNames.push("Base Layer");
    }

    if (layerCount === 2) {
        layerNames.push("Base Layer");
        layerNames.push("Outer Layer");
    }

    if (layerCount === 3) {
        layerNames.push("Base Layer");
        layerNames.push("Middle Layer");
        layerNames.push("Outer Layer");
    }

    layerNames.forEach(function (
        layerName,
        index
    ) {
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

            let database;

            if (
                layerName === "Base Layer"
            ) {
                database = upperBase;

            } else if (
                layerName === "Middle Layer"
            ) {
                database = upperMiddle;

            } else {
                database = upperOuter;
            }

            let finalResult;

            if (
                layerName === "Outer Layer" &&
                Math.random() < 0.25
            ) {
                finalResult =
                    "NO OUTER LAYER";

            } else {

                const aesthetic =
                    randomAesthetic(database);

                const item =
                    randomItem(
                        database,
                        aesthetic
                    );

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


/* =========================
   LOWER BODY
========================= */

function generateBottomLayers() {
    const button =
        document.getElementById(
            "bottomLayerButton"
        );

    button.disabled = true;

    const countResult =
        document.getElementById(
            "bottomLayerCount"
        );

    const roll =
        Math.random();

    let layerCount;

    /*
       IMPORTANT:
       There is intentionally NO
       "NO LAYERS" result here.
       Every lower-body roll gets
       at least one actual bottom.
    */

    if (roll < 0.65) {
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
            generateBottomLayerResults(
                layerCount
            );
        }
    );
}


function generateBottomLayerResults(layerCount) {
    const container =
        document.getElementById(
            "bottomLayers"
        );

    container.innerHTML = "";

    const layerNames = [];

    if (layerCount === 1) {
        layerNames.push("Base Bottom");
    }

    if (layerCount === 2) {
        layerNames.push("Base Bottom");
        layerNames.push("Overlayer");
    }

    if (layerCount === 3) {
        layerNames.push("Base Bottom");
        layerNames.push("Overlayer");
        layerNames.push(
            "Experimental Overlayer"
        );
    }

    layerNames.forEach(function (
        layerName,
        index
    ) {
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

            let database;

            if (
                layerName === "Base Bottom"
            ) {
                database = bottomBase;

            } else if (
                layerName === "Overlayer"
            ) {
                database = bottomOverlayer;

            } else {
                database = bottomOuter;
            }

            const aesthetic =
                randomAesthetic(database);

            const item =
                randomItem(
                    database,
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


/* =========================
   LEGWEAR
========================= */

function generateLegwear() {
    const button =
        document.getElementById(
            "legwearButton"
        );

    button.disabled = true;

    const result =
        document.getElementById(
            "legwear"
        );

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


/* =========================
   SHOES
========================= */

function generateShoes() {
    const button =
        document.getElementById(
            "shoesButton"
        );

    button.disabled = true;

    const result =
        document.getElementById(
            "shoes"
        );

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


/* =========================
   ACCESSORIES
========================= */

function generateAccessories() {
    const button =
        document.getElementById(
            "accessoryButton"
        );

    button.disabled = true;

    const countResult =
        document.getElementById(
            "accessoryCount"
        );

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
            generateAccessoryResults(
                count
            );
        }
    );
}


function generateAccessoryResults(count) {
    const container =
        document.getElementById(
            "accessories"
        );

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
                    randomAesthetic(
                        accessories
                    );

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


/* =========================
   NEW OUTFIT
========================= */

function resetGenerator() {
    location.reload();
}
