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

let base_pattern;
let key_pattern;
let base_color_1;
let base_color_2;

let base = document.getElementById("base");
let keys = document.querySelectorAll(".key");
let tkl_group = document.getElementById("tkl");

base_color_2_group.style.display = "none";
key_color_2_group.style.display = "none";
base_pattern = "single-color";
key_pattern = "single-key";

base_color_1_select.oninput = function () {
    base_color_1 = base_color_1_select.value;
    base_color_1_txt.innerText = base_color_1;
    updateBaseColor(base_color_1, base_color_2);
}

// Base Pattern Menu Selection Color Settings
base_pattern_menu.oninput = function () {
    base_pattern = base_pattern_menu.value;
    if (base_pattern === "single-color") {
        base_color_2_group.style.display = "none";
    } else {
        base_color_2_group.style.display = "flex";
    }
};

// Key Pattern Menu Selection Color Settings
key_pattern_menu.oninput = function () {
    key_pattern = key_pattern_menu.value;
    if (key_pattern === "single-key") {
        key_color_2_group.style.display = "none";
    } else {
        key_color_2_group.style.display = "flex";
    }
};

// Presets Menu Layover Settings
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