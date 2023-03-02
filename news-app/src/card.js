import React from 'react';

// const Card = (details) => {
//     return (
//         <>
//             <div>
//                 {console.log(details)}
//                 <img className="card-image" src={details.url} alt="Olympic athlete Katie Zaferes" />
//             </div>
//         </>
//     )
// }
function card({ details }) {
    return (
        <>
            console.log(details);
            <div>{details[1].urlToImage}</div>
            <div>
                {console.log(details[0].urlToImage)}
                <img className="card-image" src={details[0].urlToImage} alt="Olympic athlete Katie Zaferes" />
            </div>
        </>
    )
}

export default card;
