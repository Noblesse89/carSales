<template>
	<div class="radio-container">
		<input
			class="radio-container__radio"
			:id="_uid"
			type="radio"
			:value="label"
			:checked="label === value"
			v-model="radioButtonValue"
		>
		<label class="radio-container__label" :for="_uid">{{ label }}</label>
	</div>
</template>
<script>
export default {
	props: {
		label: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: true
		}
	},
	computed: {
		radioButtonValue: {
			get: function() {
				return this.value
			},
			set: function() {
				this.$emit("change", this.label)
			}
		}
	}
}
</script>
<style lang="scss">
	.radio-container {
		&__radio {
			-webkit-appearance: none;
			-moz-appearance: none;
			&:checked + .radio-container__label {
				&:before {
					border: 1px solid orange;
				}
				&:after {
					content: '';
					position: absolute;
					width: 10px;
					height: 10px;
					left: 6px;
					top: 6px;
					background: orange;
					border-radius: 50%;
				}
			}
		}
		&__label {
			position: relative;
			display: inline-block;
			vertical-align: middle;
			font-size: 16px;
			&:before {
				content: '';
				width: 20px;
				height: 20px;
				border-radius: 50%;
				display: inline-block;
				margin-right: 10px;
				border: 1px solid dimgrey;
				vertical-align: middle;
			}
		}
	}
</style>