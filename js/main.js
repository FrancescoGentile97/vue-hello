const { createApp } = Vue;

createApp ({
    data () {
      return {
        name: "Grazie di esistere Vue.",
        image: "https://media.istockphoto.com/id/177122214/it/foto/tenuta.jpg?s=612x612&w=0&k=20&c=vvUctyfXxnslgZeZYPISMd3NeV6wEGX-2EaCHQ1AgUk=",
      };
    },
  }).mount("#app");