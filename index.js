const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=7cb1200e5df8b579f15f5f6e365855549b7ce3b6");

    data = await response.json();
   // console.log(data);
   for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

console.log(emoji);


btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
  });

