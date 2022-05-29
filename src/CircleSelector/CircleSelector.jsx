import './CircleSelector.css';

const CircleSelector = (props) => {

    return (
        <div className='CircleSelector'>
            {[...Array(4)].map((e, i) => <button value={i} className={props.numberID === `${i}` ? 'selected' : null} onClick={props.handleOnClick}>{props.numberID === `${i}` ? `Circle ${i + 1} Selected` : `Select Circle ${i + 1}`}</button>)}
        </div >
    );
}

export default CircleSelector;