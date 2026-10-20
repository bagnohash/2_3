(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", async function () {
    const posts = await fetch('https://0c33-2a00-f41-9536-2900-dd53-147b-fc58-d137.ngrok-free.app/posts');
    const comments = await fetch('https://0c33-2a00-f41-9536-2900-dd53-147b-fc58-d137.ngrok-free.app/comments');
    
    const postsJson = await posts.json();
    const commentsJson = await comments.json();
    
    const ul = document.createElement('ul');
    ul.id = 'posts';
    postsJson.forEach(post => {
      const li = document.createElement('li');
      li.id = post.id;
      li.innerHTML = post.title;
      ul.appendChild(li);
    });

    commentsJson.forEach(comment => {
      const li = document.createElement('li');
      li.id = comment.id;
      li.innerHTML = comment.body;
      ul.appendChild(li);
    });
    answer.appendChild(ul);
  })

})();
