function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let textArea = document.getElementsByTagName('textarea');

    buttons[0].addEventListener('click', senderText);
    buttons[1].addEventListener('click', receiverText);

    let areaSender = textArea[0];
    let areaReceiver = textArea[1];


    function senderText () {
        let text = areaSender.value;
        let notTurnedText = '';

        for (let i = 0; i < text.length; i++) {
            notTurnedText += String.fromCharCode(ascii(text[i]) + 1)
        }

        areaSender.value = '';
        areaReceiver.value = notTurnedText;
    }

    function receiverText() {
        let text = areaReceiver.value
        let turnedText = '';

        for (let i = 0; i < text.length; i++) {
            turnedText += String.fromCharCode(ascii(text[i]) - 1);
        }

        areaReceiver.value = turnedText;
    }

    function ascii(c) {
        return c.charCodeAt(0);
    }
}