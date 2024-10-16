// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
document.addEventListener("DOMContentLoaded",function(){
    const character_count = document.getElementById("current_length");
    const submit_btn = document.querySelector("input[type=submit]");
    const error_message = document.getElementById("error_message");
    submit_btn.disabled = true;
    const maxLength = 140;
    character_count.textContent = 0 + '/' + maxLength;
    document.getElementById("tweet_content").addEventListener("keyup",function(){
        let currentLength = this.value.length;
        character_count.textContent = currentLength + '/' + maxLength;
        if(currentLength > maxLength){
            submit_btn.disabled = true;
            error_message.textContent = "Vous avez dépassé le nombre de caractères autorisés.";
        }else{
            submit_btn.disabled = false;
            error_message.textContent = "";
        }
    })
});