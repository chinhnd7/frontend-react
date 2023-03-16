# Redux - Thư viện State containers của React
Nếu project lớn thì dùng redux vẫn ngon hơn useContext()

## useContext()
- global state

## useEffect()
- có thể sử dụng nó để thay thế các function life cycle cơ bản *cụ thể như nào thì chưa bít :))*

## useMemo()
Nếu 1 expensive function sử dụng rất nhiều tài nguyên, mà chúng ta không muốn phải render lại khi không cần thiết
=> thì sử dụng useMemo.
```js
useMemo(
    () => expensiveFunction(state), [state]
  )
```
Nó sẽ lắng nghe sự thay đổi của state, state thay đổi thì expensiveFunction mới được thực thi và render

## useCallback()

```
Component parent: App ----> state (appState)
                      +---> khai báo functionApp
                   ||
                    v
Component child:  Child nhận props(abc, xyz, functionApp)
```

Khi state appState của App thay đổi, ta không muốn render lại thằng Child. Tuy nhiên khi state thay đổi, các function trong App được khai báo lại. Dẫn đến props của Child nhận vào cũng thay đổi.

Lúc này cả component Child mặc dù được bọc: 
```js
export default memo(Child) // component này chỉ render khi props nhận vào của nó thay đổi
```
Vì abc, xyz không thay đổi nên ta không cần render lại component này.

=> cách sử dụng useCallback(): Khi render lại, không khai báo lại hàm được bọc bởi useCallback, chỉ khởi tạo lại hàm này khi dependencies array thay đổi.

```js
const addTodo = useCallback(() => {
    setTodos([...todos, 'New Todo'])
  }, [todos])
```
