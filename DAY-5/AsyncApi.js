// =======================
// EMOJIHUB API
// =======================

async function getEmojiGroups() {
  try {
    const r = await fetch("https://emojihub.yurace.pro/api/groups");
    const d = await r.json();
    
    const arr = Array.isArray(d) ? d : [];
    
    const result = arr
      .filter(g => g.includes('face'))     // keep only groups with "face"
      .map(g => g.replace('-', ' '));      // "face-positive" -> "face positive"
    
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getEmojiGroups();

// =======================
// RANDOM USER API
// =======================

async function getRandomUsers() {
  try {
    let r = await fetch("https://randomuser.me/api/?results=10");
    let obj = await r.json();

    let result = obj.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getRandomUsers();


// =======================
//  POKEMON API
// =======================

async function getPokemon() {
  try {
    let r = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    let obj = await r.json();

    let result = obj.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getPokemon();

// =======================
//  DOG FACTS API
// =======================

async function getDogFacts() {
  try {
    let r = await fetch("https://dogapi.dog/api/v2/facts");
    let obj = await r.json();

    let result = obj.data
      .map(d => d.attributes.body);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getDogFacts();

// =======================
// CAT FACTS API
// =======================

async function getCatFacts() {
  try {
    let r = await fetch("https://catfact.ninja/facts");
    let obj = await r.json();

    let result = obj.data
      .filter(f => f.length < 50)
      .map(f => f.fact);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCatFacts();

// =======================
// COUNTRIES 
// =======================

async function fetchCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    const result = countries
      .filter(c => c.population > 100000000)
      .map(c => ({
        name: c.name.common,
        population: c.population
      }));

    console.log("Countries:", result);
  } catch (err) {
    console.error(err);
  }
}
fetchCountries();

// =======================
// QUOTES 
// =======================
async function getQuotes() {
  try {
    const res = await fetch("https://zenquotes.io/api/quotes");
    const data = await res.json();

    const result = data
      .filter(q => q.q.length < 100)
      .map(q => q.q);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getQuotes();


// =======================
// UNIVERSITIES 
// =======================
async function getUniversities() {
  try {
    const res = await fetch("http://universities.hipolabs.com/search?country=India");
    const data = await res.json();

    const result = data
      .filter(u => u.name.includes("Technology"))
      .map(u => u.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUniversities();
