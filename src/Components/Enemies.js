import './Enemies.css';
import { useEffect, useState } from 'react';

let enemies = [
    { name: "Monster", img: "../Images/enemy_2.png", attack: 3, health: 15, exp: 15 },
    { name: "Flaming Ghost", img: "../Images/enemy_3.png", attack: 5, health: 10, exp: 20 },
    { ame: "Strange Plant", img: "../Images/enemy_1.png", attack: 2, health: 5, exp: 10 },
    { name: "Dragon", img: "../Images/boss_1.png", attack: 7, health: 30, exp: 50 },
    { name: "Tired Monster", img: "../Images/enemy_4.png", attack: 5, health: 25, exp: 25 },
    { name: "Ghost Warrior", img: "../Images/enemy_5.png", attack: 9, health: 30, exp: 30 },
    { name: "Flaming Skull", img: "../Images/enemy_6.png", attack: 10, health: 30, exp: 40 },
    { name: "Death Reaper", img: "../Images/boss_2.png", attack: 15, health: 50, exp: 100 },
]

function Enemies(props) {

    const [name, setName] = useState(0);
    const [health, setHealth] = useState(0);
    const [attack, setAttack] = useState(0);
    const [image, setImage] = useState('');
    const [exp, setExp] = useState(0);

    useEffect(() => {
        setName(enemies[props.id].name);
        console.log(props.id);
        setHealth(enemies[props.id].health);
        setAttack(enemies[props.id].attack);
        setImage(enemies[props.id].img);
        setExp(enemies[props.id].exp);
    }, [])



    return (
        <div className='p-1 m-2 border border-3 border-secondary bg-secondary rounded text-light'>
            <h5 className='border border-2 border-secondary rounded bg-dark'>
                {name}
            </h5>
            <img width={150} height={150} src={require('"' + image + '"')} />
            <div className='border border-2 border-secondary bg-dark rounded '>
                <div className='col '>
                    <img width={35} src={require('../Images/heart.png')} className="p-2" />:{health}

                    <img width={35} src={require('../Images/sword.png')} className="offset-2 p-2" />:{attack}
                </div>
            </div>
        </div>
    );
}

export default Enemies;
