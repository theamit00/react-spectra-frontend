import { animate, delay } from "framer-motion";

const slideUp = (delay="", initial={}, duration="") => {
    return {
        initial: {
            y: "10%",
            opacity: 0,
            ...initial
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            },
        },
    };
};

const zoomIn = (delay = "", initial = {}, duration = "") => {
    return {
        initial: {
            scale: 0.9,
            opacity: 0,
            ...initial
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            }
        }
    }
}

const leftIn = (delay = "", initial = {}, duration = "") => {
    return {
        initial: {
            x : "-5%",
            opacity: 0,
            ...initial
        },
        animate: {
            x:0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            }
        }
    }
}

const rightIn = (delay = "", initial = {}, duration = "") => {
    return {
        initial: {
            x: "5%",
            opacity: 0,
            ...initial
        },
        animate: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            }
        }
    }
}

const rotateLeft = (delay, initial = {}, duration = "") => {
    return {
        initial: {
            scale: 0.8,
            rotate: "0deg",
            opacity: 0,
        },
        animate: {
            scale: 1,
            rotate: "-8deg",
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            }
        }
    }
}

const fadeIn = (delay, initial = {}, duration = "") => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: duration ? duration : 0.5,
                delay: delay,
            }
        }
    }
}

export { slideUp, zoomIn, rotateLeft, fadeIn , leftIn, rightIn}