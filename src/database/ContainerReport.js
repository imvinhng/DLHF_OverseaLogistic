import { ARRIVED_COLOR, CLAIMED_COLOR, COMPLETED_COLOR, DRAFT_COLOR, SUBMITTED_COLOR } from "../assets/styles/COLOR_INDEX";
import { green, lightgray, lightred, red, yellow } from "../assets/styles/Colors";

export let CONTAINER_REPORT = [
    {
        id: 1,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Cloudy',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: DRAFT_COLOR,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
        ],
        photo: [
            { id: 1, uri: require('../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
            { id: 2, uri: require('../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
            { id: 3, uri: require('../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
        ],
        messages: [],
        claim: []
    },
    {
        id: 2,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Rainy',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: SUBMITTED_COLOR,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
            { id: 2, status: 'Submitted', created_at: '08/08/2023' },
        ],
        photo: [
            { id: 1, uri: require('../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
            { id: 2, uri: require('../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
            { id: 3, uri: require('../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
            // { url },
            // { ur }
        ],
        messages: [],
        claim: []
    },
    {
        id: 3,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Sunny',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: yellow,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
            { id: 2, status: 'Submitted', created_at: '08/08/2023' },
            { id: 3, status: 'In Progress', created_at: '15/8/2023' },
        ],
        photo: [
            { id: 1, uri: require('../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
            { id: 2, uri: require('../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
            { id: 3, uri: require('../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
            // { url },
            // { ur }
        ],
        messages: [],
        claim: []

    },
    {
        id: 4,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Sunny',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: ARRIVED_COLOR,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
            { id: 2, status: 'Submitted', created_at: '08/08/2023' },
            { id: 3, status: 'In Progress', created_at: '15/8/2023' },
            { id: 4, status: 'Arrived', created_at: '22/8/2023' },
        ],
        photo: [
            { id: 1, uri: require('../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
            { id: 2, uri: require('../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
            { id: 3, uri: require('../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
            // { url },
            // { ur }
        ],
        messages: [],
        claim: []
    },
    {
        id: 5,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Rainy',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: CLAIMED_COLOR,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
            { id: 2, status: 'Submitted', created_at: '08/08/2023' },
            { id: 3, status: 'In Progress', created_at: '15/8/2023' },
            { id: 4, status: 'Arrived', created_at: '22/8/2023' },
            { id: 4, status: 'Claimed', created_at: '29/8/2023' },
        ],
        photo: [

            // { ur }
        ],
        messages: [],
        claim: []
    },
    {
        id: 6,
        crgi: {
            date: '25 Nov 2023',
            weather: 'Rainy',
            vessel_no: 'LORRAINE 015N',
            bl_no: '34130097428',
            container_no: 'SEGU9790245',
            container_type: '40FT',
            etd: 'Sep. 23 (Sat)',
            eta: 'Oct. 1 (Sun)',
            csc_front: '10/2019',
            csc_door: '10/2019',
        },
        temperature: {
            box_seri_number: '',
            box_temp: '',
            outside_temp: '',
        },
        container_temp: {
            set_temp: '',
            supply_temp: '',
            return_temp: '',
            before_loading: '',
        },
        time: {
            start_loading_time: '',
            finish_loading_time: '',
            dept_daron_time: '',
        },
        checklist: {
            no_of_pallets: '',
            pallets_strapped: null,
            no_of_corner_strips: '',
            ventilation_setting: '',
            drainage_valves: '',
            drainage_holes: null,
            clean_inside_container: null,
            outside_wall_dmg: null,
            inside_front_wall_dmg: null,
            inside_wall_floor_ceilling_dmg: null,
            plastic_cover: null,
            space_btw_front_and_first: '',
            fumigation_stamp: null,
            drainage_plug: '',
        },
        comments: '',
        color: COMPLETED_COLOR,
        status_all: [
            { id: 1, status: 'Draft', created_at: '01/08/2023' },
            { id: 2, status: 'Submitted', created_at: '08/08/2023' },
            { id: 3, status: 'In Progress', created_at: '15/8/2023' },
            { id: 4, status: 'Arrived', created_at: '22/8/2023' },
            { id: 4, status: 'Claimed', created_at: '29/8/2023' },
            { id: 5, status: 'Completed', created_at: '10/9/2023' },
        ],
        photo: [
            { id: 1, uri: require('../assets/images/container-report/TA1.png'), type: 'Damaged', alt: 'Damaged Front Wall TA1' },
            { id: 2, uri: require('../assets/images/container-report/TA2.png'), type: 'Damaged', alt: 'Damaged Front Wall TA2' },
            { id: 3, uri: require('../assets/images/container-report/TA3.png'), type: 'Damaged', alt: 'Damaged Front Wall TA3' },
            // { url },
            // { ur }
        ],
        messages: [],
        claim: []
    },
]

export const CONTAINER_PHOTO_TYPE = [
    { label: 'All', value: 'All' },
    { label: 'General Report', value: 'General Report' },
    { label: 'Damaged', value: 'Damaged' },
]