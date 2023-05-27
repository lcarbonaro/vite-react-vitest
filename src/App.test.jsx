import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';

// test suite (or group of tests)
describe('App component test suite', () => {

  // test case
  it('should return true', () => {
    // assertion
    expect(1 === 1).toBe(true);
  });

  // another test case
  test('that 1 is not equal to 2', () => {
    expect(1 === 2).not.toBe(true);
  });

  it('shows hello world', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/hello world/)).toBeTruthy();
  });

  it('has an input field', () => {
    render(<App />);
    //screen.debug();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('responds with greeting', () => {
    render(<App />);
    expect(screen.queryByText(/HOWDY JUST TESTING/)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'just testing' },
    });
    expect(screen.queryByText(/HOWDY JUST TESTING/)).not.toBeNull();
  });


  test('that button increments counter by 1', ()=>{
    render(<App />);
    expect(screen.getByText(/counter:0/)).toBeTruthy();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/counter:1/)).toBeTruthy();
  });

});