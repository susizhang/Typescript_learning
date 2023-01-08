// Define type of obj

type LyricType = {
  time: number;
  text: string;
};

const parseLyric = (lyric: string): LyricType[] => {
  const lyrics: LyricType[] = [];
  lyrics.push({ time: 1111, text: "Today is a nice day" });
  return lyrics;
};

const lyricInfos = parseLyric("fadafadsy");

for (const item of lyricInfos) {
  console.log(item.time, item.text);
}

// Anonymous Function
const names: string[] = ["abc", "cba", "mecci"];
names.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
