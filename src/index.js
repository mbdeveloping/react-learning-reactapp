import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const players = [
    {
        name: "Mantvydas",
        score: 80
    },
    {
        name: "Vaiva",
        score: 75
    },
    {
        name: "Sandra",
        score: 70
    },
    {
        name: "Ranjan",
        score: 65
    }
]

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );    
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>

            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
         </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length}
            />
            {/* Players List */}
            {props.initialPlayers.map(player => 
                <Player 
                    name={player.name} 
                    score={player.score} 
                 />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
