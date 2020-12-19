// https://gist.github.com/beaucharman/1f93fdd7c72860736643d1ab274fee1a#gistcomment-2994421
export function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}