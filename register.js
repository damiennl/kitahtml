'use strict';

// Finds the global object (window in browsers)
let root;
try {
  root = Function('return this')();
} catch (_) {
  root = window;
}

// Avoids multiple registrations
if (!root.Html) {
  root.Html = require('./index');
}

// Removes the default export wrapper
if (root.Html.default) {
  root.Html = root.Html.default;
}
