import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, k as claim_element, l as children, m as claim_text, h as detach_dev, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as listen_dev, v as noop, z as validate_each_argument, f as space, j as claim_space, A as destroy_each, x as empty, B as create_component, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component, q as query_selector_all, O as _slicedToArray, I as check_outros, w as validate_slots, K as globals, y as set_input_value, J as run_all, L as group_outros } from './client.8b10c686.js';
import { M as Modal } from './Modal.ae41745b.js';

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
var Object_1 = globals.Object;
var file = "src/routes/pee.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
} // (139:19) 


function create_if_block_4(ctx) {
  var button0;
  var t0;
  var t1;
  var button1;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button0 = element("button");
      t0 = text("End Pee");
      t1 = space();
      button1 = element("button");
      t2 = text("Cancel Pee");
      this.h();
    },
    l: function claim(nodes) {
      button0 = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "End Pee");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Cancel Pee");
      button1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700");
      add_location(button0, file, 139, 1, 3169);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file, 145, 1, 3314);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button0, anchor);
      append_dev(button0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, button1, anchor);
      append_dev(button1, t2);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*endPee*/
        ctx[9], false, false, false), listen_dev(button1, "click",
        /*cancelPee*/
        ctx[10], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(button1);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(139:19) ",
    ctx: ctx
  });
  return block;
} // (126:0) {#if !isPeeing}


function create_if_block_3(ctx) {
  var button0;
  var t0;
  var t1;
  var button1;
  var t2;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button0 = element("button");
      t0 = text("Start Pee");
      t1 = space();
      button1 = element("button");
      t2 = text("Manual Add");
      this.h();
    },
    l: function claim(nodes) {
      button0 = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Start Pee");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Manual Add");
      button1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "block mb-4 mx-auto rounded-md border-black border py-2 px-4 text-white bg-green-700");
      add_location(button0, file, 126, 1, 2846);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file, 132, 1, 2997);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button0, anchor);
      append_dev(button0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, button1, anchor);
      append_dev(button1, t2);

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*startPee*/
        ctx[8], false, false, false), listen_dev(button1, "click",
        /*manualAdd*/
        ctx[11], false, false, false)];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(button1);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(126:0) {#if !isPeeing}",
    ctx: ctx
  });
  return block;
} // (154:0) {#if Object.values(peeHistory).length}


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
      attr_dev(button, "class", "block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700");
      add_location(button, file, 154, 1, 3512);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
        ctx[14], false, false, false);
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
    source: "(154:0) {#if Object.values(peeHistory).length}",
    ctx: ctx
  });
  return block;
} // (163:0) {#if isHistoryShown}


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
  var each_value =
  /*formatHistory*/
  ctx[15]();
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
      add_location(h2, file, 163, 1, 3691);
      attr_dev(th0, "class", "svelte-sfl9m0");
      add_location(th0, file, 166, 3, 3793);
      attr_dev(th1, "class", "svelte-sfl9m0");
      add_location(th1, file, 167, 3, 3810);
      attr_dev(tr, "class", "svelte-sfl9m0");
      add_location(tr, file, 165, 2, 3785);
      add_location(table, file, 164, 1, 3775);
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
      32768) {
        each_value =
        /*formatHistory*/
        ctx[15]();
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
    source: "(163:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (175:3) {#each day[1] as pee}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var t0_value = formatTime(
  /*pee*/
  ctx[7].startTime) + "";
  var t0;
  var t1;
  var td1;
  var t2_value = formatPeeLength(
  /*pee*/
  ctx[7].totalTime) + "";
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
      attr_dev(td0, "class", "text-sm svelte-sfl9m0");
      add_location(td0, file, 176, 4, 3957);
      attr_dev(td1, "class", "svelte-sfl9m0");
      add_location(td1, file, 177, 4, 4014);
      attr_dev(tr, "class", "svelte-sfl9m0");
      add_location(tr, file, 175, 3, 3948);
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
    source: "(175:3) {#each day[1] as pee}",
    ctx: ctx
  });
  return block;
} // (170:2) {#each formatHistory() as day}


function create_each_block(ctx) {
  var tr;
  var th0;
  var t0_value =
  /*day*/
  ctx[21][0] + "";
  var t0;
  var t1;
  var th1;
  var t2;
  var each_1_anchor;
  var each_value_1 =
  /*day*/
  ctx[21][1];
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
      attr_dev(th0, "class", "svelte-sfl9m0");
      add_location(th0, file, 171, 4, 3879);
      attr_dev(th1, "class", "svelte-sfl9m0");
      add_location(th1, file, 172, 4, 3901);
      attr_dev(tr, "class", "svelte-sfl9m0");
      add_location(tr, file, 170, 3, 3870);
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
      32768) {
        each_value_1 =
        /*day*/
        ctx[21][1];
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
    source: "(170:2) {#each formatHistory() as day}",
    ctx: ctx
  });
  return block;
} // (185:0) {#if isManualAdd}


function create_if_block(ctx) {
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
  /*cancelManualAdd*/
  ctx[12]);
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

      if (dirty &
      /*$$scope, manualAddLength, manualAddTime, manualAddDate*/
      67108976) {
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
    id: create_if_block.name,
    type: "if",
    source: "(185:0) {#if isManualAdd}",
    ctx: ctx
  });
  return block;
} // (186:1) <Modal on:closeModal={cancelManualAdd}>


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
      attr_dev(input0, "class", "block bg-gray-900 pl-1 svelte-sfl9m0");
      attr_dev(input0, "type", "date");
      add_location(input0, file, 189, 4, 4259);
      attr_dev(label0, "class", "block p-1 mb-1");
      add_location(label0, file, 187, 3, 4215);
      attr_dev(input1, "class", "block bg-gray-900 pl-1 svelte-sfl9m0");
      attr_dev(input1, "type", "time");
      add_location(input1, file, 197, 4, 4416);
      attr_dev(label1, "class", "block p-1 mb-1");
      add_location(label1, file, 195, 3, 4372);
      attr_dev(input2, "class", "block bg-gray-900 pl-1 svelte-sfl9m0");
      attr_dev(input2, "type", "text");
      add_location(input2, file, 205, 4, 4585);
      attr_dev(label2, "class", "block p-1 mb-1");
      add_location(label2, file, 203, 3, 4529);
      attr_dev(button0, "class", "block w-full mb-2 p-2 border-double border-8 border-green-700 rounded-lg font-bold text-xl");
      add_location(button0, file, 211, 3, 4700);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file, 215, 3, 4865);
      attr_dev(div, "class", "w-10/12 shadow-lg p-4 bg-gray-800");
      add_location(div, file, 186, 2, 4164);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      set_input_value(input0,
      /*manualAddDate*/
      ctx[4]);
      append_dev(div, t1);
      append_dev(div, label1);
      append_dev(label1, t2);
      append_dev(label1, input1);
      set_input_value(input1,
      /*manualAddTime*/
      ctx[5]);
      append_dev(div, t3);
      append_dev(div, label2);
      append_dev(label2, t4);
      append_dev(label2, input2);
      set_input_value(input2,
      /*manualAddLength*/
      ctx[6]);
      append_dev(div, t5);
      append_dev(div, button0);
      append_dev(button0, t6);
      append_dev(div, t7);
      append_dev(div, button1);
      append_dev(button1, t8);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[16]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[17]), listen_dev(input2, "input",
        /*input2_input_handler*/
        ctx[18]), listen_dev(button0, "click",
        /*submitManualAdd*/
        ctx[13], false, false, false), listen_dev(button1, "click",
        /*cancelManualAdd*/
        ctx[12], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*manualAddDate*/
      16) {
        set_input_value(input0,
        /*manualAddDate*/
        ctx[4]);
      }

      if (dirty &
      /*manualAddTime*/
      32) {
        set_input_value(input1,
        /*manualAddTime*/
        ctx[5]);
      }

      if (dirty &
      /*manualAddLength*/
      64 && input2.value !==
      /*manualAddLength*/
      ctx[6]) {
        set_input_value(input2,
        /*manualAddLength*/
        ctx[6]);
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
    source: "(186:1) <Modal on:closeModal={cancelManualAdd}>",
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
  ctx[1]).length;
  var t4;
  var t5;
  var if_block3_anchor;
  var current;

  function select_block_type(ctx, dirty) {
    if (!
    /*isPeeing*/
    ctx[2]) return create_if_block_3;
    if (
    /*isPeeing*/
    ctx[2]) return create_if_block_4;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type && current_block_type(ctx);
  var if_block1 = show_if && create_if_block_2(ctx);
  var if_block2 =
  /*isHistoryShown*/
  ctx[0] && create_if_block_1(ctx);
  var if_block3 =
  /*isManualAdd*/
  ctx[3] && create_if_block(ctx);
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
      if_block3_anchor = empty();
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
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Pee Log";
      attr_dev(h1, "class", "text-yellow-500 bold text-3xl md:text-4xl text-center");
      add_location(h1, file, 123, 0, 2749);
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
      insert_dev(target, if_block3_anchor, anchor);
      current = true;
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
      2) show_if = Object.values(
      /*peeHistory*/
      ctx[1]).length;

      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          if_block1.m(t4.parentNode, t4);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[0]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_1(ctx);
          if_block2.c();
          if_block2.m(t5.parentNode, t5);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (
      /*isManualAdd*/
      ctx[3]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty &
          /*isManualAdd*/
          8) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block(ctx);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, function () {
          if_block3 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block3);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block3);
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
      if (detaching) detach_dev(if_block3_anchor);
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
  var peeInit = {
    startTime: null,
    totalTime: null
  };
  var isHistoryShown = false;
  var peeHistory = [];
  var isPeeing = false;
  var pee;
  var isManualAdd = false;
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

  function submitPee() {
    peeHistory.push(pee);
    $$invalidate(1, peeHistory);
    $$invalidate(7, pee = _objectSpread({}, peeInit));

    {
      localStorage.peeHistory = JSON.stringify(peeHistory);
      localStorage.pee = JSON.stringify(pee);
    }
  }

  function startPee() {
    $$invalidate(2, isPeeing = true);
    localStorage.isPeeing = true;
    $$invalidate(7, pee.startTime = new Date().getTime(), pee);
    localStorage.pee = JSON.stringify(pee);
  }

  function endPee() {
    $$invalidate(2, isPeeing = false);
    localStorage.isPeeing = false;
    $$invalidate(7, pee.totalTime = new Date().getTime() - pee.startTime, pee);
    submitPee();
  }

  function cancelPee() {
    $$invalidate(2, isPeeing = false);
    localStorage.isPeeing = false;
  }

  function manualAdd() {
    $$invalidate(3, isManualAdd = true);
  }

  function cancelManualAdd() {
    $$invalidate(3, isManualAdd = false);
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

    $$invalidate(3, isManualAdd = false);
  }

  function showHistory() {
    $$invalidate(0, isHistoryShown = !isHistoryShown);
  }

  function formatHistory() {
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

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pee> was created with unknown prop '".concat(key, "'"));
  });

  function input0_input_handler() {
    manualAddDate = this.value;
    $$invalidate(4, manualAddDate);
  }

  function input1_input_handler() {
    manualAddTime = this.value;
    $$invalidate(5, manualAddTime);
  }

  function input2_input_handler() {
    manualAddLength = this.value;
    $$invalidate(6, manualAddLength);
  }

  $$self.$capture_state = function () {
    return {
      Modal: Modal,
      peeInit: peeInit,
      isHistoryShown: isHistoryShown,
      peeHistory: peeHistory,
      isPeeing: isPeeing,
      pee: pee,
      isManualAdd: isManualAdd,
      manualAddDate: manualAddDate,
      manualAddTime: manualAddTime,
      manualAddLength: manualAddLength,
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
      formatPeeLength: formatPeeLength
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isHistoryShown" in $$props) $$invalidate(0, isHistoryShown = $$props.isHistoryShown);
    if ("peeHistory" in $$props) $$invalidate(1, peeHistory = $$props.peeHistory);
    if ("isPeeing" in $$props) $$invalidate(2, isPeeing = $$props.isPeeing);
    if ("pee" in $$props) $$invalidate(7, pee = $$props.pee);
    if ("isManualAdd" in $$props) $$invalidate(3, isManualAdd = $$props.isManualAdd);
    if ("manualAddDate" in $$props) $$invalidate(4, manualAddDate = $$props.manualAddDate);
    if ("manualAddTime" in $$props) $$invalidate(5, manualAddTime = $$props.manualAddTime);
    if ("manualAddLength" in $$props) $$invalidate(6, manualAddLength = $$props.manualAddLength);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [isHistoryShown, peeHistory, isPeeing, isManualAdd, manualAddDate, manualAddTime, manualAddLength, pee, startPee, endPee, cancelPee, manualAdd, cancelManualAdd, submitManualAdd, showHistory, formatHistory, input0_input_handler, input1_input_handler, input2_input_handler];
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
