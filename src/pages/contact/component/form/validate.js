

const userContactInfo = ['firstName', 'lastName', 'emailAddress', 'phoneNumber']

const validate = values => {
    const errors={}

   

    userContactInfo.forEach(contact => {
        if(!values[contact]) {
            errors[contact] = `Required`
        }
    })

    if(values.email){
        const testEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        if(testEmail){
            errors.email = "Invalid Email address"
        }
    }

    if(!values.message){
        errors.message = "Required"
    }     
    console.log(values)
    return errors
}


export default validate