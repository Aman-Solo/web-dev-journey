const add = (a, b) => a+b;
describe('Add function', () => {
    test('adds 5 + 3 to equal 8', () => {
        expect(add(5, 3)).toBe(8);
    });
});
describe('todo-function',() => {
    test('add task to list', () =>{
        document.body.innerHTML = '<ul id="todo-list"></ul>';
        const list = document.querySelector('#todo-list');
        const li = document.createElement('li');
        li.textContent = 'Test Task';
        list.appendChild(li);

        expect(list.children.length).toBe(1);
        expect(list.firstChild.textContent).toBe('Test Task');
    });
});

function isEven(num){
    return num%2 === 0;
}
test('return false for 1 (odd number)', () => {
    expect(isEven(1)).toBe(false);
});
test('returns true for 2 (even number)', () =>{
    expect(isEven(2)).toBe(true);
})