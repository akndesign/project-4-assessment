import './Circles.css';

const Circles = (props) => {
    console.log(props.numberID)
    //tried using an Array.map here but was more trouble than simply copying and pasting 
    return (
        <div className='Circles'>
            {[...Array(4)].map((e, i) => <div key={`circle - ${i}`} className={props.numberID === `${i}` ? 'selected' : null}>{i + 1}</div>)}
        </div >
    );
}
export default Circles;

