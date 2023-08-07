import './Player.css';
import { useEffect, useState } from 'react';

function Player(props) {

    const [name, setName] = useState();
    const [health, setHealth] = useState();
    const [maxHealth, setMaxHealth] = useState();
    const [attack, setAttack] = useState();
    const [exp, setExp] = useState();
    const [level, setLevel] = useState();
    const [lowHealth, setLowHealth] = useState(false);
    const [isDead, setIsDead] = useState(false);

    useEffect(() => {
        setName(props.name);
        setHealth(props.health);
        setMaxHealth(props.maxHealth);
        setAttack(props.attack);
        setExp(props.exp);
        setLevel(props.level);
    }, [props])

    useEffect(() => {
        if (health < (maxHealth * 0.35)) {
            setLowHealth(true);
            props.setPlayerLowHealth(true);
        } else {
            setLowHealth(false);
            props.setPlayerLowHealth(false);
        }
    }, [health])

    useEffect(() => {
        console.log(props.gameState)

        if (props.gameState == 2) {
            setIsDead(true);
        }
    }, [props])

    return (
        <div className={`box text-light ${lowHealth ? 'lowHealth' : ''} `}>
            <div className='name'>{name}</div>
            <img className='avatar' src={require(`../../Images/${isDead ? 'dead' : 'heart'}.png`)}></img>

            <div className='stats'>
                <img width={35} src={require('../../Images/heart.png')} className="p-2" />{health}/{maxHealth}

                <img width={35} src={require('../../Images/sword.png')} className="offset-2 p-2" />{attack}
            </div>
            <div className='name'>Level: {level}</div>
            <div className='name'>Experience: {exp}</div>

        </div>
    );
}

export default Player;
