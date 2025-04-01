class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (!time || !callback) {
                throw new Error ('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.some((element) => element.time === this.addClock.time)) {
            console.warn('Уже присутствует звонок на это же время');
            }
        this.alarmCollection.push({time:time, callback:callback, canCall:true});
    }
        
        
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString();
        return currentDate.slice(0, -3);
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
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