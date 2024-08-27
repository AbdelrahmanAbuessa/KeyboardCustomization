let base_color_2_group = document.getElementById("base-secondary");
let key_color_2_group = document.getElementById("key-secondary");
let base_color_1_txt = document.getElementById("base-clr-hex-1");
let base_color_2_txt = document.getElementById("base-clr-hex-2");
let key_color_1_txt = document.getElementById("key-clr-hex-1");
let key_color_2_txt = document.getElementById("key-clr-hex-2");
let base_pattern_menu = document.getElementById("base-ptrn");
let key_pattern_menu = document.getElementById("key-ptrn");
let base_color_1_select = document.getElementById("base-clr-1");
let base_color_2_select = document.getElementById("base-clr-2");
let key_color_1_select = document.getElementById("key-clr-1");
let key_color_2_select = document.getElementById("key-clr-2");
let layout_select = document.getElementById("layout");
let preset_name_select = document.getElementById("preset_name");

let all_keys = document.querySelectorAll(".key");
let wasd_keys_elements = document.querySelectorAll(".wasd");
let control_keys_elements = document.querySelectorAll(".control");

let wasd_keys = [];
for (let i = 0; i < wasd_keys_elements.length; i++) {
    wasd_keys.push(wasd_keys_elements[i]);
}

let control_keys = [];
for (let i = 0; i < control_keys_elements.length; i++) {
    control_keys.push(control_keys_elements[i]);
}

let base_pattern;
let key_pattern;
let base_color_1;
let base_color_2;
let key_color_1;
let key_color_2;
let layout;
let preset_name;

let base = document.getElementById("base");
let keys = document.querySelectorAll(".key");
let tkl_group = document.getElementById("tkl");

base_color_2_group.style.display = "none";
key_color_2_group.style.display = "none";

base_color_1 = "#000000";
base_color_2 = "#000000";
base_pattern = "single-color";
updateBaseColor(base_color_1, base_color_2);

key_color_1 = "#ffffff";
key_color_2 = "#ffffff";
key_pattern = "single-key";
updateKeyColor(key_color_1, key_color_2, key_pattern);

layout = "full"
editKeyboardLayout(layout);

key_color_1_select.oninput = function () {
    key_color_1 = key_color_1_select.value;
    key_color_1_txt.innerText = key_color_1;
    updateKeyColor(key_color_1, key_color_2, key_pattern);
}

key_color_2_select.oninput = function () {
    key_color_2 = key_color_2_select.value;
    key_color_2_txt.innerText = key_color_2;
    updateKeyColor(key_color_1, key_color_2, key_pattern);
}

base_color_1_select.oninput = function () {
    base_color_1 = base_color_1_select.value;
    base_color_1_txt.innerText = base_color_1;
    updateBaseColor(base_color_1, base_color_2, base_pattern);
}

base_color_2_select.oninput = function () {
    base_color_2 = base_color_2_select.value;
    base_color_2_txt.innerText = base_color_2;
    updateBaseColor(base_color_1, base_color_2, base_pattern);
}

layout_select.oninput = function () {
    layout = layout_select.value;
    editKeyboardLayout(layout);
}

function editKeyboardLayout(l) {
    if (l === "full") {
        console.log("full");
    } else if (l === "TKL") {
        console.log("TKL");
    } else if (l === "60%") {
        console.log("60%");
    }
}

function updateBaseColor(b1, b2, pattern) {
    if (pattern === "gradient-color") {
        base.style.backgroundImage = `linear-gradient(90deg, ${b1}, ${b2})`;
    } else {
        base.style.backgroundColor = b1;
    }
}

function updateKeyColor(k1, k2, pattern) {
    if (pattern === "single-key") {
        all_keys.forEach(key => {
            key.style.backgroundColor = k1;
            key.style.borderTopColor = changeHex(k1, -35);
            key.style.borderLeftColor = changeHex(k1, -35);
            key.style.borderBottomColor = changeHex(k1, -75);
            key.style.borderRightColor = changeHex(k1, -75);
        });
    } else if (pattern === "checkers-key") {
        for (let i = 0; i < all_keys.length; i++) {
            if (i % 2 === 0) {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
            } else {
                all_keys[i].style.backgroundColor = k2;
                all_keys[i].style.borderTopColor = changeHex(k2, -35);
                all_keys[i].style.borderLeftColor = changeHex(k2, -35);
                all_keys[i].style.borderBottomColor = changeHex(k2, -75);
                all_keys[i].style.borderRightColor = changeHex(k2, -75);
            }
        }
    } else if (pattern === "wasd-key") {
        for (let i = 0; i < all_keys.length; i++) {
            if (wasd_keys.includes(all_keys[i])) {
                all_keys[i].style.backgroundColor = k2;
                all_keys[i].style.borderTopColor = changeHex(k2, -35);
                all_keys[i].style.borderLeftColor = changeHex(k2, -35);
                all_keys[i].style.borderBottomColor = changeHex(k2, -75);
                all_keys[i].style.borderRightColor = changeHex(k2, -75);
            } else {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
            }
        }
    } else if (pattern === "opt-key") {
        for (let i = 0; i < all_keys.length; i++) {
            if (control_keys.includes(all_keys[i])) {
                all_keys[i].style.backgroundColor = k2;
                all_keys[i].style.borderTopColor = changeHex(k2, -35);
                all_keys[i].style.borderLeftColor = changeHex(k2, -35);
                all_keys[i].style.borderBottomColor = changeHex(k2, -75);
                all_keys[i].style.borderRightColor = changeHex(k2, -75);
            } else {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
            }
        }
    }
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r, g, b };
}
  
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
  
function changeHex(hex, d) {
    let { r, g, b } = hexToRgb(hex);
    r = Math.min(255, Math.max(0, r + d));
    g = Math.min(255, Math.max(0, g + d));
    b = Math.min(255, Math.max(0, b + d));
    return rgbToHex(r, g, b);
}
  
base_pattern_menu.oninput = function () {
    base_pattern = base_pattern_menu.value;
    if (base_pattern === "single-color") {
        base_color_2_group.style.display = "none";
    } else {
        base_color_2_group.style.display = "flex";
    }
    updateBaseColor(base_color_1, base_color_2, base_pattern);
};

key_pattern_menu.oninput = function () {
    key_pattern = key_pattern_menu.value;
    if (key_pattern === "single-key") {
        key_color_2_group.style.display = "none";
    } else {
        key_color_2_group.style.display = "flex";
    }
};

let bg = document.getElementById("black_bg");
let presets_settings = document.getElementById("presets_settings");

bg.setAttribute("hidden", "true");
presets_settings.setAttribute("hidden", "true");

document.addEventListener("click", function (e) {
    let targetElement = e.target;
    if (targetElement.id === "close_presets") {
        bg.setAttribute("hidden", "true");
        presets_settings.setAttribute("hidden", "true");
    } else if (targetElement.id === "manage") {
        bg.setAttribute("hidden", "false");
        presets_settings.setAttribute("hidden", "false");
    }
})