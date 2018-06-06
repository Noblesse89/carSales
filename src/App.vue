<template>
	<div class="container">
		<div class="filters">
			<div class="filters__section">
				<div class="filters__section__title">
					Marke, Modell
				</div>
			</div>
			<div class="filters__section__content">
				<custom-select
					label="Marke"
					v-model="form.modelMark"
					:options="mockData.modelMark"
				/>
				<custom-select
					label="Model"
					v-model="form.model"
					:options="models"
				/>
			</div>
			<div class="filters__section">
				<div class="filters__section__title">
					Motor
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Kraftstoffart
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(fuelType, index) in mockData.fuelTypes"
						:key="index"
						:label="fuelType"
						:name="fuelType"
						:val="fuelType"
						v-model="form.fuelType"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Getriebe
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(transmission, index) in mockData.transmission"
						:key="index"
						:label="transmission"
						:name="transmission"
						:val="transmission"
						v-model="form.transmission"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group padder-bottom">
				<div class="group-title">
					Liestung
				</div>
				<div class="mixed-inputs-group">
					<custom-select
						v-model="form.power.from"
						firstOption="fon"
						:options="powerOptions"
					/>
					<custom-select
						v-model="form.power.to"
						firstOption="bis"
						:options="powerOptions"
					/>
					<div class="radio-group">
						<custom-radio
							label="PS"
							:value="form.power.measure"
							@change="changeMeasureValue"
						/>
						<custom-radio
							label="kw"
							:value="form.power.measure"
							@change="changeMeasureValue"
						/>
					</div>
				</div>
			</div>
			<div class="filters__section">
				<div class="filters__section__title">
					Standort
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Location in Germany
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(location, index) in mockData.locations"
						:key="index"
						:label="location"
						:name="location"
						:val="location"
						v-model="form.location"
					/>
				</div>
			</div>
			<div class="filters__section">
				<div class="filters__section__title">
					Fahrzeugtyp
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Available vehicle types (should depends on entered data. Logics needs to be provided)
				</div>
				<div class="checkboxes-group-content cars">
					<div
						v-for="(type, index) in mockData.availableTypes"
						:key="index"
						:class="[type.id, 'cars']"
					>
						<div class="cars_inner">{{ type.name }}</div>
					</div>
				</div>
			</div>
			<div class="filters__section__content--form-group padder-bottom">
				<div class="select-inputs-group">
					<custom-select
						v-model="form.numberOfSeats.from"
						label="Anzahl Sitzplätze"
						firstOption="fon"
						:options="mockData.numberOfSeats"
					/>
					<custom-select
						v-model="form.numberOfSeats.to"
						firstOption="bis"
						:options="mockData.numberOfSeats"
					/>
					<custom-select
						v-model="form.numberOfDoors"
						label="Anzahl Türen"
						firstOption="Bleibig"
						:options="mockData.numberOfDoors"
					/>
				</div>
			</div>
			<div class="filters__section">
				<div class="filters__section__title">
					Außenfarbe
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Available colors
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(color, index) in mockData.availableColors"
						:key="index"
						:label="color.name"
						:name="color.name"
						:val="color.name"
						:color="color.id"
						v-model="form.color"
					/>
				</div>
			</div>
			<div class="filters__section">
				<div class="filters__section__title">
					Ausstanttung
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Klimatisierung
				</div>
				<div class="checkboxes-group-content">
					<div class="radio-group just-radio">
						<custom-radio
							v-for="(airCond, idx) in mockData.airCondition"
							:key="idx"
							:label="airCond"
							:value="form.airCondition"
							@change="changeAirCondValue"
						/>
					</div>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Innenausstattung
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(interiorDecor, index) in mockData.interionDecorations"
						:key="index"
						:label="interiorDecor"
						:name="interiorDecor"
						:val="interiorDecor"
						v-model="form.interiorDecor"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Elektr.Verstebllb.Sitze
				</div>
				<div class="checkboxes-group-content">
					<div class="radio-group just-radio">
						<custom-radio
							v-for="(electrAdjSits, idx) in mockData.electricalAdjustableSits"
							:key="idx"
							:label="electrAdjSits"
							:value="form.electrAdjSits"
							@change="changeElectrSitsValue"
						/>
					</div>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Sitzheizung
				</div>
				<div class="checkboxes-group-content">
					<div class="radio-group just-radio">
						<custom-radio
							v-for="(heatedSit, idx) in mockData.heatedSits"
							:key="idx"
							:label="heatedSit"
							:value="form.heatedSits"
							@change="changeHeatedSitsValue"
						/>
					</div>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Sicherheit
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(secure, index) in mockData.security"
						:key="index"
						:label="secure"
						:name="secure"
						:val="secure"
						v-model="form.security"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Sport
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(sportitem, index) in mockData.sport"
						:key="index"
						:label="sportitem"
						:name="sportitem"
						:val="sportitem"
						v-model="form.sport"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Extras
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(extra, index) in mockData.extras"
						:key="index"
						:label="extra"
						:name="extra"
						:val="extra"
						v-model="form.extras"
					/>
				</div>
			</div>
			<div class="filters__section__content--form-group">
				<div class="group-title">
					Innenausstattung
				</div>
				<div class="checkboxes-group-content">
					<custom-checkbox
						v-for="(decorItem, index) in mockData.decor"
						:key="index"
						:label="decorItem"
						:name="decorItem"
						:val="decorItem"
						v-model="form.decor"
					/>
				</div>
			</div>
			<h2>I think that's enough. Need more data, to implement addition of more then one vehicle. Also need more data relations for managing available options. Outputting only filters which was filled</h2>
			<h2>Also need to implement logics for from-to selects</h2>
		</div>
		<div class="submit-filters">
			<div
				@click="outputData"
				class="submit-filters__btn"
			>Submit
			</div>
			<div
				@click="outputData"
				class="submit-filters__btn"
			>Submit
			</div>
		</div>
		<transition name="fade">
			<div
				v-if="showModal"
				@click="showModal = false"
				class="modal"
			>
				<pre>{{ prettyData }}</pre>
			</div>
		</transition>
	</div>
</template>

<script>
import find from 'lodash/find';
import mapValues from 'lodash/mapValues';
import isEmpty from 'lodash/isEmpty';
import mockData from './appMockData';
import CustomCheckbox from './components/form/checkbox';
import CustomRadio from './components/form/radio';
import CustomSelect from './components/form/select';

export default {
	name: 'FilterForm',
	components: { CustomCheckbox, CustomSelect, CustomRadio },
	data () {
		return {
			form: {
				modelMark: '',
				fuelType: [],
				model: '',
				transmission: [],
				power: {
					measure: 'PS',
					from: '',
					to: ''
				},
				location: [],
				numberOfSeats: {
					from: '',
					to: ''
				},
				numberOfDoors: '',
				color: [],
				airCondition: 'Klimaanlage',
				interiorDecor: [],
				electrAdjSits: 'vorne',
				heatedSits: 'vorne',
				security: [],
				sport: [],
				extras : [],
				decor: []
			},
			showModal: false,
			mockData
		}
	},
	computed: {
		models () {
			let selectedModelMark = find(this.mockData.modelMark, { id: Number(this.form.modelMark) });
			if (!selectedModelMark) return [];
			return selectedModelMark.models;
		},
		powerOptions () {
			if (this.form.power.measure === 'kw') {
				return this.mockData.powerKw;
			} else {
				return this.mockData.power;
			}
		},
		prettyData () {
			let data = {};
			mapValues(this.form, (value, key) => {
				if (isEmpty(value)) return;

				if (key === 'power') {
					if (!isEmpty(value.from)) {
						data.power = data.power || {};
						data.power.measure = value.measure;
						data.power.from = value.from;
					}
					if (!isEmpty(value.to)) {
						data.power = data.power || {};
						data.power.measure = value.measure;
						data.power.to = value.to;
					}
					if (value.from === 'fon') {
						delete data.power.from;
					}
					if (value.to === 'bis') {
						delete data.power.to;
					}
					if (value.to === 'bis' && value.from === 'fon') {
						delete data.power;
					}
				} else if (key === 'numberOfSeats') {
					if (!isEmpty(value.from)) {
						data.numberOfSeats = data.numberOfSeats || {};
						data.numberOfSeats.from = value.from;
					}
					if (!isEmpty(value.to)) {
						data.numberOfSeats = data.numberOfSeats || {};
						data.numberOfSeats.to = value.to;
					}
					if (value.from === 'fon') {
						delete data.numberOfSeats.from;
					}
					if (value.to === 'bis') {
						delete data.numberOfSeats.to;
					}
					if (value.to === 'bis' && value.from === 'fon') {
						delete data.numberOfSeats;
					}
				} else {
					data[key] = this.form[key];
				}
			});
			return JSON.stringify(data, null, 2);
		}
	},
	methods: {
		changeMeasureValue (newValue) {
			this.form.power.measure = newValue;
		},
		changeAirCondValue (newValue) {
			this.form.airCondition = newValue;
		},
		changeElectrSitsValue (newValue) {
			this.form.electrAdjSits = newValue;
		},
		changeHeatedSitsValue (newValue) {
			this.form.heatedSits = newValue;
		},
		outputData () {
			this.showModal = true;
		}
	}
}
</script>

<style lang="scss">
	@import "assets/scss/normalize.css";
	@import "assets/scss/background-img";

	.container {
		max-width: 1130px;
		margin: 0 auto;
		display: flex;
		padding: 0 10px;
		.filters {
			flex-grow: 3;
			&__section {
				&__title {
					font-size: 25px;
					border-bottom: 1px solid #dbdbe0;
					padding: 0 0 15px;
					margin: 0 0 15px;
				}
				&__content {
					display: flex;
					margin-bottom: 30px;
					& .select-component {
						width: 310px;

						&:first-child {
							margin-right: 65px;
						}
					}
					&--form-group {
						display: block;
						& .group-title {
							font-size: 16px;
							margin-bottom: 15px;
							font-weight: 600;
						}
						& .checkboxes-group-content {
							display: flex;
							flex-wrap: wrap;
							& .checkbox-container {
								width: calc(100% / 3);
								margin-bottom: 15px;
								@media screen and (max-width: 600px) {
									width: 100%;
								}
							}
							& .cars {
								margin: 0 10px 10px 0;
								border: 1px solid orange;
								border-radius: 3px;
								padding: 5px 10px;
								display: flex;
								align-items: center;
								flex-wrap: nowrap;
								.cars_inner {
									color: orange;
									&:before {
										content: '';
										display: inline-block;
										vertical-align: middle;
										margin-left: -4px;
										margin-right: 10px;
									}
								}
							}
							& .just-radio {
								display: flex;
								margin-bottom: 20px;
								& .radio-container {
									margin-right: 60px;
								}
							}
						}
						& .mixed-inputs-group {
							display: flex;
							& .select-component {
								width: 300px;
								margin-right: 30px;
							}
							& .radio-group {
								display: flex;
								align-items: center;
								& .radio-container {
									margin-right: 20px;
								}
							}
						}
						& .select-inputs-group {
							display: flex;
							align-items: flex-end;
							@media screen and (max-width: 600px) {
								flex-direction: column;
							}
							& .select-component {
								width: 200px;
								margin-right: 40px;
								@media screen and (max-width: 600px) {
									width: 100%;
									margin-right: 0;
									margin-bottom: 10px;
								}
							}
						}
					}
				}
			}
		}
		.submit-filters {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&__btn {
				background: #f38120;
				font-size: 23px;
				padding: 14px 105px;
				border-radius: 50px;
				color: #fff;
				margin-left: 40px;
				cursor: pointer;
				&:last-child {
					@media screen and (max-width: 600px) {
						display: none;
					}
				}
			}
		}
	}

	.padder-bottom {
		margin-bottom: 30px;
	}

	.modal {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		pre {
			background: #fff;
			padding: 20px;
		}
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	@media screen and (max-width: 1080px) {
		.container {
			flex-direction: column;
		}
	}
</style>
