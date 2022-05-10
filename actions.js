export class Actions{
    input = '';
    constructor(){
        this.input = document.getElementById('input');
    }


    printCharacter(element,selectionStart) {
        let valueBeforeSelection = input.value.substring(0, selectionStart);
        let valueAfterSelection = input.value.substring(selectionStart, input.value.length)
        input.value = valueBeforeSelection + element + valueAfterSelection;
        input.setSelectionRange(selectionStart+1,selectionStart+1)
    }

    backspace(selectionStart){
        if(input.value.length === 0 )
        return;

        let valueBeforeSelection = input.value.substring(0, selectionStart);
        let valueAfterSelection = input.value.substring(selectionStart, input.value.length)

        input.value = valueBeforeSelection.substring(0, valueBeforeSelection.length - 1) + valueAfterSelection;
        input.setSelectionRange(selectionStart-1,selectionStart-1)
    }
    del(selectionStart){
        if(input.value.length === 0 )
        return;

        let valueBeforeSelection = input.value.substring(0, selectionStart);
        let valueAfterSelection = input.value.substring(selectionStart, input.value.length)

        input.value = valueBeforeSelection + valueAfterSelection.substring(1, valueAfterSelection.length);
        input.setSelectionRange(selectionStart,selectionStart)
    }
    arrowRight(selectionStart){
        input.setSelectionRange(selectionStart+1,selectionStart+1);
    }
    arrowLeft(selectionStart){
        if(selectionStart === 0){
            return input.setSelectionRange(selectionStart,selectionStart);
        }
        
        input.setSelectionRange(selectionStart-1,selectionStart-1);
    }
    arrowDown(selectionStart){
        let valueBeforeSelection = input.value.substring(0, selectionStart);
        let valueAfterSelection = input.value.substring(selectionStart, input.value.length)
        let previousLineBreak = valueBeforeSelection.length - valueBeforeSelection.lastIndexOf('\n');
        let nextLineBreak = valueAfterSelection.indexOf('\n');
            input.setSelectionRange(selectionStart + previousLineBreak +nextLineBreak ,selectionStart +  previousLineBreak+nextLineBreak);
        if(nextLineBreak === -1){
            input.setSelectionRange(selectionStart + valueAfterSelection.length ,selectionStart + valueAfterSelection.length);
        }
    }
    arrowUp(selectionStart){
        let inputValue = input.value;
        let indexes = [];
        for(let i = 0; i < inputValue.length; i++){
            if(inputValue[i] === '\n'){
                indexes.push(i);
            }
        }
        let valueBeforeSelection = input.value.substring(0, selectionStart);
        let lastIndex = valueBeforeSelection.lastIndexOf('\n');
        let desiredValue = indexes[indexes.indexOf(lastIndex) - 1];
        if(desiredValue === undefined){
            input.setSelectionRange(valueBeforeSelection.length - lastIndex - 1, valueBeforeSelection.length - lastIndex - 1);
        }
        else{
            input.setSelectionRange(desiredValue + (valueBeforeSelection.length - lastIndex), desiredValue + (valueBeforeSelection.length - lastIndex));
        }    
    }
}