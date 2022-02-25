import { rest } from 'msw';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
    return res(ctx.json({ id: req.params.id, name: 'nott', email: 'nott@test.com' }));
  }),
];

export default handlers;