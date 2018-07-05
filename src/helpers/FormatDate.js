const FormatDate = (string) => {
    if (string !== undefined){
        return string.split('-').reverse().join('/');
    } else {
        return 'Não disponível'
    }
}

export default FormatDate;