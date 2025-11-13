import React from 'react';
import {render, screen, fireEvent}from '@testing-library/react';
import Tasks from './Tasks';

test('add task', ()=>{
    render(<Tasks />);
    const input = screen.getByPlaceholderText('Add task');
    fireEvent.change(input, {target: {value: 'test Task'}});
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
});
