import '../css/form.css';

const form = ()=>{
    return (
        <section class="info-section">
            <h3>Record Form</h3>
            <div class="columns">
              <form
                id="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="17a06679-c1a8-466b-8ab2-f77400d4ec41"
                />
                <p>
                  <label for="email">Email:</label>
                  <input id="email" type="email" name="email" required />
                </p>
                <p>
                  <label for="league-txt">League:</label>
                  <input type="text" id="league-txt" />
                </p>
                <p>
                  <label for="record-txt">Record:</label>
                  <input type="text" id="record-txt" />
                </p>
                <p>
                  <label for="rec-hold-txt">Current Record Holder:</label>
                  <input type="text" id="rec-hold-txt" />
                </p>
                <p>
                  <label for="desc-rec-hold-txt">Description of Current Record Holder:</label>
                  <textarea id="desc-rec-hold-txt"></textarea>
                </p>
                <p>
                  <label for="prev-hold-txt">Previous Record Holder:</label>
                  <input type="text" id="prev-hold-txt" />
                </p>
                <p>
                  <label for="desc-prev-hold-txt-txt">Description of Previous Record Holder:</label>
                  <textarea id="desc-prev-hold-txt"></textarea>
                </p>
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Contact from Basketball-Records-Elite"
                />
                <input type="hidden" name="from_name" value="My Website" />
      
                <p>
                  <button type="submit">Submit Form</button>
                </p>
      
                <p id="result"></p>
              </form>
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13231.885485422943!2d-81.04234215!3d33.99326909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb28ada9ede1%3A0x2ff81595639c7de4!2sColonial%20Life%20Arena!5e0!3m2!1sen!2sus!4v1729717332430!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
    );
}