<template>
	<div class="checkbox-container">
		<input
			class="checkbox-container__checkbox"
			:id="_uid"
			type="checkbox"
			:name="name"
			:value="val"
			v-model="checked"
			@change="onChange"
		/>
		<label
			:for="_uid"
			:class="['checkbox-container__label', color]"
		>{{label}}</label>

	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		value: {
			type: Array,
			required: true
		},
		val: {
			type: String,
			required: true
		},
		color: {
			type: String
		}
	},
	data () {
		return {
			checkedProxy: false
		}
	},
	computed: {
		checked: {
			get () {
				return this.value
			},
			set (val) {
				this.checkedProxy = val
			}
		}
	},
	methods: {
		onChange: function (e) {
			this.$emit('input', this.checkedProxy)
		}
	}
}
</script>
<style lang="scss">
.checkbox-container {
	&__checkbox {
		-webkit-appearance: none;
		-moz-appearance: none;
		&:checked + .checkbox-container__label {
			&:before {
				border: 1px solid orange;
			}
			&:after {
				content: '';
				position: absolute;
				width: 10px;
				height: 6px;
				border-left: 2px solid orange;
				border-bottom: 2px solid orange;
				left: 5px;
				top: 5px;
				transform: rotate(-45deg);
			}
			&.orange {
				&:after {
					border-left: 2px solid black;
					border-bottom: 2px solid black;
				}
			}
		}
	}
	&__label {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		font-size: 16px;
		&.black {
			&:before {
				background: black;
			}
		}
		&.grey {
			&:before {
				background: grey;
			}
		}
		&.blue {
			&:before {
				background: blue;
			}
		}
		&.green {
			&:before {
				background: green;
			}
		}
		&.brown {
			&:before {
				background: brown;
			}
		}
		&.beige {
			&:before {
				background: beige;
			}
		}
		&.red {
			&:before {
				background: red;
			}
		}
		&.yellow {
			&:before {
				background: yellow;
			}
		}
		&.gold {
			&:before {
				background: gold;
			}
		}
		&.orange {
			&:before {
				background: orange;
			}
		}
		&.purple {
			&:before {
				background: purple;
			}
		}
		&.silver {
			&:before {
				background: silver;
			}
		}
		&.white {
			&:before {
				background: white;
			}
		}
		&.metallic {
			&:before {
				background: dimgrey;
			}
		}
		&:before {
			content: '';
			width: 20px;
			height: 20px;
			display: inline-block;
			margin-right: 10px;
			border: 1px solid dimgrey;
			border-radius: 2px;
			vertical-align: middle;
		}
	}
}
</style>