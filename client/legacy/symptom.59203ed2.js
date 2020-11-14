import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as element, t as text, l as claim_element, m as children, n as claim_text, j as detach_dev, p as attr_dev, o as add_location, u as insert_dev, v as append_dev, w as listen_dev, x as noop, B as validate_each_argument, g as space, k as claim_space, C as destroy_each, z as empty, D as create_component, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component, q as query_selector_all, A as set_input_value, J as prevent_default, Q as _slicedToArray, T as prop_dev, U as set_data_dev, K as check_outros, L as run_all, y as validate_slots, M as globals, N as group_outros } from './client.18291dac.js';
import { M as Modal } from './Modal.ace87683.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object;
var file = "src/routes/symptom.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
} // (155:0) {#if Object.values(symptomHistory).length}


function create_if_block_3(ctx) {
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
      attr_dev(button, "class", "mt-2 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700");
      add_location(button, file, 155, 1, 3714);
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
    id: create_if_block_3.name,
    type: "if",
    source: "(155:0) {#if Object.values(symptomHistory).length}",
    ctx: ctx
  });
  return block;
} // (164:0) {#if isHistoryShown}


function create_if_block_2(ctx) {
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
      t0 = text("Pee History");
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
      t6 = text("Intensity");
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
      t4 = claim_text(th1_nodes, "Name");
      th1_nodes.forEach(detach_dev);
      t5 = claim_space(tr_nodes);
      th2 = claim_element(tr_nodes, "TH", {});
      var th2_nodes = children(th2);
      t6 = claim_text(th2_nodes, "Intensity");
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
      attr_dev(h2, "class", "text-yellow-500 bold text-2xl md:text-3xl text-center");
      add_location(h2, file, 164, 1, 3898);
      add_location(th0, file, 167, 3, 4000);
      add_location(th1, file, 168, 3, 4017);
      add_location(th2, file, 169, 3, 4034);
      add_location(tr, file, 166, 2, 3992);
      add_location(table, file, 165, 1, 3982);
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
      /*formatHistory, editEntry, formatTime*/
      16384) {
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
    id: create_if_block_2.name,
    type: "if",
    source: "(164:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (176:3) {#each day[1] as symptom}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var button;
  var t0_value = formatTime(
  /*symptom*/
  ctx[27].time) + "";
  var t0;
  var button_value_value;
  var t1;
  var td1;
  var t2_value =
  /*symptom*/
  ctx[27].name + "";
  var t2;
  var t3;
  var td2;
  var t4_value =
  /*symptom*/
  ctx[27].intensity + "";
  var t4;
  var t5;
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
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
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
      td2 = claim_element(tr_nodes, "TD", {});
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach_dev);
      t5 = claim_space(tr_nodes);
      tr_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      button.value = button_value_value =
      /*symptom*/
      ctx[27].time;
      add_location(button, file, 178, 5, 4230);
      attr_dev(td0, "class", "text-sm");
      add_location(td0, file, 177, 4, 4204);
      add_location(td1, file, 182, 4, 4343);
      add_location(td2, file, 183, 4, 4371);
      add_location(tr, file, 176, 3, 4195);
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
      append_dev(tr, td2);
      append_dev(td2, t4);
      append_dev(tr, t5);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*editEntry*/
        ctx[14], false, false, false);
        mounted = true;
      }
    },
    p: noop,
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
    source: "(176:3) {#each day[1] as symptom}",
    ctx: ctx
  });
  return block;
} // (172:2) {#each formatHistory() as day}


function create_each_block(ctx) {
  var tr;
  var th;
  var t0_value =
  /*day*/
  ctx[24][0] + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*day*/
  ctx[24][1];
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
      attr_dev(th, "colspan", "3");
      add_location(th, file, 173, 4, 4106);
      add_location(tr, file, 172, 3, 4097);
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
      /*formatHistory, editEntry, formatTime*/
      16384) {
        each_value_1 =
        /*day*/
        ctx[24][1];
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
    source: "(172:2) {#each formatHistory() as day}",
    ctx: ctx
  });
  return block;
} // (191:0) {#if isManualAdd}


function create_if_block_1(ctx) {
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
  ctx[10]);
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
      /*$$scope, manualAddTime, manualAddDate*/
      1073741830) {
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
    source: "(191:0) {#if isManualAdd}",
    ctx: ctx
  });
  return block;
} // (192:1) <Modal on:closeModal={cancelManualAdd}>


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
      t0 = text("DATE\n\t\t\t\t");
      input0 = element("input");
      t1 = space();
      label1 = element("label");
      t2 = text("TIME\n\t\t\t\t");
      input1 = element("input");
      t3 = space();
      button0 = element("button");
      t4 = text("SUBMIT");
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
      button0 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "SUBMIT");
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
      attr_dev(input0, "type", "date");
      add_location(input0, file, 195, 4, 4603);
      attr_dev(label0, "class", "block p-1 mb-1");
      add_location(label0, file, 193, 3, 4559);
      attr_dev(input1, "class", "block bg-gray-900 pl-1");
      attr_dev(input1, "type", "time");
      add_location(input1, file, 203, 4, 4760);
      attr_dev(label1, "class", "block p-1 mb-1");
      add_location(label1, file, 201, 3, 4716);
      attr_dev(button0, "class", "block w-full mb-2 p-2 border-double border-8 border-green-700 rounded-lg font-bold text-xl");
      add_location(button0, file, 209, 3, 4873);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file, 213, 3, 5038);
      attr_dev(div, "class", "w-10/12 shadow-lg p-4 bg-gray-800");
      add_location(div, file, 192, 2, 4508);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      set_input_value(input0,
      /*manualAddDate*/
      ctx[1]);
      append_dev(div, t1);
      append_dev(div, label1);
      append_dev(label1, t2);
      append_dev(label1, input1);
      set_input_value(input1,
      /*manualAddTime*/
      ctx[2]);
      append_dev(div, t3);
      append_dev(div, button0);
      append_dev(button0, t4);
      append_dev(div, t5);
      append_dev(div, button1);
      append_dev(button1, t6);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[17]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[18]), listen_dev(button0, "click",
        /*submitManualAdd*/
        ctx[11], false, false, false), listen_dev(button1, "click",
        /*cancelManualAdd*/
        ctx[10], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*manualAddDate*/
      2) {
        set_input_value(input0,
        /*manualAddDate*/
        ctx[1]);
      }

      if (dirty &
      /*manualAddTime*/
      4) {
        set_input_value(input1,
        /*manualAddTime*/
        ctx[2]);
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
    source: "(192:1) <Modal on:closeModal={cancelManualAdd}>",
    ctx: ctx
  });
  return block;
} // (222:0) {#if isEdit}


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
  /*closeModal_handler*/
  ctx[20]);
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
      /*$$scope, isEdit*/
      1073741832) {
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
    source: "(222:0) {#if isEdit}",
    ctx: ctx
  });
  return block;
} // (223:1) <Modal on:closeModal={() => isEdit = false}>


function create_default_slot(ctx) {
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
      add_location(button0, file, 224, 3, 5325);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file, 228, 3, 5484);
      attr_dev(div, "class", "w-10/12 bg-gray-800 p-4");
      add_location(div, file, 223, 2, 5284);
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
        ctx[15], false, false, false), listen_dev(button1, "click",
        /*click_handler*/
        ctx[19], false, false, false)];
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
    id: create_default_slot.name,
    type: "slot",
    source: "(223:1) <Modal on:closeModal={() => isEdit = false}>",
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
  var label;
  var span;
  var t3;
  var t4;
  var input;
  var t5;
  var div;
  var button0;
  var t6;
  var button0_disabled_value;
  var t7;
  var p;
  var t8;
  var t9;
  var t10;
  var button1;
  var t11;
  var button1_disabled_value;
  var t12;
  var button2;
  var t13;
  var t14;
  var button3;
  var t15;
  var t16;
  var show_if = Object.values(
  /*symptomHistory*/
  ctx[7]).length;
  var t17;
  var t18;
  var t19;
  var if_block3_anchor;
  var current;
  var mounted;
  var dispose;
  var if_block0 = show_if && create_if_block_3(ctx);
  var if_block1 =
  /*isHistoryShown*/
  ctx[6] && create_if_block_2(ctx);
  var if_block2 =
  /*isManualAdd*/
  ctx[0] && create_if_block_1(ctx);
  var if_block3 =
  /*isEdit*/
  ctx[3] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Symptom Log");
      t2 = space();
      form = element("form");
      label = element("label");
      span = element("span");
      t3 = text("Symptom");
      t4 = space();
      input = element("input");
      t5 = space();
      div = element("div");
      button0 = element("button");
      t6 = text("-");
      t7 = space();
      p = element("p");
      t8 = text("Intensity: ");
      t9 = text(
      /*intensity*/
      ctx[4]);
      t10 = space();
      button1 = element("button");
      t11 = text("+");
      t12 = space();
      button2 = element("button");
      t13 = text("Add Symptom");
      t14 = space();
      button3 = element("button");
      t15 = text("Manual Add");
      t16 = space();
      if (if_block0) if_block0.c();
      t17 = space();
      if (if_block1) if_block1.c();
      t18 = space();
      if (if_block2) if_block2.c();
      t19 = space();
      if (if_block3) if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1bl38qn\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Symptom Log");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      form = claim_element(nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      label = claim_element(form_nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      span = claim_element(label_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes, "Symptom");
      span_nodes.forEach(detach_dev);
      t4 = claim_space(label_nodes);
      input = claim_element(label_nodes, "INPUT", {
        class: true,
        type: true
      });
      label_nodes.forEach(detach_dev);
      t5 = claim_space(form_nodes);
      div = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", {
        value: true,
        type: true,
        disabled: true,
        class: true
      });
      var button0_nodes = children(button0);
      t6 = claim_text(button0_nodes, "-");
      button0_nodes.forEach(detach_dev);
      t7 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t8 = claim_text(p_nodes, "Intensity: ");
      t9 = claim_text(p_nodes,
      /*intensity*/
      ctx[4]);
      p_nodes.forEach(detach_dev);
      t10 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        type: true,
        value: true,
        disabled: true,
        class: true
      });
      var button1_nodes = children(button1);
      t11 = claim_text(button1_nodes, "+");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      t12 = claim_space(form_nodes);
      button2 = claim_element(form_nodes, "BUTTON", {
        class: true
      });
      var button2_nodes = children(button2);
      t13 = claim_text(button2_nodes, "Add Symptom");
      button2_nodes.forEach(detach_dev);
      t14 = claim_space(form_nodes);
      button3 = claim_element(form_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button3_nodes = children(button3);
      t15 = claim_text(button3_nodes, "Manual Add");
      button3_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
      if (if_block0) if_block0.l(nodes);
      t17 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      t18 = claim_space(nodes);
      if (if_block2) if_block2.l(nodes);
      t19 = claim_space(nodes);
      if (if_block3) if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Symptom Log";
      attr_dev(h1, "class", "text-yellow-500 bold text-3xl md:text-4xl text-center");
      add_location(h1, file, 118, 0, 2495);
      attr_dev(span, "class", "text-xl");
      add_location(span, file, 121, 4, 2727);
      attr_dev(input, "class", "shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      attr_dev(input, "type", "text");
      add_location(input, file, 122, 4, 2768);
      attr_dev(label, "class", "space-y-1 block text-center");
      add_location(label, file, 120, 2, 2679);
      button0.value = "-1";
      attr_dev(button0, "type", "button");
      button0.disabled = button0_disabled_value =
      /*intensity*/
      ctx[4] === 0;
      attr_dev(button0, "class", "border-black border bg-gray-700 px-2 rounded-lg svelte-kg2gg");
      add_location(button0, file, 128, 2, 2937);
      attr_dev(p, "class", "text-xl");
      add_location(p, file, 134, 2, 3111);
      attr_dev(button1, "type", "button");
      button1.value = "1";
      button1.disabled = button1_disabled_value =
      /*intensity*/
      ctx[4] === 5;
      attr_dev(button1, "class", "border-black border bg-gray-700 px-2 rounded-lg svelte-kg2gg");
      add_location(button1, file, 135, 2, 3159);
      attr_dev(div, "class", "flex justify-around");
      add_location(div, file, 127, 1, 2901);
      attr_dev(button2, "class", "text-black border-2 bg-white border-solid rounded-lg shadow-sm border-yellow-500 px-3 py-1 block mx-auto text-xl");
      add_location(button2, file, 142, 2, 3340);
      attr_dev(button3, "type", "button");
      attr_dev(button3, "class", "mx-auto rounded-md block border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button3, file, 145, 1, 3499);
      attr_dev(form, "class", "space-y-4 mb-4 border border-gray-700 pb-2");
      add_location(form, file, 119, 0, 2578);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, form, anchor);
      append_dev(form, label);
      append_dev(label, span);
      append_dev(span, t3);
      append_dev(label, t4);
      append_dev(label, input);
      set_input_value(input,
      /*name*/
      ctx[5]);
      append_dev(form, t5);
      append_dev(form, div);
      append_dev(div, button0);
      append_dev(button0, t6);
      append_dev(div, t7);
      append_dev(div, p);
      append_dev(p, t8);
      append_dev(p, t9);
      append_dev(div, t10);
      append_dev(div, button1);
      append_dev(button1, t11);
      append_dev(form, t12);
      append_dev(form, button2);
      append_dev(button2, t13);
      append_dev(form, t14);
      append_dev(form, button3);
      append_dev(button3, t15);
      insert_dev(target, t16, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert_dev(target, t17, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t18, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert_dev(target, t19, anchor);
      if (if_block3) if_block3.m(target, anchor);
      insert_dev(target, if_block3_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input, "input",
        /*input_input_handler*/
        ctx[16]), listen_dev(button0, "click",
        /*incrementIntensity*/
        ctx[13], false, false, false), listen_dev(button1, "click",
        /*incrementIntensity*/
        ctx[13], false, false, false), listen_dev(button3, "click",
        /*manualAdd*/
        ctx[9], false, false, false), listen_dev(form, "submit", prevent_default(
        /*submitSymptom*/
        ctx[12]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*name*/
      32 && input.value !==
      /*name*/
      ctx[5]) {
        set_input_value(input,
        /*name*/
        ctx[5]);
      }

      if (!current || dirty &
      /*intensity*/
      16 && button0_disabled_value !== (button0_disabled_value =
      /*intensity*/
      ctx[4] === 0)) {
        prop_dev(button0, "disabled", button0_disabled_value);
      }

      if (!current || dirty &
      /*intensity*/
      16) set_data_dev(t9,
      /*intensity*/
      ctx[4]);

      if (!current || dirty &
      /*intensity*/
      16 && button1_disabled_value !== (button1_disabled_value =
      /*intensity*/
      ctx[4] === 5)) {
        prop_dev(button1, "disabled", button1_disabled_value);
      }

      if (dirty &
      /*symptomHistory*/
      128) show_if = Object.values(
      /*symptomHistory*/
      ctx[7]).length;

      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          if_block0.m(t17.parentNode, t17);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[6]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          if_block1.m(t18.parentNode, t18);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isManualAdd*/
      ctx[0]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*isManualAdd*/
          1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t19.parentNode, t19);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }

      if (
      /*isEdit*/
      ctx[3]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty &
          /*isEdit*/
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
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(form);
      if (detaching) detach_dev(t16);
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach_dev(t17);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t18);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach_dev(t19);
      if (if_block3) if_block3.d(detaching);
      if (detaching) detach_dev(if_block3_anchor);
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

function formatHistory(symptomHistory) {
  var formatted = {};
  symptomHistory.forEach(function (symptom) {
    var date = formatDate(symptom.time);

    if (!formatted[date]) {
      formatted[date] = [symptom];
    } else {
      formatted[date].push(symptom);
    }
  });
  return Object.entries(formatted).reverse();
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Symptom", slots, []);
  var isManualAdd;
  var manualAddDate;
  var manualAddTime;
  var manualAddLength;
  var focusedEntry;
  var isEdit;
  var intensity = 0;
  var name;
  var isHistoryShown = false;
  var symptomHistory = [];

  {
    symptomHistory = !!localStorage.symptomHistory ? JSON.parse(localStorage.symptomHistory) : [];
  }

  function showHistory() {
    $$invalidate(6, isHistoryShown = !isHistoryShown);
  }

  function manualAdd() {
    $$invalidate(0, isManualAdd = true);
  }

  function cancelManualAdd() {
    $$invalidate(0, isManualAdd = false);
  }

  function submitManualAdd() {
    var year = parseInt(manualAddDate);
    var month = parseInt(manualAddDate.slice(5, 7)) - 1;
    var day = parseInt(manualAddDate.slice(8, 11));
    var hour = parseInt(manualAddTime);
    var min = parseInt(manualAddTime.slice(3, 5));
    var time = new Date(year, month, day, hour, min).getTime();
    symptomHistory.push({
      name: name,
      intensity: intensity,
      time: time,
      flag: "manualAdd"
    });

    {
      localStorage.symptomHistory = JSON.stringify(symptomHistory);
    }

    $$invalidate(0, isManualAdd = false);
    $$invalidate(5, name = "");
    $$invalidate(4, intensity = 0);
  }

  function submitSymptom() {
    symptomHistory.push({
      time: new Date().getTime(),
      name: name,
      intensity: intensity
    });

    {
      localStorage.symptomHistory = JSON.stringify(symptomHistory);
    }

    $$invalidate(5, name = "");
    $$invalidate(4, intensity = 0);
  }

  function incrementIntensity(_ref3) {
    var target = _ref3.target;
    $$invalidate(4, intensity += parseInt(target.value));
  }

  function editEntry(e) {
    $$invalidate(3, isEdit = true);
    focusedEntry = parseInt(e.target.value);
  }

  function deleteEntry() {
    $$invalidate(7, symptomHistory = symptomHistory.filter(function (entry) {
      return entry.time !== focusedEntry;
    }));

    {
      localStorage.peeHistory = JSON.stringify(symptomHistory);
    }

    $$invalidate(3, isEdit = false);
  }

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Symptom> was created with unknown prop '".concat(key, "'"));
  });

  function input_input_handler() {
    name = this.value;
    $$invalidate(5, name);
  }

  function input0_input_handler() {
    manualAddDate = this.value;
    $$invalidate(1, manualAddDate);
  }

  function input1_input_handler() {
    manualAddTime = this.value;
    $$invalidate(2, manualAddTime);
  }

  var click_handler = function click_handler() {
    return $$invalidate(3, isEdit = false);
  };

  var closeModal_handler = function closeModal_handler() {
    return $$invalidate(3, isEdit = false);
  };

  $$self.$capture_state = function () {
    return {
      Modal: Modal,
      isManualAdd: isManualAdd,
      manualAddDate: manualAddDate,
      manualAddTime: manualAddTime,
      manualAddLength: manualAddLength,
      focusedEntry: focusedEntry,
      isEdit: isEdit,
      intensity: intensity,
      name: name,
      isHistoryShown: isHistoryShown,
      symptomHistory: symptomHistory,
      showHistory: showHistory,
      manualAdd: manualAdd,
      cancelManualAdd: cancelManualAdd,
      submitManualAdd: submitManualAdd,
      submitSymptom: submitSymptom,
      incrementIntensity: incrementIntensity,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory,
      editEntry: editEntry,
      deleteEntry: deleteEntry,
      formattedHistory: formattedHistory
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isManualAdd" in $$props) $$invalidate(0, isManualAdd = $$props.isManualAdd);
    if ("manualAddDate" in $$props) $$invalidate(1, manualAddDate = $$props.manualAddDate);
    if ("manualAddTime" in $$props) $$invalidate(2, manualAddTime = $$props.manualAddTime);
    if ("manualAddLength" in $$props) manualAddLength = $$props.manualAddLength;
    if ("focusedEntry" in $$props) focusedEntry = $$props.focusedEntry;
    if ("isEdit" in $$props) $$invalidate(3, isEdit = $$props.isEdit);
    if ("intensity" in $$props) $$invalidate(4, intensity = $$props.intensity);
    if ("name" in $$props) $$invalidate(5, name = $$props.name);
    if ("isHistoryShown" in $$props) $$invalidate(6, isHistoryShown = $$props.isHistoryShown);
    if ("symptomHistory" in $$props) $$invalidate(7, symptomHistory = $$props.symptomHistory);
    if ("formattedHistory" in $$props) formattedHistory = $$props.formattedHistory;
  };

  var formattedHistory;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*symptomHistory*/
    128) {
       formattedHistory = formatHistory(symptomHistory);
    }
  };

  return [isManualAdd, manualAddDate, manualAddTime, isEdit, intensity, name, isHistoryShown, symptomHistory, showHistory, manualAdd, cancelManualAdd, submitManualAdd, submitSymptom, incrementIntensity, editEntry, deleteEntry, input_input_handler, input0_input_handler, input1_input_handler, click_handler, closeModal_handler];
}

var Symptom = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Symptom, _SvelteComponentDev);

  var _super = _createSuper(Symptom);

  function Symptom(options) {
    var _this;

    _classCallCheck(this, Symptom);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Symptom",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Symptom;
}(SvelteComponentDev);

export default Symptom;
