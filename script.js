const emojiDictionary = {
    "happy": "😊",
    "sad": "😢",
    "love": "❤️",
    "angry": "😡",
    "laugh": "😂",
    "cool": "😎",
    "hello": "👋",
    "fire": "🔥",
    "star": "⭐",

    "😊": "Happy",
    "😢": "Sad",
    "❤️": "Love",
    "😡": "Angry",
    "😂": "Laugh",
    "😎": "Cool",
    "👋": "Hello",
    "🔥": "Fire",
    "⭐": "Star"
};

function translateEmoji() {
    let input = document.getElementById("inputText").value.toLowerCase();
    let words = input.split(" ");
    let result = "";

    for (let word of words) {
        if (emojiDictionary[word]) {
            result += emojiDictionary[word] + " ";
        } else {
            result += word + " ";
        }
    }

    document.getElementById("output").innerText = result;
}
