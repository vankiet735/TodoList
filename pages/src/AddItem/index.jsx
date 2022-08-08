import { Input, Button } from 'antd';
import {useState} from 'react';
import styled from 'styled-components';
import {todoAdded} from '../../store/todoReducer';
import { useDispatch } from 'react-redux';

const A = styled.div`
min-width: 300px;
max-width: 500px;
display: flex !important;
justify-content: center;
align-items: center;
color: white !important;
`
const InputAddItem = styled(Input)`
min-width: 300px;
outline: none;
height:30px;
border-radius: 5px;
`
const ButtonSubmit = styled(Button)`
height: 30px;
border-radius: 5px;
margin-left: 10px;
color: white !important;
&:hover {
    cursor: pointer;
    opacity: 50%;
}
`
const AddItem = () => {

    const [state, setState] = useState(''); 
    const dispatch = useDispatch();

    const addNewItem = () => {
        
        const _id = Math.floor(Math.random() * 1000);
        const data= {name: state, _id};
        if(!data.name) return;
        dispatch(todoAdded(data));
        setState('');
    }

    const getValueInput = (e) => {
        setState(e.target.value);
    };
    return (
        <A>                
            <InputAddItem placeholder='Add todo' value={state} onChange={getValueInput} />
            <ButtonSubmit type='primary' onClick={addNewItem}> Submit </ButtonSubmit>
            {/* <Button type='link'> Link </Button>
            <Button type='danger'> Danger </Button> */}
        </A>
    );
};

export default AddItem;