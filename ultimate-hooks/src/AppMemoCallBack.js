import React, { useState, memo, useMemo, useCallback } from 'react'

function AppMemoCallBack() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  // const calculationResult = useMemo(
  //   () => expensiveCalculation(count), [count]
  // )

  const increment = () => {
    setCount(count + 1)
  }

  const addTodo = useCallback(() => {
    setTodos([...todos, 'New Todo'])
  }, [todos])

  return <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr />
    <div>
      Count: {count}
      <br />
      {/* Calculation Result: {calculationResult}
      <br /> */}
      <button onClick={increment} className='btn'>INCREMENT</button>
    </div>
  </>
}

const Todos = memo(({ todos, addTodo }) => {
  console.log('TODOS RENDERED')

  return <>
    <h1>MY TODOS</h1>
    {
      todos.map((todo, index) =>
        <p key={index}>
          {todo}
        </p>)
    }
    <br />
    <button onClick={addTodo} className='btn'>Add Todo</button>

  </>
}
) // export default memo(Todos)

// const expensiveCalculation = (count) => {
//   console.log('CALCULATING')

//   for (let i = 0; i < 1000000000; i++) {
//     count += 1
//   }

//   console.log('DONE CALCULATION!!!')
//   return count
// }

export default AppMemoCallBack