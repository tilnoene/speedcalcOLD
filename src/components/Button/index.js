import "./styles.css";

export default function Button({text, onClick, disabled=false}) {
    let styleButton = "btn";
    if(disabled){
        styleButton += " disabled";
    } else{
        styleButton += " enabled";
    }

    return (
        <button type="submit" onClick={onClick} className={styleButton}>{text}</button>
    );
}