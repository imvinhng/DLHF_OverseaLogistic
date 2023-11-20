export interface CRGI {
    date: string,
    weather: string,
    vessel_no: string,
    bl_no: string,
    container_no: string,
    container_type: string,
    etd: string,
    eta: string,
    csc_front: string,
    csc_door: string,
}

export interface Temperature {
    box_seri_number: string,
    box_temp: string,
    outside_temp: string,
}
export interface ContainerTemperature {
    set_temp: string,
    supply_temp: string,
    return_temp: string,
    before_loading: string,
}
export interface Time {
    start_loading_time: string,
    finish_loading_time: string,
    dept_daron_time: string,
}
export interface Checklist {
    no_of_pallets: number,
    pallets_strapped: boolean,
    no_of_corner_strips: number,
    ventilation_setting: string,
    drainage_valves: number,
    drainage_holes: boolean,
    clean_inside_container: boolean,
    outside_wall_dmg: boolean,
    inside_front_wall_dmg: boolean,
    inside_wall_floor_ceilling_dmg: boolean,
    plastic_cover: boolean,
    space_btw_front_and_first: number,
    fumigation_stamp: boolean,
    drainage_plug: number,
}
export interface Comments {
    comments: string,
}

