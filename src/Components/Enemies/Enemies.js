import './Enemies.css';
import { useEffect, useState } from 'react';

let enemies = [
    { name: "Strange Plant", img: "enemy_1.png", attack: 2, health: 5, exp: 10 },
    { name: "Monster", img: "enemy_2.png", attack: 3, health: 15, exp: 15 },
    { name: "Flaming Ghost", img: "enemy_3.png", attack: 5, health: 10, exp: 20 },
    { name: "Dragon", img: "boss_1.png", attack: 7, health: 30, exp: 50 },
    { name: "Tired Monster", img: "enemy_4.png", attack: 5, health: 25, exp: 25 },
    { name: "Ghost Warrior", img: "enemy_5.png", attack: 9, health: 30, exp: 30 },
    { name: "Flaming Skull", img: "enemy_6.png", attack: 15, health: 30, exp: 40 },
    { name: "Death Reaper", img: "boss_2.png", attack: 25, health: 50, exp: 100 },
]

function Enemies(props) {

    const [name, setName] = useState(enemies[props.id].name);
    const [health, setHealth] = useState(enemies[props.id].health);
    const [currentHealth, setCurrentHealth] = useState(enemies[props.id].health);
    const [attack, setAttack] = useState(enemies[props.id].attack);
    const [image, setImage] = useState(enemies[props.id].img);
    const [exp, setExp] = useState(enemies[props.id].exp);
    const [dead, setDead] = useState(false);
    const [isPlaying, setisPlaying] = useState(true);


    useEffect(() => {
        setName(enemies[props.id].name);
        setHealth(enemies[props.id].health);
        setCurrentHealth(enemies[props.id].health);
        setAttack(enemies[props.id].attack);
        setImage(enemies[props.id].img);
        setExp(enemies[props.id].exp);
    }, [props.wave])

    const Attack = () => {
        setCurrentHealth(currentHealth - props.playerAttackDamage)
    }

    const HealPlayer = () => {
        props.healPlayer(attack);

    }

    useEffect(() => {
        if (props.wave < 7) {
            if (currentHealth <= 0) {
                props.nextWave();
                props.exp(exp)
            }
        } else if (props.wave == 7) {
            if (currentHealth <= 0) {
                setDead(true)
                props.win();
            }
        }
        if (currentHealth < health) {
            props.attack(attack)
        }
    }, [currentHealth]);


    useEffect(() => {
        if (props.gameState == 1) {
            setisPlaying(false)
        }
        if(props.gameState == 2){
            setisPlaying(false)
        }
    }, [props])

    return (
        <div className='box red'>
            <div className='name'>{name}</div>
            <img className='avatar' src={require(`../../Images/${dead ? 'dead.png' : image}`)}></img>

            <div className='stats'>
                <img width={35} src={require('../../Images/heart.png')} className="p-2" />{currentHealth}/{health}

                <img width={35} src={require('../../Images/sword.png')} className="offset-2 p-2" />{attack}

            </div>

            <div className='button' onClick={isPlaying && Attack}>Attack</div>
            <div className='button green' onClick={isPlaying && HealPlayer}>Heal Player</div>
        </div>
    );
}

export default Enemies;
