import { render, screen } from '@testing-library/react';
import { rest, server } from '../tests/server';
import UserProfile from './UserProfile';

describe('UserProfile MSW', () => {

  it('render user name success with msw', async () => {
    // when
    render(<UserProfile />);
    // then
    expect(await screen.findByText('nott')).toBeInTheDocument();
  });

  it('render errors when api errors', async () => {
    // given
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'error' }));
      }),
    );
    // when
    render(<UserProfile />);
    // then
    expect(await screen.findByText('Internal Server Error')).toBeInTheDocument();
  });
});