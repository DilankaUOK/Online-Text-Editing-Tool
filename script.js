document.getElementById('bold-icon').addEventListener('click',function(){
    document.execCommand('bold',false,null);
    saveContent();
});


document.getElementById('underline-icon').addEventListener('click',function(){
    document.execCommand('underline',false,null);
    saveContent();
});


document.getElementById('italic-icon').addEventListener('click',function(){
    document.execCommand('italic',false,null);
    saveContent();
});


document.getElementById('center-icon').addEventListener('click',function(){
    document.execCommand('justifycenter',false,null);
    saveContent();
});


document.getElementById('justify-icon').addEventListener('click',function(){
    document.execCommand('justifyfull',false,null);
    saveContent();
});


document.getElementById('right-icon').addEventListener('click',function(){
    document.execCommand('justifyright',false,null);
    saveContent();
});


document.getElementById('left-icon').addEventListener('click',function(){
    document.execCommand('justifyleft',false,null);
    saveContent();
});


document.getElementById('redo-icon').addEventListener('click',function(){
    document.execCommand('redo',false,null);
    saveContent();
});


document.getElementById('undo-icon').addEventListener('click',function(){
    document.execCommand('undo',false,null);
    saveContent();
});


function toggleColorPalette() {
    let colorPalette = document.getElementById('colorPalette');
    colorPalette.style.display = (colorPalette.style.display === 'block') ? 'none' : 'block';
}

function applyColor() {
    let selectedColor = document.getElementById('colorPicker').value;
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let span = document.createElement('span');
    span.style.color = selectedColor;
    range.surroundContents(span);
    toggleColorPalette();
    document.getElementById('colorBtn').style.color = selectedColor;
}

function saveContent() {
    const editor = document.getElementById('editor');
    localStorage.setItem('editorContent', editor.innerHTML);
}

window.onload = function () {
    const editor = document.getElementById('editor');
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
}
};