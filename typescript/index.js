var _a;
// index.ts
(_a = document.getElementById('clickButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleClick);
function handleChange() {
    var _a;
    var inputValue = (_a = document.getElementById('textInput')) === null || _a === void 0 ? void 0 : _a.value;
    console.log('Input changed to: ' + inputValue);
}
function handleClick() {
    console.log('Button clicked!');
}
