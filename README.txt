TECH:
	babel@6.* for es2015(es6)
	babel-polyfill
	webpack@1.13 (module-bundler)
	mocha (test)
	eslint (code checking)
	react@15.0.2
	react-router@2.4.0

Hor Reloading:
	babel-preset-react-hmre

"scripts": {
    "prestart": "babel-node tools/startMessage.js",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "lint": "node_modules/.bin/esw webpack.config.* src tools",
    "lint:watch": "npm run lint -- --watch",
    "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  },


React 	-> Hey CourseAction, someone clicked this "Save Course" button.
Action 	-> Thanks React! I will dispatch an action so reducers that care can update state.
Reducer -> Ah, thanks action. I see you passed me the current state and the action to perform. I'll make a new copy of the state and return it.
Store 	-> Thanks for updating the state reducer. I'll make sure that all connected components are aware. 
