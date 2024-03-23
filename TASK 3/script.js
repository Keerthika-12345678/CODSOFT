function appendToScreen(value)
{
    document.getElementById('screen').value += value;
}

function clearScreen()
{
    document.getElementById('screen').value = '';
}

function calculate()
{
    let result;
    try {
        result = eval(document.getElementById('screen').value);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('screen').value = result;
}

function clearLast()
{
    let screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.slice(0, -1);
}