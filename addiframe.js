// CODE FOR INSERTING A LOCK INTO A GROUP OR PROFILE:

// This line means define a function, then run it.
// If you're confused why this is necessary, it's because it keeps the variables out of the global namespace. 
// If you don't know what that means, GO LEARN JAVASCRIPT you absolute fool of a homo sapien
(function(){
    
    // First line: we create a variable called "toInsertIframe" and let it be a new element, an iframe.
    // Iframes are elements that can store websites basically.
    let toInsertIframe = document.createElement("iframe");
    
    // Then, we prompt the user for the URL of the iframe, then let the src (shorthand for "source")
    // of the iframe to be the user's input.
    toInsertIframe.src = prompt("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    
    // We then ask the user for the width of the iframe, and assign that to the iframe's width.
    toInsertIframe.width = `${prompt("854")}px`;
    
    // Same for height.
    toInsertIframe.height = `${prompt("480")}px`;
    
    // Finally, we get the element "tinymce" that's in Schoology by getting one of its parents first, "edit-body-ifr". 
    // The element tinymce is where the post is stored. Then, we stuff the iframe into "tinymce" and call it a day.
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);

    // Finally, we give the user a friendly message to remind them that HTML5 is weird.
    // (alert basically gives the user a message)
    alert("enjoy the rick roll");

    // Here's the code for using this:
    // document.head.appendChild(document.createElement('script')).src = 'https://bubbybabur.github.io/SchoologyHacks/addiframe.js'
    
})();
