import { Checkbox, Button, Input } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import {removeTodo, selectTodos, completeTodo, updateTodo} from '../../store/todoReducer';

const Container = styled.div`
margin-top: 10px;
min-width: 300px;
`
const Li = styled.li<{
  active: boolean;
}>`
  background: ${props=> props.active? '#F0FFF0' : 'white'};
  padding: 10px;
  list-style-type: none;
  width:40vw;
  border-top: 2px solid #E0FFFF;
  &:first-child {
    border-top: none;
  }
`

const Cli = styled.div<{
  active: boolean;
}>`
  display: flex;
  align-items:center;
  margin-top: 10px;
  // color: ${props => (props.active? 'red': 'black')};
  color: ${props => (props.active? props?.theme.font?.color?.blue?.blue_1: 'black')};
  justify-content: space-between;
`

const CInput = styled(Input)<{
  active: boolean;
}>`
  border: none;
  outline: none;
  margin-left: 10px;
  min-width: 27vw;
  color: ${props => (props.active? props?.theme.font?.color?.blue?.blue_1: 'black')};
  background-color: ${props => (props.active? '#F0FFF0': 'white')};
`

const Cdiv=styled.div` 
  display: flex;
  align-items:center;
`

const ButtonDel = styled(Button)`
border-color: #B80000;
color: white;
background: #B80000;
height: 30px;
border-radius: 5px;
margin-left: 10px;
&:hover {
    cursor: pointer;
    opacity: 50%;
    background: #B80000;
    color: white;
    border-color: #B80000	;
}
`

interface Item {
  name: string;
  id: number;
  active: boolean
}

interface TodoCompl {
  id: number;
  active: boolean
}

const ListTodo = () => {

  const [state, setState] = useState(false);
  const [stateName, setStateName] = useState('');
  

  const data:Item[] = useSelector(selectTodos);
  const dispatch = useDispatch();

  const deleteTodo = (idTodo: number) => {
    dispatch(removeTodo(idTodo));
  }

  const compTodo = (idTodo: TodoCompl) => {
    dispatch(completeTodo(idTodo));
  }

  const totalTodoComplete = (data: Item[]) => {
    let i=0;
    data.forEach((item: Item) => {
      if(item.active) i+=1;
    });
    return i;
  }

  const updatetodo=(idTodo: number, name: string) => {
    const data={id: idTodo, name }
    dispatch(updateTodo(data));
    handleCancel();
  }

  const showModal = (name: string) => {
 
    setState(true);
    setStateName(name);
  };

  const handleCancel = () => {
    setState(false);
  };

  const getValueInput = (e: any) => {
    setStateName(e.target.value);
};

  const total = totalTodoComplete(data);

    return (
      <Container>
        {
          <ul>
            {
              data?.map((item: Item)=> (
                <Li active={item?.active} key={item.id+'.'}>
                  <Cli active={item?.active}> 
                    <Cdiv>
                      <Checkbox checked={item?.active} onChange={() => compTodo({id: item?.id, active: !item?.active})} />
                      {/* <Cspan>{item?.name}</Cspan> */}
                      <CInput 
                        active={item?.active}
                        defaultValue={item?.name} 
                        onChange={getValueInput}
                        onBlur={()=>updatetodo(item?.id, stateName)}
                      />
                    </Cdiv>
                    <div>
                      {/* {
                        state && (
                          <Modal visible={state} onOk={()=>updatetodo(item?.id, stateName)} onCancel={handleCancel}> 
                            <InputSua value={stateName} onChange={getValueInput}/>
                          </Modal>
                        )
                      } */}
                      {/* <ButtonSua onClick={()=>showModal(item?.name)}> Sua </ButtonSua> */}
                      <ButtonDel onClick={()=>deleteTodo(item?.id)}> Delete </ButtonDel>
                    </div>
                 </Cli>
                </Li> 
              ))
            }
            
          </ul>
        }
       { 
        data.length>0 && (
          <div>Total Todo Completed: {data.length>0 && total} </div>
          )
        }
        
      </Container>
    );
};

export default ListTodo;