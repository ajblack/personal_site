import { render, screen } from '@testing-library/react';
import App from './App';

describe("main app testing",()=>{
  beforeEach(()=>{
    render(<App/>)
  })
  test('renders Austin Blackman on the page', () => {
    const linkElement = screen.getByText('Austin Blackman');
    expect(linkElement).toBeInTheDocument();
  });
  test('footer has a link to the github source code',()=>{
    //const github_link = screen.getByTestId('app_footer')
    const github_link = screen.getByText(/see my code/i)
    expect(github_link).toBeInTheDocument();
    expect(github_link.href).toBe('https://github.com/ajblack/personal_site');
  });
})
