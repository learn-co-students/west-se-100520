# State, Events and Forms 

## SWBAT
- [] Explain the difference between imperative and declarative programming
- [] Differentiate between presentational(dumb) and container(smart) components
- [] Instantiate state in and out of the constructor
- [] Trigger rerenders by calling setState
- [] Manipulate the DOM by changing values in state
- [] Create event handler callbacks that manipulate state
- [] Write fully controlled forms

### Install React Dev Tools
[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Destructuring 
[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Synthetic Events
[SyntheticEvent](https://reactjs.org/docs/events.html)
```
types of events:

Clipboard Events
Composition Events
Keyboard Events
Focus Events
Form Events
Generic Events
Mouse Events
Pointer Events
Selection Events
Touch Events
UI Events
Wheel Events
Media Events
Image Events
Animation Events
Transition Events

```

### React Fragment
To avoid the extra div around your components you can use React.Fragment

```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// or

render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}



```

## Class component using class fields
[Class component using class fields](https://blog.g2i.co/react-class-components-with-es6-and-class-fields-927b2b59f94e)

```
  constructor() {
    super();
    this.state = {
      read: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(){ console.log(`${this.props.title}, ${this.state.read}`)}

// or

  state = {
     read: 0
  }

  handleClick = () => console.log(`${this.props.title}, ${this.state.read}`)




```



### Uncontrolled forms vs Controlled forms
- Uncontrolled inputs are traditional HTML form inputs 
- Controlled inputs are form values that are controlled by state
