import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Tasks from './Tasks';
import {ThemeProvider} from './ThemeContext';
import {CompletedProvider} from './CompletedContext';

function renderWithProviders(ui){
    return render(
        <ThemeProvider>
            <CompletedProvider>
                {ui}
            </CompletedProvider>
        </ThemeProvider>
    );
}

test('add tasks',()=>{
    renderWithProviders(<Tasks />);

    const input = screen.getByPlaceholderText(/add task/i);
    fireEvent.change(input, {target:{value: 'Test Task'}});

    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText(/test task/i)).toBeInTheDocument();
});

test('deletes a task', ()=>{
    renderWithProviders(<Tasks />);

    const input = screen.getByPlaceholderText(/add task/i);
    fireEvent.change(input, {target: {value: 'Test Task'} });
    fireEvent.click(screen.getByText(/add/i));

    const deleteButton = screen.getAllByRole('button', {name: /delete/i})[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/test task/i)).not.toBeInTheDocument();
});
