class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = alarmCollection = [];
        this.intervalId = intervalId = null;
    }
    addClock(time, callback) {
        if(time && callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        } else if(time === time) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.canCall = true;
        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection.filter((element) => {
            if(element.time === time) {
              delete element.time;
            }
        })
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString();
        return currentDate.slice(0, -3);
    }

    start() {
        if(this.intervalId !== 0) {
            return;
        }
        this.intervalId = setTimeout(() => {
            this.alarmCollection.forEach((element) => {
                if(element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                    element.canCall = false; 
                    element.callback()};
        });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((element) => {element.canCall = true;})
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}