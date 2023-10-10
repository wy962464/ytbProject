import { defineStore } from 'pinia';

export const ThreeModel = defineStore({
    id: 'ModelState',
    state: () => {
        return {
            scene: null,
            camera: null,
            renderer: null,
            controls: null,
            composer: null,
            groupList: null,
            layers0: null,
            layers2: null,
            sceneInformation: {
                name: '外立面',
                returnorNot: false,
                floorName: null,
            },
            modelLoading: false,
            filteringModel: null,
            clickModel: null
        };
    },
    getters: {},
    actions: {},
});
