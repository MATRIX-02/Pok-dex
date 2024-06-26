import React from "react";
const Card = ({ pokemon, loading}) => {
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="" key={item.id}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;