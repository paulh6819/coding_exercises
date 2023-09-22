import { readParseCSV } from "./CSVParser.js";

const billBoardData = readParseCSV("billboard100_2000.csv");

//What artist had the most songs chart in 2000, and what were those songs?

//1. input - song data, output - object with the artist and most songs that chart in 2000. 2. make a function
//creats a larger object that keeps track of every artist and song and this will be a dictionary, and the song value
// will be anset arry. 3. then i will sort each artist based on the size of the set, and then return the zero index

const songData = [
  "hey hey hey",
  "howre you do'n?",
  "hey hey hey",
  "I see ur OUT TONIGHT",
];

const testData = {
  // song: "Go On",
  "George Strait": new Set(songData),
};

const testData2 = [
  {
    rank: "98",
    song: "I Know",
    artist: "Sunday",
    "last-week": "",
    "peak-rank": "98",
    "weeks-on-board": "1",
    date: "2000-12-30",
  },
  //   {
  //     rank: "99",
  //     song: "Feels Like Love",
  //     artist: "Vince Gill",
  //     "last-week": "91",
  //     "peak-rank": "52",
  //     "weeks-on-board": "18",
  //     date: "2000-12-30",
  //   },
];

function artistWithMostCharted(data) {
  const artistObj = data.reduce((acc, item) => {
    const artistKey = item["artist"];

    const itemSong = item["song"];

    if (!acc[artistKey]) {
      acc[artistKey] = new Set([itemSong]);
    } else {
      acc[artistKey].add(itemSong);
    }

    return acc;
  }, {});

  return Object.entries(artistObj).sort((a, b) => b[1].size - a[1].size)[0];
}

console.log(artistWithMostCharted(billBoardData));

//console.log(testData);
//{
//     rank: '96',
//     song: 'All Good?',
//     artist: 'De La Soul Featuring Chaka Khan',
//     'last-week': '96',
//     'peak-rank': '96',
//     'weeks-on-board': '2',
//     date: '2000-12-30'
//   }
console.log(billBoardData);

function songOnCharts27Weeks(data) {
  const songsWeeks = data.reduce((acc, item) => {
    if (!acc[item["song"]]) {
      acc[item["song"]] = 1;
    } else {
      acc[item["song"]] += 1;
    }
    return acc;
  }, {});
  let sortedSongs = Object.entries(songsWeeks).sort((a, b) => b[1] - a[1]);
  return sortedSongs.filter((song) => song[1] > 26);
}
console.log(songOnCharts27Weeks(billBoardData));
