export default (fun, time = 1000) => {
    let timer;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fun(), time);
    };
};
