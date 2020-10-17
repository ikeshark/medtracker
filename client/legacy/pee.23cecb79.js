import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, k as claim_element, l as children, m as claim_text, h as detach_dev, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, C as listen_dev, u as noop, x as validate_each_argument, f as space, j as claim_space, A as destroy_each, D as empty, q as query_selector_all, z as _slicedToArray, v as validate_slots, H as globals } from './client.da7b52ff.js';

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Object_1 = globals.Object,
    console_1 = globals.console;
var file = "src/routes/pee.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (85:19) 


function create_if_block_3(ctx) {
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text("End Pee");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "End Pee");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700");
      add_location(button, file, 85, 1, 1860);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*endPee*/
        ctx[5], false, false, false);
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
    id: create_if_block_3.name,
    type: "if",
    source: "(85:19) ",
    ctx: ctx
  });
  return block;
} // (78:0) {#if !isPeeing}


function create_if_block_2(ctx) {
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text("Start Pee");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Start Pee");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "block mb-4 mx-auto rounded-md border-black border py-2 px-4 text-white bg-green-700");
      add_location(button, file, 78, 1, 1689);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*startPee*/
        ctx[4], false, false, false);
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
    source: "(78:0) {#if !isPeeing}",
    ctx: ctx
  });
  return block;
} // (94:0) {#if Object.values(peeHistory).length}


function create_if_block_1(ctx) {
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
      add_location(button, file, 94, 1, 2051);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
        ctx[6], false, false, false);
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
    id: create_if_block_1.name,
    type: "if",
    source: "(94:0) {#if Object.values(peeHistory).length}",
    ctx: ctx
  });
  return block;
} // (103:0) {#if isHistoryShown}


function create_if_block(ctx) {
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
  /*formatHistory*/
  ctx[7]();
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
      add_location(h2, file, 103, 1, 2230);
      attr_dev(th0, "class", "svelte-9xrsgv");
      add_location(th0, file, 106, 3, 2332);
      attr_dev(th1, "class", "svelte-9xrsgv");
      add_location(th1, file, 107, 3, 2349);
      attr_dev(tr, "class", "svelte-9xrsgv");
      add_location(tr, file, 105, 2, 2324);
      add_location(table, file, 104, 1, 2314);
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
      if (dirty &
      /*formatHistory, formatPeeLength, formatTime*/
      128) {
        each_value =
        /*formatHistory*/
        ctx[7]();
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
    id: create_if_block.name,
    type: "if",
    source: "(103:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (115:3) {#each pee[1] as history}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var t0_value = formatTime(
  /*history*/
  ctx[12][0]) + "";
  var t0;
  var t1;
  var td1;
  var t2_value = formatPeeLength(
  /*history*/
  ctx[12][1]) + "";
  var t2;
  var t3;
  var block = {
    c: function create() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
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
      tr_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(td0, "class", "text-sm svelte-9xrsgv");
      add_location(td0, file, 116, 4, 2500);
      attr_dev(td1, "class", "svelte-9xrsgv");
      add_location(td1, file, 117, 4, 2554);
      attr_dev(tr, "class", "svelte-9xrsgv");
      add_location(tr, file, 115, 3, 2491);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);
      append_dev(tr, td0);
      append_dev(td0, t0);
      append_dev(tr, t1);
      append_dev(tr, td1);
      append_dev(td1, t2);
      append_dev(tr, t3);
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
    source: "(115:3) {#each pee[1] as history}",
    ctx: ctx
  });
  return block;
} // (110:2) {#each formatHistory() as pee}


function create_each_block(ctx) {
  var tr;
  var th0;
  var t0_value =
  /*pee*/
  ctx[3][0] + "";
  var t0;
  var t1;
  var th1;
  var t2;
  var each_1_anchor;
  var each_value_1 =
  /*pee*/
  ctx[3][1];
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var block = {
    c: function create() {
      tr = element("tr");
      th0 = element("th");
      t0 = text(t0_value);
      t1 = space();
      th1 = element("th");
      t2 = space();

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
      th0 = claim_element(tr_nodes, "TH", {
        class: true
      });
      var th0_nodes = children(th0);
      t0 = claim_text(th0_nodes, t0_value);
      th0_nodes.forEach(detach_dev);
      t1 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", {
        class: true
      });
      children(th1).forEach(detach_dev);
      tr_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(nodes);
      }

      each_1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(th0, "class", "svelte-9xrsgv");
      add_location(th0, file, 111, 4, 2418);
      attr_dev(th1, "class", "svelte-9xrsgv");
      add_location(th1, file, 112, 4, 2440);
      attr_dev(tr, "class", "svelte-9xrsgv");
      add_location(tr, file, 110, 3, 2409);
    },
    m: function mount(target, anchor) {
      insert_dev(target, tr, anchor);
      append_dev(tr, th0);
      append_dev(th0, t0);
      append_dev(tr, t1);
      append_dev(tr, th1);
      insert_dev(target, t2, anchor);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*formatPeeLength, formatHistory, formatTime*/
      128) {
        each_value_1 =
        /*pee*/
        ctx[3][1];
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
      if (detaching) detach_dev(t2);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(110:2) {#each formatHistory() as pee}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var t3;
  var show_if = Object.values(
  /*peeHistory*/
  ctx[2]).length;
  var t4;
  var if_block2_anchor;

  function select_block_type(ctx, dirty) {
    if (!
    /*isPeeing*/
    ctx[0]) return create_if_block_2;
    if (
    /*isPeeing*/
    ctx[0]) return create_if_block_3;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type && current_block_type(ctx);
  var if_block1 = show_if && create_if_block_1(ctx);
  var if_block2 =
  /*isHistoryShown*/
  ctx[1] && create_if_block(ctx);
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
      if_block2_anchor = empty();
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
      if_block2_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Pee Log";
      attr_dev(h1, "class", "text-yellow-500 bold text-3xl md:text-4xl text-center");
      add_location(h1, file, 75, 0, 1592);
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
      insert_dev(target, if_block2_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

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

      if (dirty &
      /*peeHistory*/
      4) show_if = Object.values(
      /*peeHistory*/
      ctx[2]).length;

      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          if_block1.m(t4.parentNode, t4);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[1]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: noop,
    o: noop,
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
      if (detaching) detach_dev(if_block2_anchor);
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

function formatDate(epoch) {
  var dateObj = new Date(parseInt(epoch));
  return dateObj.toLocaleDateString("en-US");
}

function formatTime(epoch) {
  var dateObj = new Date(parseInt(epoch));
  return dateObj.toLocaleTimeString("en-US");
}

function formatPeeLength(time) {
  console.log(time);
  var totalSeconds = time / 1000;
  var minutes = parseInt(totalSeconds / 60);
  var seconds = parseInt(totalSeconds % 60) + "";
  if (seconds.length === 1) seconds = "0".concat(seconds);
  return "".concat(minutes, ":").concat(seconds);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Pee", slots, []);
  var isPeeing = false;
  var isHistoryShown = false;
  var peeInit = {
    startTime: null,
    totalTime: null
  };

  var pee = _objectSpread({}, peeInit);

  var peeHistory = {};

  {
    peeHistory = !!localStorage.peeHistory ? JSON.parse(localStorage.peeHistory) : {};
  }

  function submitPee() {
    $$invalidate(2, peeHistory[pee.startTime] = pee.totalTime, peeHistory);

    {
      localStorage.peeHistory = JSON.stringify(peeHistory);
    }

    $$invalidate(3, pee = _objectSpread({}, peeInit));
  }

  function startPee() {
    $$invalidate(0, isPeeing = true);
    $$invalidate(3, pee.startTime = new Date().getTime(), pee);
  }

  function endPee() {
    $$invalidate(0, isPeeing = false);
    $$invalidate(3, pee.totalTime = new Date().getTime() - pee.startTime, pee);
    submitPee();
  }

  function showHistory() {
    $$invalidate(1, isHistoryShown = true);
  }

  function formatHistory() {
    var formatted = {};
    Object.entries(peeHistory).forEach(function (history) {
      var date = formatDate(history[0]);

      if (!formatted[date]) {
        formatted[date] = [history];
      } else {
        formatted[date].push(history);
      }
    });
    return Object.entries(formatted);
  }

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Pee> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      isPeeing: isPeeing,
      isHistoryShown: isHistoryShown,
      peeInit: peeInit,
      pee: pee,
      peeHistory: peeHistory,
      submitPee: submitPee,
      startPee: startPee,
      endPee: endPee,
      showHistory: showHistory,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory,
      formatPeeLength: formatPeeLength
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isPeeing" in $$props) $$invalidate(0, isPeeing = $$props.isPeeing);
    if ("isHistoryShown" in $$props) $$invalidate(1, isHistoryShown = $$props.isHistoryShown);
    if ("pee" in $$props) $$invalidate(3, pee = $$props.pee);
    if ("peeHistory" in $$props) $$invalidate(2, peeHistory = $$props.peeHistory);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [isPeeing, isHistoryShown, peeHistory, pee, startPee, endPee, showHistory, formatHistory];
}

var Pee = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Pee, _SvelteComponentDev);

  var _super = _createSuper(Pee);

  function Pee(options) {
    var _this;

    _classCallCheck(this, Pee);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Pee",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Pee;
}(SvelteComponentDev);

export default Pee;
