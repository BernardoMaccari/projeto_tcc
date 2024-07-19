async function handleSubmit(event) {
    event.preventDefault();

    let data = document.getElementById("file").value;

    const frmData = new FormData();
    console.log(data);
    // console.log(frmData);

    // let response = await fetch('http://localhost:3000/upload', {
    //     method: 'POST',
    //     body: frmData,
    // });

}