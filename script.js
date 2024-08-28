let base = document.getElementById("base");
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
let preset_list_menu = document.getElementById("presets_list");

let all_keys = document.querySelectorAll(".key");
let wasd_keys_elements = document.querySelectorAll(".wasd");
let control_keys_elements = document.querySelectorAll(".control");

let selected_preset;

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

let all_presets = [];

let tkl_group = document.getElementById("tkl");
let function_row = document.getElementById("f69");
let functionality_group = document.getElementById("function");

base_color_2_group.style.display = "none";
key_color_2_group.style.display = "none";

base_color_1 = "#000000";
base_color_2 = "#000000";
base_pattern = "single-color";
updateBaseColor(base_color_1, base_color_2, base_pattern);

key_color_1 = "#ffffff";
key_color_2 = "#ffffff";
key_pattern = "single-key";
updateKeyColor(key_color_1, key_color_2, key_pattern);

layout = "full"
editKeyboardLayout(layout);

preset_name_select.oninput = function () {
    preset_name = preset_name_select.value;
}

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
        tkl_group.style.display = "block";
        function_row.style.display = "flex";
        functionality_group.style.display = "flex";
        base.style.width = "calc(459px * 2)";
        base.style.height = "calc(128px * 2)";
    } else if (l === "TKL") {
        tkl_group.style.display = "none";
        function_row.style.display = "flex";
        functionality_group.style.display = "flex";
        base.style.width = "calc(375px * 2)";
        base.style.height = "calc(128px * 2)";
    } else if (l === "60%") {
        tkl_group.style.display = "none";
        function_row.style.display = "none";
        functionality_group.style.display = "none";
        base.style.width = "calc(300px * 2)";
        base.style.height = "calc(105px * 2)";
    }
}

function updateBaseColor(b1, b2, pattern) {
    if (pattern === "gradient-color") {
        base.style.backgroundImage = `linear-gradient(90deg, ${b1}, ${b2})`;
        base.style.backgroundColor = `none`;
    } else {
        base.style.backgroundColor = b1;
        base.style.backgroundImage = `none`;
    }
}

function getContrastYIQ(hexcolor){
    let r = parseInt(hexcolor.substring(1,3),16);
    let g = parseInt(hexcolor.substring(3,5),16);
    let b = parseInt(hexcolor.substring(5,7),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

function updateKeyColor(k1, k2, pattern) {
    if (pattern === "single-key") {
        all_keys.forEach(key => {
            key.style.backgroundColor = k1;
            key.style.borderTopColor = changeHex(k1, -35);
            key.style.borderLeftColor = changeHex(k1, -35);
            key.style.borderBottomColor = changeHex(k1, -75);
            key.style.borderRightColor = changeHex(k1, -75);
            key.style.color = getContrastYIQ(k1);
        });
    } else if (pattern === "checkers-key") {
        for (let i = 0; i < all_keys.length; i++) {
            if (i % 2 === 0) {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
                all_keys[i].style.color = getContrastYIQ(k1);
            } else {
                all_keys[i].style.backgroundColor = k2;
                all_keys[i].style.borderTopColor = changeHex(k2, -35);
                all_keys[i].style.borderLeftColor = changeHex(k2, -35);
                all_keys[i].style.borderBottomColor = changeHex(k2, -75);
                all_keys[i].style.borderRightColor = changeHex(k2, -75);
                all_keys[i].style.color = getContrastYIQ(k2);
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
                all_keys[i].style.color = getContrastYIQ(k2);
            } else {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
                all_keys[i].style.color = getContrastYIQ(k1);
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
                all_keys[i].style.color = getContrastYIQ(k2);
            } else {
                all_keys[i].style.backgroundColor = k1;
                all_keys[i].style.borderTopColor = changeHex(k1, -35);
                all_keys[i].style.borderLeftColor = changeHex(k1, -35);
                all_keys[i].style.borderBottomColor = changeHex(k1, -75);
                all_keys[i].style.borderRightColor = changeHex(k1, -75);
                all_keys[i].style.color = getContrastYIQ(k1);
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
    updateKeyColor(key_color_1, key_color_2, key_pattern);
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
        displayPresets();
    } else if (targetElement.id === "save") {
        createPreset();
        displayPresets();
        bg.setAttribute("hidden", "true");
        presets_settings.setAttribute("hidden", "true");
    } else if (targetElement.id === "del") {
        deletePreset(selected_preset);
        displayPresets();
        bg.setAttribute("hidden", "true");
        presets_settings.setAttribute("hidden", "true");
    } else if (targetElement.id === "load") {
        loadPreset(selected_preset);
    } else if (targetElement.getAttribute("type") === "radio") {
        selected_preset = targetElement.id - 1;
    }
})

function displayPresets() {
    preset_list_menu.innerHTML = "";

    for (let i = 0; i < all_presets.length; i++) {
        let preset = document.createElement("div");
        preset.id = i;
        preset.className = "preset";
        preset.innerHTML = 
        `
            <div class="preset" id="${i + 1}">
                <div class="preset_name">
                    <div id="preset_number" class="preset_number">${i + 1}-</div>
                    <div class="name">${all_presets[i].name_preset}</div>
                </div>
                <div class="preset_section">
                    <label for="select">Select Preset</label>
                    <input type="radio" name="select" id="${i + 1}">
                </div>
            </div>
        ` 
        preset_list_menu.appendChild(preset);
    }
}

function createPreset() {
    let preset = new Object({
        name_preset: preset_name,
        base_pattern_preset: base_pattern,
        key_pattern_preset: key_pattern,
        base_color_1_preset: base_color_1,
        base_color_2_preset: base_color_2,
        key_color_1_preset: key_color_1,
        key_color_2_preset: key_color_2,
        layout_preset: layout,
    })
    all_presets.push(preset);
}

function deletePreset(id) {
    all_presets.splice(id, 1);
    displayPresets();
}

function loadPreset(id) {
    if (id === undefined) {
        alert("Please Select A Preset To Load");
    } else {
        bg.setAttribute("hidden", "true");
        presets_settings.setAttribute("hidden", "true");
        preset_name = all_presets[id].name_preset;
        preset_name_select.value = all_presets[id].name_preset;
        base_pattern = all_presets[id].base_pattern_preset;
        base_pattern_menu.value = all_presets[id].base_pattern_preset;
        key_pattern = all_presets[id].key_pattern_preset;
        key_pattern_menu.value = all_presets[id].key_pattern_preset;
        base_color_1 = all_presets[id].base_color_1_preset;
        base_color_1_txt.value = all_presets[id].base_color_1_preset;
        base_color_1_select.value = all_presets[id].base_color_1_preset;
        base_color_2 = all_presets[id].base_color_2_preset;
        base_color_2_txt.value = all_presets[id].base_color_2_preset;
        base_color_2_select.value = all_presets[id].base_color_2_preset;
        key_color_1 = all_presets[id].key_color_1_preset;
        key_color_1_txt.value = all_presets[id].key_color_1_preset;
        key_color_1_select.value = all_presets[id].key_color_1_preset;
        key_color_2 = all_presets[id].key_color_2_preset;
        key_color_2_txt.value = all_presets[id].key_color_2_preset;
        key_color_2_select.value = all_presets[id].key_color_2_preset;
        layout = all_presets[id].layout_preset;
        layout_select.value = all_presets[id].layout_preset;
        if (base_pattern === "single-color") {
            base_color_2_group.style.display = "none";
        } else {
            base_color_2_group.style.display = "flex";
        }
        if (key_pattern === "single-key") {
            key_color_2_group.style.display = "none";
        } else {
            key_color_2_group.style.display = "flex";
        }
        updateBaseColor(base_color_1, base_color_2, base_pattern);
        updateKeyColor(key_color_1, key_color_2, key_pattern);
        editKeyboardLayout(layout);
    }
}