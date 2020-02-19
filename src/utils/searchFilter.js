const stringNormalize = (string)=>string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


/**
 * Filtro por pesquisa
 *
 * @param {string} needle
 * @param {array} data
 * @returns {array}
 */
const searchFilter = (needle, data) => {
    return data.filter(value=> {
        const valueProcessed =  stringNormalize(value.toString().toLowerCase());
        const needleProcessed = stringNormalize(needle.toLowerCase());
        return valueProcessed.search(needleProcessed) !== -1;
    });
};


export default searchFilter;