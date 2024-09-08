import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Task Master Application', () => {
  it('should render the Task Master title', () => {
    render(<App />);
    expect(screen.getByText(/Task Master/i)).toBeInTheDocument();
  });


  it('should allow users to add a task', async () => {
    const user = userEvent.setup();
    render(<App />);


    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);


    await user.type(input, 'New Task');
    await user.click(addButton);


    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });


  it('should allow users to toggle task completion', async () => {
    const user = userEvent.setup();
    render(<App />);


    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);


    await user.type(input, 'Complete Task');
    await user.click(addButton);


    const task = screen.getByText(/Complete Task/i);
    await user.click(task);


    expect(task).toHaveStyle('text-decoration: line-through');
  });


  it('should allow users to delete a task', async () => {
    const user = userEvent.setup();
    render(<App />);


    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Task/i);


    await user.type(input, 'Delete Task');
    await user.click(addButton);


    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    await user.click(deleteButton);


    expect(screen.queryByText(/Delete Task/i)).not.toBeInTheDocument();
  });
});