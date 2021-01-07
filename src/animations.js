export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
        x: 500,
    },
    show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.2,
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
    exit: {
        opacity: 0,
        // y: 300,
        transition: {
            duration: 1
        },
    }
};

export const titleAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: 'easeOut'}
    }
};

export const imgAnimation = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1, 
        transition: {ease: "easeOut", duration: 5.5},
    }
};

export const fade = {
    hidden: {opacity: 0.1},
    show: {
        opacity: 1, 
        transition: {ease: "linear", duration: 5.5},
    }
};

export const lineAnimation = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: {
            duration: 8,
        }
    }
};



