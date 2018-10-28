class HelloWorld extends HTMLElement {
    constructor() {
      super();
        this.addEventListener('click', e => {
        this.sayHello();
      });
    }
  
    sayHello() {
      console.log("Hello World was clicked!");
    }
  }
  
  customElements.define('hello-world', HelloWorld);