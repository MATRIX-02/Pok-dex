import React from "react";

const Pokeinfo = ({ data }) => {
  const { name, abilities, stats } = data;

  const formatname = (names) => {
    if (!names) return "";
    return names.charAt(0).toUpperCase() + names.slice(1);
  };

  return (
    <>
      {data.length == 0 ? (
        <h1 className="text-2xl text-red-600">Pokemon does not exists!!!</h1>
      ) : (
        <div className="w-full flex justify-around">
          <div className="w-3/4 flex flex-col justify-center items-center">
            <img
              className="w-full h-96 object-contain"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
            <h1 className="text-3xl font-extrabold ">{formatname(name)}</h1>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-baseline">
            <div className="">
              <h1 className="text-xl font-extrabold">Abilities</h1>
              {abilities &&
                abilities.map((poke) => {
                  return <h2>{formatname(poke.ability.name)}</h2>
                })}
            </div>
            <div className="">
              {stats &&
                stats.map((poke) => {
                  return (
                    <>
                      <h1 className="text-xl font-extrabold">
                        {formatname(poke.stat.name)} <br />
                      </h1>
                      {poke.base_stat}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Pokeinfo;
