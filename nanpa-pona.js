// sorted in decending order
const toki_pona_map = new Map([
  [100, "ale"],
  [20, "mute"],
  [5, "luka"],
  [3, "mute"],
  [2, "tu"],
  [1, "wan"],
  [0, "ala"]
]);

function toki_pona(number) {
  return number > 3 ? 3 : number;
}

function toki_pona_suli(number) {
  if (number == 0)
    return [0];

  const res = [];
  while (number > 0) {
    for (const element of toki_pona_map.keys()) {
      if (element == 3) continue;
      if (element <= number) {
        res.push(element);
        number -= element;
        break;
      }
    }
  }

  return res;
}

// nasin nanpa kijetesantakalu (base-6)
function kijetesantakalu(number) {
  var result = 0;

  while (number > 0) {
    number = Math.floor(number / 6);
    result += 1;
  }

  if (result < 1) result = 1;
  return Array(result).fill("kijetesantakalu");
}

function toWord(number) {
  // technically we could use the definitions from index.html,
  // but this way we don't have to worry about those being renamed
  var style_selector = document.getElementById("style-selector");
  var style_variant = document.getElementById("style-variant");

  switch (style_selector.value) {
    case "ts":
      var nums = toki_pona_suli(number);
      return (style_variant.value == "ar" ? nums : nums.map(n => toki_pona_map.get(n))).join(' ');

    case "kj":
      return kijetesantakalu(number).join(' ');

    default:
      var num = toki_pona(number)
      return style_variant.value == "ar" ? num == 3 ? "3+" : num : toki_pona_map.get(num);
  }
}
