
let allComments = document.querySelector(".all-comments");
let reply;

function showReplyBox(){
    reply = document.createElement("div");
    reply.innerHTML = `<input type="text">
    <button class="submit">submit</button>`;
    reply.classList.add("hide-inputBox");
    reply.classList.add("comment-details");
}

function createComment(comment){
    let ele = document.createElement("div");
    ele.innerHTML = `<div class="comment-box">
    <span class="comment">${comment}</span>
    <span class="reply">Add Reply</span>
    </div>`;
    ele.classList.add("comment-container");
    return ele;
}

allComments.addEventListener("click", (e) => {
    if(e.target.classList.contains("reply")){
        showReplyBox();
        let box = e.target.closest(".comment-box");
        box.after(reply);
    }

    if(e.target.classList.contains("submit")){
        let newComment = e.target.closest(".comment-details").children[0].value;
        console.log(newComment);
        let ele = createComment(newComment);
        let box = e.target.closest(".comment-container");
        box.append(ele);
        console.log(ele);
        reply.remove();

        // reply.classList.add("hide-inputBox");
    }   
        
})