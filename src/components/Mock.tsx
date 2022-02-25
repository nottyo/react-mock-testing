export const mockComponentPropsSpy = jest.fn();

export default function MockComponent<T>(props: T) {
  mockComponentPropsSpy(props);
  return (
    <div>
      <span data-testid="mock-props">{JSON.stringify(props)}</span>
    </div>
  );
}