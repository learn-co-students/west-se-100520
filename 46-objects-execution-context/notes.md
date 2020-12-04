# SWBATs 
- Create objects as object literals or by instantiating them using new Object
- Add properties to store values (both primitive and non-primitive) on objects
- Copy/clone objects and their properties
- Write functions that use this and assign them as properties on objects
- Identify the differences between bind, call, and apply
- Use arrow functions to automatically bind context

## Execution Context and this 
-  Execution Context

    -  Loose Definition: the object on which a function is being invoked

    - All code begins in the global execution context

    - Compare and contrast `this` with Ruby’s `self`

    - `self` is determined by where it is defined

        - Defining `self` in a class method vs in an instance method
    - `this` is determined by where it is called

    - Objects define their own context