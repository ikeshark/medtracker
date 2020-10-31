import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, k as claim_element, l as children, m as claim_text, h as detach_dev, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as listen_dev, v as noop, z as validate_each_argument, f as space, j as claim_space, A as destroy_each, x as empty, q as query_selector_all, y as set_input_value, H as prevent_default, O as _slicedToArray, J as run_all, w as validate_slots, K as globals } from './client.8b10c686.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object;
var file = "src/routes/food.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (85:0) {#if Object.values(foodHistory).length}


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
      attr_dev(button, "class", "mt-4 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-yellow-700");
      add_location(button, file, 85, 1, 2023);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
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
    id: create_if_block_1.name,
    type: "if",
    source: "(85:0) {#if Object.values(foodHistory).length}",
    ctx: ctx
  });
  return block;
} // (94:0) {#if isHistoryShown}


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
  var th2;
  var t6;
  var t7;
  var each_value =
  /*formatHistory*/
  ctx[6]();
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
      t6 = text("Quantity");
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
      t6 = claim_text(th2_nodes, "Quantity");
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
      add_location(h2, file, 94, 1, 2209);
      attr_dev(th0, "class", "svelte-jorie6");
      add_location(th0, file, 97, 3, 2312);
      attr_dev(th1, "class", "svelte-jorie6");
      add_location(th1, file, 98, 3, 2329);
      attr_dev(th2, "class", "svelte-jorie6");
      add_location(th2, file, 99, 6, 2349);
      attr_dev(tr, "class", "svelte-jorie6");
      add_location(tr, file, 96, 2, 2304);
      add_location(table, file, 95, 1, 2294);
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
      64) {
        each_value =
        /*formatHistory*/
        ctx[6]();
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
    source: "(94:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (106:3) {#each food[1] as history}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var t0_value = formatTime(
  /*history*/
  ctx[11].time) + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*history*/
  ctx[11].name + "";
  var t2;
  var t3;
  var td2;
  var t4_value = (
  /*history*/
  ctx[11].quantity || "") + "";
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
      attr_dev(td0, "class", "text-sm svelte-jorie6");
      add_location(td0, file, 107, 4, 2507);
      attr_dev(td1, "class", "svelte-jorie6");
      add_location(td1, file, 108, 4, 2563);
      attr_dev(td2, "class", "svelte-jorie6");
      add_location(td2, file, 109, 8, 2595);
      attr_dev(tr, "class", "svelte-jorie6");
      add_location(tr, file, 106, 3, 2498);
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
    source: "(106:3) {#each food[1] as history}",
    ctx: ctx
  });
  return block;
} // (102:2) {#each formatHistory() as food}


function create_each_block(ctx) {
  var tr;
  var th;
  var t0_value =
  /*food*/
  ctx[3][0] + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*food*/
  ctx[3][1];
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
        class: true
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
      attr_dev(th, "class", "text-sm svelte-jorie6");
      add_location(th, file, 103, 4, 2421);
      attr_dev(tr, "class", "svelte-jorie6");
      add_location(tr, file, 102, 3, 2412);
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
      64) {
        each_value_1 =
        /*food*/
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
      if (detaching) detach_dev(t1);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(102:2) {#each formatHistory() as food}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var form;
  var label0;
  var span0;
  var t3;
  var t4;
  var input0;
  var t5;
  var label1;
  var span1;
  var t6;
  var t7;
  var input1;
  var t8;
  var button;
  var t9;
  var t10;
  var show_if = Object.values(
  /*foodHistory*/
  ctx[2]).length;
  var t11;
  var if_block1_anchor;
  var mounted;
  var dispose;
  var if_block0 = show_if && create_if_block_1(ctx);
  var if_block1 =
  /*isHistoryShown*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Food Log");
      t2 = space();
      form = element("form");
      label0 = element("label");
      span0 = element("span");
      t3 = text("Food name");
      t4 = space();
      input0 = element("input");
      t5 = space();
      label1 = element("label");
      span1 = element("span");
      t6 = text("Quantity");
      t7 = space();
      input1 = element("input");
      t8 = space();
      button = element("button");
      t9 = text("Add Food");
      t10 = space();
      if (if_block0) if_block0.c();
      t11 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
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
      t1 = claim_text(h1_nodes, "Food Log");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
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
      t3 = claim_text(span0_nodes, "Food name");
      span0_nodes.forEach(detach_dev);
      t4 = claim_space(label0_nodes);
      input0 = claim_element(label0_nodes, "INPUT", {
        class: true
      });
      label0_nodes.forEach(detach_dev);
      t5 = claim_space(form_nodes);
      label1 = claim_element(form_nodes, "LABEL", {
        class: true
      });
      var label1_nodes = children(label1);
      span1 = claim_element(label1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t6 = claim_text(span1_nodes, "Quantity");
      span1_nodes.forEach(detach_dev);
      t7 = claim_space(label1_nodes);
      input1 = claim_element(label1_nodes, "INPUT", {
        class: true
      });
      label1_nodes.forEach(detach_dev);
      t8 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t9 = claim_text(button_nodes, "Add Food");
      button_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t10 = claim_space(nodes);
      if (if_block0) if_block0.l(nodes);
      t11 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Food Log";
      attr_dev(h1, "class", "text-yellow-400 bold text-3xl md:text-4xl text-center");
      add_location(h1, file, 64, 0, 1251);
      attr_dev(span0, "class", "text-xl");
      add_location(span0, file, 67, 4, 1444);
      attr_dev(input0, "class", "shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      add_location(input0, file, 68, 4, 1487);
      attr_dev(label0, "class", "space-y-1 block text-center");
      add_location(label0, file, 66, 2, 1396);
      attr_dev(span1, "class", "text-xl");
      add_location(span1, file, 73, 4, 1651);
      attr_dev(input1, "class", "shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      add_location(input1, file, 74, 4, 1693);
      attr_dev(label1, "class", "space-y-1 block text-center");
      add_location(label1, file, 72, 2, 1603);
      attr_dev(button, "class", "text-black border-2 bg-white border-solid rounded-lg shadow-sm border-yellow-500 px-3 py-1 block mx-auto text-xl");
      add_location(button, file, 78, 2, 1817);
      attr_dev(form, "class", "space-y-4");
      add_location(form, file, 65, 0, 1331);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, form, anchor);
      append_dev(form, label0);
      append_dev(label0, span0);
      append_dev(span0, t3);
      append_dev(label0, t4);
      append_dev(label0, input0);
      set_input_value(input0,
      /*food*/
      ctx[3]);
      append_dev(form, t5);
      append_dev(form, label1);
      append_dev(label1, span1);
      append_dev(span1, t6);
      append_dev(label1, t7);
      append_dev(label1, input1);
      set_input_value(input1,
      /*foodQuantity*/
      ctx[1]);
      append_dev(form, t8);
      append_dev(form, button);
      append_dev(button, t9);
      insert_dev(target, t10, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t11, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[7]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[8]), listen_dev(form, "submit", prevent_default(
        /*submitFood*/
        ctx[5]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*food*/
      8 && input0.value !==
      /*food*/
      ctx[3]) {
        set_input_value(input0,
        /*food*/
        ctx[3]);
      }

      if (dirty &
      /*foodQuantity*/
      2 && input1.value !==
      /*foodQuantity*/
      ctx[1]) {
        set_input_value(input1,
        /*foodQuantity*/
        ctx[1]);
      }

      if (dirty &
      /*foodHistory*/
      4) show_if = Object.values(
      /*foodHistory*/
      ctx[2]).length;

      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(t11.parentNode, t11);
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
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(form);
      if (detaching) detach_dev(t10);
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t11);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
      mounted = false;
      run_all(dispose);
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
  return dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Food", slots, []);
  var isHistoryShown = false; // const foodInit = {
  //   time: null,
  //   name: null
  // };

  var food;
  var foodQuantity;
  var foodHistory = [];

  {
    foodHistory = !!localStorage.foodHistory ? JSON.parse(localStorage.foodHistory) : [];
  }

  function showHistory() {
    $$invalidate(0, isHistoryShown = true);
  }

  function submitFood() {
    foodHistory.push({
      time: new Date().getTime(),
      name: food,
      quantity: foodQuantity
    });

    {
      localStorage.foodHistory = JSON.stringify(foodHistory);
    }

    $$invalidate(3, food = "");
    $$invalidate(1, foodQuantity = "");
  }

  function formatHistory() {
    var formatted = {};
    foodHistory.forEach(function (history) {
      var date = formatDate(history.time);

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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Food> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    food = this.value;
    $$invalidate(3, food);
  }

  function input1_input_handler() {
    foodQuantity = this.value;
    $$invalidate(1, foodQuantity);
  }

  $$self.$capture_state = function () {
    return {
      isHistoryShown: isHistoryShown,
      food: food,
      foodQuantity: foodQuantity,
      foodHistory: foodHistory,
      showHistory: showHistory,
      submitFood: submitFood,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isHistoryShown" in $$props) $$invalidate(0, isHistoryShown = $$props.isHistoryShown);
    if ("food" in $$props) $$invalidate(3, food = $$props.food);
    if ("foodQuantity" in $$props) $$invalidate(1, foodQuantity = $$props.foodQuantity);
    if ("foodHistory" in $$props) $$invalidate(2, foodHistory = $$props.foodHistory);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [isHistoryShown, foodQuantity, foodHistory, food, showHistory, submitFood, formatHistory, input0_input_handler, input1_input_handler];
}

var Food = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Food, _SvelteComponentDev);

  var _super = _createSuper(Food);

  function Food(options) {
    var _this;

    _classCallCheck(this, Food);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Food",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Food;
}(SvelteComponentDev);

export default Food;
