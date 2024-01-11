import{ reactive } from 'vue';

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 ',
    yu_gi_oh_list: [],
    endpointarchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypes: [],
    loading: true,
    archetype: ' ',
})