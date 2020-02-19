/**
 *  Gerar Id único
 *
 * @param {number} [maxChar=6]
 * @param {string} [namespace='']
 * @returns Ex: [maxChar=6][namespace='__']  => __Yq3wE4
 */
const uniqueId = (maxChar=6, namespace='') => {
    const base = '0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    const baseLength = base.length-1;
    let result='';
    while(maxChar){
        let index = Math.round(Math.random()*baseLength);
        result += base[index];
        maxChar--;
    }
    return namespace+result;
};

export default uniqueId;
