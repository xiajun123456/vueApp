<template>
    <div class="address-selector-container">
        <select v-model="province"
                   clearable
                   @change='handleProvinceChange()'>
            <option selected value="">-请选择-</option>
            <option
                    v-for="provinces in provinceList"
                    :key='provinces.id'
                    :value="provinces.id"
                    :label="provinces.name">
            </option>
        </select>
        <select v-model="city"
                   clearable
                   @change='handleCityChange()'>
            <option selected value="">-请选择-</option>
            <option
                    v-for="citys in cityList"
                    :key='citys.id'
                    :value="citys.id"
                    :label="citys.name">
            </option>
        </select>
        <select v-model="area"
                   clearable
                   @change='handleAreaChange()'>
            <option selected value="">-请选择-</option>
            <option
                    v-for="areas in areaList"
                    :key='areas.id'
                    :value="areas.id"
                    :label="areas.name">

            </option>
        </select>
    </div>
</template>
<style lang="scss" type="text/scss">
    .address-selector-container{
        select{
            width: 32%;
            border: none;
            text-align: center;
            outline: none;
            height: 48px;
        }
    }
</style>
<script>
    import request from '../request/asyncRequest';
    var loopData = (list, id) => {
        var active = {};
        list.forEach((val, key) => {
            if (val.id == id) {
                active = val;
                return
            }
        });
        return active;
    };
    var loadDistrict = (list, id) => {
        var active = '';
        list.forEach((val, key) => {
            if (val.id == id) {
                active = val.id;
                return
            }
        });
        return active;
    };
    export default {
        name: 'addressSelector',
        data(){
            return {
                province:'',
                provinceList: null,
                city:'',
                cityList: null,
                area:'',
                areaList: null,
                beforeData: {}
            }
        },
        computed: {
            areas(){
                var area = {};
                if (this.province) {
                    area.province = loopData(this.provinceList, this.province)
                }
                if (this.city) {
                    area.city = loopData(this.cityList, this.city);
                }
                if (this.area) {
                    area.area = loopData(this.areaList, this.area);
                }
                return area
            }
        },
        watch:{
            province(){
                this.$emit('input', this.areas);
            },
            city(){
                this.$emit('input', this.areas);
            },
            area(){
                this.$emit('input', this.areas)
            }
        },
        props: {
            value: {
                type: Object
            }
        },
        methods: {
            handleProvinceChange(){
                this.city = '';
                this.area = '';
                this.cityList = [];
                this.areaList = [];
                console.log(this.province)
                if (!this.province) {
                    return
                }
                request.area.getCitys({parent: this.province}).then(data => {
                    this.cityList = data.rows;
                    if (this.beforeData.city) {
                        this.city = loadDistrict(data.rows, this.beforeData.city);
                        this.beforeData.city = '';
                    }
                })
            },
            handleCityChange(){
                this.area = '';
                this.areaList = [];
                if (!this.city) {
                    return
                }
                request.area.getAreas({parent: this.city}).then(data => {
                    this.areaList = data.rows;
                    if (this.beforeData.area) {
                        this.area = loadDistrict(data.rows, this.beforeData.area);
                        this.beforeData.area = '';
                    }
                })
            },
            handleAreaChange(){

            }
        },
        mounted(){
            if (this.value) {
                this.beforeData = {
                    province: this.value.province ? this.value.province.id : '',
                    city: this.value.city ? this.value.city.id : '',
                    area: this.value.area ? this.value.area.id : ''
                }
            }
            request.area.getProvince({}).then(data => {
                this.provinceList = data.rows;
                if (this.beforeData.province) {
                    this.province = loadDistrict(data.rows, this.beforeData.province);
                }
            })
        },
        update(){
            console.log(33)
        }
    }
</script>