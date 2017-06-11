import data from './data'
const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

const addUploadCapabilities = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE' && resource === 'ApplyItem') {
        console.log(params);
        data.ApplyItem[params.id - 1].ispicked = true;
        return params;
    }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;
