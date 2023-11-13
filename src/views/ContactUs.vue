<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar />
          </div>
        </div>
        <header-title :text="`Contact us`" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span v-for="error in v$.name.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="email"
                    class="form-control"
                    id="email-input"
                  />
                  <span v-for="error in v$.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    id="phone-input"
                  />
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="message" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <textarea
                  v-model="v$.message.$model"
                  class="form-control"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Leave your comments here"
                ></textarea>
                <span v-for="error in v$.message.$errors" :key="error.$uid">
                  {{ error.$message }}
                </span>
                <div class="col col-12">
                  <div>
                    <input
                      checked
                      @change="checkboxChange"
                      v-model="v$.terms.$model"
                      type="checkbox"
                      name="terms"
                      id="terms"
                    />
                    <span> Согласен договором оферты</span>
                    <span v-if="terms === false">
                      <br />
                      Соглашение необходимо отметить
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">
                    Send us
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";

import useVuelidate from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "../validators/minLength";

export default {
  components: { NavBar, HeaderTitle },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: "",
    };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: "",
      terms: {
        required
      },
      message: {
        required,
        maxLength: maxLength(140),
        minLength: helpers.withMessage("6 symbols minimum, please", minLength),
      },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect || this.terms === false) {
        return;
      }

      const message = {
        name: this.name,
        email: this.email,
        terms: this.terms,
        message: this.message,
      };

      fetch("https://coffeeshop-3e64c-default-rtdb.firebaseio.com/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      (this.name = ""),
      (this.email = ""),
      (this.phone = ""),
      (this.terms = false),
      (this.message = "");

      alert('Your request was recieved!');
    },

    checkboxChange() {
      return !this.terms;
    },
  },
};
</script>