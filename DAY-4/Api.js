//EmojiHub 
  fetch("https://emojihub.yurace.pro/api/groups")
 .then(r => r.json())
 .then(d => Array.isArray(d)? d : [])
 .then(a => a.filter(g => g.includes('face'))) // keep only groups with "face"
 .then(a => a.map(g => g.replace('-', ' '))) // "face-positive" -> "face positive"
 .then(console.log)
 .catch(console.error);
 
 // Cat Facts
// fetch("https://catfact.ninja/facts")
//   .then(res => res.json())
//   .then(result => result.data)                // get the array
//   .then(facts => facts.filter(f => f.length < 50)) // filter
//   .then(facts => facts.map(f => f.fact))     // map
//   .then(data => console.log(data))
//   .catch(err => console.error("Error:", err));

//   Pokémon — PokeAPI
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//   .then(r => r.json())
//   .then(obj => obj.results)
//   .then(arr => arr.filter(p => p.name.startsWith("b")))
//   .then(arr => arr.map(p => p.name))
//   .then(console.log);

//    Space People — Open Notify
//   fetch("http://api.open-notify.org/astros.json")
//   .then(r => r.json())
//   .then(obj => obj.people)
//   .then(arr => arr.map(p => p.name))
//   .then(console.log);

//   Quotes — Quotable
//  fetch("https://zenquotes.io/api/quotes")
//   .then(r => r.json())
//   .then(arr => arr.filter(q => q.q.length < 100))
//   .then(arr => arr.map(q => q.q))
//   .then(console.log)
//   .catch(console.error);

  // Universities — Hipolabs Universities API
// fetch("http://universities.hipolabs.com/search?country=India")
//   .then(r => r.json())
//   .then(arr => arr.filter(u => u.name.includes("Technology")))
//   .then(arr => arr.map(u => u.name))
//   .then(console.log);

  //Dog Facts — Dog API
// fetch("https://dogapi.dog/api/v2/facts")
//   .then(r => r.json())
//   .then(obj => obj.data)
//   .then(arr => arr.map(d => d.attributes.body))
//   .then(console.log);

  //Crypto — CoinGecko
// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
//   .then(r => r.json())
//   .then(arr => arr) // already array
//   .then(arr => arr.filter(c => c.current_price > 1000))
//   .then(arr => arr.map(c => c.name))
//   .then(console.log);

  //Random Users — Random User Generator
// fetch("https://randomuser.me/api/?results=10")
//   .then(r => r.json())
//   .then(obj => obj.results)
//   .then(arr => arr.filter(u => u.gender === "female"))
//   .then(arr => arr.map(u => u.name.first))
//   .then(console.log);

  // Countries — REST Countries
fetch("https://restcountries.com/v3.1/all?fields=name,population")
  .then(r => r.json())
  .then(d => Array.isArray(d) ? d : [])
  .then(a => a.filter(c => c.population > 100000000))
  .then(a => a.map(c => c.name.common))
  .then(console.log)
  .catch(console.error);

//   Books — Open Library
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId === 1))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);

  