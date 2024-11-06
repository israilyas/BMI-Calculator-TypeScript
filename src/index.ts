const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = document.getElementById('height') as HTMLInputElement;
    const weight = document.getElementById('weight') as HTMLInputElement;
    const resuslt = document.getElementById('result') as HTMLElement;

    let h:number = height.value;
    let w:number = weight.value;

})