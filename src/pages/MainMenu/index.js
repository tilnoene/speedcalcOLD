import Button from '../../components/Button';

import './styles.css'

export default function MainMenu() {
    return (
        <div className="mainmenu">
            <h1>SPEEDCALC</h1>
            <p>Quem faz cálculos mais rápido?</p>
            <Button text="PLAY"/>
            <Button text="MULTIPLAYER"/>
        </div>
    );
}