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

let all_keys = document.querySelectorAll(".key");
let wasd_keys = document.querySelectorAll(".wasd");
let control_keys = document.querySelectorAll(".control");

let base_pattern;
let key_pattern;
let base_color_1;
let base_color_2;
let key_color_1;
let key_color_2;

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
key_color_2 = "#000000";
key_pattern = "single-key";
updateKeyColor(key_color_1, key_color_2, key_pattern);


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
            
        });
    }
}

function hexToHSL(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      r = parseInt(result[1], 16);
      g = parseInt(result[2], 16);
      b = parseInt(result[3], 16);
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max == min){
        h = s = 0; // achromatic
      }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
    var HSL = new Object();
    HSL['h']=h;
    HSL['s']=s;
    HSL['l']=l;
    return HSL;
}

// Base Pattern Menu Selection Color Settings
base_pattern_menu.oninput = function () {
    base_pattern = base_pattern_menu.value;
    if (base_pattern === "single-color") {
        base_color_2_group.style.display = "none";
    } else {
        base_color_2_group.style.display = "flex";
    }
    updateBaseColor(base_color_1, base_color_2, base_pattern);
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