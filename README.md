// 1. Creating first React Component : Counter
// 2. EMBEDING EXPRESSION
// 3. SETTING ATTRIBUTES : attibuse of an image
// 4. STYLING STYLES
// 5. RENDERING CLASSES DYNAMICLY
// 6. RENDERING LIST :
// map method use korle key dite hobe

// 7. CONDITIONAL RENDERING
// 8. HANDLING EVENTS : 1:02
// 9. BINDING ENVEN HANDLERS:
// using constructor to bind handle increment
// arrow function => instead of constructor

// 10.UPDATING THE STATE
// 11. WHAT HAPPENS WHEN STATE CHANGES
// 12. PASSING EVENT ARGUMENTS

// PART- 2 COMPOSING COMPONENT
// 13. PASSING DATA TO COMPONENTS
// 14. PASSIGN CHILDREN- not exist now
// 15. DEBUGGING REACT APP-- React developer tool
// 15. PROPS VS STATE
// PROPS :
// include data that we give to component
// read only

// STATE : include data local or private to that component

// 16. RAISING AND HANDLING EVENTS:
// The components that own the piece of state should be the one modifying it
// Counter Child Component => raising an event onDelete through props
// Counters Parent Component => handling an event handleDelete

17. UPDATING STATE for handleDelete
    => key prop is not accessible
    => imporoving counter properties

18. SINGLE SOURCE OF TRUTH
19. REMOVING THE LOCAL STATE
20. Multiple Component in Sync
    => NavBar

21. LIFTING STATE UP
    => without parents child relation passing props
    => moving state and methods to parents App component
    => with this we can sink multiple component

22. STATELESS FUNCTIONAL COMPONENT
    => navbar

23. DESTRUCTURING ARGUMENTS
    => navbar
    => counters

24. LIFECYCLE HOOKS
    with the lifecycle hooks we can go to different phase of the components
    -> cant use lifecycle hooks in functional component

    1. MOUNT PHASE :instance of a component when created
       Methods:
       => => constructor :

       1. call only once when an instance of a class created
       2. initializing properties of instance
       3. here we set the state directly

       => => render

       1. when a component is render all its children recurcively

       => => componentDidMount :

       1. after a component is redern into the dom
       2. perfect place to make ajax call and get data from server
       3. set state with new data

    2. UPDATE : when props or state of the component changed
       2 lifecycle hooks :
       => render
       => componentDidUpdate

       1. after a component is updated

    3. UNMOUNT : just before a component is deleted
       => componentWillUnmount:
       1. just befor a component is deleted from a dom
