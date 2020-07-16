new Vue({
  el: "#app",
  data() {
    return {
      blog: {
        text: null,
        
      },
      show: false
    };
  },
  methods: {
    execCmd(command) {
      document.execCommand(command, false, null);
    },
    execCommand(command) {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(command, false, url);
    },
    execCommandImg(command) {
      let ımgUrl = prompt("Enter the link here: ", "http://");
      document.execCommand(command, false, ımgUrl);
    },
    execCommandWithArg(command, event) {
      document.execCommand(command, false, event.target.value);
    },
    onSubmit() {
      var text = document.getElementById("output").innerHTML;
      this.blog.text = text;
      this.$nextTick(function blogText() {
        var div = document.createElement("DIV");
        div.innerHTML = this.blog.text;
        document.getElementById("textArea").appendChild(div);
        
      });
      this.show = !this.show
    },
    
  },
});
