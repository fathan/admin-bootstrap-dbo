import { render, screen } from '@testing-library/react';
import LoadingPage from '@/components/Public/LoadingPage';

describe('Loading Page Component', () => {
  it('Render <LoadingPage />', () => {
    render(<LoadingPage />);

    expect(screen.getByText(/Please wait/i)).toBeInTheDocument()
  });
});