import instance from './AxiosCustom';

const fetchAllUser = () => {
    return instance.get();
};

export { fetchAllUser };
