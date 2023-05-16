export const titleToUrl = (title: string) => {
    const url = title.toLowerCase().replace(/\s+/g, '-');
     return url;
};
