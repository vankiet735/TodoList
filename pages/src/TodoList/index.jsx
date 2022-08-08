import React from "react";
import AddItem from "../AddItem";
import Todo from '../Todo';
import styled from 'styled-components';

const TodoList = () => {
    const Container = styled.div`
        background: #E0FFFF;
        width: 50vw;
        height: 70vh;
        padding: 20px;
    `

    const Ccon = styled.div` 
        background: white;
        height: 100%;
        padding: 20px;
    `

    const Cspan = styled.span`
        font-weight: 700;
        font-size: 25px;
    `
    return (
        <Container>
            <Ccon>
                <Cspan>Todo List</Cspan>
                <AddItem />
                <Todo />
            </Ccon>
        </Container>
    )
}

export default TodoList;