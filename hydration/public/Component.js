/* generated by Svelte v3.59.2 */
import {
	SvelteComponent,
	append_hydration,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	head_selector,
	init,
	insert_hydration,
	listen,
	noop,
	safe_not_equal,
	set_data,
	set_input_value,
	space,
	text
} from "/svelte/internal.mjs";

function create_fragment(ctx) {
	let meta;
	let title_value;
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let label;
	let input;
	let mounted;
	let dispose;
	document.title = title_value = /*name*/ ctx[0];

	return {
		c() {
			meta = element("meta");
			t0 = space();
			h1 = element("h1");
			t1 = text("Hello ");
			t2 = text(/*name*/ ctx[0]);
			t3 = text(", I speak ");
			t4 = text(/*language*/ ctx[1]);
			t5 = space();
			label = element("label");
			input = element("input");
			this.h();
		},
		l(nodes) {
			const head_nodes = head_selector('svelte-csh9yx', document.head);
			meta = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Hello ");
			t2 = claim_text(h1_nodes, /*name*/ ctx[0]);
			t3 = claim_text(h1_nodes, ", I speak ");
			t4 = claim_text(h1_nodes, /*language*/ ctx[1]);
			h1_nodes.forEach(detach);
			t5 = claim_space(nodes);
			label = claim_element(nodes, "LABEL", {});
			var label_nodes = children(label);
			input = claim_element(label_nodes, "INPUT", {});
			label_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta, "name", "name");
			attr(meta, "content", "name");
			attr(h1, "class", "svelte-o015nm");
		},
		m(target, anchor) {
			append_hydration(document.head, meta);
			insert_hydration(target, t0, anchor);
			insert_hydration(target, h1, anchor);
			append_hydration(h1, t1);
			append_hydration(h1, t2);
			append_hydration(h1, t3);
			append_hydration(h1, t4);
			insert_hydration(target, t5, anchor);
			insert_hydration(target, label, anchor);
			append_hydration(label, input);
			set_input_value(input, /*name*/ ctx[0]);

			if (!mounted) {
				dispose = listen(input, "input", /*input_input_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && title_value !== (title_value = /*name*/ ctx[0])) {
				document.title = title_value;
			}

			if (dirty & /*name*/ 1) set_data(t2, /*name*/ ctx[0]);
			if (dirty & /*language*/ 2) set_data(t4, /*language*/ ctx[1]);

			if (dirty & /*name*/ 1 && input.value !== /*name*/ ctx[0]) {
				set_input_value(input, /*name*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			detach(meta);
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			if (detaching) detach(t5);
			if (detaching) detach(label);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;
	let { language } = $$props;

	function input_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('language' in $$props) $$invalidate(1, language = $$props.language);
	};

	return [name, language, input_input_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0, language: 1 });
	}
}

export default Component;