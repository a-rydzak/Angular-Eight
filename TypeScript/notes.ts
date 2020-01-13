
// see what I compile to with tsc .\notes.ts
// then run node notes.js
'use strict'
const message = 'I am not a message...'
console.log(message)

const getter=()=>{
    console.log('Success!')
}
export {getter}