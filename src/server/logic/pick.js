const pick = (...keys) =>
    obj =>
        keys.map(key => ({[key]: obj[key]})).reduce(Object.assign, {});

export default pick;
