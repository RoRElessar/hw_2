(function () {

    let groundArray = [7, 0, 2, 8, 3, 4, 7, 2, 4, 8, 0, 11, 0, 0, 0, 3];
    // let array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
    let watterArray = [];
    let calculation = 0;
    const LENGTH = groundArray.length;
    let container = document.getElementById('container');
    let resultSpan = document.getElementById('result');
    let waterColor = '#4C87E7';
    let groundColor = '#434343';

    resultSpan.textContent = calculateWatter(groundArray);
    drawGround(groundArray, watterArray);

    function calculateWatter(groundArray) {
        let result = 0;

        for (let i = 0; i < LENGTH; i++) {
            let maxLeft = 0, maxRight = 0;

            for (let j = i; j >= 0; j--) {
                maxLeft = Math.max(maxLeft, groundArray[j]);
            }

            for (let j = i; j < LENGTH; j++) {
                maxRight = Math.max(maxRight, groundArray[j]);
            }

            calculation = Math.min(maxLeft, maxRight) - groundArray[i];
            watterArray.push(calculation);
            result += calculation;
        }
        return result.toString();
    }

    function drawGround(groundArray, watterArray) {
        for (let i = 0; i < LENGTH; i++) {
            let wrapper = document.createElement('div');
            let watter = document.createElement('div');
            let ground = document.createElement('div');

            styleElements(watter, watterArray[i], waterColor);
            styleElements(ground, groundArray[i], groundColor);

            wrapper.style.display = 'inline-block';
            wrapper.style.width = '100px';

            wrapper.appendChild(watter);
            wrapper.appendChild(ground);
            container.appendChild(wrapper);
        }
    }

    function styleElements(element, arrayElement, bgColor) {
        element.style.height = arrayElement * 50 + 'px';
        element.style.backgroundColor = bgColor;
        element.style.borderBottom = '1px solid' + groundColor;
    }

})();
