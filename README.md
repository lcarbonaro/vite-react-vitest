## Vite + React + Vitest

### Set-up
1. npm create vite@latest
2. cd ; code . ; npm install ; npm run dev
3. clear up / simplify App component
4. npm install --save-dev 
- vitest 
- @testing-library/react 
- @testing-library/jest-dom
- happy-dom

Note: happy-dom is a JS implementation of a web browser without its graphical user interface.
   
5. add test script in package.json
- `"test":"vitest"`

6. add setupTests.js
   ```
   import { afterEach } from 'vitest';
   import { cleanup } from '@testing-library/react';
   import matchers from '@testing-library/jest-dom/matchers';
   // extends Vitest's expect method with methods from react-testing-library
   expect.extend(matchers);
   // runs a cleanup after each test case (e.g. clearing happy-dom)
   afterEach(() => {  cleanup(); });
   ```

7. add test object in vite.config.js
   ```
   test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setupTests.js',
    reporters: 'verbose'
   }```
   
8. create a test file e.g. App.test.jsx
9. a non-render test example
- `describe` test suite
- `test` or `it` test case
- `expect` assertion

10. npm run test
11. more non-render test examples
12. some render test examples
- import render, screen
- render(<App />)
- screen.debug()
- screen.getByText()
- screen.getByRole()
- screen.queryByText()
- fireEvent()


### References
- [Article by Robin Wieruch](https://www.robinwieruch.de/vitest-react-testing-library/)
- [@testing-library docs](https://testing-library.com/docs/)
- [Vitest docs](https://vitest.dev/api/expect.html)
- [Matchers](https://github.com/testing-library/jest-dom)
- [Testing Playground](https://testing-playground.com/)