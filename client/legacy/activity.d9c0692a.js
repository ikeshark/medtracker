import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, f as space, w as empty, k as claim_element, l as children, m as claim_text, h as detach_dev, j as claim_space, o as attr_dev, n as add_location, p as insert_dev, r as append_dev, x as set_input_value, y as listen_dev, u as noop, z as validate_each_argument, A as destroy_each, B as create_component, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component, q as query_selector_all, H as prevent_default, I as check_outros, J as run_all, v as validate_slots, K as globals, L as group_outros } from './client.02a3b31d.js';
import { M as Modal } from './Modal.dd31a335.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object;
var file = "src/routes/activity.svelte";

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[32] = list[i];
  return child_ctx;
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[29] = list[i];
  return child_ctx;
} // (152:1) {#if type === 'exercise'}


function create_if_block_3(ctx) {
  var label;
  var t0;
  var input;
  var t1;
  var if_block_anchor;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (!
    /*isExercising*/
    ctx[3]) return create_if_block_4;
    if (
    /*isExercising*/
    ctx[3]) return create_if_block_5;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type && current_block_type(ctx);
  var block = {
    c: function create() {
      label = element("label");
      t0 = text("Quantity\n\t\t\t");
      input = element("input");
      t1 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      t0 = claim_text(label_nodes, "Quantity\n\t\t\t");
      input = claim_element(label_nodes, "INPUT", {
        class: true,
        type: true
      });
      label_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "class", "block mx-auto shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      attr_dev(input, "type", "text");
      add_location(input, file, 154, 3, 3515);
      attr_dev(label, "class", "space-y-1 block text-center");
      add_location(label, file, 152, 3, 3456);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, t0);
      append_dev(label, input);
      set_input_value(input,
      /*quantity*/
      ctx[2]);
      insert_dev(target, t1, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);

      if (!mounted) {
        dispose = listen_dev(input, "input",
        /*input_input_handler*/
        ctx[23]);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*quantity*/
      4 && input.value !==
      /*quantity*/
      ctx[2]) {
        set_input_value(input,
        /*quantity*/
        ctx[2]);
      }

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if (if_block) if_block.d(1);
        if_block = current_block_type && current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label);
      if (detaching) detach_dev(t1);

      if (if_block) {
        if_block.d(detaching);
      }

      if (detaching) detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(152:1) {#if type === 'exercise'}",
    ctx: ctx
  });
  return block;
} // (175:25) 


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
      t0 = text("End");
      t1 = space();
      button1 = element("button");
      t2 = text("Cancel Exercise");
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
      t0 = claim_text(button0_nodes, "End");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Cancel Exercise");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-red-700");
      add_location(button0, file, 176, 4, 4106);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file, 182, 4, 4270);
      attr_dev(div, "class", "flex");
      add_location(div, file, 175, 3, 4083);
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
        /*endExercise*/
        ctx[11], false, false, false), listen_dev(button1, "click",
        /*cancelExercise*/
        ctx[12], false, false, false)];
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
    source: "(175:25) ",
    ctx: ctx
  });
  return block;
} // (160:2) {#if !isExercising}


function create_if_block_4(ctx) {
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
      t0 = text("Start");
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
      t0 = claim_text(button0_nodes, "Start");
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
      add_location(button0, file, 161, 4, 3708);
      attr_dev(button1, "class", "rounded-md mb-4 block mx-auto border-black border py-2 px-4 text-white bg-gray-700");
      add_location(button1, file, 167, 4, 3878);
      attr_dev(div, "class", "flex");
      add_location(div, file, 160, 3, 3685);
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
        /*startExercise*/
        ctx[10], false, false, false), listen_dev(button1, "click",
        /*manualAdd*/
        ctx[13], false, false, false)];
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
    id: create_if_block_4.name,
    type: "if",
    source: "(160:2) {#if !isExercising}",
    ctx: ctx
  });
  return block;
} // (197:0) {#if Object.values(activityHistory).length}


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
      attr_dev(button, "class", "mt-2 block mx-auto rounded-md border-black border py-2 px-4 text-white bg-blue-700");
      add_location(button, file, 197, 1, 4686);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*showHistory*/
        ctx[16], false, false, false);
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
    source: "(197:0) {#if Object.values(activityHistory).length}",
    ctx: ctx
  });
  return block;
} // (206:0) {#if isHistoryShown}


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
  var each_value =
  /*formatHistory*/
  ctx[18]();
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      h2 = element("h2");
      t0 = text("Activity History");
      t1 = space();
      table = element("table");
      tr = element("tr");
      th0 = element("th");
      t2 = text("Date");
      t3 = space();
      th1 = element("th");
      t4 = text("Type");
      t5 = space();
      th2 = element("th");
      t6 = text("Name");
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
      t0 = claim_text(h2_nodes, "Activity History");
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
      t4 = claim_text(th1_nodes, "Type");
      th1_nodes.forEach(detach_dev);
      t5 = claim_space(tr_nodes);
      th2 = claim_element(tr_nodes, "TH", {});
      var th2_nodes = children(th2);
      t6 = claim_text(th2_nodes, "Name");
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
      add_location(h2, file, 206, 1, 4870);
      add_location(th0, file, 209, 3, 4977);
      add_location(th1, file, 210, 3, 4994);
      add_location(th2, file, 211, 3, 5011);
      add_location(tr, file, 208, 2, 4969);
      add_location(table, file, 207, 1, 4959);
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
      if (dirty[0] &
      /*formatHistory*/
      262144) {
        each_value =
        /*formatHistory*/
        ctx[18]();
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
    source: "(206:0) {#if isHistoryShown}",
    ctx: ctx
  });
  return block;
} // (218:3) {#each day[1] as activity}


function create_each_block_1(ctx) {
  var tr;
  var td0;
  var t0_value = formatTime(
  /*activity*/
  ctx[32].startTime) + "";
  var t0;
  var t1;
  var td1;
  var t2_value =
  /*activity*/
  ctx[32].type + "";
  var t2;
  var t3;
  var td2;
  var t4_value =
  /*activity*/
  ctx[32].name + "";
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
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {
        class: true
      });
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
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
      attr_dev(td0, "class", "text-sm");
      add_location(td0, file, 219, 4, 5177);
      add_location(td1, file, 220, 4, 5239);
      add_location(td2, file, 221, 4, 5268);
      add_location(tr, file, 218, 3, 5168);
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
    source: "(218:3) {#each day[1] as activity}",
    ctx: ctx
  });
  return block;
} // (214:2) {#each formatHistory() as day}


function create_each_block(ctx) {
  var tr;
  var th;
  var t0_value =
  /*day*/
  ctx[29][0] + "";
  var t0;
  var t1;
  var each_1_anchor;
  var each_value_1 =
  /*day*/
  ctx[29][1];
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
      add_location(th, file, 215, 4, 5078);
      add_location(tr, file, 214, 3, 5069);
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
      /*formatHistory*/
      262144) {
        each_value_1 =
        /*day*/
        ctx[29][1];
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
    source: "(214:2) {#each formatHistory() as day}",
    ctx: ctx
  });
  return block;
} // (229:0) {#if isManualAdd}


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
  ctx[14]);
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
      224 | dirty[1] &
      /*$$scope*/
      16) {
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
    source: "(229:0) {#if isManualAdd}",
    ctx: ctx
  });
  return block;
} // (230:1) <Modal on:closeModal={cancelManualAdd}>


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
      attr_dev(input0, "class", "block bg-gray-900 pl-1");
      attr_dev(input0, "type", "date");
      add_location(input0, file, 233, 4, 5496);
      attr_dev(label0, "class", "block p-1 mb-1");
      add_location(label0, file, 231, 3, 5452);
      attr_dev(input1, "class", "block bg-gray-900 pl-1");
      attr_dev(input1, "type", "time");
      add_location(input1, file, 241, 4, 5653);
      attr_dev(label1, "class", "block p-1 mb-1");
      add_location(label1, file, 239, 3, 5609);
      attr_dev(input2, "class", "block bg-gray-900 pl-1");
      attr_dev(input2, "type", "text");
      add_location(input2, file, 249, 4, 5822);
      attr_dev(label2, "class", "block p-1 mb-1");
      add_location(label2, file, 247, 3, 5766);
      attr_dev(button0, "class", "block w-full mb-2 p-2 border-double border-8 border-green-700 rounded-lg font-bold text-xl");
      add_location(button0, file, 255, 3, 5937);
      attr_dev(button1, "class", "block w-full mb-2 p-2 border-double border-8 border-red-700 rounded-lg font-bold text-xl");
      add_location(button1, file, 259, 3, 6102);
      attr_dev(div, "class", "w-10/12 shadow-lg p-4 bg-gray-800");
      add_location(div, file, 230, 2, 5401);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label0);
      append_dev(label0, t0);
      append_dev(label0, input0);
      set_input_value(input0,
      /*manualAddDate*/
      ctx[5]);
      append_dev(div, t1);
      append_dev(div, label1);
      append_dev(label1, t2);
      append_dev(label1, input1);
      set_input_value(input1,
      /*manualAddTime*/
      ctx[6]);
      append_dev(div, t3);
      append_dev(div, label2);
      append_dev(label2, t4);
      append_dev(label2, input2);
      set_input_value(input2,
      /*manualAddLength*/
      ctx[7]);
      append_dev(div, t5);
      append_dev(div, button0);
      append_dev(button0, t6);
      append_dev(div, t7);
      append_dev(div, button1);
      append_dev(button1, t8);

      if (!mounted) {
        dispose = [listen_dev(input0, "input",
        /*input0_input_handler*/
        ctx[24]), listen_dev(input1, "input",
        /*input1_input_handler*/
        ctx[25]), listen_dev(input2, "input",
        /*input2_input_handler_1*/
        ctx[26]), listen_dev(button0, "click",
        /*submitManualAdd*/
        ctx[15], false, false, false), listen_dev(button1, "click",
        /*cancelManualAdd*/
        ctx[14], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*manualAddDate*/
      32) {
        set_input_value(input0,
        /*manualAddDate*/
        ctx[5]);
      }

      if (dirty[0] &
      /*manualAddTime*/
      64) {
        set_input_value(input1,
        /*manualAddTime*/
        ctx[6]);
      }

      if (dirty[0] &
      /*manualAddLength*/
      128 && input2.value !==
      /*manualAddLength*/
      ctx[7]) {
        set_input_value(input2,
        /*manualAddLength*/
        ctx[7]);
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
    source: "(230:1) <Modal on:closeModal={cancelManualAdd}>",
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
  var t3;
  var input0;
  var t4;
  var label1;
  var t5;
  var input1;
  var t6;
  var label2;
  var span;
  var t7;
  var t8;
  var input2;
  var t9;
  var t10;
  var button;
  var t11;
  var t12;
  var show_if = Object.values(
  /*activityHistory*/
  ctx[9]).length;
  var t13;
  var t14;
  var if_block3_anchor;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*type*/
  ctx[0] === "exercise" && create_if_block_3(ctx);
  var if_block1 = show_if && create_if_block_2(ctx);
  var if_block2 =
  /*isHistoryShown*/
  ctx[8] && create_if_block_1(ctx);
  var if_block3 =
  /*isManualAdd*/
  ctx[4] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Activity Log");
      t2 = space();
      form = element("form");
      label0 = element("label");
      t3 = text("Exercise\n\t\t");
      input0 = element("input");
      t4 = space();
      label1 = element("label");
      t5 = text("Other\n\t\t");
      input1 = element("input");
      t6 = space();
      label2 = element("label");
      span = element("span");
      t7 = text("Name");
      t8 = space();
      input2 = element("input");
      t9 = space();
      if (if_block0) if_block0.c();
      t10 = space();
      button = element("button");
      t11 = text("Add Activity");
      t12 = space();
      if (if_block1) if_block1.c();
      t13 = space();
      if (if_block2) if_block2.c();
      t14 = space();
      if (if_block3) if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-jzsa33\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Activity Log");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      form = claim_element(nodes, "FORM", {
        class: true
      });
      var form_nodes = children(form);
      label0 = claim_element(form_nodes, "LABEL", {});
      var label0_nodes = children(label0);
      t3 = claim_text(label0_nodes, "Exercise\n\t\t");
      input0 = claim_element(label0_nodes, "INPUT", {
        type: true,
        value: true
      });
      label0_nodes.forEach(detach_dev);
      t4 = claim_space(form_nodes);
      label1 = claim_element(form_nodes, "LABEL", {});
      var label1_nodes = children(label1);
      t5 = claim_text(label1_nodes, "Other\n\t\t");
      input1 = claim_element(label1_nodes, "INPUT", {
        type: true,
        value: true
      });
      label1_nodes.forEach(detach_dev);
      t6 = claim_space(form_nodes);
      label2 = claim_element(form_nodes, "LABEL", {
        class: true
      });
      var label2_nodes = children(label2);
      span = claim_element(label2_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t7 = claim_text(span_nodes, "Name");
      span_nodes.forEach(detach_dev);
      t8 = claim_space(label2_nodes);
      input2 = claim_element(label2_nodes, "INPUT", {
        class: true,
        type: true
      });
      label2_nodes.forEach(detach_dev);
      t9 = claim_space(form_nodes);
      if (if_block0) if_block0.l(form_nodes);
      t10 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t11 = claim_text(button_nodes, "Add Activity");
      button_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      t13 = claim_space(nodes);
      if (if_block2) if_block2.l(nodes);
      t14 = claim_space(nodes);
      if (if_block3) if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "Activity Log";
      attr_dev(h1, "class", "text-yellow-500 bold text-3xl md:text-4xl text-center");
      add_location(h1, file, 133, 0, 2871);
      attr_dev(input0, "type", "radio");
      input0.__value = "exercise";
      input0.value = input0.__value;
      /*$$binding_groups*/

      ctx[20][0].push(input0);
      add_location(input0, file, 137, 2, 3044);
      add_location(label0, file, 135, 1, 3023);
      attr_dev(input1, "type", "radio");
      input1.__value = "other";
      input1.value = input1.__value;
      /*$$binding_groups*/

      ctx[20][0].push(input1);
      add_location(input1, file, 141, 2, 3129);
      add_location(label1, file, 139, 1, 3111);
      attr_dev(span, "class", "text-xl");
      add_location(span, file, 145, 4, 3243);
      attr_dev(input2, "class", "block mx-auto shadow-sm bg-gray-900 border-2 rounded border-yellow-300");
      attr_dev(input2, "type", "text");
      add_location(input2, file, 146, 4, 3281);
      attr_dev(label2, "class", "space-y-1 block text-center");
      add_location(label2, file, 144, 2, 3195);
      attr_dev(button, "class", "text-black border-2 bg-white border-solid rounded-lg shadow-sm border-yellow-500 px-3 py-1 block mx-auto text-xl");
      add_location(button, file, 191, 2, 4473);
      attr_dev(form, "class", "space-y-4");
      add_location(form, file, 134, 0, 2955);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, form, anchor);
      append_dev(form, label0);
      append_dev(label0, t3);
      append_dev(label0, input0);
      input0.checked = input0.__value ===
      /*type*/
      ctx[0];
      append_dev(form, t4);
      append_dev(form, label1);
      append_dev(label1, t5);
      append_dev(label1, input1);
      input1.checked = input1.__value ===
      /*type*/
      ctx[0];
      append_dev(form, t6);
      append_dev(form, label2);
      append_dev(label2, span);
      append_dev(span, t7);
      append_dev(label2, t8);
      append_dev(label2, input2);
      set_input_value(input2,
      /*name*/
      ctx[1]);
      append_dev(form, t9);
      if (if_block0) if_block0.m(form, null);
      append_dev(form, t10);
      append_dev(form, button);
      append_dev(button, t11);
      insert_dev(target, t12, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, t13, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert_dev(target, t14, anchor);
      if (if_block3) if_block3.m(target, anchor);
      insert_dev(target, if_block3_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input0, "change",
        /*input0_change_handler*/
        ctx[19]), listen_dev(input1, "change",
        /*input1_change_handler*/
        ctx[21]), listen_dev(input2, "input",
        /*input2_input_handler*/
        ctx[22]), listen_dev(form, "submit", prevent_default(
        /*submitActivity*/
        ctx[17]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*type*/
      1) {
        input0.checked = input0.__value ===
        /*type*/
        ctx[0];
      }

      if (dirty[0] &
      /*type*/
      1) {
        input1.checked = input1.__value ===
        /*type*/
        ctx[0];
      }

      if (dirty[0] &
      /*name*/
      2 && input2.value !==
      /*name*/
      ctx[1]) {
        set_input_value(input2,
        /*name*/
        ctx[1]);
      }

      if (
      /*type*/
      ctx[0] === "exercise") {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          if_block0.m(form, t10);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (dirty[0] &
      /*activityHistory*/
      512) show_if = Object.values(
      /*activityHistory*/
      ctx[9]).length;

      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_2(ctx);
          if_block1.c();
          if_block1.m(t13.parentNode, t13);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*isHistoryShown*/
      ctx[8]) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_1(ctx);
          if_block2.c();
          if_block2.m(t14.parentNode, t14);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (
      /*isManualAdd*/
      ctx[4]) {
        if (if_block3) {
          if_block3.p(ctx, dirty);

          if (dirty[0] &
          /*isManualAdd*/
          16) {
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
      if (detaching) detach_dev(form);
      /*$$binding_groups*/

      ctx[20][0].splice(
      /*$$binding_groups*/
      ctx[20][0].indexOf(input0), 1);
      /*$$binding_groups*/

      ctx[20][0].splice(
      /*$$binding_groups*/
      ctx[20][0].indexOf(input1), 1);
      if (if_block0) if_block0.d();
      if (detaching) detach_dev(t12);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(t13);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach_dev(t14);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Activity", slots, []);
  var type = "exercise";
  var name;
  var quantity;
  var isExercising;
  var startTime;
  var endTime;
  var isManualAdd;
  var manualAddDate;
  var manualAddTime;
  var manualAddLength;
  var isHistoryShown = false;
  var activityHistory = [];

  {
    if (localStorage.isExercising === "true") {
      isExercising = true;
    }

    startTime = !!localStorage.startTime ? JSON.parse(localStorage.startTime) : 0;
    activityHistory = !!localStorage.activityHistory ? JSON.parse(localStorage.activityHistory) : [];
  }

  function startExercise() {
    $$invalidate(3, isExercising = true);
    localStorage.isExercising = true;
    startTime = new Date().getTime();
    localStorage.startTime = JSON.stringify(startTime);
  }

  function endExercise() {
    $$invalidate(3, isExercising = false);
    localStorage.isExercising = false;
    endTime = new Date().getTime();
  }

  function cancelExercise() {
    $$invalidate(3, isExercising = false);
    localStorage.isExercising = false;
  }

  function manualAdd() {
    $$invalidate(4, isManualAdd = true);
  }

  function cancelManualAdd() {
    $$invalidate(4, isManualAdd = false);
  }

  function submitManualAdd() {
    var year = parseInt(manualAddDate);
    var month = parseInt(manualAddDate.slice(5, 7)) - 1;
    var day = parseInt(manualAddDate.slice(8, 11));
    var hour = parseInt(manualAddTime);
    var min = parseInt(manualAddTime.slice(3, 5));
    var startTime = new Date(year, month, day, hour, min).getTime();
    var endTime = startTime + parseInt(manualAddLength) * 60000;
    activityHistory.push({
      type: type,
      name: name,
      startTime: startTime,
      endTime: endTime,
      quantity: quantity,
      flag: "manualAdd"
    });

    {
      localStorage.activityHistory = JSON.stringify(activityHistory);
    }

    $$invalidate(4, isManualAdd = false);
  }

  function showHistory() {
    $$invalidate(8, isHistoryShown = !isHistoryShown);
  }

  function submitActivity() {
    if (type === "exercise") {
      activityHistory.push({
        type: type,
        name: name,
        startTime: startTime,
        endTime: endTime,
        quantity: quantity
      });
    } else {
      startTime = new Date().getTime();
      activityHistory.push({
        type: type,
        name: name,
        startTime: startTime
      });
    }

    {
      localStorage.activityHistory = JSON.stringify(activityHistory);
    }

    $$invalidate(1, name = "");
    $$invalidate(2, quantity = "");
  }

  function formatHistory() {
    var formatted = {};
    activityHistory.forEach(function (activity) {
      var date = formatDate(activity.startTime);

      if (!formatted[date]) {
        formatted[date] = [activity];
      } else {
        formatted[date].push(activity);
      }
    });
    return Object.entries(formatted).reverse();
  }

  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Activity> was created with unknown prop '".concat(key, "'"));
  });
  var $$binding_groups = [[]];

  function input0_change_handler() {
    type = this.__value;
    $$invalidate(0, type);
  }

  function input1_change_handler() {
    type = this.__value;
    $$invalidate(0, type);
  }

  function input2_input_handler() {
    name = this.value;
    $$invalidate(1, name);
  }

  function input_input_handler() {
    quantity = this.value;
    $$invalidate(2, quantity);
  }

  function input0_input_handler() {
    manualAddDate = this.value;
    $$invalidate(5, manualAddDate);
  }

  function input1_input_handler() {
    manualAddTime = this.value;
    $$invalidate(6, manualAddTime);
  }

  function input2_input_handler_1() {
    manualAddLength = this.value;
    $$invalidate(7, manualAddLength);
  }

  $$self.$capture_state = function () {
    return {
      Modal: Modal,
      type: type,
      name: name,
      quantity: quantity,
      isExercising: isExercising,
      startTime: startTime,
      endTime: endTime,
      isManualAdd: isManualAdd,
      manualAddDate: manualAddDate,
      manualAddTime: manualAddTime,
      manualAddLength: manualAddLength,
      isHistoryShown: isHistoryShown,
      activityHistory: activityHistory,
      startExercise: startExercise,
      endExercise: endExercise,
      cancelExercise: cancelExercise,
      manualAdd: manualAdd,
      cancelManualAdd: cancelManualAdd,
      submitManualAdd: submitManualAdd,
      showHistory: showHistory,
      submitActivity: submitActivity,
      formatDate: formatDate,
      formatTime: formatTime,
      formatHistory: formatHistory
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("type" in $$props) $$invalidate(0, type = $$props.type);
    if ("name" in $$props) $$invalidate(1, name = $$props.name);
    if ("quantity" in $$props) $$invalidate(2, quantity = $$props.quantity);
    if ("isExercising" in $$props) $$invalidate(3, isExercising = $$props.isExercising);
    if ("startTime" in $$props) startTime = $$props.startTime;
    if ("endTime" in $$props) endTime = $$props.endTime;
    if ("isManualAdd" in $$props) $$invalidate(4, isManualAdd = $$props.isManualAdd);
    if ("manualAddDate" in $$props) $$invalidate(5, manualAddDate = $$props.manualAddDate);
    if ("manualAddTime" in $$props) $$invalidate(6, manualAddTime = $$props.manualAddTime);
    if ("manualAddLength" in $$props) $$invalidate(7, manualAddLength = $$props.manualAddLength);
    if ("isHistoryShown" in $$props) $$invalidate(8, isHistoryShown = $$props.isHistoryShown);
    if ("activityHistory" in $$props) $$invalidate(9, activityHistory = $$props.activityHistory);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [type, name, quantity, isExercising, isManualAdd, manualAddDate, manualAddTime, manualAddLength, isHistoryShown, activityHistory, startExercise, endExercise, cancelExercise, manualAdd, cancelManualAdd, submitManualAdd, showHistory, submitActivity, formatHistory, input0_change_handler, $$binding_groups, input1_change_handler, input2_input_handler, input_input_handler, input0_input_handler, input1_input_handler, input2_input_handler_1];
}

var Activity = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Activity, _SvelteComponentDev);

  var _super = _createSuper(Activity);

  function Activity(options) {
    var _this;

    _classCallCheck(this, Activity);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Activity",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Activity;
}(SvelteComponentDev);

export default Activity;
