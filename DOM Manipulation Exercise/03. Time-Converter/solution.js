function attachEventsListeners() {
    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, from) {
        let inDays = value / ratios[from]
        return {
            days: inDays * ratios.days,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    document.querySelector('#daysBtn').addEventListener('click',  onClick);
    document.querySelector('#hoursBtn').addEventListener('click',  onClick);
    document.querySelector('#minutesBtn').addEventListener('click',  onClick);
    document.querySelector('#secondsBtn').addEventListener('click',  onClick);
    
    function onClick(e) {
        let el = e.target.parentNode.querySelector('input[type ="text"]');
        let value = Number(el.value);
        let id = el.id;
    }
    
    /*
    function convertDays(e) {
        let value = Number(days.value);
        let convertedValues = convert(value, 'days');
        display(convertedValues);
    }

    function convertHours(e) {
        let value = Number(hours.value);
        let convertedValues = convert(value, 'hours');
        display(convertedValues);
    }

    function convertMinutes(e) {
        let value = Number(minutes.value);
        let convertedValues = convert(value, 'minutes');
        display(convertedValues);
    }

    function convertSeconds(e) {
        let value = Number(seconds.value);
        let convertedValues = convert(value, 'seconds');
        display(convertedValues);
    }
    */
    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }
}