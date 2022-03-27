we used to make static ui with functional component
and dynamic ui with class component,
as in class component we have something known as state through which we can change its state but state was not in functional component ,

but after version 16 , hooks was introduced in functional component with the help of hooks we are able to make dynamic ui with the help of functional component and hooks


Hooks:
hooks are the new feature introduced in react, it allow you to use state and other react features without writing a class.

-> Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

Hooks has two things:
    1: usestate : this is used for defining states in functional component
        const [count, setcount] = useState(0)
    2: useeffect : it is replacement for 3 functions from class component didmount, etc
