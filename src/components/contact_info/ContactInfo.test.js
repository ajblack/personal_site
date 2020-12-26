import { render, screen } from '@testing-library/react';
import ContactInfo from './ContactInfo.jsx';

describe('Contact Info component testing',()=>{
  let container;
  beforeEach(()=>{
    container = render(<ContactInfo/>)
  })

  test('Contact Info component renders',()=>{
    expect(container.getByText(/austin blackman/i)).toBeInTheDocument();
  })

  test('Resume link is set up with URL',()=>{
    const resume_link = container.getByText(/resume/i);
    expect(resume_link.href).toContain('austin_blackman_resume.pdf')
  })
})
