import NamesList from './NamesList';
import { render, screen } from '@testing-library/react';

// test suite (or group of tests)
describe('NamesList component test suite', () => {
  const list = ['Tom','Bill'];

  test('that names list renders correctly', () => {
    render(<NamesList names={list}/>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(list.length);
  });

  
});