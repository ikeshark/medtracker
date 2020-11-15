import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, O as create_slot, w as validate_slots, P as createEventDispatcher, g as element, k as claim_element, l as children, h as detach_dev, o as attr_dev, n as add_location, p as insert_dev, u as listen_dev, Q as _slicedToArray, R as update_slot, G as transition_in, H as transition_out } from './client.cc5323c7.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Modal.svelte";

function create_fragment(ctx) {
  var div;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "fixed top-0 left-0 z-10 flex items-center justify-center h-screen w-screen svelte-j8kjt5");
      attr_dev(div, "id", "modal");
      add_location(div, file, 11, 0, 223);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*closeModal*/
        ctx[0], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
  validate_slots("Modal", slots, ['default']);
  var dispatch = createEventDispatcher();

  function closeModal(_ref3) {
    var target = _ref3.target;

    if (target.id == "modal") {
      dispatch("closeModal");
    }
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Modal> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      dispatch: dispatch,
      closeModal: closeModal
    };
  };

  return [closeModal, $$scope, slots];
}

var Modal = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Modal, _SvelteComponentDev);

  var _super = _createSuper(Modal);

  function Modal(options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Modal",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Modal;
}(SvelteComponentDev);

export { Modal as M };
