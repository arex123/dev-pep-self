Loosely coupled: it means affecting one module of program doesn't affect other

<h1>Application architecture;</h1>

-> module
-> sandbox
-> Application Core
-> Base Library

explanation:



<h2>Sandbox:</h2>
->The sandbox ensures a consistent interface,
->modules only know sandbox, the rest of architecture doesn't exist to them
->also acts like security guard like what module are allowed to access

sandbox jobs:
-> Consitency
-> security
-> communication


<h2> Application core </h2>
->Application core manages modules aka application controller
-> it manages communication between moduels
-> it handles erroes

Application core jobs:
-> Manage module lifecycle
-> enable inter-module communication
-> general error handling
-> Be extensible