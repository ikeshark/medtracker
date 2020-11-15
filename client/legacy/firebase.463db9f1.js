import { x as regenerator, y as firebaseConfig } from './client.cc5323c7.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function firestore() {
  return _firestore.apply(this, arguments);
}

function _firestore() {
  _firestore = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var _firestore2, app;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            return _context.abrupt("return", window.db);

          case 4:
            _context.next = 6;
            return Promise.all([import('./index.esm.f5d152a2.js'), __inject_styles(["client-c2ed52fa.css"])]).then(function(x) { return x[0]; });

          case 6:
            _firestore2 = _context.sent;

            if (!(firebase.apps.length == 0)) {
              _context.next = 12;
              break;
            }

            app = firebase.initializeApp(firebaseConfig);
            return _context.abrupt("return", app.firestore());

          case 12:
            return _context.abrupt("return", firebase.apps[0].firestore());

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _firestore.apply(this, arguments);
}

export { firestore as f };

import __inject_styles from './inject_styles.fe622066.js';