import React, { useState } from 'react';
import {
    FaHandRock,
    FaHandPaper,
    FaHandScissors,
    FaHandLizard,
    FaHandSpock
} from 'react-icons/fa';
import '../App.css'

const actions = {
    rock: ["scissors", "lizard"],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['scissors', 'rock'],
    lizard: ['paper', 'spock'],
};


function randomAction() {
    const keys = Object.keys(actions);
    const idx = Math.floor(Math.random() * keys.length);

    return keys[idx];
}


function calculateWinner(action1, action2) {
    // this is the tie case
    if (action1 === action2) {
        return 0;
    } else if (actions[action1].includes(action2)) { // this is the Wining case
        return -1;
    } else if (actions[action2].includes(action1)) { // this is the lose case
        return 1;
    }

    // this should be never happens
    return null;
}


function ActionIcon({ action, ...props }) {
    const icons = {
        rock: FaHandRock,
        paper: FaHandPaper,
        scissors: FaHandScissors,
        lizard: FaHandLizard,
        spock: FaHandSpock,
    };

    const Icon = icons[action];
    return <Icon {...props} />
}

function Player({ name = "User", score = 0, action = "rock" }) {
    return (
        <div className='player'>
            <div className='score'>{`${name}: ${score}`}</div>
            <div className='action'>
                {
                    action && <ActionIcon action={action} size={60} />
                }
            </div>
        </div>
    );
};


function ActionButton({ action = "rock", onActionSelected }) {
    return (
        <button className='round-btn' onClick={() => onActionSelected(action)}>
            <ActionIcon action={action} size={20} />
        </button>
    );
};

// this function show the winner
function ShowWinner({ winner = 0 }) {
    const text = {
        "-1": "You Win!",
        0: "It's a Tie",
        1: "You Lose!"
    };

    return (
        <h2>{text[winner]}</h2>
    )
}


const RockPaperScissors = () => {

    const [userAction, setUserAction] = useState("");
    const [computerAction, setComputerAction] = useState("");

    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState(0);

    const onActionSelected = (selectedAction) => {
        const newComputerAction = randomAction();

        setUserAction(selectedAction);
        setComputerAction(newComputerAction);

        const newWinner = calculateWinner(selectedAction, newComputerAction);
        setWinner(newWinner);
        if (newWinner === -1) {
            setUserScore(userScore + 1);
        } else if (newWinner === 1) {
            setComputerScore(computerScore + 1);
        }
    };

    return (
        <>
            <div className='text-center text-lg mt-80'>
                <h1 className='m-0 bg-gradient-to-r'>Rock Paper Scissors</h1>
                <div>
                    <div className='container'>
                        <Player name="User" score={userScore} action={userAction} />
                        <Player
                            name="Computer"
                            score={computerScore}
                            action={computerAction}
                        />
                    </div>
                    <div>
                        <ActionButton action='rock' onActionSelected={onActionSelected} />
                        <ActionButton action='paper' onActionSelected={onActionSelected} />
                        <ActionButton action='scissors' onActionSelected={onActionSelected} />
                        <ActionButton action='lizard' onActionSelected={onActionSelected} />
                        <ActionButton action='spock' onActionSelected={onActionSelected} />
                    </div>
                    <ShowWinner winner={winner} />
                </div>
            </div>
        </>
    )
}

export default RockPaperScissors;