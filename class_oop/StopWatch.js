class StopWatch{
    startTime;
    endTime;
    constructor(startTime,endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    start(){
        this.startTime = Date.now()
    }
    stop(){
        this.endTime = Date.now()
    }
    getElapsedTime(){
        return this.endTime - this.startTime;
    }
}
