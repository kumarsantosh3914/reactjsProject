import React from "react";
import '../App.css'


const Card = ({ details }) => {
    // console.log(details)
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg ml-96 mt-96">
                {/* <img class="w-full h-auto" src={details[0].strMealThumb} alt="Card image" /> */}
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Card Title</div>
                    <p class="text-gray-700 text-base">
                        {/* {details[0].strInstructions} */}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Button
                    </button>
                </div>
            </div>

        </>
    )
};


export default Card;