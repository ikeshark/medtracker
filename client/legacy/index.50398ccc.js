import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as listen_dev, v as noop, w as validate_slots } from './client.8b10c686.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var p;
  var t3;
  var t4;
  var button;
  var t5;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Symptom Tracker");
      t2 = space();
      p = element("p");
      t3 = text("Welcome");
      t4 = space();
      button = element("button");
      t5 = text("clear history");
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
      t1 = claim_text(h1_nodes, "Symptom Tracker");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Welcome");
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t5 = claim_text(button_nodes, "clear history");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Symptom Tracker";
      attr_dev(h1, "class", "text-orange-400 text-3xl md:text-4xl text-center");
      add_location(h1, file, 12, 0, 172);
      attr_dev(p, "class", "text-xl mb-2");
      add_location(p, file, 13, 0, 254);
      attr_dev(button, "class", "border-double border-8 border-red-700 p-2 block rounded-lg mx-auto");
      add_location(button, file, 14, 0, 290);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, button, anchor);
      append_dev(button, t5);

      if (!mounted) {
        dispose = listen_dev(button, "click", clearHistory, false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t4);
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

function clearHistory() {
  {
    localStorage.removeItem("peeHistory");
  }
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      clearHistory: clearHistory
    };
  };

  return [];
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
