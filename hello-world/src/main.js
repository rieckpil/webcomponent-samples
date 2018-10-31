class HelloWorld extends HTMLElement {
    constructor() {
      super();
        this.addEventListener('click', e => {
        this.sayHello();
      });
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }  

    get value() {
      return this.getAttribute('value');
    }

    connectedCallback() {
      this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
    }
  
    sayHello() {
      console.log("Hello World was clicked at " + new Date() + " " + this.disabled + " " + this.value);

      fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => response.text())
        .then((responseText) => {
            console.log(JSON.parse(responseText));
        })
        .catch((error) => {
            console.error(error);
        });
    }
  }
  
  customElements.define('hello-world', HelloWorld);