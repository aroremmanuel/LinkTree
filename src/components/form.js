function Form() {
    return (
        <div id="contact__form__container">
            <h1 id="contact__header">Contact Me</h1>
            <p id="contact__subtext">Hi there, contact me to ask me about anything you have in mind.</p>
                <form >
                    <div id="contact__form">
                        <div id="name_container">
                            <div className="form_entry , name__field__container">
                                <label for="first_name">First Name</label>
                                <input type="text" placeholder="First Name" id="first_name" className="contact__input , name__field" required />
                            </div>
                            <div className="form_entry , name__field__container ">
                                <label for="last_name">Last Name</label>
                                <input type="text" placeholder="Last Name" id="last_name" className="contact__input , name__field" required />
                            </div>
                        </div>
                        <div className="form_entry">
                            <label for="email">Email</label>
                            <input type="text" placeholder="yourname@email.com" id="email" className="contact__input" required  />
                        </div>
                        <div className="form_entry">
                            <label for="message">Message</label>
                            <input type="text" placeholder="Send me a message and I'll reply you as soon as possible..." id="message" className="contact__input" required />
                        </div>
                        <div>
                        <input type='checkbox' required ></input>You agree to providing your data to Emmanuel who may contact you.
                        </div>
                        <div>
                        <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
        </div>
    );
} 

export default Form;