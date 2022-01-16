class test {
  constructor(size) {}

  run() {
    let data = [10, 20,30,40,50,60,70];
    let mid = Math.floor(data.length / 2);
    console.log(mid)
    for (let i = 0; i <= mid; i++) {
         let temp = data[i];
         let index = data.length - 1 - i;
         data[i] = data[index];
         data[index] = temp;
    }
    console.log(data)
  }
}

var obj = new test();
obj.run();
