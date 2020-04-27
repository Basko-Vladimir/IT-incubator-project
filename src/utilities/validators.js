
export const  required = (value) => {
    return value ? '' : 'This field is required';
};

export const maxLengthCreator = (maxLength) => (value) =>  {
    return value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined;
};