import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, V as _createClass, S as SvelteComponentDev, y as validate_slots, P as createEventDispatcher, D as create_component, E as claim_component, F as mount_component, Q as _slicedToArray, G as transition_in, H as transition_out, I as destroy_component, h as element, t as text, g as space, l as claim_element, m as children, n as claim_text, j as detach_dev, k as claim_space, p as attr_dev, o as add_location, u as insert_dev, v as append_dev, A as set_input_value, w as listen_dev, L as run_all, x as noop, B as validate_each_argument, C as destroy_each, z as empty, U as set_data_dev, q as query_selector_all, K as check_outros, M as globals, T as prop_dev, N as group_outros } from './client.18291dac.js';
import { M as Modal } from './Modal.ace87683.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Timepicker.svelte"; // (72:0) <Modal on:closeModal={dismiss}>

function create_default_slot(ctx) {
  var div;
  var label0;
  var t0;
  var input0;
  var t1;
  var label1;
  var t2;
  var input1;
  var t3;
  var button0;
  var t4;
  var t5;
  var button1;
  var t6;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      label0 = element("label");
      t0 = text("DATE\n      ");
      input0 = element("input");
      t1 = space();
      label1 = element("label");
      t2 = text("TIME\n      ");
      input1 = element("input");
      t3 = space();
      button0 = element("button");
      t4 = text("Submit Time");
      t5 = space();
      button1 = element("button");
      t6 = text("ABORT");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      label0 = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label0_nodes = children(label0);
      t0 = claim_text(label0_nodes, "DATE\n      ");
      input0 = claim_element(label0_nodes, "INPUT", {
        class: true,
        max: true,
        min: true,
        type: true
      });
      label0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      label1 = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label1_nodes = children(label1);
      t2 = claim_text(label1_nodes, "TIME\n      ");
      input1 = claim_element(label1_nodes, "INPUT", {
        class: true,
        max: true,
        min: true,
        type: true
      });
      label1_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "Submit Time");
      button0_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "ABORT");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input0, "class", "block bg-gray-900 pl-1");
      attr_dev(input0, "max",
      /*maxDate*/
      ctx[1]);
      attr_dev(input0, "min",
      /*minDate*/
      ctx[0]);
      attr_dev(input0, "type", "date");
      add_location(input0, file, 75, 6, 1715);
      attr_dev(label0, "class", "block p-1 mb-1");
      add_location(label0, file, 73, 4, 1667);
      attr_dev(input1, "class", "block bg-gray-900 pl-1");
      attr_dev(input1, "max",
      /*maxTime*/
      ctx[3]);
      attr_dev(input1, "min",
      /*minTime*/
      ctx[2]);
      attr_dev(input1, "type", "time");
      add_location(input1, file, 85, 6, 1924);
      attr_dev(label1, "class", "block p-1 mb-1");
      add_location(label1, file, 83, 4, 1876);
      attr_dev(button0, "class", "block w-full mb-4 p-4 border-double border-8 border-green-700 rounded-lg font-bold text-xl");
      add_location(button0, file, 93, 4, 2085);
      attr_dev(button1, "class", "block w-full mb-4 p-4 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file, 97, 4, 2252);
      attr_dev(div, "class", "w-10/12 max-666 bg-gray-800 p-4 border-double border-black border-8");
      add_location(div, file, 72, 2, 1581);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      set_input_value(input0,
      /*date*/
      ctx[4]);
      append_dev(div, t1);
      append_dev(div, label1);
      append_dev(label1, t2);
      append_dev(label1, input1);
      set_input_value(input1,
      /*time*/
      ctx[5]);
      append_dev(div, t3);
      append_dev(div, button0);
      append_dev(button0, t4);
      append_dev(div, t5);
      append_dev(div, button1);
      append_dev(button1, t6);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[10]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[11]), listen_dev(button0, "click",
        /*submit*/
        ctx[6], false, false, false), listen_dev(button1, "click",
        /*dismiss*/
        ctx[7], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*maxDate*/
      2) {
        attr_dev(input0, "max",
        /*maxDate*/
        ctx[1]);
      }

      if (dirty &
      /*minDate*/
      1) {
        attr_dev(input0, "min",
        /*minDate*/
        ctx[0]);
      }

      if (dirty &
      /*date*/
      16) {
        set_input_value(input0,
        /*date*/
        ctx[4]);
      }

      if (dirty &
      /*maxTime*/
      8) {
        attr_dev(input1, "max",
        /*maxTime*/
        ctx[3]);
      }

      if (dirty &
      /*minTime*/
      4) {
        attr_dev(input1, "min",
        /*minTime*/
        ctx[2]);
      }

      if (dirty &
      /*time*/
      32) {
        set_input_value(input1,
        /*time*/
        ctx[5]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(72:0) <Modal on:closeModal={dismiss}>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var modal;
  var current;
  modal = new Modal({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  modal.$on("closeModal",
  /*dismiss*/
  ctx[7]);
  var block = {
    c: function create() {
      create_component(modal.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var modal_changes = {};

      if (dirty &
      /*$$scope, maxTime, minTime, time, maxDate, minDate, date*/
      16447) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(modal, detaching);
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

function convertEpoch(epoch) {
  var dateObj = new Date(epoch);
  var year = dateObj.getFullYear() + "";
  var month = dateObj.getMonth() + "";
  var day = dateObj.getDate() + "";
  if (month.length === 1) month = "0" + month;
  if (month.length === 1) day = "0" + day;
  var date = "".concat(year, "-").concat(month, "-").concat(date);
  var hour = dateObj.getHours() + "";
  var min = dateObj.getMinutes() + "";
  if (month.length === 1) hour = "0" + hour;
  if (month.length === 1) min = "0" + min;
  var time = "".concat(hour, ":").concat(min);
  return {
    date: date,
    time: time
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Timepicker", slots, []);
  var dispatch = createEventDispatcher();
  var minEpoch = $$props.minEpoch;
  var maxEpoch = $$props.maxEpoch;
  var minDate;
  var maxDate;
  var minTime;
  var maxTime;
  var date;
  var time;
  var epoch;

  if (minEpoch) {
    var formatted = convertEpoch(minEpoch);
    minDate = formatted.date;
    minTime = formatted.time;
  }

  if (maxEpoch) {
    var _formatted = convertEpoch(maxEpoch);

    maxDate = _formatted.date;
    maxTime = _formatted.time;
  }

  function submit() {
    var year = parseInt(date);
    var month = parseInt(date.slice(5, 7)) - 1;
    var day = parseInt(date.slice(8, 11));
    var hour = parseInt(time);
    var min = parseInt(time.slice(3, 5));
    var epoch = new Date(year, month, day, hour, min).getTime();
    dispatch("confirm", {
      epoch: epoch
    });
    dispatch("dismiss");
  }

  function dismiss() {
    dispatch("dismiss");
  }

  var writable_props = ["minEpoch", "maxEpoch"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Timepicker> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    date = this.value;
    $$invalidate(4, date);
  }

  function input1_input_handler() {
    time = this.value;
    $$invalidate(5, time);
  }

  $$self.$$set = function ($$props) {
    if ("minEpoch" in $$props) $$invalidate(8, minEpoch = $$props.minEpoch);
    if ("maxEpoch" in $$props) $$invalidate(9, maxEpoch = $$props.maxEpoch);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      Modal: Modal,
      dispatch: dispatch,
      minEpoch: minEpoch,
      maxEpoch: maxEpoch,
      minDate: minDate,
      maxDate: maxDate,
      minTime: minTime,
      maxTime: maxTime,
      date: date,
      time: time,
      epoch: epoch,
      convertEpoch: convertEpoch,
      submit: submit,
      dismiss: dismiss
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("minEpoch" in $$props) $$invalidate(8, minEpoch = $$props.minEpoch);
    if ("maxEpoch" in $$props) $$invalidate(9, maxEpoch = $$props.maxEpoch);
    if ("minDate" in $$props) $$invalidate(0, minDate = $$props.minDate);
    if ("maxDate" in $$props) $$invalidate(1, maxDate = $$props.maxDate);
    if ("minTime" in $$props) $$invalidate(2, minTime = $$props.minTime);
    if ("maxTime" in $$props) $$invalidate(3, maxTime = $$props.maxTime);
    if ("date" in $$props) $$invalidate(4, date = $$props.date);
    if ("time" in $$props) $$invalidate(5, time = $$props.time);
    if ("epoch" in $$props) epoch = $$props.epoch;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [minDate, maxDate, minTime, maxTime, date, time, submit, dismiss, minEpoch, maxEpoch, input0_input_handler, input1_input_handler];
}

var Timepicker = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Timepicker, _SvelteComponentDev);

  var _super = _createSuper(Timepicker);

  function Timepicker(options) {
    var _this;

    _classCallCheck(this, Timepicker);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      minEpoch: 8,
      maxEpoch: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Timepicker",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*minEpoch*/
    ctx[8] === undefined && !("minEpoch" in props)) {
      console.warn("<Timepicker> was created without expected prop 'minEpoch'");
    }

    if (
    /*maxEpoch*/
    ctx[9] === undefined && !("maxEpoch" in props)) {
      console.warn("<Timepicker> was created without expected prop 'maxEpoch'");
    }

    return _this;
  }

  _createClass(Timepicker, [{
    key: "minEpoch",
    get: function get() {
      throw new Error("<Timepicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Timepicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "maxEpoch",
    get: function get() {
      throw new Error("<Timepicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Timepicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Timepicker;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Object_1 = globals.Object,
    console_1 = globals.console;
var file$1 = "src/routes/pee.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[36] = list[i];
  return child_ctx;
} // (197:19) 


function create_if_block_6(ctx) {
  var p;
  var t0;
  var t1_value = formatTime(
  /*pee*/
  ctx[13].startTime) + "";
  var t1;
  var t2;
  var button;
  var t3;
  var t4;
  var if_block_anchor;
  var mounted;
  var dispose;

  function select_block_type_1(ctx, dirty) {
    if (!
    /*endTime*/
    ctx[1]) return create_if_block_7;
    return create_else_block;
  }

  var current_block_type = select_block_type_1(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      p = element("p");
      t0 = text("Start Time: ");
      t1 = text(t1_value);
      t2 = space();
      button = element("button");
      t3 = text("Edit");
      t4 = space();
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Start Time: ");
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_space(p_nodes);
      button = claim_element(p_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Edit");
      button_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "underline ml-2");
      add_location(button, file$1, 198, 2, 4582);
      attr_dev(p, "class", "mb-2");
      add_location(p, file$1, 197, 1, 4524);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      append_dev(p, t1);
      append_dev(p, t2);
      append_dev(p, button);
      append_dev(button, t3);
      insert_dev(target, t4, anchor);
      if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*editStartTime*/
        ctx[14], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*pee*/
      8192 && t1_value !== (t1_value = formatTime(
      /*pee*/
      ctx[13].startTime) + "")) set_data_dev(t1, t1_value);

      if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t4);
      if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_6.name,
    type: "if",
    source: "(197:19) ",
    ctx: ctx
  });
  return block;
} // (182:0) {#if !isPeeing}


function create_if_block_5(ctx) {
  var div;
  var button0;
  var t0;
  var t1;
  var button1;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      t0 = text("Start Pee");
      t1 = space();
      button1 = element("button");
      t2 = text("Manual Add");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Start Pee");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Manual Add");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "block mb-4 mx-auto rounded-md border-black border py-2 px-4 text-white bg-green-700");
      add_location(button0, file$1, 183, 2, 4182);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file$1, 189, 2, 4339);
      attr_dev(div, "class", "flex");
      add_location(div, file$1, 182, 1, 4161);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button0);
      append_dev(button0, t0);
      append_dev(div, t1);
      append_dev(div, button1);
      append_dev(button1, t2);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*startPee*/
        ctx[18], false, false, false), listen_dev(button1, "click",
        /*manualAdd*/
        ctx[21], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_5.name,
    type: "if",
    source: "(182:0) {#if !isPeeing}",
    ctx: ctx
  });
  return block;
} // (216:1) {:else}


function create_else_block(ctx) {
  var p;
  var t0;
  var t1_value = formatTime(
  /*endTime*/
  ctx[1]) + "";
  var t1;
  var t2;
  var button0;
  var t3;
  var t4;
  var button1;
  var t5;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text("End Time: ");
      t1 = text(t1_value);
      t2 = space();
      button0 = element("button");
      t3 = text("Edit");
      t4 = space();
      button1 = element("button");
      t5 = text("Submit");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "End Time: ");
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_space(p_nodes);
      button0 = claim_element(p_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t3 = claim_text(button0_nodes, "Edit");
      button0_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t5 = claim_text(button1_nodes, "Submit");
      button1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "underline ml-2");
      add_location(button0, file$1, 217, 3, 5087);
      attr_dev(p, "class", "mb-2");
      add_location(p, file$1, 216, 2, 5036);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file$1, 218, 2, 5161);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      append_dev(p, t1);
      append_dev(p, t2);
      append_dev(p, button0);
      append_dev(button0, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, button1, anchor);
      append_dev(button1, t5);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*editEndTime*/
        ctx[15], false, false, false), listen_dev(button1, "click",
        /*submitPee*/
        ctx[17], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*endTime*/
      2 && t1_value !== (t1_value = formatTime(
      /*endTime*/
      ctx[1]) + "")) set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(button1);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(216:1) {:else}",
    ctx: ctx
  });
  return block;
} // (201:1) {#if !endTime}


function create_if_block_7(ctx) {
  var div;
  var button0;
  var t0;
  var t1;
  var button1;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      t0 = text("End Pee");
      t1 = space();
      button1 = element("button");
      t2 = text("Cancel Pee");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "End Pee");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Cancel Pee");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700");
      add_location(button0, file$1, 202, 3, 4698);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file$1, 208, 3, 4855);
      attr_dev(div, "class", "flex");
      add_location(div, file$1, 201, 2, 4676);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button0);
      append_dev(button0, t0);
      append_dev(div, t1);
      append_dev(div, button1);
      append_dev(button1, t2);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*endPee*/
        ctx[19], false, false, false), listen_dev(button1, "click",
        /*cancelPee*/
        ctx[20], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_7.name,
    type: "if",
    source: "(201:1) {#if !endTime}",
    ctx: ctx
  });
  return block;
} // (226:0) {#if Object.values(peeHistory).length}


function create_if_block_4(ctx) {
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text("Show History");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Show History");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700");
      add_location(button, file$1, 226, 1, 5360);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
        ctx[24], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(226:0) {#if Object.values(peeHistory).length}",
    ctx: ctx
  });
  return block;
} // (235:0) {#if isHistoryShown}


function create_if_block_3(ctx) {
  var h2;
  var t0;
  var t1;
  var table;
  var tr;
  var th0;
  var t2;
  var t3;
  var th1;
  var t4;
  var t5;
  var each_value =
  /*formattedHistory*/
  ctx[12];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text("Pee History");
      t1 = space();
      table = element("table");
      tr = element("tr");
      th0 = element("th");
      t2 = text("Date");
      t3 = space();
      th1 = element("th");
      t4 = text("Length");
      t5 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      h2 = claim_element(nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Pee History");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      table = claim_element(nodes, "TABLE", {});
      var table_nodes = children(table);
      tr = claim_element(table_nodes, "TR", {});
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", {});
      var th0_nodes = children(th0);
      t2 = claim_text(th0_nodes, "Date");
      th0_nodes.forEach(detach_dev);
      t3 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", {});
      var th1_nodes = children(th1);
      t4 = claim_text(th1_nodes, "Length");
      th1_nodes.forEach(detach_dev);
      tr_nodes.forEach(detach_dev);
      t5 = claim_space(table_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(table_nodes);
      }

      table_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-yellow-500 bold text-2xl md:text-3xl text-center");
      add_location(h2, file$1, 235, 1, 5539);
      add_location(th0, file$1, 238, 3, 5641);
      add_location(th1, file$1, 239, 3, 5658);
      add_location(tr, file$1, 237, 2, 5633);
      add_location(table, file$1, 236, 1, 5623);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, table, anchor);
      append_dev(table, tr);
      append_dev(tr, th0);
      append_dev(th0, t2);
      append_dev(tr, t3);
      append_dev(tr, th1);
      append_dev(th1, t4);
      append_dev(table, t5);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(table, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*formattedHistory, editEntry*/
      33558528) {
        each_value =
        /*formattedHistory*/
        ctx[12];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(table, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h2);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(table);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(235:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (246:3) {#each day[1] as pee}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var button;
  var t0_value = formatTime(
  /*pee*/
  ctx[13].startTime) + "";
  var t0;
  var button_value_value;
  var t1;
  var td1;
  var t2_value = formatPeeLength(
  /*pee*/
  ctx[13].totalTime) + "";
  var t2;
  var t3;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      tr = element("tr");
      td0 = element("td");
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {
        class: true
      });
      var td0_nodes = children(td0);
      button = claim_element(td0_nodes, "BUTTON", {
        value: true
      });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, t0_value);
      button_nodes.forEach(detach_dev);
      td0_nodes.forEach(detach_dev);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach_dev);
      t3 = claim_space(tr_nodes);
      tr_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      button.value = button_value_value =
      /*pee*/
      ctx[13].startTime;
      add_location(button, file$1, 248, 5, 5848);
      attr_dev(td0, "class", "text-sm");
      add_location(td0, file$1, 247, 4, 5822);
      add_location(td1, file$1, 252, 4, 5963);
      add_location(tr, file$1, 246, 3, 5813);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);
      append_dev(tr, td0);
      append_dev(td0, button);
      append_dev(button, t0);
      append_dev(tr, t1);
      append_dev(tr, td1);
      append_dev(td1, t2);
      append_dev(tr, t3);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*editEntry*/
        ctx[25], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*formattedHistory*/
      4096 && t0_value !== (t0_value = formatTime(
      /*pee*/
      ctx[13].startTime) + "")) set_data_dev(t0, t0_value);

      if (dirty[0] &
      /*formattedHistory*/
      4096 && button_value_value !== (button_value_value =
      /*pee*/
      ctx[13].startTime)) {
        prop_dev(button, "value", button_value_value);
      }

      if (dirty[0] &
      /*formattedHistory*/
      4096 && t2_value !== (t2_value = formatPeeLength(
      /*pee*/
      ctx[13].totalTime) + "")) set_data_dev(t2, t2_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(tr);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(246:3) {#each day[1] as pee}",
    ctx: ctx
  });
  return block;
} // (242:2) {#each formattedHistory as day}


function create_each_block(ctx) {
  var tr;
  var th;
  var t0_value =
  /*day*/
  ctx[36][0] + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*day*/
  ctx[36][1];
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var block = {
    c: function create() {
      tr = element("tr");
      th = element("th");
      t0 = text(t0_value);
      t1 = space();

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      each_1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      th = claim_element(tr_nodes, "TH", {
        class: true,
        colspan: true
      });
      var th_nodes = children(th);
      t0 = claim_text(th_nodes, t0_value);
      th_nodes.forEach(detach_dev);
      tr_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(nodes);
      }

      each_1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(th, "class", "text-left");
      attr_dev(th, "colspan", "2");
      add_location(th, file$1, 243, 4, 5728);
      add_location(tr, file$1, 242, 3, 5719);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);
      append_dev(tr, th);
      append_dev(th, t0);
      insert_dev(target, t1, anchor);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*formattedHistory*/
      4096 && t0_value !== (t0_value =
      /*day*/
      ctx[36][0] + "")) set_data_dev(t0, t0_value);

      if (dirty[0] &
      /*formattedHistory, editEntry*/
      33558528) {
        each_value_1 =
        /*day*/
        ctx[36][1];
        validate_each_argument(each_value_1);

        var _i8;

        for (_i8 = 0; _i8 < each_value_1.length; _i8 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i8);

          if (each_blocks[_i8]) {
            each_blocks[_i8].p(child_ctx, dirty);
          } else {
            each_blocks[_i8] = create_each_block_1(child_ctx);

            each_blocks[_i8].c();

            each_blocks[_i8].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].d(1);
        }

        each_blocks.length = each_value_1.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(tr);
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(242:2) {#each formattedHistory as day}",
    ctx: ctx
  });
  return block;
} // (260:0) {#if isManualAdd}


function create_if_block_2(ctx) {
  var modal;
  var current;
  modal = new Modal({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  modal.$on("closeModal",
  /*cancelManualAdd*/
  ctx[22]);
  var block = {
    c: function create() {
      create_component(modal.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var modal_changes = {};

      if (dirty[0] &
      /*manualAddLength, manualAddTime, manualAddDate*/
      3584 | dirty[1] &
      /*$$scope*/
      1024) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(modal, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(260:0) {#if isManualAdd}",
    ctx: ctx
  });
  return block;
} // (261:1) <Modal on:closeModal={cancelManualAdd}>


function create_default_slot_1(ctx) {
  var div;
  var label0;
  var t0;
  var input0;
  var t1;
  var label1;
  var t2;
  var input1;
  var t3;
  var label2;
  var t4;
  var input2;
  var t5;
  var button0;
  var t6;
  var t7;
  var button1;
  var t8;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      label0 = element("label");
      t0 = text("DATE\n\t\t\t\t");
      input0 = element("input");
      t1 = space();
      label1 = element("label");
      t2 = text("TIME\n\t\t\t\t");
      input1 = element("input");
      t3 = space();
      label2 = element("label");
      t4 = text("LENGTH (minutes)\n\t\t\t\t");
      input2 = element("input");
      t5 = space();
      button0 = element("button");
      t6 = text("SUBMIT");
      t7 = space();
      button1 = element("button");
      t8 = text("ABORT");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      label0 = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label0_nodes = children(label0);
      t0 = claim_text(label0_nodes, "DATE\n\t\t\t\t");
      input0 = claim_element(label0_nodes, "INPUT", {
        class: true,
        type: true
      });
      label0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      label1 = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label1_nodes = children(label1);
      t2 = claim_text(label1_nodes, "TIME\n\t\t\t\t");
      input1 = claim_element(label1_nodes, "INPUT", {
        class: true,
        type: true
      });
      label1_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      label2 = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label2_nodes = children(label2);
      t4 = claim_text(label2_nodes, "LENGTH (minutes)\n\t\t\t\t");
      input2 = claim_element(label2_nodes, "INPUT", {
        class: true,
        type: true
      });
      label2_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t6 = claim_text(button0_nodes, "SUBMIT");
      button0_nodes.forEach(detach_dev);
      t7 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t8 = claim_text(button1_nodes, "ABORT");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input0, "class", "block bg-gray-900 pl-1 svelte-dbfpqa");
      attr_dev(input0, "type", "date");
      add_location(input0, file$1, 264, 4, 6208);
      attr_dev(label0, "class", "block p-1 mb-1");
      add_location(label0, file$1, 262, 3, 6164);
      attr_dev(input1, "class", "block bg-gray-900 pl-1 svelte-dbfpqa");
      attr_dev(input1, "type", "time");
      add_location(input1, file$1, 272, 4, 6365);
      attr_dev(label1, "class", "block p-1 mb-1");
      add_location(label1, file$1, 270, 3, 6321);
      attr_dev(input2, "class", "block bg-gray-900 pl-1 svelte-dbfpqa");
      attr_dev(input2, "type", "text");
      add_location(input2, file$1, 280, 4, 6534);
      attr_dev(label2, "class", "block p-1 mb-1");
      add_location(label2, file$1, 278, 3, 6478);
      attr_dev(button0, "class", "block w-full mb-2 p-2 border-double border-8 border-green-700 rounded-lg font-bold text-xl");
      add_location(button0, file$1, 286, 3, 6649);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file$1, 290, 3, 6814);
      attr_dev(div, "class", "w-10/12 shadow-lg p-4 bg-gray-800");
      add_location(div, file$1, 261, 2, 6113);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      set_input_value(input0,
      /*manualAddDate*/
      ctx[9]);
      append_dev(div, t1);
      append_dev(div, label1);
      append_dev(label1, t2);
      append_dev(label1, input1);
      set_input_value(input1,
      /*manualAddTime*/
      ctx[10]);
      append_dev(div, t3);
      append_dev(div, label2);
      append_dev(label2, t4);
      append_dev(label2, input2);
      set_input_value(input2,
      /*manualAddLength*/
      ctx[11]);
      append_dev(div, t5);
      append_dev(div, button0);
      append_dev(button0, t6);
      append_dev(div, t7);
      append_dev(div, button1);
      append_dev(button1, t8);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[27]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[28]), listen_dev(input2, "input",
        /*input2_input_handler*/
        ctx[29]), listen_dev(button0, "click",
        /*submitManualAdd*/
        ctx[23], false, false, false), listen_dev(button1, "click",
        /*cancelManualAdd*/
        ctx[22], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*manualAddDate*/
      512) {
        set_input_value(input0,
        /*manualAddDate*/
        ctx[9]);
      }

      if (dirty[0] &
      /*manualAddTime*/
      1024) {
        set_input_value(input1,
        /*manualAddTime*/
        ctx[10]);
      }

      if (dirty[0] &
      /*manualAddLength*/
      2048 && input2.value !==
      /*manualAddLength*/
      ctx[11]) {
        set_input_value(input2,
        /*manualAddLength*/
        ctx[11]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(261:1) <Modal on:closeModal={cancelManualAdd}>",
    ctx: ctx
  });
  return block;
} // (299:0) {#if isEdit}


function create_if_block_1(ctx) {
  var modal;
  var current;
  modal = new Modal({
    props: {
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  modal.$on("closeModal",
  /*closeModal_handler*/
  ctx[31]);
  var block = {
    c: function create() {
      create_component(modal.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var modal_changes = {};

      if (dirty[0] &
      /*isEdit*/
      1 | dirty[1] &
      /*$$scope*/
      1024) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(modal, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(299:0) {#if isEdit}",
    ctx: ctx
  });
  return block;
} // (300:1) <Modal on:closeModal={() => isEdit = false}>


function create_default_slot$1(ctx) {
  var div;
  var button0;
  var t0;
  var t1;
  var button1;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      t0 = text("DELETE");
      t1 = space();
      button1 = element("button");
      t2 = text("ABORT");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "DELETE");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "ABORT");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button0, file$1, 301, 3, 7101);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file$1, 305, 3, 7260);
      attr_dev(div, "class", "w-10/12 bg-gray-800 p-4");
      add_location(div, file$1, 300, 2, 7060);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button0);
      append_dev(button0, t0);
      append_dev(div, t1);
      append_dev(div, button1);
      append_dev(button1, t2);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*deleteEntry*/
        ctx[26], false, false, false), listen_dev(button1, "click",
        /*click_handler*/
        ctx[30], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(300:1) <Modal on:closeModal={() => isEdit = false}>",
    ctx: ctx
  });
  return block;
} // (315:0) {#if isTimePicker}


function create_if_block(ctx) {
  var timepicker;
  var current;
  timepicker = new Timepicker({
    props: {
      minEpoch:
      /*minEpoch*/
      ctx[7],
      maxEpoch:
      /*maxEpoch*/
      ctx[8]
    },
    $$inline: true
  });
  timepicker.$on("dismiss",
  /*dismiss_handler*/
  ctx[32]);
  timepicker.$on("confirm",
  /*submitPickedTime*/
  ctx[16]);
  var block = {
    c: function create() {
      create_component(timepicker.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(timepicker.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(timepicker, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var timepicker_changes = {};
      if (dirty[0] &
      /*minEpoch*/
      128) timepicker_changes.minEpoch =
      /*minEpoch*/
      ctx[7];
      if (dirty[0] &
      /*maxEpoch*/
      256) timepicker_changes.maxEpoch =
      /*maxEpoch*/
      ctx[8];
      timepicker.$set(timepicker_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(timepicker.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(timepicker.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(timepicker, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(315:0) {#if isTimePicker}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var t3;
  var show_if = Object.values(
  /*peeHistory*/
  ctx[3]).length;
  var t4;
  var t5;
  var t6;
  var t7;
  var if_block5_anchor;
  var current;

  function select_block_type(ctx, dirty) {
    if (!
    /*isPeeing*/
    ctx[4]) return create_if_block_5;
    if (
    /*isPeeing*/
    ctx[4]) return create_if_block_6;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type && current_block_type(ctx);
  var if_block1 = show_if && create_if_block_4(ctx);
  var if_block2 =
  /*isHistoryShown*/
  ctx[2] && create_if_block_3(ctx);
  var if_block3 =
  /*isManualAdd*/
  ctx[5] && create_if_block_2(ctx);
  var if_block4 =
  /*isEdit*/
  ctx[0] && create_if_block_1(ctx);
  var if_block5 =
  /*isTimePicker*/
  ctx[6] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Pee Log");
      t2 = space();
      if (if_block0) if_block0.c();
      t3 = space();
      if (if_block1) if_block1.c();
      t4 = space();
      if (if_block2) if_block2.c();
      t5 = space();
      if (if_block3) if_block3.c();
      t6 = space();
      if (if_block4) if_block4.c();
      t7 = space();
      if (if_block5) if_block5.c();
      if_block5_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1wulfr8\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Pee Log");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      if (if_block0) if_block0.l(nodes);
      t3 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      t4 = claim_space(nodes);
      if (if_block2) if_block2.l(nodes);
      t5 = claim_space(nodes);
      if (if_block3) if_block3.l(nodes);
      t6 = claim_space(nodes);
      if (if_block4) if_block4.l(nodes);
      t7 = claim_space(nodes);
      if (if_block5) if_block5.l(nodes);
      if_block5_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Pee Log";
      attr_dev(h1, "class", "mb-2 text-yellow-500 bold text-3xl md:text-4xl text-center");
      add_location(h1, file$1, 179, 0, 4059);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t3, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t4, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert_dev(target, t5, anchor);
      if (if_block3) if_block3.m(target, anchor);
      insert_dev(target, t6, anchor);
      if (if_block4) if_block4.m(target, anchor);
      insert_dev(target, t7, anchor);
      if (if_block5) if_block5.m(target, anchor);
      insert_dev(target, if_block5_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if (if_block0) if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(t3.parentNode, t3);
        }
      }

      if (dirty[0] &
      /*peeHistory*/
      8) show_if = Object.values(
      /*peeHistory*/
      ctx[3]).length;

      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_4(ctx);
          if_block1.c();
          if_block1.m(t4.parentNode, t4);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[2]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_3(ctx);
          if_block2.c();
          if_block2.m(t5.parentNode, t5);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (
      /*isManualAdd*/
      ctx[5]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty[0] &
          /*isManualAdd*/
          32) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2(ctx);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(t6.parentNode, t6);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, function () {
          if_block3 = null;
        });
        check_outros();
      }

      if (
      /*isEdit*/
      ctx[0]) {
        if (if_block4) {
          if_block4.p(ctx, dirty);

          if (dirty[0] &
          /*isEdit*/
          1) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_1(ctx);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(t7.parentNode, t7);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, function () {
          if_block4 = null;
        });
        check_outros();
      }

      if (
      /*isTimePicker*/
      ctx[6]) {
        if (if_block5) {
          if_block5.p(ctx, dirty);

          if (dirty[0] &
          /*isTimePicker*/
          64) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block(ctx);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, function () {
          if_block5 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(if_block5);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(if_block5);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);

      if (if_block0) {
        if_block0.d(detaching);
      }

      if (detaching) detach_dev(t3);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t4);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach_dev(t5);
      if (if_block3) if_block3.d(detaching);
      if (detaching) detach_dev(t6);
      if (if_block4) if_block4.d(detaching);
      if (detaching) detach_dev(t7);
      if (if_block5) if_block5.d(detaching);
      if (detaching) detach_dev(if_block5_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function formatDate(epoch) {
  var dateObj = new Date(parseInt(epoch));
  return dateObj.toLocaleDateString("en-US");
}

function formatTime(epoch) {
  var dateObj = new Date(parseInt(epoch));
  return dateObj.toLocaleTimeString("en-US");
}

function formatHistory(peeHistory) {
  var formatted = {};
  peeHistory.forEach(function (pee) {
    var date = formatDate(pee.startTime);

    if (!formatted[date]) {
      formatted[date] = [pee];
    } else {
      formatted[date].push(pee);
    }
  });
  return Object.entries(formatted).reverse();
}

function formatPeeLength(time) {
  var totalSeconds = time / 1000;
  var minutes = parseInt(totalSeconds / 60);
  var seconds = parseInt(totalSeconds % 60) + "";
  if (seconds.length === 1) seconds = "0".concat(seconds);
  return "".concat(minutes, ":").concat(seconds);
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Pee", slots, []);
  var peeInit = {
    startTime: null,
    totalTime: null
  };
  var focusedEntry;
  var isEdit;
  var endTime = null;
  var isHistoryShown = false;
  var peeHistory = [];
  var isPeeing = false;
  var pee;
  var isManualAdd = false;
  var isTimePicker = false;
  var minEpoch;
  var maxEpoch;
  var timePickerType;
  var manualAddDate;
  var manualAddTime;
  var manualAddLength;

  {
    if (localStorage.isPeeing === "true") {
      isPeeing = true;
    }

    pee = localStorage.pee ? JSON.parse(localStorage.pee) : _objectSpread({}, peeInit);
    peeHistory = !!localStorage.peeHistory ? JSON.parse(localStorage.peeHistory) : [];
  }

  function editStartTime() {
    timePickerType = "startTime";
    $$invalidate(13, pee.startTime = epoch, pee);
    $$invalidate(6, isTimePicker = true);
  }

  function editEndTime() {
    timePickerType = "endTime";
    $$invalidate(7, minEpoch = pee.startTime);
    $$invalidate(8, maxEpoch = new Date().getTime());
    $$invalidate(6, isTimePicker = true);
  }

  function submitPickedTime(event) {
    var epoch = event.detail.epoch;

    if (timePickerType === "startTime") {
      $$invalidate(13, pee.startTime = epoch, pee);
    } else if (timePickerType === "endTime") {
      $$invalidate(1, endTime = epoch);
    } else {
      console.log("error: timePickerType not correctly set");
    }

    $$invalidate(6, isTimePicker = false);
  }

  function submitPee() {
    $$invalidate(4, isPeeing = false);
    localStorage.isPeeing = false;
    $$invalidate(13, pee.totalTime = endTime - pee.startTime, pee);
    $$invalidate(1, endTime = null);
    peeHistory.push(pee);
    $$invalidate(3, peeHistory);
    $$invalidate(13, pee = _objectSpread({}, peeInit));

    {
      localStorage.peeHistory = JSON.stringify(peeHistory);
      localStorage.pee = JSON.stringify(pee);
    }
  }

  function startPee() {
    $$invalidate(4, isPeeing = true);
    localStorage.isPeeing = true;
    $$invalidate(13, pee.startTime = new Date().getTime(), pee);
    localStorage.pee = JSON.stringify(pee);
  } // function endPee() {
  // 	isPeeing = false;
  // 	localStorage.isPeeing = false;
  // 	pee.totalTime = new Date().getTime() - pee.startTime;
  // 	submitPee();
  // }


  function endPee() {
    $$invalidate(1, endTime = new Date().getTime());
  }

  function cancelPee() {
    $$invalidate(4, isPeeing = false);
    localStorage.isPeeing = false;
    $$invalidate(1, endTime = null);
  }

  function manualAdd() {
    $$invalidate(5, isManualAdd = true);
  }

  function cancelManualAdd() {
    $$invalidate(5, isManualAdd = false);
  }

  function submitManualAdd() {
    var year = parseInt(manualAddDate);
    var month = parseInt(manualAddDate.slice(5, 7)) - 1;
    var day = parseInt(manualAddDate.slice(8, 11));
    var hour = parseInt(manualAddTime);
    var min = parseInt(manualAddTime.slice(3, 5));
    var startTime = new Date(year, month, day, hour, min).getTime();
    var totalTime = parseInt(manualAddLength) * 60000;
    peeHistory.push({
      startTime: startTime,
      totalTime: totalTime,
      flag: "manualAdd"
    });

    {
      localStorage.peeHistory = JSON.stringify(peeHistory);
    }

    $$invalidate(5, isManualAdd = false);
  }

  function showHistory() {
    $$invalidate(2, isHistoryShown = !isHistoryShown);
  }

  function editEntry(e) {
    $$invalidate(0, isEdit = true);
    focusedEntry = parseInt(e.target.value);
  }

  function deleteEntry() {
    $$invalidate(3, peeHistory = peeHistory.filter(function (entry) {
      return entry.startTime !== focusedEntry;
    }));

    {
      localStorage.peeHistory = JSON.stringify(peeHistory);
    }

    $$invalidate(0, isEdit = false);
  }

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Pee> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    manualAddDate = this.value;
    $$invalidate(9, manualAddDate);
  }

  function input1_input_handler() {
    manualAddTime = this.value;
    $$invalidate(10, manualAddTime);
  }

  function input2_input_handler() {
    manualAddLength = this.value;
    $$invalidate(11, manualAddLength);
  }

  var click_handler = function click_handler() {
    return $$invalidate(0, isEdit = false);
  };

  var closeModal_handler = function closeModal_handler() {
    return $$invalidate(0, isEdit = false);
  };

  var dismiss_handler = function dismiss_handler() {
    return $$invalidate(6, isTimePicker = false);
  };

  $$self.$capture_state = function () {
    return {
      Modal: Modal,
      TimePicker: Timepicker,
      peeInit: peeInit,
      focusedEntry: focusedEntry,
      isEdit: isEdit,
      endTime: endTime,
      isHistoryShown: isHistoryShown,
      peeHistory: peeHistory,
      isPeeing: isPeeing,
      pee: pee,
      isManualAdd: isManualAdd,
      isTimePicker: isTimePicker,
      minEpoch: minEpoch,
      maxEpoch: maxEpoch,
      timePickerType: timePickerType,
      manualAddDate: manualAddDate,
      manualAddTime: manualAddTime,
      manualAddLength: manualAddLength,
      editStartTime: editStartTime,
      editEndTime: editEndTime,
      submitPickedTime: submitPickedTime,
      submitPee: submitPee,
      startPee: startPee,
      endPee: endPee,
      cancelPee: cancelPee,
      manualAdd: manualAdd,
      cancelManualAdd: cancelManualAdd,
      submitManualAdd: submitManualAdd,
      showHistory: showHistory,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory,
      formatPeeLength: formatPeeLength,
      editEntry: editEntry,
      deleteEntry: deleteEntry,
      formattedHistory: formattedHistory
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("focusedEntry" in $$props) focusedEntry = $$props.focusedEntry;
    if ("isEdit" in $$props) $$invalidate(0, isEdit = $$props.isEdit);
    if ("endTime" in $$props) $$invalidate(1, endTime = $$props.endTime);
    if ("isHistoryShown" in $$props) $$invalidate(2, isHistoryShown = $$props.isHistoryShown);
    if ("peeHistory" in $$props) $$invalidate(3, peeHistory = $$props.peeHistory);
    if ("isPeeing" in $$props) $$invalidate(4, isPeeing = $$props.isPeeing);
    if ("pee" in $$props) $$invalidate(13, pee = $$props.pee);
    if ("isManualAdd" in $$props) $$invalidate(5, isManualAdd = $$props.isManualAdd);
    if ("isTimePicker" in $$props) $$invalidate(6, isTimePicker = $$props.isTimePicker);
    if ("minEpoch" in $$props) $$invalidate(7, minEpoch = $$props.minEpoch);
    if ("maxEpoch" in $$props) $$invalidate(8, maxEpoch = $$props.maxEpoch);
    if ("timePickerType" in $$props) timePickerType = $$props.timePickerType;
    if ("manualAddDate" in $$props) $$invalidate(9, manualAddDate = $$props.manualAddDate);
    if ("manualAddTime" in $$props) $$invalidate(10, manualAddTime = $$props.manualAddTime);
    if ("manualAddLength" in $$props) $$invalidate(11, manualAddLength = $$props.manualAddLength);
    if ("formattedHistory" in $$props) $$invalidate(12, formattedHistory = $$props.formattedHistory);
  };

  var formattedHistory;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*peeHistory*/
    8) {
       $$invalidate(12, formattedHistory = formatHistory(peeHistory));
    }
  };

  return [isEdit, endTime, isHistoryShown, peeHistory, isPeeing, isManualAdd, isTimePicker, minEpoch, maxEpoch, manualAddDate, manualAddTime, manualAddLength, formattedHistory, pee, editStartTime, editEndTime, submitPickedTime, submitPee, startPee, endPee, cancelPee, manualAdd, cancelManualAdd, submitManualAdd, showHistory, editEntry, deleteEntry, input0_input_handler, input1_input_handler, input2_input_handler, click_handler, closeModal_handler, dismiss_handler];
}

var Pee = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Pee, _SvelteComponentDev);

  var _super = _createSuper$1(Pee);

  function Pee(options) {
    var _this;

    _classCallCheck(this, Pee);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Pee",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Pee;
}(SvelteComponentDev);

export default Pee;
