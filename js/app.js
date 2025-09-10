// https://pokeapi.co/api/v2/pokemon/ditto

// Hàm bất đồng bộ
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(`Height of ${data.name} is: ${data.height}`);
//     console.log("sprites: ", data.sprites.back_default);
//   })
//   .catch((error) => {
//     console.log("Loi roi", error);
//   });

// async await
async function getApi(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Loi", error);
  }
}

getApi("pikachu");
getApi("ditto");
