import { onBeforeUnmount, ref } from "vue";

export const withTimer = (maxGuessTimeInSec: number, timeExpiredFn: () => void) => {
    const remainingTime = ref(maxGuessTimeInSec);
    const intervalHandle = ref(0);

    const removeIntervals = () => {
        if (intervalHandle.value > 0) {
            clearInterval(intervalHandle.value);
        }
    }

    const startTimer = () => {
        remainingTime.value = maxGuessTimeInSec;
        removeIntervals();
        intervalHandle.value = setInterval(updateCounter, 1000);
    } 

    const updateCounter = () => {
        remainingTime.value = remainingTime.value - 1;
        if (remainingTime.value < 0) {
            timeExpiredFn();
            removeIntervals();
            startTimer();
        }
    }

    onBeforeUnmount(() => removeIntervals());
    return { remainingTime, startTimer };
}