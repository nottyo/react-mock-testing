import UserProfile from './UserProfile';
import userApi from '../service/user';
import { render, screen } from '@testing-library/react';

describe('UserProfile', () => {
  it('render user name success', async () => {
    // given
    const mockUser = {
      id: 1,
      name: 'nott',
      email: 'nott@test.com'
    };
    userApi.getUsers = jest.fn().mockReturnValue({
      ok: true,
      json: jest.fn().mockReturnValue(mockUser)
    });
    // when
    render(<UserProfile />);
    // then
    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent('nott');
  });
});