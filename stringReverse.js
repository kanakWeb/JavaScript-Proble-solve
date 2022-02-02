/* function StringReverse(Text) {
    console.log(Text);
    let reverse = '';
    for (const letter of Text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const Message = 'Hi, i am kanak';
const ReverseAll = StringReverse(Message);
console.log(ReverseAll); */


function arrayReverse(name) {
    let reverseName = [' ']
    for (const array of name) {
        reverseName[''] = array + reverseName;
    }
    return reverseName
}
const Name = ['kanak', 'rahim', 'rebul', 'shiplu'];
const ReverseOf = arrayReverse(Name);
console.log(ReverseOf);