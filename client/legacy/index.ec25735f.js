import { r as regenerator, f as firebaseConfig, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as space, h as element, t as text, q as query_selector_all, j as detach_dev, k as claim_space, l as claim_element, m as children, n as claim_text, o as add_location, p as attr_dev, u as insert_dev, v as append_dev, w as listen_dev, x as noop, y as validate_slots } from './client.18291dac.js';
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
            return Promise.all([import('./index.esm.5875cd99.js'), __inject_styles(["client-c2ed52fa.css"])]).then(function(x) { return x[0]; });

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var br;
  var t2;
  var t3;
  var button;
  var t4;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Med");
      br = element("br");
      t2 = text("Tracker");
      t3 = space();
      button = element("button");
      t4 = text("Export Data");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1cwatjh\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Med");
      br = claim_element(h1_nodes, "BR", {});
      t2 = claim_text(h1_nodes, "Tracker");
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t4 = claim_text(button_nodes, "Export Data");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Symptom Tracker";
      add_location(br, file, 44, 65, 1128);
      attr_dev(h1, "class", "text-orange-400 text-6xl md:text-4xl leading-none");
      add_location(h1, file, 44, 0, 1063);
      attr_dev(button, "class", "border-2 border-black p-2 text-md mt-12");
      add_location(button, file, 45, 0, 1145);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      append_dev(h1, br);
      append_dev(h1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, button, anchor);
      append_dev(button, t4);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*exportData*/
        ctx[0], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);

  function exportData() {
    return _exportData.apply(this, arguments);
  }

  function _exportData() {
    _exportData = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var db, peeHistory, foodHistory, symptomHistory;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return firestore();

            case 2:
              db = _context.sent;

              {
                // const activityHistory = JSON.parse(localStorage.activityHistory);
                // activityHistory.forEach(item => {
                // 	db.collection('activity').add(item)
                // });
                peeHistory = JSON.parse(localStorage.peeHistory);
                peeHistory.forEach(function (item) {
                  db.collection("urine").add(item);
                });
                foodHistory = JSON.parse(localStorage.foodHistory);
                foodHistory.forEach(function (item) {
                  db.collection("food").add(item);
                });
                symptomHistory = JSON.parse(localStorage.symptomHistory);
                symptomHistory.forEach(function (item) {
                  db.collection("symptom").add(item);
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _exportData.apply(this, arguments);
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      firestore: firestore,
      exportData: exportData
    };
  };

  return [exportData];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;

import __inject_styles from './inject_styles.fe622066.js';