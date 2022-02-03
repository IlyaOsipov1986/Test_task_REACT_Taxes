import React, {useState} from "react";
import './Modal.css';


const Modal = ({active, setActive}) => {
    const [salary, setSalary] = useState('');
    const [taxesResult, setTaxesResult] = useState('');

    function calcSalary () {
        let taxes = Number(salary * 12) * 0.13;
        setTaxesResult(taxes);
        console.log({taxes});
        console.log({salary});
    }
    
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                <h4 className={'modal__content-title'}>Налоговый вычет</h4>
                <form>
                    <label>Введите данные
                        <input title={''} placeholder={'Введите данные'} value={salary} onChange={e => setSalary(e.target.value)}></input></label>
                <button type={"button"} onClick={() => calcSalary()}>Рассчитать</button>
                </form>
                <span>{taxesResult} рублей в 1-ый год</span>
                <span>{taxesResult} рублей во 2-ой год</span>
                <span>{taxesResult} рублей в 3-ий год</span>
                <span>{taxesResult} рублей в 4-ый год </span>
     </div>
        </div>
    )
};

export default Modal;