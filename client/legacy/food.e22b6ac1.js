import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, V as _createClass, S as SvelteComponentDev, y as validate_slots, P as createEventDispatcher, D as create_component, E as claim_component, F as mount_component, Q as _slicedToArray, G as transition_in, H as transition_out, I as destroy_component, h as element, t as text, g as space, l as claim_element, m as children, n as claim_text, j as detach_dev, k as claim_space, p as attr_dev, o as add_location, u as insert_dev, v as append_dev, A as set_input_value, w as listen_dev, L as run_all, x as noop, B as validate_each_argument, C as destroy_each, z as empty, q as query_selector_all, J as prevent_default, K as check_outros, M as globals, N as group_outros } from './client.18291dac.js';
import { M as Modal } from './Modal.ace87683.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/TimePicker.svelte"; // (72:0) <Modal on:closeModal={dismiss}>

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
  validate_slots("TimePicker", slots, []);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<TimePicker> was created with unknown prop '".concat(key, "'"));
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

var TimePicker = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(TimePicker, _SvelteComponentDev);

  var _super = _createSuper(TimePicker);

  function TimePicker(options) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      minEpoch: 8,
      maxEpoch: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TimePicker",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*minEpoch*/
    ctx[8] === undefined && !("minEpoch" in props)) {
      console.warn("<TimePicker> was created without expected prop 'minEpoch'");
    }

    if (
    /*maxEpoch*/
    ctx[9] === undefined && !("maxEpoch" in props)) {
      console.warn("<TimePicker> was created without expected prop 'maxEpoch'");
    }

    return _this;
  }

  _createClass(TimePicker, [{
    key: "minEpoch",
    get: function get() {
      throw new Error("<TimePicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TimePicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "maxEpoch",
    get: function get() {
      throw new Error("<TimePicker>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TimePicker>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TimePicker;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object;
var file$1 = "src/routes/food.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[20] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
} // (155:0) {#if Object.values(foodHistory).length}


function create_if_block_2(ctx) {
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
      attr_dev(button, "class", "mt-4 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-yellow-700");
      add_location(button, file$1, 155, 1, 3615);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
        ctx[8], false, false, false);
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
    id: create_if_block_2.name,
    type: "if",
    source: "(155:0) {#if Object.values(foodHistory).length}",
    ctx: ctx
  });
  return block;
} // (164:0) {#if isHistoryShown}


function create_if_block_1(ctx) {
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
  var th2;
  var t6;
  var t7;
  var each_value = formatHistory();
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text("Food History");
      t1 = space();
      table = element("table");
      tr = element("tr");
      th0 = element("th");
      t2 = text("Date");
      t3 = space();
      th1 = element("th");
      t4 = text("Name");
      t5 = space();
      th2 = element("th");
      t6 = text("Amount");
      t7 = space();

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
      t0 = claim_text(h2_nodes, "Food History");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      table = claim_element(nodes, "TABLE", {});
      var table_nodes = children(table);
      tr = claim_element(table_nodes, "TR", {
        class: true
      });
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", {
        class: true
      });
      var th0_nodes = children(th0);
      t2 = claim_text(th0_nodes, "Date");
      th0_nodes.forEach(detach_dev);
      t3 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", {
        class: true
      });
      var th1_nodes = children(th1);
      t4 = claim_text(th1_nodes, "Name");
      th1_nodes.forEach(detach_dev);
      t5 = claim_space(tr_nodes);
      th2 = claim_element(tr_nodes, "TH", {
        class: true
      });
      var th2_nodes = children(th2);
      t6 = claim_text(th2_nodes, "Amount");
      th2_nodes.forEach(detach_dev);
      tr_nodes.forEach(detach_dev);
      t7 = claim_space(table_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(table_nodes);
      }

      table_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-yellow-300 bold text-2xl md:text-3xl text-center");
      add_location(h2, file$1, 164, 1, 3801);
      attr_dev(th0, "class", "svelte-cyr33f");
      add_location(th0, file$1, 167, 3, 3904);
      attr_dev(th1, "class", "svelte-cyr33f");
      add_location(th1, file$1, 168, 3, 3921);
      attr_dev(th2, "class", "svelte-cyr33f");
      add_location(th2, file$1, 169, 6, 3941);
      attr_dev(tr, "class", "svelte-cyr33f");
      add_location(tr, file$1, 166, 2, 3896);
      add_location(table, file$1, 165, 1, 3886);
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
      append_dev(tr, t5);
      append_dev(tr, th2);
      append_dev(th2, t6);
      append_dev(table, t7);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(table, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*formatHistory, formatTime*/
      0) {
        each_value = formatHistory();
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
    id: create_if_block_1.name,
    type: "if",
    source: "(164:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (176:3) {#each food[1] as history}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var t0_value = formatTime(
  /*history*/
  ctx[20].time) + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*history*/
  ctx[20].name + "";
  var t2;
  var t3;
  var td2;
  var t4_value = (
  /*history*/
  ctx[20].quantity || "") + "";
  var t4;
  var t5;
  var block = {
    c: function create() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      tr = claim_element(nodes, "TR", {
        class: true
      });
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {
        class: true
      });
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach_dev);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {
        class: true
      });
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach_dev);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", {
        class: true
      });
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach_dev);
      t5 = claim_space(tr_nodes);
      tr_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(td0, "class", "text-sm svelte-cyr33f");
      add_location(td0, file$1, 177, 4, 4111);
      attr_dev(td1, "class", "svelte-cyr33f");
      add_location(td1, file$1, 178, 4, 4167);
      attr_dev(td2, "class", "svelte-cyr33f");
      add_location(td2, file$1, 179, 8, 4199);
      attr_dev(tr, "class", "svelte-cyr33f");
      add_location(tr, file$1, 176, 3, 4102);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);
      append_dev(tr, td0);
      append_dev(td0, t0);
      append_dev(tr, t1);
      append_dev(tr, td1);
      append_dev(td1, t2);
      append_dev(tr, t3);
      append_dev(tr, td2);
      append_dev(td2, t4);
      append_dev(tr, t5);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(tr);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(176:3) {#each food[1] as history}",
    ctx: ctx
  });
  return block;
} // (172:2) {#each formatHistory() as food}


function create_each_block(ctx) {
  var tr;
  var th;
  var t0_value =
  /*food*/
  ctx[5][0] + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*food*/
  ctx[5][1];
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
      tr = claim_element(nodes, "TR", {
        class: true
      });
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
      attr_dev(th, "class", "text-left svelte-cyr33f");
      attr_dev(th, "colspan", "3");
      add_location(th, file$1, 173, 4, 4011);
      attr_dev(tr, "class", "svelte-cyr33f");
      add_location(tr, file$1, 172, 3, 4002);
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
      if (dirty &
      /*formatHistory, formatTime*/
      0) {
        each_value_1 =
        /*food*/
        ctx[5][1];
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
    source: "(172:2) {#each formatHistory() as food}",
    ctx: ctx
  });
  return block;
} // (187:0) {#if isTimePicker}


function create_if_block(ctx) {
  var timepicker;
  var current;
  timepicker = new TimePicker({
    props: {
      maxEpoch:
      /*maxEpoch*/
      ctx[2]
    },
    $$inline: true
  });
  timepicker.$on("dismiss",
  /*dismiss_handler*/
  ctx[12]);
  timepicker.$on("confirm",
  /*pickedTimeSubmit*/
  ctx[6]);
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
      if (dirty &
      /*maxEpoch*/
      4) timepicker_changes.maxEpoch =
      /*maxEpoch*/
      ctx[2];
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
    source: "(187:0) {#if isTimePicker}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var h1;
  var t1;
  var br;
  var t2;
  var t3;
  var form;
  var label0;
  var span0;
  var t4;
  var t5;
  var input0;
  var t6;
  var label1;
  var span1;
  var t7;
  var t8;
  var input1;
  var t9;
  var div;
  var button0;
  var t10;
  var t11;
  var button1;
  var t12;
  var t13;
  var show_if = Object.values(
  /*foodHistory*/
  ctx[4]).length;
  var t14;
  var t15;
  var if_block2_anchor;
  var current;
  var mounted;
  var dispose;
  var if_block0 = show_if && create_if_block_2(ctx);
  var if_block1 =
  /*isHistoryShown*/
  ctx[0] && create_if_block_1(ctx);
  var if_block2 =
  /*isTimePicker*/
  ctx[1] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Food / Drug ");
      br = element("br");
      t2 = text("Log");
      t3 = space();
      form = element("form");
      label0 = element("label");
      span0 = element("span");
      t4 = text("Food name");
      t5 = space();
      input0 = element("input");
      t6 = space();
      label1 = element("label");
      span1 = element("span");
      t7 = text("Quantity");
      t8 = space();
      input1 = element("input");
      t9 = space();
      div = element("div");
      button0 = element("button");
      t10 = text("Add Now");
      t11 = space();
      button1 = element("button");
      t12 = text("Add Past");
      t13 = space();
      if (if_block0) if_block0.c();
      t14 = space();
      if (if_block1) if_block1.c();
      t15 = space();
      if (if_block2) if_block2.c();
      if_block2_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1po7aon\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Food / Drug ");
      br = claim_element(h1_nodes, "BR", {});
      t2 = claim_text(h1_nodes, "Log");
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      form = claim_element(nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      label0 = claim_element(form_nodes, "LABEL", {
        class: true
      });
      var label0_nodes = children(label0);
      span0 = claim_element(label0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t4 = claim_text(span0_nodes, "Food name");
      span0_nodes.forEach(detach_dev);
      t5 = claim_space(label0_nodes);
      input0 = claim_element(label0_nodes, "INPUT", {
        class: true
      });
      label0_nodes.forEach(detach_dev);
      t6 = claim_space(form_nodes);
      label1 = claim_element(form_nodes, "LABEL", {
        class: true
      });
      var label1_nodes = children(label1);
      span1 = claim_element(label1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t7 = claim_text(span1_nodes, "Quantity");
      span1_nodes.forEach(detach_dev);
      t8 = claim_space(label1_nodes);
      input1 = claim_element(label1_nodes, "INPUT", {
        class: true
      });
      label1_nodes.forEach(detach_dev);
      t9 = claim_space(form_nodes);
      div = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t10 = claim_text(button0_nodes, "Add Now");
      button0_nodes.forEach(detach_dev);
      t11 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button1_nodes = children(button1);
      t12 = claim_text(button1_nodes, "Add Past");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t13 = claim_space(nodes);
      if (if_block0) if_block0.l(nodes);
      t14 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      t15 = claim_space(nodes);
      if (if_block2) if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Food Log";
      add_location(br, file$1, 119, 14, 2641);
      attr_dev(h1, "class", "mb-4 text-yellow-400 bold text-3xl md:text-4xl text-center leading-tight");
      add_location(h1, file$1, 118, 0, 2541);
      attr_dev(span0, "class", "text-xl");
      add_location(span0, file$1, 126, 4, 2804);
      attr_dev(input0, "class", "shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      add_location(input0, file$1, 127, 4, 2847);
      attr_dev(label0, "class", "space-y-1 block text-center");
      add_location(label0, file$1, 125, 2, 2756);
      attr_dev(span1, "class", "text-xl");
      add_location(span1, file$1, 132, 4, 3011);
      attr_dev(input1, "class", "w-10 ml-2 px-1 shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      add_location(input1, file$1, 133, 4, 3053);
      attr_dev(label1, "class", "space-y-1 block text-center");
      add_location(label1, file$1, 131, 2, 2963);
      attr_dev(button0, "class", "rounded-md block border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button0, file$1, 138, 4, 3235);
      attr_dev(button1, "type", "button");
      attr_dev(button1, "class", "rounded-md block border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file$1, 143, 4, 3365);
      attr_dev(div, "class", "pt-1 flex justify-evenly");
      add_location(div, file$1, 137, 2, 3192);
      attr_dev(form, "class", "space-y-2 border border-gray-700 py-2");
      add_location(form, file$1, 121, 0, 2655);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      append_dev(h1, br);
      append_dev(h1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, form, anchor);
      append_dev(form, label0);
      append_dev(label0, span0);
      append_dev(span0, t4);
      append_dev(label0, t5);
      append_dev(label0, input0);
      set_input_value(input0,
      /*food*/
      ctx[5]);
      append_dev(form, t6);
      append_dev(form, label1);
      append_dev(label1, span1);
      append_dev(span1, t7);
      append_dev(label1, t8);
      append_dev(label1, input1);
      set_input_value(input1,
      /*foodQuantity*/
      ctx[3]);
      append_dev(form, t9);
      append_dev(form, div);
      append_dev(div, button0);
      append_dev(button0, t10);
      append_dev(div, t11);
      append_dev(div, button1);
      append_dev(button1, t12);
      insert_dev(target, t13, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t14, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t15, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert_dev(target, if_block2_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[9]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[10]), listen_dev(button1, "click",
        /*click_handler*/
        ctx[11], false, false, false), listen_dev(form, "submit", prevent_default(
        /*defaultSubmit*/
        ctx[7]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*food*/
      32 && input0.value !==
      /*food*/
      ctx[5]) {
        set_input_value(input0,
        /*food*/
        ctx[5]);
      }

      if (dirty &
      /*foodQuantity*/
      8 && input1.value !==
      /*foodQuantity*/
      ctx[3]) {
        set_input_value(input1,
        /*foodQuantity*/
        ctx[3]);
      }

      if (dirty &
      /*foodHistory*/
      16) show_if = Object.values(
      /*foodHistory*/
      ctx[4]).length;

      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          if_block0.m(t14.parentNode, t14);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[0]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          if_block1.m(t15.parentNode, t15);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isTimePicker*/
      ctx[1]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*isTimePicker*/
          2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(form);
      if (detaching) detach_dev(t13);
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t14);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t15);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach_dev(if_block2_anchor);
      mounted = false;
      run_all(dispose);
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
  return dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatHistory(foodHistory) {
  var formatted = {};
  foodHistory.forEach(function (history) {
    var date = formatDate(history.time);

    if (!formatted[date]) {
      formatted[date] = [history];
    } else {
      formatted[date].push(history);
    }
  });
  return Object.entries(formatted).reverse();
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Food", slots, []);
  var isHistoryShown = false;
  var isManualAdd;
  var isTimePicker = false;
  var maxEpoch;
  var time; // let manualAddDate;
  // let manualAddTime;
  // let manualAddLength;

  var food;
  var foodQuantity;
  var foodHistory = [];

  {
    foodHistory = !!localStorage.foodHistory ? JSON.parse(localStorage.foodHistory) : [];
  } // function manualAdd() {
  //   isManualAdd = true;
  // }
  // function cancelManualAdd() {
  //   isManualAdd = false;
  // }
  // function submitManualAdd() {
  //   const year = parseInt(manualAddDate)
  //   const month = parseInt(manualAddDate.slice(5, 7)) - 1;
  //   const day = parseInt(manualAddDate.slice(8, 11));
  //   const hour = parseInt(manualAddTime);
  //   const min = parseInt(manualAddTime.slice(3, 5));
  //
  //   const time = new Date(year, month, day, hour, min).getTime();
  //
  //   foodHistory.push({
  //     time,
  //     name: food,
  //     quantity: foodQuantity
  //   });
  //   if (true) {
  //     localStorage.foodHistory = JSON.stringify(foodHistory);
  //   }
  //   food = '';
  //   foodQuantity = '';
  //   isManualAdd = false;
  // }


  function startTimePick() {
    $$invalidate(2, maxEpoch = new Date().getTime());
    $$invalidate(1, isTimePicker = true);
  }

  function pickedTimeSubmit(event) {
    $$invalidate(1, isTimePicker = false);
    time = event.detail.epoch;
    submitFood();
  }

  function defaultSubmit() {
    time = new Date().getTime();
    submitFood();
  }

  function submitFood() {
    foodHistory.push({
      time: time,
      name: food,
      quantity: foodQuantity
    });

    {
      localStorage.foodHistory = JSON.stringify(foodHistory);
    }

    $$invalidate(5, food = "");
    $$invalidate(3, foodQuantity = "");
  }

  function showHistory() {
    $$invalidate(0, isHistoryShown = !isHistoryShown);
  }

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Food> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    food = this.value;
    $$invalidate(5, food);
  }

  function input1_input_handler() {
    foodQuantity = this.value;
    $$invalidate(3, foodQuantity);
  }

  var click_handler = function click_handler() {
    return $$invalidate(1, isTimePicker = true);
  };

  var dismiss_handler = function dismiss_handler() {
    return $$invalidate(1, isTimePicker = false);
  };

  $$self.$capture_state = function () {
    return {
      TimePicker: TimePicker,
      isHistoryShown: isHistoryShown,
      isManualAdd: isManualAdd,
      isTimePicker: isTimePicker,
      maxEpoch: maxEpoch,
      time: time,
      food: food,
      foodQuantity: foodQuantity,
      foodHistory: foodHistory,
      startTimePick: startTimePick,
      pickedTimeSubmit: pickedTimeSubmit,
      defaultSubmit: defaultSubmit,
      submitFood: submitFood,
      showHistory: showHistory,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory,
      formattedHistory: formattedHistory
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isHistoryShown" in $$props) $$invalidate(0, isHistoryShown = $$props.isHistoryShown);
    if ("isManualAdd" in $$props) isManualAdd = $$props.isManualAdd;
    if ("isTimePicker" in $$props) $$invalidate(1, isTimePicker = $$props.isTimePicker);
    if ("maxEpoch" in $$props) $$invalidate(2, maxEpoch = $$props.maxEpoch);
    if ("time" in $$props) time = $$props.time;
    if ("food" in $$props) $$invalidate(5, food = $$props.food);
    if ("foodQuantity" in $$props) $$invalidate(3, foodQuantity = $$props.foodQuantity);
    if ("foodHistory" in $$props) $$invalidate(4, foodHistory = $$props.foodHistory);
    if ("formattedHistory" in $$props) formattedHistory = $$props.formattedHistory;
  };

  var formattedHistory;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*foodHistory*/
    16) {
       formattedHistory = formatHistory(foodHistory);
    }
  };

  return [isHistoryShown, isTimePicker, maxEpoch, foodQuantity, foodHistory, food, pickedTimeSubmit, defaultSubmit, showHistory, input0_input_handler, input1_input_handler, click_handler, dismiss_handler];
}

var Food = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Food, _SvelteComponentDev);

  var _super = _createSuper$1(Food);

  function Food(options) {
    var _this;

    _classCallCheck(this, Food);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Food",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Food;
}(SvelteComponentDev);

export default Food;
