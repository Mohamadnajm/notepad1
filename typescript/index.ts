// index.ts
document.getElementById('clickButton')?.addEventListener('click', handleClick);

function handleChange() {
    const inputValue = (<HTMLInputElement>document.getElementById('textInput'))?.value;
    console.log('Input changed to: ' + inputValue);
}

function handleClick() {
    console.log('Button clicked!');
}
