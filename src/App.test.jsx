import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';

// test suite (or group of tests)
describe('App component test suite', () => {

  // test case
  // can use .skip or .only 
  it('should return true', () => {
    // assertion and matcher
    expect(1 === 1).toBe(true);
  });

  // another test case
  test('that 1 is not equal to 2', () => {
    expect(1 === 2).not.toBe(true);
  });

  it('shows hello world', () => {
    render(<App />);
    //screen.debug();
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  it('has an input field', () => {
    render(<App />);    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('responds with greeting', () => {
    render(<App />);
    expect(screen.queryByText(/HOWDY JUST TESTING/)).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'just testing' },
    });
    expect(screen.queryByText(/HOWDY JUST TESTING/)).toBeInTheDocument();
  });

  test('that button is in dom', ()=>{
    render(<App />);    
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();    
  });

  test('that button click increments counter by 1', ()=>{
    render(<App />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent(/counter:0/i);    
    fireEvent.click(screen.getByRole('button'));
    expect(btn).toHaveTextContent(/counter:1/i);
  });

  test('that button click increments counter by 1 (queryBy)', ()=>{
    render(<App />);
    const btn0 = screen.queryByRole('button',{name:"counter:0"});
    expect(btn0).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    const btn1 = screen.queryByRole('button',{name:"counter:1"});
    expect(btn1).toBeInTheDocument();
    
  });

});