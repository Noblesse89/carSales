<template>
	<div class="select-component">
		<label
			v-if="label"
			class="select-component__label"
			:for="_uid"
		>{{ label }}</label>
		<div class="select-component__select-wrap">
			<select
				:id="_uid"
				class="select-component__select-wrap__select"
				@change="e => $emit('input', e.target.value)"
			>
				<option
					selected="selected"
				>{{ firstOption }}
				</option>
				<option
					v-for="(option, index) in options"
					:key="index"
					:value="option.id"
				>{{option.name}}
				</option>
			</select>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: true
		},
		label: {
			type: String
		},
		firstOption: {
			type: String,
			default: 'Select one'
		}
	},
	computed: {
		selected () {
			return this.value
		}
	},
	methods: {
		onChange (value) {
			this.$emit('input', value);
		}
	}
}
</script>

<style lang="scss">
	.select-component {
		&__label {
			display: block;
			font-size: 18px;
			padding: 5px 0;
		}
		&__select-wrap {
			position: relative;
			&__select {
				background: #e6e6ed;
				color: #000;
				border-radius: 3px;
				border: none;
				padding: 9px 10px;
				width: 100%;
				-webkit-appearance: none;
				-moz-appearance: none;
				outline: none !important;
				&:focus {
					outline: none !important;
				}
				&:-moz-focusring {
					color: transparent;
					text-shadow: 0 0 0 #000;
				}
			}
			&:after {
				content: '';
				width: 6px;
				height: 6px;
				transform: rotate(-45deg);
				border-bottom: 2px solid dimgrey;
				border-left: 2px solid dimgrey;
				position: absolute;
				right: 10px;
				top: calc(50% - 6px);
			}
		}
	}
</style>