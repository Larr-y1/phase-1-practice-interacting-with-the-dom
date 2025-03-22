document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let isPaused = false;
    let interval = setInterval(incrementCounter, 1000);

    function incrementCounter() {
        if (!isPaused) {
            count++;
            counter.textContent = count;
        }
    }

    document.getElementById("plus").addEventListener("click", () => {
        count++;
        counter.textContent = count;
    });

    document.getElementById("minus").addEventListener("click", () => {
        count--;
        counter.textContent = count;
    });

    document.getElementById("heart").addEventListener("click", () => {
        let likesList = document.querySelector(".likes");
        let existingLike = document.getElementById(`like-${count}`);
        // Checks if a like already exists 
        if (existingLike) {
            let likeCount = parseInt(existingLike.dataset.count) + 1;
            existingLike.dataset.count = likeCount;
            existingLike.textContent = `${count} has been liked ${likeCount} times`;
        } else {
            let newLike = document.createElement("li");
            newLike.id = `like-${count}`;
            newLike.dataset.count = 1;
            newLike.textContent = `${count} has been liked 1 time`;
            likesList.appendChild(newLike);
        }
    });

    document.getElementById("pause").addEventListener("click", (event) => {
        isPaused = !isPaused;
        event.target.textContent = isPaused ? "resume" : "pause";
        document.getElementById("plus").disabled = isPaused;
        document.getElementById("minus").disabled = isPaused;
        document.getElementById("heart").disabled = isPaused;
        document.getElementById("submit").disabled = isPaused;
    });

    document.getElementById("comment-form").addEventListener("submit", (event) => {
        event.preventDefault();
        let commentInput = document.getElementById("comment-input").value;
        let commentList = document.getElementById("list");
        let newComment = document.createElement("p");
        newComment.textContent = commentInput;
        commentList.appendChild(newComment);
        event.target.reset();
    });
});