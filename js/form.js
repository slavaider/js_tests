window.onload = () => {
    const form_inputs = document.querySelectorAll('.form input')
    for (let item of form_inputs) {
        console.log(item.name)
    }
    console.log(document.form)
    console.log(document.forms[0])
    console.log(document.forms.form.elements[0])
    console.log(document.forms.form.elements.email)
    const checkbox = document.forms.form.elements.option
    for (let item of checkbox) {
        console.log(item.defaultChecked)
    }
    const form = document.forms.form
    form.onsubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
        form.reset()
    }
    const textarea = document.forms.form.textarea
    console.log(textarea.value)


    const select_options = document.forms.form.select.options
    for(let item of select_options) {
        if(item.selected){
            console.log(item.value)
        }
    }


    // File
    const file = document.forms.form.file
    file.onchange = (e) => {
        // const fileReader = new FileReader();

        console.log(e.target.files[0])
        console.log(e.target.value)
    }
}
