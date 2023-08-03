import { render, screen } from '@testing-library/react';
import SectionTitleTop from '@/components/Admin/Common/SectionTitleTop';

describe('Test Component Section Title Top', () => {
  it('should render component <SectionTitleTop title="Form Basic" />', () => {
    const title = 'Form Basic';
    render(<SectionTitleTop title={title} />);
    const titleElement = screen.getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render component <SectionTitleTop title="Form Validation" />', () => {
    const title = 'Form Validation';
    render(<SectionTitleTop title={title} />);
    const titleElement = screen.getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render component <SectionTitleTop title="Form Adcanced" />', () => {
    const title = 'Form Adcanced';
    render(<SectionTitleTop title={title} />);
    const titleElement = screen.getByText(title);

    expect(titleElement).toBeInTheDocument();
  });
});