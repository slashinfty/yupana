import xorshift from 'xorshift';

export const midpoint = {
    options: {
        minimum: -12,
        maximum: 12,
        exact: false
    },
    result: (options) => {
        const x1 = Math.floor(options.minimum + xorshift.random() * (options.maximum - options.minimum));
        const y1 = Math.floor(options.minimum + xorshift.random() * (options.maximum - options.minimum));
        const x2 = Math.floor(options.minimum + xorshift.random() * (options.maximum - options.minimum));
        const y2 = Math.floor(options.minimum + xorshift.random() * (options.maximum - options.minimum));
        const question = `Find the midpoint of the segment between (${x1}, ${y1}) and (${x2}, ${y2})`;
        const mx = !options.exact || (x1 + x2) % 2 === 0 ? (x1 + x2) / 2 : `${x1 + x2}/2`;
        const my = !options.exact || (y1 + y2) % 2 === 0 ? (y1 + y2) / 2 : `${y1 + y2}/2`;
        return {
            question: question,
            answer: `(${mx}, ${my})`
        }
    }
};