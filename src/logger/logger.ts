const debugSwitch = true;

interface loggerProps {
    message: string;
    fun?: string;
}

export const logger = (props: loggerProps) => {
    if (debugSwitch) {
        let func;
        const date = new Date();
        const timestamp =
            '[' +
            date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds() +
            '.' +
            date.getMilliseconds() +
            ']';
        let stackEntry = new Error()?.stack?.split('\n')?.[2];
        if (stackEntry === 'undefined' || stackEntry === null) {
            stackEntry = new Error()?.stack?.split('\n')[1];
        }
        if (typeof props.fun === 'undefined' || props.fun === null) {
            func = stackEntry?.substring(stackEntry?.indexOf('at') + 3, stackEntry?.lastIndexOf(' '));
            if (func === 'undefined' || func === null) {
                func = 'anonymous';
            }
        } else {
            func = props.fun;
        }
        const idx = stackEntry ? stackEntry.lastIndexOf('/') : -1;
        let file;
        if (idx !== -1) {
            file = stackEntry?.substring(idx + 1, stackEntry?.length - 1);
        } else {
            file = stackEntry?.substring(stackEntry?.lastIndexOf('\\') + 1, stackEntry?.length - 1);
        }
        if (file === 'undefined' || file === null) {
            file = '<>';
        }
        const msg = timestamp + ' ' + file + '::' + func + '(): ' + props.message;

        console.log(msg);
    }
};
