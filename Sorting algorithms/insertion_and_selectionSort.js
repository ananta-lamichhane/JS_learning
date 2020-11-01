function insertionSort(Arr){
    let i=0;
    while(i< Arr.length){ // outer loop runs len[Arr] times.
        let j = i;
        while(j > 0 && Arr[j-1] >= Arr[j]){ // inner loop brings an element to its place.
            let temp = Arr[j-1]; // swap element with its pred.
            Arr[j-1] = Arr[j];
            Arr[j] = temp;
            j--;
        }
        i++;
    }

    return Arr;
}

function selectionSort(Arr){ // select the min from remaining array, put it in the front
    let res = Arr;
    for(var i=0; i< Arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j< Arr.length;j++ ){ // swap min. with element in front of the array.
            if(Arr[j] < Arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){ // new min found, put it in the begining
            let temp = Arr[i];
            Arr[i] = Arr[minIndex];
            Arr[minIndex] = temp;
        }

    }
    return Arr;
}


let Arr2 = [11, 1, 2, 6, 4, 6, 3, 8, 10];
let Arr3 = [1, 2, 6, 4, 7, 4, 3, 1, 8, 2, 5];
console.log("Array at begining: " + Arr2);
console.log("Array after insertionsort " + insertionSort(Arr2));

console.log("Array at begining: " + Arr3);
console.log("Array after selectionSort " + selectionSort(Arr3));