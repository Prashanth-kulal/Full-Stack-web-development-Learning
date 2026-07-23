const path=require('path');
const a1=path.basename('C:/Users/HP/Desktop/Node.js/path.js');
const a2=path.dirname('C:/Users/HP/Desktop/Node.js/path.js'); 
const a3=path.extname('C:/Users/HP/Desktop/Node.js/path.js');
console.log(path.parse('C:/Users/HP/Desktop/Node.js/path.js'));
const a4=path.format({
    root: 'C:/',
    dir: 'Users/HP/Desktop/Node.js',
    base: 'path.js'
});

const a5=path.isAbsolute('C:/Users/HP/Desktop/Node.js/path.js');
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);