const params = new URLSearchParams(window.location.search);
const numero = params.get("numero");

async function drawPokemon(id) {
    const pokemon = await getPokemon("pokemon/" + id);

    document.title = `Pokemon - ${capitalizeFirstLetter(pokemon.name)}`;

    document.getElementById("anterior").innerHTML = await getPokemonAnterior(
        pokemon.id
    );
    document.getElementById("proximo").innerHTML = await getPokemonProximo(
        pokemon.id
    );

    document.querySelector("h1").innerHTML = `${pokemon.id
        .toString()
        .padStart(3, "0")} - ${capitalizeFirstLetter(pokemon.name)}`;

    let descriptions = await getPokemon("pokemon-species/" + pokemon.id);
    let description = Array.from(descriptions.flavor_text_entries).filter(
        (item) => item.language.name == "en"
    );

    document.getElementById("descricao").innerHTML =
        description[0].flavor_text.replace("\f", " ");

        document.getElementById("imgPoke").innerHTML = carousel (pokemon.sprites);
        document.getElementById("altura").innerHTML = `${pokemon.height / 10} m`;
        document.getElementById("peso").innerHTML = `${pokemon.weight / 10} kg`;
}