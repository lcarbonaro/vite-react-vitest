import App from "./App";
import { render, screen } from '@testing-library/react';

// test suite or group of tests
describe('Test Suite for App Component', ()=>{

  // test case
  test('that 1 + 1 = 2', ()=>{

    // assertion
    expect( 1 + 1).toBe(2);

  });

  // test case
  test('that null equals false', ()=>{

    // assertion
    expect( null ).not.toBe(true);
    
  });


  // test case
  test('that the App component is rendered', ()=>{

    render(<App />);
    //screen.debug();
    screen.getByText('hello',{exact:false});
    
  });
 

  // other test cases

});