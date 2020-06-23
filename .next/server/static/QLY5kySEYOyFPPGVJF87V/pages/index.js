module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dtc0");


/***/ }),

/***/ "6e9T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*<IfTypescript>*/

/*</IfTypescript>*/
const reducer
/*: React.Reducer<State, Action>*/
= (state, action) => {
  switch (action.type) {
    case "set-current":
      {
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.currentTodo = action.payload;
        });
      }

    case "add":
      {
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos.push(action.payload);
        });
      }

    case "update":
      {
        const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (todoIndex === -1) return state;
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos[todoIndex] = _objectSpread({}, action.payload);
        });
      }

    case "delete":
      {
        const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (todoIndex === -1) return state;
        return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
          draft.todos.splice(todoIndex, 1);
        });
      }

    default:
      {
        throw new Error(`Unsupported action ${JSON.stringify(action)}`);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "7+yl":
/***/ (function(module, exports) {

// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'

module.exports = { urlAlphabet }


/***/ }),

/***/ "Dtc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/pages/reducer.ts
var reducer = __webpack_require__("6e9T");

// EXTERNAL MODULE: ./node_modules/nanoid/index.cjs
var nanoid = __webpack_require__("k4gg");

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// CONCATENATED MODULE: ./src/aws-exports.js
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_project_region": "us-east-2",
  "aws_cognito_identity_pool_id": "us-east-2:c66d2d0a-ac70-4170-994e-cd620f23b611",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_4qRi2U62Z",
  "aws_user_pools_web_client_id": "ai2sn2o9cu91sd0g172h29r6u",
  "oauth": {
    "scope": ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
    "redirectSignIn": "https://ochre.auth.us-east-1.amazoncognito.com/",
    "redirectSignOut": "https://auth.us-east-1.amazoncognito.com/signout/",
    "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS"
};
/* harmony default export */ var aws_exports = (awsmobile);
// CONCATENATED MODULE: ./src/graphql/mutations.js
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const createTodo =
/* GraphQL */
`
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
const updateTodo =
/* GraphQL */
`
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
const deleteTodo =
/* GraphQL */
`
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
// CONCATENATED MODULE: ./src/graphql/queries.js
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getTodo =
/* GraphQL */
`
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
    }
  }
`;
const listTodos =
/* GraphQL */
`
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
// CONCATENATED MODULE: ./src/graphql/subscriptions.js
/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreateTodo =
/* GraphQL */
`
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
    }
  }
`;
const onUpdateTodo =
/* GraphQL */
`
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
    }
  }
`;
const onDeleteTodo =
/* GraphQL */
`
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
    }
  }
`;
// CONCATENATED MODULE: ./src/pages/index.jsx
var __jsx = external_react_["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









external_aws_amplify_["API"].configure(aws_exports); // Should be a device id or a cognito user id but this will do

const MY_ID = Object(nanoid["nanoid"])();

const App = ({
  todos
}) => {
  // The reducer defined before
  const [state, dispatch] = external_react_["useReducer"](reducer["default"], {
    currentTodo: "",
    todos
  });
  external_react_["useEffect"](() => {
    const listener = external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(onCreateTodo));
    const subscription = listener.subscribe(v => {
      dispatch({
        type: "add",
        payload: v.value.data.onCreateTodo
      });
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const add = async () => {
    const todo = {
      id: Object(nanoid["nanoid"])(),
      name: state.currentTodo
    };
    dispatch({
      type: "add",
      payload: todo
    }); // Optimistic update

    dispatch({
      type: "set-current",
      payload: ""
    });

    try {
      await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(createTodo, {
        input: _objectSpread({}, todo)
      }));
    } catch (err) {
      // With revert on error
      dispatch({
        type: "set-current",
        payload: todo.name
      });
    }
  };

  const edit = (todo
  /*:Todo*/
  ) => {
    dispatch({
      type: "update",
      payload: todo
    });
  };

  const del = (todo
  /*:Todo*/
  ) => {
    dispatch({
      type: "delete",
      payload: todo
    });
  };

  return __jsx(external_react_["Fragment"], null, __jsx("header", null, __jsx("h2", null, "To Do List")), __jsx("main", null, __jsx("form", {
    onSubmit: event => {
      event.preventDefault();
      add(state.currentTodo);
    }
  }, __jsx("input", {
    type: "text",
    value: state.currentTodo,
    onChange: event => {
      dispatch({
        type: "set-current",
        payload: event.target.value
      });
    }
  }), __jsx("button", {
    type: "submit"
  }, "Add")), __jsx("ul", null, state.todos.map(todo => {
    return __jsx("li", {
      key: todo.id
    }, __jsx("input", {
      type: "text",
      value: todo.name,
      onChange: event => {
        edit(_objectSpread(_objectSpread({}, todo), {}, {
          name: event.target.value
        }));
      }
    }), __jsx("button", {
      onClick: () => {
        del(todo);
      }
    }, "Delete"));
  }))));
};

async function getServerSideProps() {
  let result;

  try {
    // Fetch our list from the server
    result = await external_aws_amplify_["API"].graphql(Object(external_aws_amplify_["graphqlOperation"])(listTodos));
  } catch (err) {
    console.warn("ERR", err);
    return {
      props: {
        todos: []
      }
    };
  }

  if (result.errors) {
    console.warn("Failed to fetch listTodos. ", result.errors);
    return {
      props: {
        todos: []
      }
    };
  }

  if (result.data.getTodoList !== null) {
    return {
      props: {
        todos: result.data.listTodos.items
      }
    };
  }
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "k4gg":
/***/ (function(module, exports, __webpack_require__) {

let crypto = __webpack_require__("PJMN")

let { urlAlphabet } = __webpack_require__("7+yl")

// We reuse buffers with the same size to avoid memory fragmentations
// for better performance.
let buffers = {}
let random = bytes => {
  let buffer = buffers[bytes]
  if (!buffer) {
    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.
    // Memory flushing is unnecessary since the buffer allocation itself resets
    // the memory with the new bytes.
    buffer = Buffer.allocUnsafe(bytes)
    if (bytes <= 255) buffers[bytes] = buffer
  }
  return crypto.randomFillSync(buffer)
}

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).
  let step = Math.ceil((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let i = step
      while (i--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[i] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let bytes = random(size)
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    id += urlAlphabet[bytes[size] & 63]
  }
  return id
}

module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }


/***/ })

/******/ });