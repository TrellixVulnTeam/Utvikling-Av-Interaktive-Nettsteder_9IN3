// 3. Passing props to a child component
// Create a Title component in the components folder. It should
// take one prop named title.
// Replace the <h1> in MyComponent with the <Title> component.
// It should still render "It Works" in the browser. Remember to pass the prop from MyComponent to Title.

export default function Title({ title }) {
  return <h1>{title}</h1>;
}
